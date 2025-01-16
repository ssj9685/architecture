import { bridge } from "../../layers/bridge";
import { single } from "../../shared/utils/single";

export class UserBridge {}

const userBridge = single(new UserBridge());
bridge.add("user", userBridge);
