import { single } from "./single";

class LocalStorageManager {
  cart = {
    getItem() {
      return localStorage.getItem("cart");
    },
  };
}

export const localStorageManager = single(new LocalStorageManager());
