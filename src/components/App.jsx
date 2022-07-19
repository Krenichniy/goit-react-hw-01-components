import Profile from "./Profile";
import user from '../user.json';
export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      React homework template

      <Profile key={user[0].id}
              username={user[0].username}
              tag={user[0].tag}
              location={user[0].location}
              avatar={user[0].avatar}
              followers={user[0].stats.followers}
              views={user[0].stats.views}
              likes={user[0].stats.likes}
      />
    </div>
  );
};
