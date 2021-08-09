import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './components/header/Header';
import Home from './components/home/Home'


function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
        <Route path="/checkout">
      <h1>Checkout</h1>
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
