
import './App.css';
import AddTransaction from './component/AddTransaction';
import Balance from './component/Balance';
import Header from './component/Header';
import IncomeExpense from './component/IncomeExpense';
import TranscationList from './component/TranscationList';
import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <div className="App">
      <GlobalProvider>
      <Header/>
      <div className='container'>
      <Balance/>
      <IncomeExpense/>
      <TranscationList/>
      <AddTransaction/>
      </div>
      </GlobalProvider>
    </div>
  );
}

export default App;
