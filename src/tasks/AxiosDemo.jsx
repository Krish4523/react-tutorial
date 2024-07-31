import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

const AxiosDemo = () => {
  const [post, setPost] = useState("");
  const [joke, setJoke] = useState([]);

  function fetchJoke() {
    axios
      .get("https://official-joke-api.appspot.com/random_joke")
      .then((res) => {
        // console.log(res);
        setJoke(res.data);
      })
      .catch((err) => console.error(err));
  }

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
  });
  return (
    <>
      <img
        src={post.message}
        alt="This is Post"
        className="size-40 rounded-md"
      />
      <div>
        <p>{joke.setup}</p>
        <p>{joke.punchline}</p>
        <button onClick={fetchJoke}>FetchJoke</button>
      </div>
    </>
  );
};
export default AxiosDemo;
