import PropTypes from 'prop-types';
import css from './Statistics.module.css';


const Statistics = ({ title, stats }) => {
    return (<section className={css.statistics}>
        {title ? <h2 className={css.title}>{title}</h2> : ''}
        <ul className={css.statList}>
            {stats.map((element) => {
                return (
                    <li key={element.id} className={css.item}>
                        <span className={css.label}>{element.label}</span>
                        <span className={css.percentage}>{element.percentage}%</span>
                    </li>);
            })}
        </ul>
    </section>);
};

Statistics.propTypes = {
    tittle: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.exact({
        id: PropTypes.string,
        label: PropTypes.string,
        percentage: PropTypes.number,
    })
  ).isRequired,
}

export default Statistics;