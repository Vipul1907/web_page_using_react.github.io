import "./profile.scss";
import Posts from "../../components/posts/Posts"

const Profile = () => {
  return (
    <div className="profile">
      <div className="images">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXcBRecCcQdmtKKT5hk_lG1spV0SLofplulQ&usqp=CAU"
          alt=""
          className="cover"
        />
        <img
          src="https://pbs.twimg.com/profile_images/1562753500726976514/EPSUNyR3_400x400.jpg"
          alt=""
          className="profilePic"
        />
      </div>
      <div className="profileContainer">
        <div className="uInfo" >
          <div className="center">
            <span>Virat Kohli</span>
            Carpediem!
            <button>follow</button>
          </div>
        </div>
      <Posts/>
      </div>
    </div>
  );
};

export default Profile;
