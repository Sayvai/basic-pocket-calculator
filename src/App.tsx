import './app.scss';
import Calculator from './components/calculator/calculator';
import { config } from './utilities/config';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Basic Pocket Calculator</h1>
      </header>
      <Calculator config={config} />
    </div>
  );
}

export default App;
