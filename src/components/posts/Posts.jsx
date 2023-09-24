import Post from "../post/Post";
import "./posts.scss";

const Posts = () => {
  //TEMPORARY
  const posts = [
    {
      id: 1,
      name: "Virat kohli",
      userId: 1,
      profilePic:
        "https://pbs.twimg.com/profile_images/1562753500726976514/EPSUNyR3_400x400.jpg",
      desc: "Forever grateful:)",
      img: "https://images.moneycontrol.com/static-mcnews/2022/10/Collage-Maker-23-Oct-2022-06.50-PM.jpg",
    },
    {
      id: 2,
      name: "Virat Kohli",
      userId: 2,
      profilePic:
        "https://pbs.twimg.com/profile_images/1562753500726976514/EPSUNyR3_400x400.jpg",
      desc: "Tenetur iste voluptates dolorem rem commodi voluptate pariatur, voluptatum, laboriosam consequatur enim nostrum cumque! Maiores a nam non adipisci minima modi tempore.",
    },
  ];

  return <div className="posts">
    {posts.map(post=>(
      <Post post={post} key={post.id}/>
    ))}
  </div>;
};

export default Posts;
