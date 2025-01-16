import { bridgeLayer } from "../../layers/bridge";
import { single } from "../../shared/utils/single";

export class UserBridge {}

const userBridge = single(new UserBridge());
bridgeLayer.add("user", userBridge);
