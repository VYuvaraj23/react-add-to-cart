export default function CartModel(props) {
  const { ToggleModal, cart, removeCart } = props;
  return (
    <div className="bg-gray-800 bg-opacity-70 fixed p-10 inset-0 flex flex-col items-center gap-10  text-white">
      <button
        onClick={ToggleModal}
        className="absolute right-3 top-4 bg-red-800  rounded-full font-semibold "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-10"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
      </button>

      <div className="bg-white text-black font-regular lg:font-bold lg:text-lg text-xs m-auto w-full rounded-xl p-10 space-y-10 max-h-96 overflow-auto ">
        <h1 className="text-3xl font-bold  text-center">Cart</h1>

        {cart.length > 0 ? (
          cart.map((item) => {
            return (
              <div key={item.id} className="flex items-center justify-between">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-16 h-16 object-contain"
                />
                <span className="font-regular">{item.title}</span>
                <button
                  onClick={() => removeCart(item.id)}
                  className="bg-gray-800 text-white px-3 py-1 md:px-6 md:py-2 rounded-lg"
                >
                  Remove
                </button>
              </div>
            );
          })
        ) : (
          <p className="text-center">Your Cart is Empty!</p>
        )}
      </div>
    </div>
  );
}
