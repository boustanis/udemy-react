import ExpenseItem from "./ExpenseItem";
import Card from './Card';
import './Expenses.css';

function Expenses(props){
    // make expenses array with <ExpenseItem> elements
const expenses = props.expenses.map((expense,index)=>{
    return <ExpenseItem key={index} title={expense.title} amount={expense.amount} date={expense.date}/>
})
    return(
        <Card className="expenses">
            {expenses}
        </Card>
    );
}

export default Expenses;