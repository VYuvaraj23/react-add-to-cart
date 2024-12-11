import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

export default function ProductList(props) {
  const [loading, setLoading] = useState(true);
  const [Products, setProducts] = useState([]);
  const { addToCart } = props;
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log("Fetch Api Products : ", error);
        setLoading(false);
      });
    return setProducts([]);  //memory clean process
  }, []);
  return (
    <div className="my-[84px] grid gap-10 lg:grid-cols-4 md:grid-cols-2 grid-cols-1 px-10 py-5  ">
      {loading ? (
        <p className="col-span-4 text-3xl font-semibold text-center">
          Loading...{" "}
        </p>
      ) : (
        Products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={addToCart}
          />
        ))
      )}
    </div>
  );
}
