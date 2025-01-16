import { repositoryLayer } from "../../layers/repository";
import { service } from "../../layers/service";
import { single } from "../../shared/utils/single";

export class CartService {
  private cartRepository = repositoryLayer.get("cart");

  getAll() {
    const data = this.cartRepository.getAll() ?? "";
    return data + "service logic~~";
  }

  log() {
    console.log("test");
  }
}

const cartService = single(new CartService());
service.add("cart", cartService);
