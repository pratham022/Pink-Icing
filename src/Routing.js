import Navbar from "./components/Navbar";
import './Background/StarryNight.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../src/components/Home";
import Navbar from './components/Navbar'

function Routing() {
    return (
        <div>
          <Navbar/>
          <Switch>
              <Route path='/home' exact component={Home} ></Route>  
              <Route path='/profile' exact component={Profile} ></Route>        
          </Switch>
          
        </div>
          
    );
}
  
  export default Routing;