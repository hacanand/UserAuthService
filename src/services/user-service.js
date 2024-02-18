const UserRepository = require("../repository/user-repository");
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
}
module.exports = UserService;
