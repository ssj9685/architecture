import { CartRespotiory } from "../domains/cart";
import { UserRepository } from "../domains/user";
import { single } from "../shared/utils/single";
import { Layer } from "./layer";

interface Repository {
  cart: CartRespotiory;
  user: UserRepository;
}

export const repository = single(new Layer<Repository>(), "repository");
