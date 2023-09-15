import React, { useState } from 'react';
import Card from '../UI/Card';
import './ExpenseData.css';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';

function ExpenseData(props) {

    const [filteredYear, setSelectedYear] = useState('2020');

    const filterChangeHandler = selectedYear => {
        setSelectedYear(selectedYear);
    }

    return (
    <Card className="expenses">

        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}></ExpensesFilter>


        <ExpenseItem
        title={props.expenses[0].title}
        amount={props.expenses[0].amount}
        date={props.expenses[0].date}
        ></ExpenseItem>
        <ExpenseItem
        title={props.expenses[1].title}
        amount={props.expenses[1].amount}
        date={props.expenses[1].date}
        ></ExpenseItem>
        <ExpenseItem
        title={props.expenses[2].title}
        amount={props.expenses[2].amount}
        date={props.expenses[2].date}
        ></ExpenseItem>
     
    </Card>
    )
}

export default ExpenseData;