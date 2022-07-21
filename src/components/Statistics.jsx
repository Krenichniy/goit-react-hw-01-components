import PropTypes from 'prop-types';


const Statistics = ({ title, stats }) => {
    return (<section >
        {title ? <h2 >{title}</h2> : ''};
        <ul >
            {stats.map((element) => {
                return (
                    <li key={element.id}>
                        <span >{element.label}</span>
                        <span >{element.percentage}</span>
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