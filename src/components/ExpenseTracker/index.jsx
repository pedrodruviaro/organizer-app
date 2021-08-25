import React, { useEffect, useState } from "react";
import { ExpenseTracker } from "./styles";

// icons
import { FiArrowUpCircle, FiArrowDownCircle } from "react-icons/fi";
import { MdAttachMoney } from "react-icons/md";

export default function Index() {

    const [expenses, setExpenses] = useState([]);
    const [description, setDescription] = useState("");
    const [value, setValue] = useState("");


    // 
    const [income, setIncome] = useState(0)
    const [exits, setExits] = useState(0)
    const [balance, setBalance] = useState(0)


    useEffect(() => {
        let totalExpensesValue = 0
        expenses.forEach(expense => {
            totalExpensesValue = totalExpensesValue + expense.value
        })

        setExits(totalExpensesValue)
        setBalance(income - totalExpensesValue)

    }, [expenses, income])


    // handle new expense to the list
    function handleNewExpense(e){
        e.preventDefault()

        if(description.trim() === "" || value === 0){
            return
        }

        const newExpense = {
            description,
            value,
            id: Math.random() 
        }

        setExpenses([...expenses, newExpense])
        setDescription("")
        setValue("")
    }


    // deletind expense from the list
    function handleDelete(id){
        const updatedExpenses = expenses.filter(expense => expense.id !== id)
        setExpenses(updatedExpenses)
    }

    return (
        <ExpenseTracker>
            <section className="cards">
                <div className="income">
                    <header>
                        <span>Insert your income</span>
                        <FiArrowUpCircle style={{ color: "#00b894" }} />
                    </header>
                    <p>$ {income}</p>
                </div>
                <div className="exits">
                    <header>
                        <span>Total exits</span>
                        <FiArrowDownCircle style={{ color: "#d63031" }} />
                    </header>
                    <p>$ {exits}</p>
                </div>
                <div className="balance" style={balance < 0 ? {backgroundColor: "#d63031"} : {backgroundColor: "#00b894"}}>
                    <header>
                        <span>Balance</span>
                        <MdAttachMoney />
                    </header>
                    <p>$ {balance}</p>
                </div>
            </section>

            <form onSubmit={handleNewExpense}>
                <fieldset>
                    <input
                        type="text"
                        placeholder="Description"
                        style={{ flex: 3 }}
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                    <input
                        type="number"
                        placeholder="Value"
                        value={value}
                        onChange={(e) => setValue(+e.target.value)}
                    />
                </fieldset>
                <button type="submit">New Expense</button>
            </form>

            <ul>
                {expenses
                    ? expenses.map((expense, i) => (
                          <li key={i}>
                              <p>{expense.description}</p>
                              <span>{expense.value}</span>
                              <button onClick={() => handleDelete(expense.id)}>X</button>
                          </li>
                      ))
                    : ""}
            </ul>
        </ExpenseTracker>
    );
}
