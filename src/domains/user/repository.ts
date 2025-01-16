import { repositoryLayer } from "../../layers";
import { single } from "../../shared/utils/single";

export class UserRepository {}

const userRepository = single(new UserRepository());
repositoryLayer.add("user", userRepository);
