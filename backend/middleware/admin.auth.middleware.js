import jwt from 'jsonwebtoken';

export const verifyAdmin = (req, res, next) => {
    const token = req.cookies.admin_token;
    if (!token) return res.status(401).json({ message: 'Unauthorized: No token provided' });

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET || 'secret_key');
        req.admin = decoded;
        next();
    } catch (error) {
        res.status(403).json({ message: 'Forbidden: Invalid token' });
    }
};