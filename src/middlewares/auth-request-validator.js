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
const validateIsAdminRequest = (req, res, next) => {
    if (!req.body.id) {
        return res.status(400).json({
            message: "User id is required",
            err: 'id missing',
            success: false,
            data: {},
        });
    }
    next();
}

module.exports = {validateAuthRequest, validateIsAdminRequest};