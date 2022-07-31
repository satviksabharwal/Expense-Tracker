import React, { useState } from "react";
import Card from "../Card/Card";
import ExpensesChart from "../Chart/ExpensesChart";
import ExpenseFilter from "../ExpenseFilter/ExpenseFilter";
import ExpensesList from "../ExpenseList/ExpensesList";
import "./Expenses.css";

function Expenses(props) {
  const [selectedYearState, setSelectedYearState] = useState("2019");

  const changeFilterHandler = (selectedYear) => {
    setSelectedYearState(selectedYear);
  };

  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === selectedYearState;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={selectedYearState}
          onChangeFilter={changeFilterHandler}
        />
        <ExpensesChart expenses={filteredExpenses}/>
        <ExpensesList expenses = {filteredExpenses} />
      </Card>
    </div>
  );
}

export default Expenses;
