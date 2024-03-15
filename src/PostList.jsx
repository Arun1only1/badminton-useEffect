import { CircularProgress } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [light, setLight] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchApi = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );

        setLoading(false);

        const postList = response?.data;
        setPosts(postList);
      } catch (error) {
        setLoading(false);

        console.log("error");
      }
    };
    fetchApi();
  }, [light]);

  if (loading) {
    return <CircularProgress />;
  }

  return (
    <>
      <div>
        {posts.map((item, index) => {
          return <div key={index}>{item.title}</div>;
        })}
      </div>

      <button onClick={() => setLight(!light)}>light change</button>
    </>
  );
};

export default PostList;
