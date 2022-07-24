import PropTypes from 'prop-types';
import css from './Transaction.module.css';
const Transaction = ({id, type, amount, currency }) => {
    return (
        <>
            <tr key={id}>
                <td className={css.tDate}>{type}</td>
                <td className={css.tDate}> {amount}</td>
                <td className={css.tDate}>{currency}</td>
            </tr> 
        </>
    )
}

Transaction.protoTypes = {
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
}

export default Transaction;
