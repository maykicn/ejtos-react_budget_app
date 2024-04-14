import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';
import Currency from './Currency';

const ExpenseList = () => {
    const { expenses, dispatch, currency } = useContext(AppContext);

    const handleDeleteExpense = (id) => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: id,
        });
    };

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

    return (
        <table className='table'>
            <thead className="thead-light">
                <tr>
                    <th scope="col">Department</th>
                    <th scope="col">Allocated Budget</th>
                    <th scope="col">Increase by 10</th>
                    <th scope="col">Delete</th>
                </tr>
            </thead>
            <tbody>
                {expenses.map((expense) => (
                    <tr key={expense.id}>
                        <td>{expense.name}</td>
                        <td>{currency}{expense.cost}</td>
                        <td>
                            <button onClick={() => increaseAllocation(expense.name)}>+</button>
                        </td>
                        <td>
                            <TiDelete size='1.5em' onClick={() => handleDeleteExpense(expense.id)} />
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default ExpenseList;
