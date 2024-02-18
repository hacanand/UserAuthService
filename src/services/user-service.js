const UserRepository = require("../repository/user-repository");
const bcrypt = require("bcrypt");
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
      const response = jwt.sign(user, JWT_KEY, { expiresIn: "1d" });
      return response;
    } catch (error) {
      console.log(
        "something went wrong in the user service while creating token"
      );
      throw error;
    }
  }
  checkPassword(password, encryptedPassword) {
    try {
      return bcrypt.compareSync(password, encryptedPassword);
    } catch (error) {
      console.log(
        "something went wrong in the user service while checking password"
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
  async isAuthenticated(token) {
    try {
      const isTOkenVerified = await this.verifyToken(token);
      if (!isTOkenVerified) throw { error: "token is not verified" };
      const user = this.userRepository.getById(isTOkenVerified.id);
      if (!user) throw { error: "user not found" };
      return user.id;
    } catch (error) {
      console.log(
        "something went wrong in the user service while verifying token"
      );
      throw error;
    }
  }

  async signIn(email, plainPassword) {
    try {
      // step 1: get user by email
      const user = await this.userRepository.getByEmail(email);
      // step 2: check if user exists and password is correct
      const passwordMatch = this.checkPassword(plainPassword, user.password);
      if (!passwordMatch) {
        console.log("password does not match");
        throw { error: "password does not match" };
      } // step 3: create token
      const token = this.createToken({ email: user.email, id: user.id });
      return token;
    } catch (error) {
      console.log("something went wrong in the user service while signing in");
      throw error;
    }
  }
}

module.exports = UserService;
