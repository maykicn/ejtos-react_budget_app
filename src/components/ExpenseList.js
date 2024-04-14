import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';
import increaseIcon from '../logo/increase.png';
import decreaseIcon from '../logo/decrease.png';

const ExpenseList = () => {
    const { expenses, dispatch, currency } = useContext(AppContext);

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });
    };

    const decreaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'RED_EXPENSE',
            payload: expense
        });
    };

    return (
        <table className='table'>
            <thead className="thead-light">
                <tr>
                    <th scope="col">Department</th>
                    <th scope="col">Allocated Budget</th>
                    <th scope="col">Increase by 10</th>
                    <th scope="col">Decrease by 10</th>
                    <th scope="col">Delete</th>
                </tr>
            </thead>
            <tbody>
                {expenses.map((expense) => (
                    <tr key={expense.id}>
                        <td>{expense.name}</td>
                        <td>{currency}{expense.cost}</td>
                        <td>
                            <button onClick={() => increaseAllocation(expense.name)}
                            style={{
                              backgroundImage: `url(${increaseIcon})`,
                              backgroundRepeat: 'no-repeat',
                              backgroundPosition: 'center',
                              backgroundSize: 'contain',
                              border: 'none',
                              width: '30px', // Adjust width and height as needed
                              height: '30px',
                              cursor: 'pointer',
                          }}>
                            </button>
                        </td>
                        <td>
                            <button onClick={() => decreaseAllocation(expense.name)}
                            style={{
                              backgroundImage: `url(${decreaseIcon})`,
                              backgroundRepeat: 'no-repeat',
                              backgroundPosition: 'center',
                              backgroundSize: 'contain',
                              border: 'none',
                              width: '30px', // Adjust width and height as needed
                              height: '30px',
                              cursor: 'pointer',
                          }}>
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default ExpenseList;
