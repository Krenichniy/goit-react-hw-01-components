import FriendsListItem from './FriendsListItem';
import PropTypes from 'prop-types';

const FriendsList = ({ friends }) => {
  return ( <ul >
        {friends.map((element) => {
          return  <FriendsListItem key={element.id} avatar={element.avatar} name={element.name} isOnline={element.isOnline} id={element.id} />
        })}
    {/* <!-- Произвольное кол-во FriendListItem --> */}
    </ul>)
}

FriendsList.propTypes = {
    friends: PropTypes.array.isRequired,
}

export default FriendsList;