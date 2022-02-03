import './ExpenseItem.css';

function ExpenseItem(){
    let expenseAmount = 200.00;
    let expenseTitle = 'Car Insurance';

    return(
        <div className="expense-item">
            <div>3rd February 2022</div>
            <div className="expense-item__description">
                <h2>{expenseTitle}</h2>
                <div className="expense-item__price">${expenseAmount}</div>
            </div>
        </div>
    );
}

export default ExpenseItem;