import { useCart } from "./useCart";

export default function Cart() {
  const { onClick, text } = useCart();
  return <div onClick={onClick}>{text}</div>;
}
