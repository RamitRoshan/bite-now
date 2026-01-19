import { useDispatch, useSelector } from "react-redux"
import { clearCart } from "../utils/cartSlice";
import ItemList from "./ItemList";

const Cart = () => {

    //subscribing to the store
    const cartItems = useSelector((store) => store.cart.items);
    console.log(cartItems);


    //above and below both are same, it's just destructuring
    // const store  = useSelector((store) => store);
    // const cartItems = store.cart.items;

    //hooks - useDispatch from react-redux
    const dispatch = useDispatch();

    //event handler
    const handleClearCart = () => {
        dispatch(clearCart());
    }

    return (
        <div className="text-center m-4 p-4">
            <h1 className="text-2xl font-bold">Cart</h1>

            <div className="w-6/12 m-auto">
                <button  className="p-2 m-2 bg-black text-white hover:bg-gray-800 rounded-lg"
                onClick={handleClearCart}
                >
                    Clear Cart
                </button>

                {/* displaying the message when the items is 0 in the cart */}
                {cartItems.length === 0 && <h1 className="font-serif">Cart is empty. Plz Add Items to the cart</h1>}
                
                <ItemList items={cartItems}/>
            </div>

        </div>
    );
};

export default Cart;