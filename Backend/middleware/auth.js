const jwt = require("jsonwebtoken")

function auth(req, res, next){
    const token = req.header("x-auth-token")
    if(!token ) return res.status(400).send("Not authorized...")

    try{
        const SECRET_KEY = process.env.SECRET_KEY;
        const payload = jwt.verify(token, SECRET_KEY);
        req.user = payload;
        next();
    } catch(error){
        res.status(400).send("Invalid token")
    }
}

module.exports = auth;