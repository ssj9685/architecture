import { service } from "../../layers";
import { single } from "../../shared/utils/single";

export class UserService {
  getUser() {
    return "석진";
  }
}

const userService = single(new UserService());
service.add("user", userService);
