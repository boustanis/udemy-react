import './App.css';
import Expenses from './components/Expenses';

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
  return(
    <div>
      <h1>Hello World React!</h1>
      <Expenses expenses={expenses}/>
   </div>
  );
}

export default App;
