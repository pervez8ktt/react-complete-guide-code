import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';

function ExpenseItem(props) {

    

    return (
        <div className="expense-item">
            <ExpenseDate expenseDate={props.expenseDate}></ExpenseDate>
            <div className="expense-item__description"><h2>{props.expenseTitle}</h2></div>
            <div className="expense-item__price">${props.expenseAmount}</div>
        </div>
    );

}

export default ExpenseItem;