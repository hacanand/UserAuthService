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
}
module.exports = UserService;
