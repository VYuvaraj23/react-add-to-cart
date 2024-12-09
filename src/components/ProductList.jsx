import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

export default function ProductList(props) {
  const [Products, setProducts] = useState([]);
  const { addToCart } = props;
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((error) => console.log("Fetch Api Products : ", error));
  }, []);
  return (
    <div className="mt-[84px] grid gap-10 lg:grid-cols-4 md:grid-cols-2 grid-cols-1 px-10 py-5  " >
      {Products.map(product => (
        <ProductCard key={product.id} product={product} addToCart={addToCart} />
      )        
      )}
    </div>
  );
}
