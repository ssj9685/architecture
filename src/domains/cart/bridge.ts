import { bridgeLayer } from "../../layers/bridge";
import { controllerLayer } from "../../layers/controller";
import { single } from "../../shared/utils/single";

export class CartBridge {
  private cartController = controllerLayer.get("cart");

  getAllAndLog(callback: (data: string) => void) {
    const data = this.cartController.getAllAndLog();
    callback(data);

    return data;
  }
}

const cartBridge = single(new CartBridge());
bridgeLayer.add("cart", cartBridge);
