import ExpenseItem from "./ExpenseItem";

const ExpensesList = props =>{

    
    if(props.items.length===0){
        return <p className="expenses-list__fallback">No expenses found</p>;
    }

    

    return <ul className="expenses-list">
        {
            
                props.items.map((expense)=>{
                  return <ExpenseItem key ={expense.id} expenseDate={expense.date} expenseTitle={expense.title} expenseAmount={expense.amount}></ExpenseItem>  
                })
              
        }
    </ul>

}

export default ExpensesList;