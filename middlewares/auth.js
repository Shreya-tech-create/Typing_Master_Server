const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();


const auth = (req, res, next) => {
  const authHeader = req.headers.authorization;
  console.log(" Token received in backend:", authHeader);

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Authorization token missing" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET); 
    console.log("Token decoded successfully:", decoded);
    req.user = decoded;
    next();
  } catch (err) {
    console.error(" Invalid Token:", err.message);
    res.status(401).json({ message: "Invalid or expired token" });
  }
};


const adminOnly = (req, res, next) => {
  if (!req.user || !req.user.isAdmin) {
    return res.status(403).json({ message: "Access denied. Admins only." });
  }
  next();
};

module.exports = { auth, adminOnly };

