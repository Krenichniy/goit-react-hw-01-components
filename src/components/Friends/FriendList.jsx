import FriendsListItem from './FriendsListItem';
import PropTypes from 'prop-types';
import css from './Friends.module.css';

const FriendsList = ({ friends }) => {
  return (<ul className={css.friendList}>
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