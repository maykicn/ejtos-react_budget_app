import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
  const { dispatch, currency } = useContext(AppContext); 

  const handleCurrencyChange = (event) => {
    const newCurrencyValue = event.target.value;
    dispatch({ type: 'CHG_CURRENCY', payload: newCurrencyValue });
  };
  
  

  return (
    <div className='alert alert-secondary'>
        <select
        value={currency}
        onChange={handleCurrencyChange}
        style={{ backgroundColor: 'green', color: 'white' }}
        >
            <option value="$">Currency($ Dollar)</option>
            <option value="£">Currency(£ Pound)</option>
            <option value="€">Currency(€ Euro)</option>
            <option value="₹">Currency(₹ Rupee)</option>
        </select>
    </div>
  );
};

export default Currency;
