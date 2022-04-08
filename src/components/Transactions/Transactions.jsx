import s from './Transactions.module.css';
import PropTypes from 'prop-types';

const Transactions = ({ items = [] }) => {
  const stats = items.map(el => {
    const { id, type, amount, currency } = el;
    return (
      <tr key={id} className={s.row}>
        <td>{type}</td>
        <td>{amount}</td>
        <td>{currency}</td>
      </tr>
    );
  });
  return (
    <table>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>{stats}</tbody>
    </table>
  );
};

Transactions.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }).isRequired
  ),
};

export default Transactions;
