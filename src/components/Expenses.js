import ExpenseItem from "./ExpenseItem";

function Expenses(props){
    const expenses = props.expenses.map((expense,index)=>{
        return <ExpenseItem key={index} title={expense.title} amount={expense.amount} date={expense.date}/>
    })

    return(
        <div>
            <div>
                {expenses}
            </div>
        </div>
    );
}

export default Expenses;