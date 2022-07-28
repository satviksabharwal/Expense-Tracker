import React, { useState } from "react";
import Card from "../Card/Card";
import ExpenseFilter from "../ExpenseFilter/ExpenseFilter";
import ExpenseItem from "../ExpenseItem/ExpenseItem";
import "./Expenses.css";

function Expenses(props) {

  const [selectedYearState, setSelectedYearState] = useState('2019');


  const changeFilterHandler = (selectedYear) => {
    setSelectedYearState(selectedYear);
  }

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter selected={selectedYearState} onChangeFilter={changeFilterHandler}/>
        {props.expenses.map( 
          expense => 
          <ExpenseItem 
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}

        />)}
      </Card>
    </div>
  );
}

export default Expenses;
