import logo from './logo.svg';
import './App.css';
import {BrowserRouter} from 'react-router-dom'
import Routing from './Routing';

function App() {
  return (
    <div style={{ backgroundColor: "#FAE8E0" }}>
      <BrowserRouter>
        <Routing/>
      </BrowserRouter>
    </div>
  );
}

export default App;
