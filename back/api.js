const express = require('express');
const bodyParser = require('body-parser')
const xrpl = require('xrpl');
const fs = require('fs');
const { createToken, verifyToken, getTokenData } = require('./jwt');
const { mintNFT, connectWallet } = require('./nft');
const { pinFileToIPFS, createNftMetadata } = require('./pinata');
const ipfsUrl = "https://crimson-active-cuckoo-676.mypinata.cloud/ipfs/"

function getUser(username) {
    // find in users.txt the user with the given username
    // if the user is not found, return null
    // if the user is found, return the user's data in a dictionary
    const data = fs.readFileSync('users.txt', 'utf8');
    const users = data.split('\n');
    for (let i = 0; i < users.length; i++) {
        const user = users[i].split(',');
        if (user[0] === username) {
            return { username: user[0], password: user[1], address: user[2] };
        }
    }
    return null;
}

function addUser(username, password, address) {
    // add the user to users.txt
    const data = fs.readFileSync('users.txt', 'utf8');
    const users = data.split('\n');
    users.push(`${username},${password},${address}`);
    fs.writeFileSync('users.txt', users.join('\n'));
}

function StartApi() {
    const app = express();
    const port = 3000;

    parser = bodyParser.json()

    app.post('/signup', parser, async (req, res) => {
        // get the username and password from the request body
        var { username, password, seed } = req.body;
        console.log(username, password, seed)
        user = getUser(username)
        if (user || !username || !password) {
            res.status(400).json({ error: 'Invalid data' });
            return;
        }
        var AccountAddress
        if (seed == "") {
            const client = new xrpl.Client(process.env.NET)
            await client.connect()
            const { wallet: wallet, balance: balance1 } = await client.fundWallet()
            AccountAddress = wallet.seed
        } else {
            AccountAddress = seed
        }
        console.log("address", AccountAddress)
        // get user from db
        addUser(username, password, AccountAddress);
        seed = AccountAddress
        jwt = createToken({ username, password, seed }, process.env.JWT_SECRET, '1h')
        // return a success message if the username and password are correct
        res.json({ message: 'Sign up successful', jwt: jwt });
    });

    app.post('/signin', parser, async (req, res) => {
        // get the username and password from the request body
        const { username, password } = req.body;
        console.log(username, password)
        if (!username || !password) {
            res.status(400).json({ error: 'Invalid data' });
            return;
        }
        const user = getUser(username);
        console.log(user)
        // check if the username and password are correct
        if (user && (user.password === password || user.accountAddress === seed)) {
            seed = user.address
            jwt = createToken({ username, password, seed }, process.env.JWT_SECRET, '1h')
            // return a success message if the username and password are correct
            res.json({ message: 'Sign in successful', jwt: jwt });
        } else {
            // return an error message if the username and password are incorrect
            res.status(401).json({ error: 'Incorrect username or password' });
        }
    });

    app.post('/invest', parser, async (req, res) => {
        // get the project name, amount, and date from the request body
        const { projectName, amount, date } = req.body;
        jwt = req.headers.authorization.split(' ')[1]
        // check if the data given in the request is valid
        if (!projectName || !amount || !date || !jwt || !verifyToken(jwt, process.env.JWT_SECRET)) {
            res.status(400).json({ error: 'Invalid data' });
            return;
        }
        // get the account address from the token
        const accountAddress = getTokenData(jwt).seed;
        // create the metadata for the NFT
        const ipfsHash = await createNftMetadata(projectName, amount, date);
        // pin the metadata to IPFS
        console.log(ipfsUrl + ipfsHash)
        console.log("address", accountAddress)
        const [wallet, client] = await connectWallet(accountAddress, process.env.NET)
        // mint the nft with the ipfs hash
        tx = await mintNFT(wallet, client, ipfsUrl + ipfsHash, 0, "", 0, 1);
        console.log(tx);
        // return the IPFS hash as a response
        res.json({ "url": ipfsUrl + ipfsHash });
    });

    app.get('/projects', (req, res) => {
        // return the json file 'db.json' as a response
        data = fs.readFileSync('db.json', 'utf8');
        projects = JSON.parse(data);
        res.json(projects);
    });


    // Start the server
    app.listen(port, () => {
        console.log(`API server is running on port ${port}`);
    });
}

StartApi();
