import PropTypes from 'prop-types';
import css from './Friends.module.css';

const FriendsListItem = ({avatar, name, isOnline, id}) => {
  return (<li className={css.item} key={id}>
    <span className={ isOnline ? css.statusOn :  css.statusOff }>{isOnline ? 'online' : 'offline'}</span>
    <img src={avatar} alt="User avatar" width="48" className={css.avatar} />
    <p className={css.name}>{name}</p>
    </li>)
}

FriendsListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  isOnline: PropTypes.bool.isRequired,
}

export default FriendsListItem;