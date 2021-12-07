const jwt = require('jsonwebtoken');

module.exports = function (req, res, next) {
    const token = req.cookies.token;
    if (!token) {
        res.status(401).send("Unauthorized");
    } else {
        // todo: set up process.env.SUPER_SECRET
        jwt.verify(token, "secret_token", function (err, decode) {
            if (err) {
                res.status(401).send("Invalid token");
            }
            req.username = decode.username;
            next();
        });
    }
}
