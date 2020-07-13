import config from "../configs/config";
import data from "./data";
import User from "../api/user/userModel";
import Role from "../api/role/roleModel";
import logger from "../utils/logger";

export default async function (mode) {
  const { users, roles } = data;

  if (mode === config.database.DROP_CREATE) {
    User.collection.drop();
    Role.collection.drop();
  }

  if (mode === config.database.CREATE || mode === config.database.DROP_CREATE) {
    // Create Default Roles
    for (let item of roles) {
      let role = await Role.create(item);
      logger.info(role);
    }
    // Create Default Users
    for (let item of users) {
      let role = null;
      if (item.username === "user") {
        role = await Role.findOne({ name: "USER" });
      } else {
        role = await Role.findOne({ name: "ADMIN" });
      }
      item.role = role._id;
      let user = await User.create(item);
      logger.info(user);
    }
  }
}
