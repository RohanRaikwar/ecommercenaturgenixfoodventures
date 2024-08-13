
const jwt = require('jsonwebtoken');
console.log(jwt);
function CheckUser(req, res, next) {
    // Get the token from the Authorization header
    const token = req.headers.authorization;

    // If no token is provided, return an error
    if (!token) {
        return res.status(401).json({ message: 'Access denied, no token provided' });
    }

    try {
        // Verify the token using the secret key
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // Attach the decoded user information to the request object
        req.user = decoded;

        // Proceed to the next middleware or route handler
        next();
    } catch (err) {
        // If the token is invalid, return an error
        return res.status(400).json({ message: 'Invalid token' });
    }
}

module.exports = CheckUser;
