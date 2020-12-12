import React, {useState} from 'react';
import './App.css';
import ExpenseTable from './Components/ExpensesTable';
import Expenses from './Components/Expenses';

function App() {

  const [inputName, setInputName] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [expenses, setExpense] = useState([]);
  console.log(expenses);
  return (
    <div className="App">
      <h1>Expense Tracker</h1>
      <Expenses 
      inputName = {inputName}
      setInputName = {setInputName}
      inputValue = {inputValue}
      setInputValue = {setInputValue}
      expenses={expenses}
      setExpense={setExpense}
      />
      <ExpenseTable 
      expenses={expenses}
      setExpense={setExpense} />
    </div>
  );
}

export default App;
