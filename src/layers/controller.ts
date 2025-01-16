import { CartController } from "../domains/cart";
import { UserController } from "../domains/user";
import { single } from "../shared/utils/single";
import { Layer } from "./layer";

interface Controller {
  cart: CartController;
  user: UserController;
}

class ControllerLayer extends Layer<Controller> {}

export const controllerLayer = single(new ControllerLayer());
