import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
  const { budget, dispatch, currency } = useContext(AppContext);

  const handleBudgetChange = (event) => {
    const newBudgetValue = parseFloat(event.target.value);
    if(newBudgetValue > 20000) {
        alert("The value cannot exceed budget funds 20000£");
        return;
    }
    dispatch({ type: 'SET_BUDGET', payload: newBudgetValue });
  };

  return (
    <div className='alert alert-secondary'>
      <span>Budget: { currency }</span>
      <input
        type="number"
        step="10"
        value={budget}
        onChange={handleBudgetChange}
        placeholder="Enter budget"
      />
    </div>
  );
};

export default Budget;
