import React from 'react';
import ExpensesList from './ExpensesList';
import Card from './Card';
import ExpensesFilter from "./NewExpense/ExpensesFilter";

import './Expenses.css';

import { useState } from "react";

function Expenses(props){

    const [selectedYear,setSelectedYear] = useState('2021');

    const filterByYear = year => {
        setSelectedYear(year);
    }

    const filteredExpenses = props.items.filter(expense => expense.date.getFullYear() == selectedYear);

    return(
        <div>
            <Card className="expenses">
                <ExpensesFilter selectedYear={selectedYear} onFilterByYear={filterByYear} />
                <ExpensesList items={filteredExpenses}/>
            </Card>
        </div>
    );
}

export default Expenses;