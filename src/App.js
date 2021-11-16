import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AuthProvider from './Contexts/AuthProvider';
import Navigation from './Shared/Navigation/Navigation';
// import Home from './components/Home/Home/Home';
// import Booking from './components/Booking/Booking';
import Login from './components/Login/Login/Login';
// import Registration from './components/Login/Registration/Ragistration';
// import Home from './components/Home/Home/Home';
import Booking from './components/Home/Booking/Booking';
import Registration from './components/Login/Registration/Registration';
import Home from './components/Home/Home/Home';

function App() {
  return (
     <div className="App">
      <AuthProvider>
        <Router>
          <Navigation />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/booking/:id">
              <Booking />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/signUp">
              <Registration />
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
