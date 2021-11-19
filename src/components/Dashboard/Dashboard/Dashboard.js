import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import HashLink from 'react-hash-link';
import { Route, Switch, useRouteMatch } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import AddNewProduct from '../AddNewProduct/AddNewProduct';
import DashboardHome from '../DashboardHome/DashboardHome';
import Fade from 'react-reveal/Fade';



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
                {/* <Container style={{
                    backgroundColor: 'aliceBlue'
                }}>
                    <h1 className="text-center mx-auto" style={{color: 'Blue'}}>DashBoard</h1>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={HashLink} to="#login"><h5 style={{
                            color: 'orange'
                        }}>{user?.displayName}</h5></Nav.Link>
                    </Navbar.Collapse>
                </Container> */}
                <Container className="border border-dark shadow" style={{backgroundColor:'#424243'}}>
                    <h1 className="text-center mx-auto text-light" >DashBoard</h1>
                </Container>
            </Navbar>
            <Container>
                <div className="row border shadow-lg" >
                    <Fade left>
                    <div className="col-md-3 border text-light dashboard-nav" style={{ backgroundColor: '#424243' }}>
                      
                            <Link style={{textDecoration:'none', letterSpacing:'2px'}} to={`${url}`}><h5 className="mt-5 text-light" >Dashboard</h5></Link>
                            <hr />
                            
                            {admin && <>
                                <Link style={{textDecoration:'none', letterSpacing:'2px'}} to={`${url}/addNewProduct`}><h5 className="text-light" >Add New Product</h5></Link>
                                <hr />
                                <Link style={{textDecoration:'none', letterSpacing:'2px'}} to={`${url}/manageOrder`}><h5 className="text-light">Manage All Order</h5></Link>
                                <hr />
                                <Link style={{textDecoration:'none', letterSpacing:'2px'}} to={`${url}/manageProducts`}><h5 className="text-light">Manage Products</h5></Link>
                                <hr />
                                <Link style={{textDecoration:'none', letterSpacing:'2px'}} to={`${url}/admin`}><h5 className="text-light">Make Admin</h5></Link>
                                <hr />
                                </>
                            }


                            <Link style={{textDecoration:'none', letterSpacing:'2px'}} to={`${url}/myOrder`}><h5 className="text-light">My Order</h5></Link>
                            <hr />
                            <Link style={{textDecoration:'none', letterSpacing:'2px'}} to={`${url}/payNow`}><h5 className="text-light">Pay Now</h5></Link>
                            <hr />
                            <Link style={{textDecoration:'none', letterSpacing:'2px'}} to={`${url}/reviews`}><h5 className="text-light">Add Feedback</h5></Link>
                            <hr />
                            <Button className="mb-5" onClick={logOut} >Logout </Button>
                        
                    </div>
                    </Fade>
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