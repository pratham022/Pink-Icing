import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Switch>
              <Route path='' exact component={Home} ></Route>          
        </Switch>
      </header>
    </div>
  );
}

export default App;
