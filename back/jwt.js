const jwt = require('jsonwebtoken');

// Fonction pour créer un token JWT
function createToken(payload, secret, expiresIn) {
    return jwt.sign(payload, secret, { expiresIn });
}

// Fonction pour vérifier un token JWT
function verifyToken(token, secret) {
    try {
        return jwt.verify(token, secret);
    } catch (error) {
        return null;
    }
}

// Fonction pour obtenir les données du token JWT
function getTokenData(token) {
    try {
        const decoded = jwt.decode(token);
        return decoded;
    } catch (error) {
        return null;
    }
}

module.exports = { createToken, verifyToken, getTokenData };