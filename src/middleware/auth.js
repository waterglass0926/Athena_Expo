const { admin } = require('../configs/firebase');

module.exports = {
    isAuthenticated: (req, res, next) => {
        const idToken = req.headers.authorization;

        if (!idToken) {
            return res.status(401).json({ error: 'Unauthorized: Missing Authorization Header' });
        }

        admin
            .auth()
            .verifyIdToken(idToken)
            .then((decodedToken) => {
                // Attach user information to the request object
                req.user = decodedToken;
                next();
            })
            .catch((error) => {
                console.error('Error verifying ID token:', error);
                return res.status(401).json({ error: 'Unauthorized: Invalid Token' });
            });
    },
}