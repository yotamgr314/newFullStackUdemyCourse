import logo from './logo.svg';
import './App.css';
import Parent from "./components/Parent/Parent"; // Import the Parent component

function App() {
  return (
    <div className="App">
      <h1>Welcome to My React App</h1>
      <Parent /> {/* Render the Parent component */}
    </div>
  );
}

export default App;
