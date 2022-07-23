import PropTypes from 'prop-types';

const Transaction = ({id, type, amount, currency }) => {
    return (
        <>
            <tr key={id}>
                <td>{type}</td>
                <td>{amount}</td>
                <td>{currency}</td>
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
