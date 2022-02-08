import { useState } from 'react';
import './App.css';
import Expenses from './components/Expenses';
import NewExpense from "./components/NewExpense/NewExpense";


const INITIAL_EXPENSES = [
  {
    title:'car insurance',
    amount:200,
    date:new Date(2022,2,2)
  },
  {
    title:'toilet paper',
    amount:32.89,
    date:new Date(2022,1,21)
  }
];


const App = () => {

  const [expenses,setExpenses] = useState(INITIAL_EXPENSES);
  
  const addExpenseHandler = expense => {
    setExpenses([expense]);
    console.log(expense.title)
  }

  return(
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses}/>
   </div>
  );
}

export default App;
