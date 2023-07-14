import './App.css';
import receipt from './models/receipt';//import data from receipt.js
import Receipt from './components/Receipt';
//state controls data
//1. Establish State
const state = {
  receipt
}
//App.js does not receive props, it gives props
//A state is where the data start (initial state), then as it is passed, it becomes a prop
function App() {
  return (
    <div className="App">
      {/* insert state to each component using props 
      ticketInfo is a property*/}
      <Receipt ticketInfo={state.receipt[0]}/>
      <Receipt ticketInfo={state.receipt[1]}/>
      <Receipt ticketInfo={state.receipt[2]}/>
    </div>
  );
}

export default App;
