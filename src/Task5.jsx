import img1 from "./assets/img1.png";
import img2 from "./assets/img2.png";

const images = [img1, img2];

export function Task5() {
  return images.map((image, index) => (
    <img src={image} key={index} className="aspect-square m-2" alt="logo" />
  ));
}
