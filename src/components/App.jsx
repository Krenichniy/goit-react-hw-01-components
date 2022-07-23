import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import FriendsList from './Friends/FriendList';
import TransactionHistory from './Transaction/TransactionHistory';
import user from '../data/user.json';
import data from '../data/data.json';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json';

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
        stats={user.stats} />
      }

      {<Statistics
        title="Upload stats"
        stats={data} />
      }

      {
        <FriendsList friends={friends}/>
      }

      {
        <TransactionHistory items={transactions} />
      }
    </div>
  );
};
