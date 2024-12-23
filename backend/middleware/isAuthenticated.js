const isAuthenticated = async (req, res, next) => {
  try {
    const token = req.cookies?.token; // Check for token in cookies
    if (!token) {
      console.log("No token found in cookies");
      return res
        .status(401)
        .json({ success: false, message: "Unauthorized: No token provided" });
    }

    // Verify token
    const decodedToken = jwt.verify(token, process.env.SECRET_KEY);
    if (!decodedToken) {
      console.log("Invalid token");
      return res
        .status(401)
        .json({ success: false, message: "Unauthorized: Invalid token" });
    }

    req.id = decodedToken.userId; // Attach user ID to request
    next(); // Proceed to next middleware or route handler
  } catch (error) {
    console.error("Error in authentication middleware:", error);
    return res
      .status(500)
      .json({ success: false, message: "Authentication error" });
  }
};
