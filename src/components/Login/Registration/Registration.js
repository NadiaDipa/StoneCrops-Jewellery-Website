import { Container } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";


const Registration = () => {
  const { handleName, handelPass, handelEmail, registerProcess, error } =
    useAuth();
  const history = useHistory();
  return (
    <div className="container-fluid pt-5 shadow-lg mt-5 me-5 pb-4 bg-light">
      <Container>
        <div className="">
          <h1 style={{ letterSpacing: "3px", fontWeight: "500" }}>
            {" "}
            <span style={{color:'#bba151'}}>REGISTER</span> HERE
          </h1>
        
        </div>
        <p className="text-danger text-center">{error}</p>

        <div className="text-center mt-4">
          <form
            onSubmit={(e) => {
              registerProcess(history);
              e.preventDefault();
            }}
          >
            <input
              type="text"
              placeholder="Your Name"
              name="name"
              onBlur={handleName}
              className="form-control m-2 w-50 mx-auto"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              onBlur={handelEmail}
              className="form-control m-2 w-50 mx-auto"
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              onBlur={handelPass}
              className="form-control m-2 w-50 mx-auto"
            />
            <input
              type="password"
              name="password2"
              onBlur={handelPass}
              placeholder="Re-Type password"
              className="form-control m-2 w-50 mx-auto"
            />
            {/* <input
              className="btn btn-outline-secondary w-50 m-2 fw-bold"
              type="submit"
              value="REGISTER"
            /> */}
            <input
            className="btn w-50 m-2 fs-5 fw-bold btn btn-outline-light subscribe-btn"
            type="submit" style={{color:'#bba151', backgroundColor: '#0c0c0c'}}
            value="REGISTER"
            />
          </form>
          <Link
            className="text-light"
            style={{ textDecoration: "none", paddingBottom:'15px' }}
            to="/login"
          >
            <small className="text-dark">Already Registered? <span className="fw-bold fs-6">Login</span></small>
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default Registration;
