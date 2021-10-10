
import React, {useState} from 'react';
import './Expenses.css';
import Card from '../UI/Card';
import ExpensesFilter from '../ExpenseFilter/ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

function Expenses(props){

    const expenses = props.arr;

    const [filterYear, setFilterYear] = useState('2021');

    const onFilterChange = (year) =>{
      console.info(year);
      setFilterYear(year)
    }

    const filteredExpenses = expenses.filter((expense=>{
      console.info(expense);
      
      return expense.date.getFullYear().toString()===filterYear
    }));

    

    return(
        <div>
          
        <Card className="expenses">
        <ExpensesFilter selectedYear = {filterYear} onFilterChange = {onFilterChange}/>
        <ExpensesChart expenses = {filteredExpenses} />
        <div className="expenses-list">
        <ExpensesList items={filteredExpenses} />
        </div>
        

        {/*filteredExpenses.length===0 && <p>No expenses found</p>*/}

        {/* filteredExpenses.length===0?(
          <p>No expenses found</p>
        ) : (filteredExpenses.map((expense)=>{
          return <ExpenseItem key ={expense.id} expenseDate={expense.date} expenseTitle={expense.title} expenseAmount={expense.amount}></ExpenseItem>  
        }))*/}

        
      </Card>
      </div>
    );

}


export default Expenses;