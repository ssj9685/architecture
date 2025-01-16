import { repository } from "../../layers";
import { single } from "../../shared/utils/single";

export class UserRepository {}

const userRepository = single(new UserRepository());
repository.add("user", userRepository);
