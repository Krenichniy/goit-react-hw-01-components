import PropTypes from 'prop-types';
const Stats = ({stats}) => {
    return (
        <ul>
            {Object.keys(stats).map((element, index) => {
                return (
                    <li key={index}>
                        <span >{element}</span>
                        <span >{stats[element]}</span>
                    </li>
                )
            })}
        </ul>
    );
};

Stats.propTypes = {
    stats: PropTypes.object.isRequired,
}

export default Stats;