import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import transactions from '../json/transactions.json';

const TransactionHistoryContainer = styled.div`
  background-color: #E6F5F7;
  padding: 20px;
  border-radius: 10px;
  width: 60%;
  margin: 0 auto;
  margin-top: 100px;
`;

const TransactionTable = styled.table`
  width: 80%;
  border-collapse: collapse;
  margin: 0 auto;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;

const TransactionTableHead = styled.thead`
  background-color: #fff;
  border-bottom: 2px solid #ddd;
`;

const TransactionTableHeader = styled.th`
  padding: 10px;
  text-align: left;
  border: 1px solid #ddd;
  background-color: #A4DDE5;
`;

const TransactionTableBody = styled.tbody``;

const TransactionTableRow = styled.tr`
  background-color: #fff;
  &:nth-child(even) {
    background-color: #A4DDE5;
  }
`;

const TransactionTableData = styled.td`
  padding: 10px;
  border: 1px solid #ddd;
`;

const TransactionHistoryTitle = styled.h3`
  text-align: center;
`;

function TransactionHistory({ transactions }) {
  return (
    <TransactionHistoryContainer>
      <TransactionHistoryTitle>Transaction History</TransactionHistoryTitle>
      <TransactionTable>
        <TransactionTableHead>
          <TransactionTableRow>
            <TransactionTableHeader>Type</TransactionTableHeader>
            <TransactionTableHeader>Amount</TransactionTableHeader>
            <TransactionTableHeader>Currency</TransactionTableHeader>
          </TransactionTableRow>
        </TransactionTableHead>
        <TransactionTableBody>
          {transactions.map((transaction) => (
            <TransactionTableRow key={transaction.id}>
              <TransactionTableData>{transaction.type}</TransactionTableData>
              <TransactionTableData>{transaction.amount}</TransactionTableData>
              <TransactionTableData>{transaction.currency}</TransactionTableData>
            </TransactionTableRow>
          ))}
        </TransactionTableBody>
      </TransactionTable>
    </TransactionHistoryContainer>
  );
}

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};

function App() {
  return (
    <div>
      <TransactionHistory transactions={transactions} />
    </div>
  );
}

export default App;
