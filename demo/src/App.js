import Carousel from './components/Carousel';
import data from "./steps.json"
import './App.css';

function App() {
  return (
    <div className="App">
      <Carousel steps={data} />
    </div>
  );
}

export default App;
