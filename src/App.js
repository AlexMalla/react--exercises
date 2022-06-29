import "./App.css";
import CarDetails from "./CarDetails";

function App() {
  return <div className="App">
    <CarDetails initialData={{ model: 'Opel Corsa', year: '2013', color: 'White' }} />
  </div>;
}

export default App;
