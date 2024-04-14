import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Remaining = () => {
  const { budget, expenses, currency } = useContext(AppContext);
  const totalExpenses = expenses.reduce((total, item) => total + item.cost, 0);
  const remainingBudget = budget - totalExpenses;
  
    if(totalExpenses > budget) {
        alert("You can not reduce budget value lower than the spending");
        return;
    }
  return (
    <div className={`alert ${remainingBudget < 0 ? 'alert-danger' : 'alert-success'}`}>
      <span>Remaining: {currency}{remainingBudget}</span>
    </div>
  );
};

export default Remaining;
