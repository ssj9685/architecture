import { CartService } from "../domains/cart";
import { UserService } from "../domains/user";
import { single } from "../shared/utils/single";
import { Layer } from "./layer";

interface Service {
  cart: CartService;
  user: UserService;
}

export const service = single(new Layer<Service>(), "service");
``;
