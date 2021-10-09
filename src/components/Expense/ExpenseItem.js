import React from 'react';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

const ExpenseItem=(props)=> {

    
    
    return (
        <Card className="expense-item">
            <ExpenseDate expenseDate={props.expenseDate}></ExpenseDate>
            <div className="expense-item__description"><h2>{props.title}</h2></div>
            <Card className="expense-item__price">${props.expenseAmount}</Card>
            {/* <button onClick={()=>{console.log('Clicked!!!')}}>Change Title</button> */}
            
        </Card>
    );

}

export default ExpenseItem;