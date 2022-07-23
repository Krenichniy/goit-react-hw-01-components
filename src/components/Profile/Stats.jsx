import PropTypes from 'prop-types';
import css from './Profile.module.css'
const Stats = ({stats}) => {
    return (
        <ul className={css.stats}>
            {Object.keys(stats).map((element, index) => {
                return (
                    <li  key={index}>
                        <span className={css.label}>{element}</span>
                        <span className={css.quantity}>{stats[element]}</span>
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