import React from 'react';

const Expenses = ({inputName, setInputName, inputValue, setInputValue, expenses, setExpense}) => {
    const inputNameHandler = (event) => {
        setInputName(event.target.value);
    }
    const inputValueHandler = (event) => {
        setInputValue(event.target.value);
    }
    const submitHandler = (event) => {
        event.preventDefault();
        setExpense([...expenses, {name: inputName, value: inputValue, id: Math.random()*100}])
        setInputName("");
        setInputValue("");
    }
    return (
        <form className="expenseForm">
            <div>
                <h4>Expenses Name:</h4>
                <input onChange={inputNameHandler} type="text" value={inputName} placeholder="Expenses Name" />
            </div>
            <div>
                <h4>Value of the Expenses:</h4>
                <input onChange={inputValueHandler} type="text" value={inputValue} placeholder="Expenses Value" />
            </div>
            <button onClick={submitHandler} type="submit">Submit</button>
        </form>
    );
}

export default Expenses;