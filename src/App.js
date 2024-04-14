import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

//Code to import Budget.js
import Budget from './components/Budget';
import Remaining from './components/Remaining';
import ExpenseTotal from './components/ExpenseTotal';
import ExpenseList from './components/ExpenseList';
import AllocationForm from './components/AllocationForm';
import { AppProvider } from './context/AppContext';
import Currency from './components/Currency';
const App = () => {
    return (
        <AppProvider>
            <div className='container'>
                <h1 className='mt-3'>Company's Budget Allocation</h1>
                    <div className='row mt-3'>
                        {
                            // Budget component
                            <div id='Budget' className='col-sm'>
                                <Budget />
                            </div>
                        }        

                        {
                            //Remaining component
                            <div id='Remaining' className='col-sm'>
                                <Remaining />
                            </div>

                        }        

                        {
                            //ExpenseTotal component
                            <div id='ExpenseTotal' className='col-sm'>
                             <ExpenseTotal />
                            </div>
                        }

                        {
                            //Currency component
                            <div id='Currency' className='col-sm'>
                             <Currency />
                            </div>
                        }                

                        {
                            //ExpenseList component
                            <div id='ExpenseList' className='col-sm'>
                             <ExpenseList />
                            </div>
                        }        

                        {
                           //AllocationForm component
                           <div id='AllocationForm'className='col-sm'>
                           <AllocationForm />
                          </div>
                        }        

                </div>
            </div>
        </AppProvider>
    );
};
export default App;
