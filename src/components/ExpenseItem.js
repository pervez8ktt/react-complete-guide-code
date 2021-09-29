import './ExpenseItem.css';

function ExpenseItem(props) {

    return (
        <div className="expense-item">
            <div>{props.expenseDate.toISOString()}</div>
            <div className="expense-item__description"><h2>{props.expenseTitle}</h2></div>
            <div className="expense-item__price">${props.expenseAmount}</div>
        </div>
    );

}

export default ExpenseItem;