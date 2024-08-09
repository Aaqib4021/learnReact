import { useSelector, useDispatch } from "react-redux";
import RestaurantMenuitems from "./RestaurantMenuItems";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const CartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="text-center">
      <h1 className="text-2xl font-bold text-green-800 font-mono  mb-4">
        MY CART
      </h1>
      {/* <ul className="">
        {CartItems.map((item) => (
          <li>{item}</li>
        ))}
      </ul> */}
      <button
        className="p-2 bg-orange-700 text-white rounded-lg"
        onClick={handleClearCart}
      >
        Clear Cart
      </button>
      {CartItems.length===0 && <h1 className="mt-4 text-red-600 font-semibold">Cart is empty please add items!</h1>}
      <div>
        <RestaurantMenuitems item={CartItems} />
      </div>
    </div>
  );
};
export default Cart;
