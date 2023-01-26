import React from 'react';
import './css/login.css';
import {useFormik} from 'formik';
import loginSchema from '../schema/loginSchema.js';



const Login = () =>{

    const formik = useFormik({
        initialValues:{
            email:'',
            password:'',
            name:'',
            number:'',
        },
        validationSchema:loginSchema,
        onSubmit:(values) =>{
            console.log(values)
        }
    })

    return(
        <div className="">
            {/*navbar*/}
            <div className="navbar-container">
                <div className="">
                    <h3 className="navbar-logo">Logo</h3>
                </div>
                <div className="">
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/">Application</a></li>
                        <li><a href="/">About</a></li>
                    </ul>
                </div>
            </div>
            {/*login form*/}
            <div className="login-master-container">
                <div className="login-container">
                    <form onSubmit={formik.handleSubmit}>
                        <label>Name</label><br></br>
                        <input id="name" onChange={formik.handleChange} type="text" placeholder="Enter Your Name" /><br></br>
                        {(formik.errors.name !== "Required"?formik.errors.name:<></>)}<br></br>
                        <label>Phone Number</label><br></br>
                        <input maxLength="10" id="number" onChange={formik.handleChange} type="text" placeholder="Enter Your Phone Number" /><br></br>
                        {(formik.errors.number !== "Required" ?formik.errors.number:<></>)}<br></br>
                        <label>Email Address</label><br></br>
                        <input id="email" onChange={formik.handleChange} type="email" placeholder="Enter Your Email adddress" /><br></br>
                        {(formik.errors.email !== "Required" ?formik.errors.email:<></>)}<br></br>
                        <label>Password</label><br></br>
                        <input id="password" onChange={formik.handleChange} type="password" placeholder="Enter Your Password" /><br></br>
                        {(formik.errors.password !== "Required" ?formik.errors.password:<></>)}<br></br>
                        <button type="submit">Submit</button><br></br>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login;