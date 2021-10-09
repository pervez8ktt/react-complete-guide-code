import React from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css'

const NewExpense = (props) =>{


    return <div className = "new-expense">
        
        <ExpenseForm onSubmit={props.onSubmit}></ExpenseForm>
        
    </div>

};

export default NewExpense;