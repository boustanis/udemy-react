import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const newExpense = (props) => {
    return(
        <div className="new-expense">
            <ExpenseForm/>
        </div>
    )
};

export default newExpense;