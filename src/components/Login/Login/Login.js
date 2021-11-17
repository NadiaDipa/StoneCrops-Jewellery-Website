import { Container } from "react-bootstrap";
import { useHistory, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../../Hooks/useAuth";
import loginImg from "./../../../assets/login-img.jpg";


const Login = () => {
  const {
    loginProcess,
    handelEmail,
    handelPass,
    error,
    user,

    setError,
    setUser,
  } = useAuth();
  console.log(user);

  const history = useHistory();
  const location = useLocation();
  const redirect = location?.state?.from || "/home";
  return (
        <div className="pb-5" style={{backgroundColor:'#424243'}}>
            <div class="row">
              <div class="col">
                <img className="img-fluid" height="550px" width="100%" src ={loginImg}
                  class = "d-block w-100"
                alt="..." />
              </div>
              <div class="col login-style shadow-lg m-5 rounded">
                  <Container>
                    <div className="text-center">
                      <h1 className="pt-5 text-light headline" style={{ letterSpacing: "3px", fontWeight: "700", borderBottom: '2px solid #bba151', borderBottomWidth: '10%' }}>
                        {" "}
                        <span style={{color:'#bba151'}}>LOG IN</span> HERE
                      </h1>
                      
                      <p className="text-danger text-center">{error}</p>
                    </div>

                    <div className="text-center my-5">
                      <form
                        onSubmit={(e) => {
                          e.preventDefault();
                          loginProcess()
                            .then((result) => {
                              const user = result.user;
                              setUser(user);
                              setError("");
                              Swal.fire("Login successful");
                              history.push(redirect);
                            })
                            .catch((error) => {
                              // setError(error.message);
                            });
                        }}
                      >
                        <input
                          type="email"
                          name="email"
                          onBlur={handelEmail}
                          placeholder="Enter Your Email"
                          className="form-control m-2 w-50 mx-auto border-dark"
                        />
                        <input
                          type="password"
                          name="password"
                          onBlur={handelPass}
                          placeholder="Enter Your Password"
                          className="form-control m-2 w-50 mx-auto border-dark"
                        />

                        <input
                          className="btn w-50 m-2 fs-5 fw-bold btn btn-outline-light mb-4 subscribe-btn"
                          type="submit"
                          style={{color:'#bba151', backgroundColor: '#0c0c0c'}}
                          value="LOGIN"
                        />
                
                        {/* <button type="submit" className="btn btn-outline-light mb-4 subscribe-btn bg-dark" to="/login" style={{color: '#bba151'}}>
                        LOGIN</button> */}
                        
                        </form>
                        <Link
                          className="text-light"
                          style={{ textDecoration: "none" }}
                          to="/signUp"
                        >
                        <small>Don't have an Account? Please <span className="fw-bold fs-6" style={{color:'#bba151'}}>Register</span></small>
                      </Link>
                    </div>
                  </Container>
              </div>
            </div>



      
    </div>
  );
};

export default Login;
