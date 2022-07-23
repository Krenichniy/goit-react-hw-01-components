import PropTypes from 'prop-types';
import Transaction from './Transaction';
const TransactionHistory = ({ items }) => {
    return (
        <table >
            <thead>
                <tr>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
                </tr>
            </thead>

            <tbody>
                {
                items.map((element) => {
                    return (
                        <Transaction key={element.id} id={element.id} type={element.type} amount={element.amount} currency={element.currency}/>
                    )
                })
               }
            </tbody>
        </table>
    )
}

TransactionHistory.protoTypes = {
    items: PropTypes.array.isRequired,
}

export default TransactionHistory;