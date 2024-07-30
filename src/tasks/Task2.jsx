/* WAP add h1, p => current date, p=> current Time  */
export function Task2 ({ name, rollNo, branch, model, brand }) {
  // props
  return (
    <>
      <h1 className="text-2xl font-bold">Date & Time</h1>
      <p>Date: {new Date().toLocaleDateString()}</p>
      <p>Time: {new Date().toLocaleTimeString()}</p>
      <p>
        {name}_{branch}_{rollNo}
      </p>
      <p>Model: {model}</p>
      <p>Brand: {brand}</p>
    </>
  );
}
