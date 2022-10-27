import logo from './logo.svg';
import './App.css';
import ClockListComponent from './components/container/clock_list';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ClockListComponent></ClockListComponent>
      </header>
    </div>
  );
}

export default App;
