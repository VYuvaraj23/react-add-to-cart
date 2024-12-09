export default function ProductCard(props) {
  const { product,addToCart } = props;
  return (
    <div className="border p-4 rounded-lg shadow-lg flex flex-col justify-between gap-2 hover:ring hover:scale-[1.02] opacity-100">
      <section className="font-bold lg:text-lg text-md flex flex-col gap-2">
      <img src={product.image} alt={product.title} className="w-full h-48 object-contain" />
      <span className="">{product.title}</span>
      <span className="text-green-800 ">${product.price}</span>
      </section>
      <button
        onClick={()=>addToCart(product)}
        className="px-6 py-2 bg-blue-600 text-white font-semibold rounded">Add To Cart</button>
    </div>
  )
}
