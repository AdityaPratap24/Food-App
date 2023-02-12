import { useSelector } from "react-redux";
import CartItems from "./CartItems";
import { useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispath = useDispatch();
  const clearCartItems = () => {
    dispath(clearCart());
  };
  return (
    <div>
      <div className=" m-auto w-4/5 flex justify-between font-bold text-2xl">
        <h1 className="my-2">Cart</h1>
        <button
          className="mx-7 my-2 px-2 bg-purple-800 hover:bg-pink-900 text-white rounded-lg"
          onClick={() => clearCartItems()}
        >
          Clear-cart
        </button>
      </div>
      <div className="m-auto w-4/5 flex flex-wrap gap-6 justify-between bg-green-50 ">
        {cartItems.map((items) => (
          <CartItems {...items} key={items.id} />
        ))}
      </div>
    </div>
  );
};

export default Cart;
