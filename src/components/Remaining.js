import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Remaining = () => {
  const { budget, expenses } = useContext(AppContext);
  const totalExpenses = expenses.reduce((total, item) => total + item.cost, 0);
  const remainingBudget = budget - totalExpenses;
  console.log('remainingBudget', remainingBudget)
  console.log('budget', budget)
  console.log('totalExpenses', totalExpenses)
  
    if(totalExpenses > budget) {
        alert("You can not reduce budget value lower than the spending");
        return;
    }
  return (
    <div className={`alert ${remainingBudget < 0 ? 'alert-danger' : 'alert-success'}`}>
      <span>Remaining: £{remainingBudget}</span>
    </div>
  );
};

export default Remaining;
