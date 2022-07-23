import PropTypes from 'prop-types';
import Stats from './Stats';
import css from './Profile.module.css'

const Profile = ({ username, tag, location, avatar, stats }) => {
  return  (<div className={css.profile}>
  <div className={css.description}>
    <img
      src={avatar}
        alt="User avatar"
        className={css.avatar}
        width= '100'
    />
      <p className={css.name}>{username}</p>
      <p className={css.tag}>{'@' + tag}</p>
      <p className={css.location}>{location}</p>
  </div>

  <Stats stats={stats}/>
</div>)
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired,
}

export default Profile;