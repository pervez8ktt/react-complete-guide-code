import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

function ExpenseItem(props) {

    

    return (
        <Card className="expense-item">
            <ExpenseDate expenseDate={props.expenseDate}></ExpenseDate>
            <div className="expense-item__description"><h2>{props.expenseTitle}</h2></div>
            <Card className="expense-item__price">${props.expenseAmount}</Card>
        </Card>
    );

}

export default ExpenseItem;