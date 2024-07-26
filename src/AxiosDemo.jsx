import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

const AxiosDemo = () => {
  const [post, setPost] = useState("");
  const [joke, setJoke] = useState([]);
  useEffect(() => {
    axios
      .get("https://dog.ceo/api/breeds/image/random")
      .then((response) => {
        // console.log(response.data);
        setPost(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

    // axios
    //   .get("https://official-joke-api.appspot.com/random_joke")
    //   .then((res) => {
    //     console.log(res);
    //     setJoke(res.data.punchline);
    //   })
    //   .catch((err) => console.error(err));
  });
  return (
    <>
      <img
        src={post.message}
        alt="This is Post"
        className="size-40 rounded-md"
      />
    </>
  );
};
export default AxiosDemo;
