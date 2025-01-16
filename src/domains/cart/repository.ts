import { repositoryLayer } from "../../layers/repository";
import { localStorageManager } from "../../shared/utils/localStorage";
import { single } from "../../shared/utils/single";

export class CartRespotiory {
  getAll() {
    return localStorageManager.cart.getItem();
  }
}

const cartRepository = single(new CartRespotiory());
repositoryLayer.add("cart", cartRepository);
