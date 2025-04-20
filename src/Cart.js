import { useDispatch, useSelector } from "react-redux";
import Dishes from "./Dishes";
import { emptyCart } from "../asserts/cartSlice";
import { remove } from "../asserts/cartSlice";

export const Cart = () => {
  
  const Items = useSelector((store) => store.cart.items);
  //console.log(Items);
  const dispatch = useDispatch();
  const clearCart = () => {
    dispatch(emptyCart());
  };
  return (
    <div className="text-center text-xl font-bold p-2 w-6/12 m-auto">
      <div>Cart</div>
     {Items.length==0&& <div>Your cart is empty add some items</div>}
      {Items.map((item) => {
        return (
          <div>
            <Dishes dishData={item} key={item.id} />
          </div>
        );
      })}
      <button
        onClick={() => {
          clearCart();
        }}
        className="bg-green-900 rounded-lg text-white p-3 m-3"
      >
        Clear Cart
      </button>
    </div>
  );
};
