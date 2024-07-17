/* pass product image, name, price as properties from one component to another component
 * add an array of objects with pic(image), name & price properties of 2 produces
 * display image name & price of the products in browser using map method
 *  */

import { Task7_ } from "./Task7_.jsx";
import img1 from "./assets/img1.png";
import img2 from "./assets/img2.png";

export function Task7() {
  const products = [
    { pic: img1, name: "Product 1", price: 5000 },
    { pic: img2, name: "Product 2", price: 4000 },
  ];
  return (
    <div>
      <Task7_ products={products} />
    </div>
  );
}
