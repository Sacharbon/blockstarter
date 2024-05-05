const FormData = require("form-data");
const axios = require("axios");

const JWT = process.env.PINATA_JWT

const pinFileToIPFS = async (data) => {
    const formData = new FormData();
    const jsonData = JSON.stringify(data);
    const jsonBuffer = Buffer.from(jsonData, "utf-8");

    // Append the Buffer as a file to FormData
    formData.append("file", jsonBuffer, {
        filename: "Test.json",
        contentType: "application/json",
    });

    formData.append(
        "pinataOptions",
        JSON.stringify({
            cidVersion: 0,
        }),
    );

    // Setting headers, include FormData's headers to handle the boundary
    const headers = {
        Authorization: "Bearer " + JWT,
        ...formData.getHeaders(),
    };

    try {
      // Send the POST request
        const response = await axios.post(
            "https://api.pinata.cloud/pinning/pinFileToIPFS",
            formData,
            {
                headers: headers,
            },
        );
        return response.data.IpfsHash;
    } catch (error) {
        console.error(error);
    }
};

async function fetchFileFromIPFS(ipfsHash) {
    const url = `https://crimson-active-cuckoo-676.mypinata.cloud/ipfs/${ipfsHash}`;
    try {
        const response = await axios.get(url);
        console.log("Fetched from IPFS:", response.data);
        return response.data;
    } catch (error) {
        console.error("Error fetching file from IPFS:", error);
    }
}

async function createNftMetadata(projectName, amount, date) {
    const metadata = {
        name: projectName,
        amount: amount,
        date: date,
    };
    return pinFileToIPFS(metadata);
}

module.exports = { pinFileToIPFS, fetchFileFromIPFS, createNftMetadata };