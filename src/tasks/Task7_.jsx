export function Task7_({ products }) {
  return (
    <div className="flex gap-4 justify-center">
      {products.map((product) => (
        <div className="flex flex-col gap-2" key={product.name}>
          <img src={product.pic} alt={product.name} />
          <p className="font-bold">{product.name}</p>
          <p>₹{product.price}/-</p>
        </div>
      ))}
    </div>
  );
}
