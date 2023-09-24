import { useContext } from "react";
import "./stories.scss"
import { AuthContext } from "../../context/authContext"

const Stories = () => {

  const {currentUser} = useContext(AuthContext)

  //TEMPORARY
  const stories = [
    {
      id: 1,
      name: "Akshay Kumar",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrBC_FUbJ5Sdux-JxR-oDMGiSLTh9m4Xu53Q&usqp=CAU",
    },
    {
      id: 2,
      name: "jacqueline",
      img: "https://www.axisbank.com/images/default-source/progress-with-us_new/what-to-do-in-switzerland.jpg",
    },
    {
      id: 3,
      name: "Katrina",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-XyOlH3hIPvgPNjrStH27WAZ742l8KgDCew&usqp=CAU",
    },
    {
      id: 4,
      name: "Rock",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-R7zcEU955YDY-hQa7Fk0rN8VRa-cw7fiqw&usqp=CAU",
    },
  ];

  return (
    <div className="stories">
      <div className="story">
          <img src={currentUser.profilePic} alt="" />
          <span>{currentUser.name}</span>
          <button>+</button>
        </div>
      {stories.map(story=>(
        <div className="story" key={story.id}>
          <img src={story.img} alt="" />
          <span>{story.name}</span>
        </div>
      ))}
    </div>
  )
}

export default Stories