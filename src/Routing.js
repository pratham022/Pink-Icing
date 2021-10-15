import Navbar from "./components/Navbar";
import './Background/StarryNight.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../src/components/Home";
import AccessibleTabs1 from './components/Navbar'

function Routing() {
    return (
        <div>
          <Switch>
                    <Route path='/home' exact component={Home} ></Route>
                    
              </Switch>

              <AccessibleTabs1/>
        </div>
          
    );
}
  
  export default Routing;