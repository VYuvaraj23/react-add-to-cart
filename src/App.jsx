import { useState } from "react";
import Navbar from "./components/Navbar";
import CartModel from "./components/cartModel";
import ProductList from "./components/ProductList";

export default function App() {
  const [isCartOpen, SetCartModel] = useState(false);
  const [cart, setCart] = useState([]);

  const ToggleModal = () => SetCartModel(!isCartOpen);

  const addToCart = (product) => {
    const alreadyInCard = cart.find((item) => item.id === product.id);
    if (alreadyInCard) {
      alert("Item already added to the 'cart'");
    } else {
      setCart([...cart, product]);
    }
  };

  const removeCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };
  return (
    <>
      <Navbar ToggleModal={ToggleModal} cartCounts={cart.length} />
      <ProductList addToCart={addToCart} />
      {isCartOpen && (
        <CartModel
          ToggleModal={ToggleModal}
          cart={cart}
          removeCart={removeCart}
        />
      )}
    </>
  );
}
