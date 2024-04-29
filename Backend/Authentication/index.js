const jwt = require('jsonwebtoken');
const key = process.env.KEY;

function myMiddleware(req, res, next) {
    const jwttoken = req.headers.authorization;

    try {
        if (!jwttoken) {
            return res.status(401).json({
                msg: "No token provided. Access denied."
            });
        }

        const decodeValue = jwt.verify(jwttoken, key);
        const user = decodeValue.username;

        if (!user) {
            return res.status(401).json({
                msg: "Invalid token. Access denied."
            });
        }

        console.log("calling next session");
        next();
    } catch (err) {
        console.error("Error in JWT verification:", err);
        return res.status(500).json({
            msg: "Internal server error"
        });
    }
}

module.exports = myMiddleware;
