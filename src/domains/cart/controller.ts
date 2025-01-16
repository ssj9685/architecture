import { controller } from "../../layers/controller";
import { service } from "../../layers/service";
import { single } from "../../shared/utils/single";

export class CartController {
  getAllAndLog() {
    const data = service.get("cart").getAll();
    const name = service.get("user").getUser();
    service.get("cart").log();

    return `${data}(${name})`;
  }
}

const cartController = single(new CartController());
controller.add("cart", cartController);
