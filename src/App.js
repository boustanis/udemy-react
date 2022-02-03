import './App.css';
import ExpenseItem from './components/ExpenseItem';

const expenses = [
  {
    title:'car insurance',
    amount:200,
    date:new Date(2022,2,2).toDateString()
  },
  {
    title:'toilet paper',
    amount:32.89,
    date:new Date(2022,1,21).toDateString()
  }
]

function App() {
  return(
    <div>
      <h1>Hello World React!</h1>
      <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date}></ExpenseItem>
      <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date}></ExpenseItem>
   </div>
  );
}

export default App;
