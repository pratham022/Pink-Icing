import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import Profile from './components/Profile';
import AddCustomerPost from './components/AddCustomerPost';
// import 'bootstrap/dist/css/bootstrap.min.css';
import AddBoutiquePost from './components/AddBoutiquePost';
import UserList from './components/UserList';


import BoutiquesList from './components/BoutiquesList';
import UserList from './components/UserList';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Switch>
                      
              <Route path='/addCustPost' exact component={AddCustomerPost}></Route>
              <Route path='/addBoutiquePost' exact component={AddBoutiquePost}></Route>
              <Route path='/boutiques' exact component={BoutiquesList} ></Route>
              <Route path='/messages' exact component={UserList}></Route> 
              <Route path='/boutiques/:id' exact component={Profile}></Route>
              <Route path='/messages' exact component={UserList}></Route>
        </Switch>
      </header>
    </div>
  );
}

export default App;