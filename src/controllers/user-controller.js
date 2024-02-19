const UserService = require("../services/user-service");
const userService = new UserService();
const create = async (req, res) => {
  try {
    const response = await userService.create({
      email: req.body.email,
      password: req.body.password,
    });
    return res.status(201).json({
      data: response,
      message: "User created successfully",
      err: {},
      success: true,
    });
  } catch (error) {
   return  res.status(error.statusCode||500).json({
      message: error.message,
      err: error.explanation,
      success: false,
      data: {},
    });
  }
};
const destroy = async (req, res) => {
  try {
    const response = await userService.destroy(req.params.id);
    return res.status(200).json({
      data: response,
      message: "User deleted successfully",
      err: {},
      success: true,
    });
  } catch (error) {
    return res.status(500).json({
      message:
        "User deletion failed due to an internal server error at controller level",
      err: error,
      success: false,
      data: {},
    });
  }
};
const getById = async (req, res) => {
  try {
    const response = await userService.getById(req.params.id);
    return res.status(200).json({
      data: response,
      message: "User retrieved successfully",
      err: {},
      success: true,
    });
  } catch (error) {
    return res.status(500).json({
      message:
        "User retrieval failed due to an internal server error at controller level",
      err: error,
      success: false,
      data: {},
    });
  }

};
const signIn = async (req, res) => {
  try {
    const response = await userService.signIn(req.body.email, req.body.password);
    return res.status(200).json({
      data: response,
      message: "User signed in successfully",
      err: {},
      success: true,
    });
  } catch (error) {
    return res.status(500).json({
      message:
        "User sign in failed due to an internal server error at controller level",
      err: error,
      success: false,
      data: {},
    });
  }
}
const isAuthenticated = async (req, res) => {
  try {
    const token = req.headers['x-access-token'];
    const response = await userService.isAuthenticated(token)
    return res.status(200).json({
      data: response,
      message: "User is authenticated and token is verified successfully",
      err: {},
      success: true,
    });
   
  } catch (error) {
    return res.status(500).json({
      message:
        "User authentication failed due to an internal server error at controller level",
      err: error,
      success: false,
      data: {},
    });
  }
}
const isAdmin = async (req, res) => {
  try {
    const response = await userService.isAdmin(req.body.id);
    return res.status(200).json({
      data: response,
      message: "User is an admin",
      err: {},
      success: true,
    });
  } catch (error) {
    return res.status(500).json({
      message:
        "User is not an admin",
      err: error,
      success: false,
      data: {},
    });
  }
}

module.exports = {
  create,
  destroy,
  getById,
  signIn,
  isAuthenticated,
  isAdmin,
};
