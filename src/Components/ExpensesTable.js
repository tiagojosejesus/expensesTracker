import React from 'react';
import ExpenseRow from './ExpenseRow';
const ExpenseTable = ({expenses, setExpense, filteredExpenses}) => {
    return (
            <table>
                <thead>
                    <tr>
                        <th>Expense Name</th>
                        <th>Expense Value</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {expenses.map((expense) => (
                        <ExpenseRow
                            id={expense.id}
                            name={expense.name}
                            value={expense.value}
                            expense={expense}
                            setExpense={setExpense}
                            expenses={expenses}
                        />
                    ))}
                        
                </tbody>
            </table>
    );
}

export default ExpenseTable;