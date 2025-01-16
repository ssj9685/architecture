import { CartBridge } from "../domains/cart";
import { UserBridge } from "../domains/user";
import { single } from "../shared/utils/single";
import { Layer } from "./layer";

interface Bridge {
  cart: CartBridge;
  user: UserBridge;
}

export const bridge = single(new Layer<Bridge>(), "bridge");
