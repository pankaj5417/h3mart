import './App.css';
import { Cryptocurrencies } from './components/cryptocurrencies/Cryptocurrencies';
import { Navbar } from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Cryptocurrencies/>
    </div>
  );
}

export default App;
