import { controller } from "../../layers";
import { single } from "../../shared/utils/single";

export class UserController {
  getName() {
    return "석진";
  }
}

const userController = single(new UserController());
controller.add("user", userController);
