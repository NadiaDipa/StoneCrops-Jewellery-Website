import { Container } from "react-bootstrap";
import { useHistory, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";


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
    <div className="container-fluid mt-5">
      <Container>
        <div className="text-center">
          <h1 style={{ letterSpacing: "3px", fontWeight: "500" }}>
            {" "}
            <span className="text-info">LOG IN</span> HERE
          </h1>
          <Link
            className="text-info"
            style={{ textDecoration: "none" }}
            to="/signUp"
          >
            <small>Don't have Account? Please Register</small>
          </Link>
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
                  alert("Login successful");
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
              placeholder="Your Email"
              className="form-control m-2 w-50 mx-auto"
            />
            <input
              type="password"
              name="password"
              onBlur={handelPass}
              placeholder="Password"
              className="form-control m-2 w-50 mx-auto"
            />

            <input
              className="btn btn-outline-secondary w-50 m-2 fw-bold"
              type="submit"
              value="LOGIN"
            />
          </form>
        </div>
      </Container>
    </div>
  );
};

export default Login;
