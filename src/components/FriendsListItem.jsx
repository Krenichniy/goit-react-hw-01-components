import PropTypes from 'prop-types';

const FriendsListItem = ({avatar, name, isOnline, id}) => {
    return (<li key={id}>
      <span >{isOnline}</span>
      <img  src={avatar} alt="User avatar" width="48" />
      <p >{name}</p>
    </li>)
}

FriendsListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  isOnline: PropTypes.bool.isRequired,
}

export default FriendsListItem;