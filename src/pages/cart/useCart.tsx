import { useState } from "react";
import { bridge } from "../../layers";

const cartBridge = bridge.get("cart");

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
