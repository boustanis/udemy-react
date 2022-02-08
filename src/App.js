import './App.css';
import Expenses from './components/Expenses';
import NewExpense from "./components/NewExpense/NewExpense";


const expenses = [
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
]

function App() {
  
  const addExpenseHandler = expense => {
    console.log('In App.js => ');
    console.log(expense);
  };

  return(
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses expenses={expenses}/>
   </div>
  );
}

export default App;
