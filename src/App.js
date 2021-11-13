import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './components/Header/Header';
import Home from './components/Home/Home/Home';
// import Services from './components/Home/Services/Services';
// import Booking from './components/Booking/Booking';
// import ManageOrders from './components/ManageOrders/ManageOrders';
// import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
// import MyOrders from './components/MyOrders/MyOrders';
// import AddServices from './components/AddServices/AddServices';
import NotFound from './components/Not Found/NotFound';
import Footer from './components/Footer/Footer';

import Services from './components/Home/Services/Services';
import Login from './components/Login/Login/Login';
import Register from './components/Login/Register/Register';
import AuthProvider from './Contexts/AuthProvider/AuthProvider';



function App() {
  return (
    <div className="App">
      <AuthProvider>
         <Router>
        <Header></Header>
          <Switch>
            <Route exact path ="/">
              <Home></Home>
            </Route>

            <Route path="/home">
             <Home></Home>
            </Route>
         
            <Route path="/services">
             <Services></Services>
            </Route>
            <Route path = "/login" >
              <Login></Login>
            </Route>
            <Route path = "/register" >
              <Register></Register>
            </Route>

            {/* <Route path = "/login" >
              <Login></Login>
            </Route>
             <Route path = "/register" >
              <Register></Register>
            </Route> */}
   
            {/* <PrivateRoute path = "/booking/:serviceId" >
              <Booking></Booking>
            </PrivateRoute>
           
            <Route path="/services">
             <Services></Services>
            </Route>
            <Route path="/manage-orders">
             <ManageOrders></ManageOrders>
            </Route>
            <Route path="/my-orders">
             <MyOrders></MyOrders>
            </Route>
            <Route path="/add-services">
              <AddServices></AddServices>
          </Route> */}
          <Route path = "*" >
              <NotFound></NotFound>
          </Route>
            
        </Switch>
        <Footer></Footer>
      </Router>
     
      </AuthProvider>
    </div>
  );
}

export default App;
