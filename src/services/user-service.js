const UserRepository = require("../repository/user-repository");
const jwt = require("jsonwebtoken");
const { JWT_KEY } = require("../config/serverConfig");
class UserService {
  constructor() {
    this.userRepository = new UserRepository();
  }
  async create(data) {
    try {
      const newUser = await this.userRepository.create(data);
      return newUser;
    } catch (error) {
      console.log("something went wrong in the user service");
      throw error;
    }
  }
  async destroy(userId) {
    try {
      const userToDelete = await this.userRepository.destroy(userId);
      return true;
    } catch (error) {
      console.log("something went wrong in the user service");
      throw error;
    }
  }
  async getById(userId) {
    try {
      const user = await this.userRepository.getById(userId);
      return user;
    } catch (error) {
      console.log("something went wrong in the user service");
      throw error;
    }
  }
  createToken(user) {
    try {
      const response = jwt.sign(user, JWT_KEY, { expiresIn: "10h" });
      return response;
    } catch (error) {
      console.log(
        "something went wrong in the user service while creating token"
      );
      throw error;
    }
  }
  verifyToken(token) {
    try {
      const response = jwt.verify(token, JWT_KEY);
      return response;
    } catch (error) {
      console.log(
        "something went wrong in the user service while verifying token"
      );
      throw error;
    }
  }
  checkPassword(password, encryptedPassword) {
    try {
      const response = bcrypt.compareSync(password, encryptedPassword);
      return response;
    } catch (error) {
      console.log(
        "something went wrong in the user service while checking password"
      );
      throw error;
    }
  }
}

module.exports = UserService;
