import React from 'react';
import PropTypes from 'prop-types';
import Transaction from '../Transaction/Transaction';
import styles from "../TransactionHistory/TransactionHistory.module.css"

const transactionHistory = [styles.transactionHistory]

const TransactionHistory = ({ items }) => {
  return (
    <table className={transactionHistory}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map(item => (
          <Transaction
            key={item.id}
            type={item.type}
            amount={item.amount}
            currency={item.currency}
          />
        ))}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.array.isRequired,
   items: PropTypes.arrayOf(
        PropTypes.shape({
           id: PropTypes.string.isRequired,
           
        })
     ),
};

export default TransactionHistory;
