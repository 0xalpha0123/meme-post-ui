import React from "react";

import { Post, PostList, TopUsers } from "../components";

import Layout from "../components/Layout";

const posts = [
  {
    username: "Steven Jobs",
    avatar: "https://i.ibb.co/DgdyKCr/Ellipse-3.png",
    status: true,
    text: "I love food and sleep if I give you a bit of food or text you all night, that means something.",
    image: "https://i.postimg.cc/90g0YGmw/Rectangle-6321.png",
    commenters: [
      {
        username: "",
        avatar: "https://i.postimg.cc/xTktVbTj/Ellipse-532.png",
      },
      {
        username: "",
        avatar: "https://i.postimg.cc/76dX5xKr/Ellipse-532.png",
      },
      {
        username: "",
        avatar: "https://i.postimg.cc/YCKfcns8/Ellipse-532-1.png",
      },
      {
        username: "",
        avatar: "https://i.postimg.cc/xTktVbTj/Ellipse-532.png",
      },
      {
        username: "",
        avatar: "https://i.postimg.cc/YCKfcns8/Ellipse-532-1.png",
      },
      {
        username: "",
        avatar: "https://i.postimg.cc/76dX5xKr/Ellipse-532.png",
      },
    ],
    share_number: 12,
  },
  {
    username: "Steven Jobs",
    avatar: "https://i.ibb.co/DgdyKCr/Ellipse-3.png",
    status: true,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sagittis quam nec pretium elementum. Nunc lobortis euismod mauris et molestie. Ut feugiat venenatis aliquet. Curabitur pretium dui ac interdum eleifend. Mauris eleifend mi sit amet elementum aliquam. Aliquam vitae feugiat tortor",
    commenters: [
      {
        username: "",
        avatar: "https://i.postimg.cc/xTktVbTj/Ellipse-532.png",
      },
      {
        username: "",
        avatar: "https://i.postimg.cc/76dX5xKr/Ellipse-532.png",
      },
      {
        username: "",
        avatar: "https://i.postimg.cc/YCKfcns8/Ellipse-532-1.png",
      },
      {
        username: "",
        avatar: "https://i.postimg.cc/xTktVbTj/Ellipse-532.png",
      },
      {
        username: "",
        avatar: "https://i.postimg.cc/YCKfcns8/Ellipse-532-1.png",
      },
      {
        username: "",
        avatar: "https://i.postimg.cc/76dX5xKr/Ellipse-532.png",
      },
    ],
    share_number: 12,
  },
  {
    username: "Steven Jobs",
    avatar: "https://i.ibb.co/DgdyKCr/Ellipse-3.png",
    status: true,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sagittis quam nec pretium elementum. Nunc lobortis euismod mauris et molestie. Ut feugiat venenatis aliquet. Curabitur pretium dui ac interdum eleifend. Mauris eleifend mi sit amet elementum aliquam. Aliquam vitae feugiat tortor",
    commenters: [
      {
        username: "",
        avatar: "https://i.postimg.cc/xTktVbTj/Ellipse-532.png",
      },
      {
        username: "",
        avatar: "https://i.postimg.cc/76dX5xKr/Ellipse-532.png",
      },
      {
        username: "",
        avatar: "https://i.postimg.cc/YCKfcns8/Ellipse-532-1.png",
      },
      {
        username: "",
        avatar: "https://i.postimg.cc/xTktVbTj/Ellipse-532.png",
      },
      {
        username: "",
        avatar: "https://i.postimg.cc/YCKfcns8/Ellipse-532-1.png",
      },
      {
        username: "",
        avatar: "https://i.postimg.cc/76dX5xKr/Ellipse-532.png",
      },
    ],
    share_number: 12,
  },
];

const Posts = () => {
  const metaInfo = {
    title: "Posts List",
  };

  return (
    <Layout metaInfo={metaInfo}>
      <div className="p-3 flex flex-col gap-3">
        <TopUsers />
        <Post avatar={posts[0].avatar} />
        <PostList posts={posts} />
      </div>
    </Layout>
  );
};

export default Posts;
