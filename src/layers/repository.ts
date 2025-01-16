import { CartRespotiory } from "../domains/cart";
import { UserRepository } from "../domains/user";
import { single } from "../shared/utils/single";
import { Layer } from "./layer";

interface Repository {
  cart: CartRespotiory;
  user: UserRepository;
}

class RepositoryLayer extends Layer<Repository> {}
export const repositoryLayer = single(new RepositoryLayer());
