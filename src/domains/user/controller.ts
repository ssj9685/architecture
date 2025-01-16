import { controllerLayer } from "../../layers";
import { single } from "../../shared/utils/single";

export class UserController {
  getName() {
    return "석진";
  }
}

const userController = single(new UserController());
controllerLayer.add("user", userController);
