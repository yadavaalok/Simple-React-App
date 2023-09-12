import './App.css';
import ExpenseItem from './components/ExpenseItem';

function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'Title 1',
      amount: 2000,
      date: new Date(2023, 8, 1),
    },
    {
      id: 'e2',
      title: 'Title 2',
      amount: 3000,
      date: new Date(2023, 8, 4),
    },
    {
      id: 'e3',
      title: 'Title 3',
      amount: 5000,
      date: new Date(2023, 8, 1),
    },

  ]
  return (
    <div className="App">
     <h1>Hello, Welcome!!</h1>
     <ExpenseItem
     title={expenses[0].title}
     amount={expenses[0].amount}
     date={expenses[0].date}
     ></ExpenseItem>
     <ExpenseItem
     title={expenses[1].title}
     amount={expenses[1].amount}
     date={expenses[1].date}
     ></ExpenseItem>
     <ExpenseItem
     title={expenses[2].title}
     amount={expenses[2].amount}
     date={expenses[2].date}
     ></ExpenseItem>
     
    </div>
  );
}

export default App;
