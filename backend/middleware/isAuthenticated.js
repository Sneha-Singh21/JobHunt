import jwt from "jsonwebtoken";

const isAuthenticated = async (req, res, next) => {
    try {
        const token = req.cookie.token;
        if(!token) {
            return res.status(401).json({success: false, message:"The user is not authorized"});
        }

        const decodeToken = await jwt.verify(token, process.env.SECRET_KEY);
        if(!decodeToken) {
            return res.status(401).json({success: false, message:"Invalid token"});
        }

        req.id = decodeToken.userId;
        next();
    } catch (error) {
        console.log(error);
        return res.json({success: false, message:"Error"});   
    }
}

export default isAuthenticated;