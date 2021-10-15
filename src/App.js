import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import Profile from './components/Profile'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Switch>
              <Route path='/home' exact component={Home} ></Route>
              <Route path='/profile' exact component={Profile} ></Route>          
        </Switch>
      </header>
    </div>
  );
}

export default App;
