const validateAuthRequest = (req, res, next) => {
    if (!req.body.email || !req.body.password) {
        return res.status(400).json({
            message: "Email or password is/are required",
            err: 'email or password missing',
            success: false,
            data: {},
        });
    }
    next();
}
module.exports = validateAuthRequest;