import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import HashLink from 'react-hash-link';
import { Route, Switch, useRouteMatch } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import AddNewProduct from '../AddNewProduct/AddNewProduct';
import DashboardHome from '../DashboardHome/DashboardHome';



import MakeAdmin from '../MakeAdmin/MakeAdmin';
import ManageOrder from '../ManageOrder/ManageOrder';
import MyOrder from '../MyOrder/MyOrder';
import PayNow from '../PayNow/PayNow';
import Reviews from '../Reviews/Reviews';
import ManageProducts from '../ManageProducts/ManageProducts';
import AdminRoute from '../../Login/AdminRoute/AdminRoute';



const Dashboard = () => {
    let { path, url } = useRouteMatch();
    const { user, logOut, admin } = useAuth();
    
    return (

        
        <div>
             <Navbar>
                <Container style={{
                    backgroundColor: 'aliceBlue'
                }}>
                    <Navbar.Brand style={{
                        color: 'orange'
                    }} href="#home"><h4 className="text-center"><b>DashBoard</b></h4></Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={HashLink} to="#login"><h5 style={{
                            color: 'orange'
                        }}>{user?.displayName}</h5></Nav.Link>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Container>
                <div className=" row border">
                    <div className="col-md-3 border">
                        <Link to={`${url}`}><h5>Dashboard</h5></Link>
                        <hr />
                        
                        {admin && <>
                            <Link to={`${url}/addNewProduct`}><h5>Add New Product</h5></Link>
                            <hr />
                            <Link to={`${url}/manageOrder`}><h5>Manage All Order</h5></Link>
                            <hr />
                            <Link to={`${url}/manageProducts`}><h5>Manage Products</h5></Link>
                            <hr />
                            <Link to={`${url}/admin`}><h5>Admin</h5></Link>
                            <hr />
                            </>
                        }


                        <Link to={`${url}/myOrder`}><h5>My Order</h5></Link>
                        <hr />
                        <Link to={`${url}/payNow`}><h5>Pay Now</h5></Link>
                        <hr />
                        <Link to={`${url}/reviews`}><h5>Add Feedback</h5></Link>
                        <hr />
                        <Button onClick={logOut} >Logout </Button>
                    </div>

                    <div className="col-md-9 border">
                        <Switch>
                            <Route exact path={path}>
                              <DashboardHome></DashboardHome>
                            </Route>
                            {/* <Route path={`${path}/addProduct`}>
                                <AddProduct></AddProduct>
                            </Route> */}
                            <AdminRoute path={`${path}/manageOrder`}>
                                <ManageOrder></ManageOrder>
                            </AdminRoute>
                          
                           <AdminRoute path={`${path}/addNewProduct`}>
                                <AddNewProduct></AddNewProduct>
                            </AdminRoute>
                            <AdminRoute path={`${path}/manageProducts`}>
                                <ManageProducts></ManageProducts>
                            </AdminRoute>
                            <AdminRoute path={`${path}/admin`}>
                                <MakeAdmin></MakeAdmin>
                            </AdminRoute>
                            <Route path={`${path}/payNow`}>
                                <PayNow></PayNow>
                            </Route>
                            {/* <Route path={`${path}/paynow`}>
                                <PayNow></PayNow>
                            </Route> */}
                            <Route path={`${path}/reviews`}>
                                <Reviews></Reviews>
                            </Route>
                            <Route path={`${path}/myOrder`}>
                                <MyOrder></MyOrder>
                            </Route>
                           
                        </Switch> 

                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Dashboard;