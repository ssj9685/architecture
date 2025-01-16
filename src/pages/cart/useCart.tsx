import { useState } from "react";
import { bridgeLayer } from "../../layers";

const cartBridge = bridgeLayer.get("cart");

export function useCart() {
  const [data, setData] = useState<string>();

  const text = data ?? "Click to fetch data";

  const onClick = () => {
    cartBridge.getAllAndLog((data) => {
      setData(data);
    });
  };

  return {
    onClick,
    text,
  };
}
