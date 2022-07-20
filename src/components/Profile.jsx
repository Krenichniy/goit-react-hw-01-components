import PropTypes from 'prop-types';
import Stats from './Stats';

const Profile = ({ username, tag, location, avatar, stats }) => {
  return  (<div>
  <div >
    <img
      src={avatar}
      alt="User avatar"
    />
    <p >{username}</p>
    <p >{'@' + tag}</p>
    <p >{location}</p>
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