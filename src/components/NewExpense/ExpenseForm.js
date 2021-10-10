import React, {useState} from "react";
import './ExpenseForm.css';

const ExpenseForm = (props) =>{

    const[enteredTitle, setEnteredTitle] = useState('');
    const[enteredAmount, setEnteredAmount] = useState('');
    const[enteredDate, setEnteredDate] = useState('');
    
    // const [userInput, setUserInput]= useState({
    //     enteredTitle:'',
    //     enteredAmount:'',
    //     enteredDate:''
    // });

    const titleChangeHandler = (e) =>{
        setEnteredTitle(e.target.value);
        console.log(enteredTitle);

        // setUserInput({...userInput, enteredTitle: e.target.value});
        // console.log(userInput);

        // setUserInput((prevState)=>{
        //     return {...prevState, enteredTitle: e.target.value}
        // });
    };

    const amountChangeHandler = (e) =>{
        setEnteredAmount(e.target.value);
        console.log(enteredAmount);

        // setUserInput({...userInput, enteredAmount: e.target.value});
        // console.log(userInput);
    };

    const dateChangeHandler = (e) =>{
        setEnteredDate(e.target.value);
        console.log(enteredDate);

        // setUserInput({...userInput, enteredDate: e.target.value});
        // console.log(userInput);
    };

const submitHandler = (e) => {
    e.preventDefault();

    const expenseData = {
        title: enteredTitle,
        amount: +enteredAmount,
        date: new Date(enteredDate),
        id:new Date().getTime()
    };

    props.onSubmit({...expenseData, id: Math.random().toString()});

    
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
};

    return <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type="text" value={enteredTitle} onChange={titleChangeHandler}></input>
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input type="number" value={enteredAmount} min="0.0" step="0.01" onChange={amountChangeHandler}></input>
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input type="date" value={enteredDate} min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler}></input>
            </div>
        </div>
        <div className="new-expense__actions">
        
            <button type="submit" onClick={props.onCancel}>Cancel</button>
            <button type="submit">Add Expense</button>
        </div>
    </form>

}

export default ExpenseForm;