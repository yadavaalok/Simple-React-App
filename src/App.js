import './App.css';
import ExpenseData from './components/ExpenseData';

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
    <div className='App'>
      <h1>Hello, Welcome!!</h1>
      <ExpenseData expenses={expenses}></ExpenseData>
    </div>
  );
}

export default App;
