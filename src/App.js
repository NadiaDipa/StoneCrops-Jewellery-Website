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
import Footer from './components/Footer/Footer';

import Explore from './components/Explore/Explore';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';





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
             <Route path="/explore">
              <Explore />
            </Route>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
            <PrivateRoute path="/booking/:id">
              <Booking />
            </PrivateRoute>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/signUp">
              <Registration />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
