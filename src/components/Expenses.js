import ExpenseItem from "./ExpenseItem";
import './Expenses.css';

function Expenses(props){
    // make expenses array with <ExpenseItem> elements
const expenses = props.expenses.map((expense,index)=>{
    return <ExpenseItem key={index} title={expense.title} amount={expense.amount} date={expense.date}/>
})
    return(
        <div className="expenses">
            {expenses}
        </div>
    );
}

export default Expenses;