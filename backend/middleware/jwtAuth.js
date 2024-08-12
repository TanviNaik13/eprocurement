const jwt = require("jsonwebtoken")

const verifyJWT = async (req,res,next)=>{
    try {
        const authString = req.headers.authorization
        const b = authString.split("Bearer ")
        console.log("jwtAUth")
        const token = b[1];
        const verification = jwt.verify(token,process.env.JWT_SECRET_KEY)

        console.log("User Authenticated")
        req.user = verification
        return next();

    } catch (error) {
        console.log("ERROR: ",error.message);
        return res.sendStatus(403);
    }
}
module.exports= verifyJWT