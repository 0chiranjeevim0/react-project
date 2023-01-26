import React, { useState } from "react";
import { useFormik } from "formik";
import Axios from "../Axios/Public";
import signSchema from "../schema/signSchema.js";
import { useSelector, useDispatch } from "react-redux";
import { authState, setAuthTrue } from "../Features/Auth";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate(authState);
  const dispatch = useDispatch();
  const [data, setdata] = useState({ email: "", name: "" });

  const selector = useSelector((state) => state.auth);
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: signSchema,
    onSubmit: (values) => {
      console.log(values);
      setdata(values);
      console.log(data);
      dispatch(setAuthTrue(values));
      console.log(selector);
    },
  });
  return (
    <>
      <div className="">
        {/*navbar*/}
        <div className="navbar-container">
          <div className="">
            <h3 className="navbar-logo">Logo</h3>
          </div>
          <div className="">
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/Application">Application</a>
              </li>
              <li>
                <a href="/Signup">Signup</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="login-master-container">
        <div className="login-container"></div>
        <form onSubmit={formik.handleSubmit}>
          <label>Email Address</label>
          <br></br>
          <input
            id="email"
            onChange={formik.handleChange}
            type="email"
            placeholder="Enter Your Email adddress"
          />
          <br></br>
          {formik.errors.email !== "Required" ? formik.errors.email : <></>}
          <br></br>
          <label>Password</label>
          <br></br>
          <input
            id="password"
            onChange={formik.handleChange}
            type="password"
            placeholder="Enter Your Password"
          />
          <br></br>
          {formik.errors.password !== "Required" ? (
            formik.errors.password
          ) : (
            <></>
          )}
          <br></br>
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default Login;
