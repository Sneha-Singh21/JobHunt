import jwt from "jsonwebtoken";

const isAuthenticated = async (req, res, next) => {
    try {
        const token = req.cookies?.token; // Fixed
        if (!token) {
            return res.status(401).json({ success: false, message: "The user is not authorized" });
        }

        const decodeToken = await jwt.verify(token, process.env.SECRET_KEY);
        if (!decodeToken) {
            return res.status(401).json({ success: false, message: "Invalid token" });
        }

        req.id = decodeToken.userId; // Attach user ID to request
        next();
    } catch (error) {
        console.error(error);
        return res.status(500).json({ success: false, message: error.message || "Error in authentication middleware" });
    }
};

export default isAuthenticated;
