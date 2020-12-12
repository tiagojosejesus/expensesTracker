import React from 'react';

const ExpenseRow = ({name, value, expense, expenses, setExpense}) => {
    const deleteHandler = () =>{
        setExpense(expenses.filter((element) => element.id !== expense.id));
    }
    return (
        <tr>
            <td>{name}</td>
            <td>{value}</td>
            <td><button onClick={deleteHandler}>Delete</button></td>
        </tr>
    );
}

export default ExpenseRow;