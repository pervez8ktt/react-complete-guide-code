import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css'

const NewExpense = (props) =>{

    const[isFormShown, setFormShown] = useState(false);

    const onFormSubmit = (data) =>{
        setFormShown(false);
        props.onSubmit(data);
    }

    const onCancel = () =>{
        setFormShown(false);
    }

    const showAddNew=()=>{
        setFormShown(isFormShown=>{
            if(isFormShown){
                return false;
            }else{
                return true;
            }
        });
    }

    return <div className = "new-expense">
        
        {isFormShown === false && <button onClick={showAddNew}> Add New Expense </button>}
        {isFormShown === true && <ExpenseForm onSubmit={onFormSubmit} onCancel = {onCancel}></ExpenseForm>}
        
    </div>

};

export default NewExpense;