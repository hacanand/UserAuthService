const { User } = require("../models/index");
class UserRepository {
  async create(data) {
    try {
      const newUser = await User.create(data);
      return newUser;
    } catch (error) {
      console.log("something went wrong in the user repository");
      throw error;
    }
  }
  async destroy(userId) {
    try {
      const userToDelete = await User.destroy({
        where: {
          id: userId,
        },
      });
      return true;
    } catch (error) {
      console.log("something went wrong in the user repository");
      throw error;
    }
  }
}
module.exports = UserRepository;
