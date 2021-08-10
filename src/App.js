import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from './components/header/Header';
import Home from './components/home/Home'
import Checkout from './components/checkout/Checkout';


function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
        <Route path="/checkout">
      <Checkout/>
        </Route>
        <Route path="/login">
          <h1>Login</h1>
        </Route>
        <Route path="/">
        <Header/> 
        <Home/>
        <h1>Home</h1>
       
        </Route>
      </Switch>
   
    </div>
    </Router>
  );
}

export default App;
