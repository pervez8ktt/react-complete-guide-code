
import React, {useState} from 'react';
import './Expenses.css'
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from '../ExpenseFilter/ExpensesFilter';

function Expenses(props){

    const expenses = props.arr;

    const [filterYear, setFilterYear] = useState('2021');

    const onFilterChange = (year) =>{
      console.info(year);
      setFilterYear(year)
    }

    return(
        <div>
          
        <Card className="expenses">
        <ExpensesFilter selectedYear = {filterYear} onFilterChange = {onFilterChange}/>
        <ExpenseItem expenseDate={expenses[0].date} expenseTitle={expenses[0].title} expenseAmount={expenses[0].amount}></ExpenseItem>
      <ExpenseItem expenseDate={expenses[1].date} expenseTitle={expenses[1].title} expenseAmount={expenses[1].amount}></ExpenseItem>
      <ExpenseItem expenseDate={expenses[2].date} expenseTitle={expenses[2].title} expenseAmount={expenses[2].amount}></ExpenseItem>
      <ExpenseItem expenseDate={expenses[3].date} expenseTitle={expenses[3].title} expenseAmount={expenses[3].amount}></ExpenseItem>
      </Card>
      </div>
    );

}


export default Expenses;