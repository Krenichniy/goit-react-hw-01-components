import Profile from "./Profile";
import user from './user.json';

// const user = {
//   id: "1",
//   username: "Jacques Gluke",
//   tag: "jgluke",
//   location: "Ocho Rios, Jamaica",
//   avatar: "https://cdn-icons-png.flaticon.com/512/2922/2922506.png",
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308
//   }
// }
export const App = () => {
  return (
    <div> 
      {<Profile 
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats ={user.stats}
      />}
    </div>
  );
};
