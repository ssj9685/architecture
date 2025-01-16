import { CartController } from "../domains/cart";
import { UserController } from "../domains/user";
import { single } from "../shared/utils/single";
import { Layer } from "./layer";

interface Controller {
  cart: CartController;
  user: UserController;
}

export const controller = single(new Layer<Controller>(), "controller");
