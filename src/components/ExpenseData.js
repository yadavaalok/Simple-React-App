import './ExpenseData.css';
import ExpenseItem from './ExpenseItem';

function ExpenseData(props) {
    return (
    <div className="expenses">
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
     
    </div>
    )
}

export default ExpenseData;