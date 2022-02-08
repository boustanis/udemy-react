import ExpenseItem from "./ExpenseItem";
import Card from './Card';
import ExpensesFilter from "./NewExpense/ExpensesFilter";
import './Expenses.css';
import { useState } from "react";

function Expenses(props){

    const [selectedYear,setSelectedYear] = useState('2021');

    // const expenses = props.expenses.map((expense,index)=>{
    //     return <ExpenseItem key={index} title={expense.title} amount={expense.amount} date={expense.date}/>
    // });

    // TO ExpenseFilter
    const filterByYear = year => {
        setSelectedYear(year);
        console.log('from Expenses.js the filtered year is: ' + year);
    }

    return(
        <div>
            <Card className="expenses">
                <ExpensesFilter selectedYear={selectedYear} onFilterByYear={filterByYear} />
                {props.items.map((expense,index)=>{
                    return <ExpenseItem key={index} title={expense.title} amount={expense.amount} date={expense.date}/>
                })}
                {console.log(props.items[0].title)}
            </Card>
        </div>
    );
}

export default Expenses;