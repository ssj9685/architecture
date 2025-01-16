import { bridge } from "../../layers/bridge";
import { controller } from "../../layers/controller";
import { single } from "../../shared/utils/single";

export class CartBridge {
  private cartController = controller.get("cart");

  getAllAndLog(callback: (data: string) => void) {
    const data = this.cartController.getAllAndLog();
    callback(data);

    return data;
  }
}

const cartBridge = single(new CartBridge());
bridge.add("cart", cartBridge);
