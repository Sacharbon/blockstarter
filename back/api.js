const express = require('express');
const fs = require('fs');
const { pinFileToIPFS, createNftMetadata } = require('./pinata');

function StartApi() {
    const app = express();
    const port = 3000;

    app.get('/projects', (req, res) => {
        // return the json file 'db.json' as a response
        data = fs.readFileSync('db.json', 'utf8');
        projects = JSON.parse(data);
        res.json(projects);
    });

    app.post('/invest', (req, res) => {
        // get the project name, amount, and date from the request body
        const { projectName, amount, date } = req.body;
        // check if the data given in the request is valid
        if (!projectName || !amount || !date) {
            res.status(400).json({ error: 'Invalid data' });
            return;
        }
        // create the metadata for the NFT
        const metadata = createNftMetadata(projectName, amount, date);
        // pin the metadata to IPFS
        const ipfsHash = pinFileToIPFS(metadata);
        // return the IPFS hash as a response
        res.json({ ipfsHash });
    });

    // Start the server
    app.listen(port, () => {
        console.log(`API server is running on port ${port}`);
    });
}

StartApi();
