import ExpenseItem from "./ExpenseItem";
import Card from './Card';
import ExpensesFilter from "./NewExpense/ExpensesFilter";

import './Expenses.css';

import { useState } from "react";

function Expenses(props){

    const [selectedYear,setSelectedYear] = useState('2021');

    let expensesContent = <p>No expenses found!</p>

    const filterByYear = year => {
        setSelectedYear(year);
    }

    const filteredExpenses = props.items.filter(expense => expense.date.getFullYear() == selectedYear);

    if(filteredExpenses.length > 0)
        expensesContent = filteredExpenses.map((expense,index) => 
            <ExpenseItem key={index} title={expense.title} amount={expense.amount} date={expense.date}/>
        )

    return(
        <div>
            <Card className="expenses">
                <ExpensesFilter selectedYear={selectedYear} onFilterByYear={filterByYear} />
                {expensesContent}
            </Card>
        </div>
    );
}

export default Expenses;