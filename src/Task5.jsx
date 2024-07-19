import img1 from "./assets/img1.png";
import img2 from "./assets/img2.png";
import { useState } from "react";

const images = [img1, img2];

export function Task5() {
  const [image, setImage] = useState(img1);
  return (
    <>
      <div className="mb-4 flex gap-2">
        {images.map((image, index) => (
          <img
            src={image}
            key={index}
            className="aspect-square m-2"
            alt="logo"
          />
        ))}
      </div>
      {/* button(change image) onClick=> change the image */}
      <div className="flex flex-col gap-2 items-center w-1/3">
        <img
          src={image}
          alt="Image"
          className="size-40 rounded-md object-cover object-center"
        />
        <button onClick={() => setImage((img) => (img === img1 ? img2 : img1))}>
          Change Image
        </button>
      </div>
    </>
  );
}
