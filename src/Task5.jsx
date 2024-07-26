import { useState } from "react";
import img1 from "./assets/img1.png";
import img2 from "./assets/img2.png";
import AxiosDemo from "./AxiosDemo.jsx";

const images = [img1, img2];

export function Task5() {
  const [image, setImage] = useState(img1);
  return (
    <>
      <div className="mb-4 flex flex-wrap gap-4">
        {images.map((image, index) => (
          <img
            src={image}
            key={index}
            className="size-40 rounded-md object-cover object-center"
            alt="logo"
          />
        ))}
        {/* button(change image) onClick=> change the image */}
        <div className="flex flex-col gap-2">
          <img
            src={image}
            alt="Image"
            className="size-40 rounded-md object-cover object-center"
          />
          <button
            onClick={() => setImage((img) => (img === img1 ? img2 : img1))}
          >
            Change Image
          </button>
        </div>
        <div>
          <AxiosDemo />
          <p>Axios Demo</p>
        </div>
      </div>
    </>
  );
}
