import { useFormik } from 'formik';
import React, { useContext } from 'react'
import logo from "../../src/assets/logo 1.svg";
import google from "../../src/assets/google1.svg";
import fb from "../../src/assets/facebook.svg";
import github from "../../src/assets/github.svg";
import axios from 'axios';
import userContext from './user_context';
import { Link, useNavigate } from 'react-router-dom';


function Login() {
    const context = useContext(userContext)
    const navigate = useNavigate()

    let formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        onSubmit: async (values) => {
            try {
                await axios.post("https://jonathan-stackoverflow.herokuapp.com/api/users/login", values).then((res) => {
                    alert("successfully loged")
                    context.setUser(res.data)
                    navigate("/main")

                }).catch((error) => {
                    alert("login with registered email or correct password")
                })
            } catch (error) {
                console.log(error);
            }
        },
    });


    return (

        <div className='login-content'>
            <form onSubmit={formik.handleSubmit}>
                <div>
                    <div className='text-center mb-2 mt-4'>
                        <span className="">
                            <img src={logo} className='logo img-fluid' />
                        </span>
                    </div>

                    <div className='d-flex flex-column mx-auto' style={{ width: "290px", }}>
                        <button type='button' className='btn btn-light btn-floating mb-2 border-2 border'>
                            <i className=''> <img src={google}></img> </i>Log in with Google
                        </button>
                    </div>
                    <div className='d-flex flex-column mx-auto' style={{ width: "290px" }}>
                        <button type='button' className='btn btn-dark btn-floating mb-2'>
                            <i className='me-1'> <img src={github}></img></i>Log in with GitHub
                        </button>
                    </div>
                    <div className='d-flex flex-column mx-auto' style={{ width: "290px" }}>
                        <button type='button' className='btn btn-floating mb-2 text-white' style={{ backgroundColor: "rgb(56,84,153)" }}>
                            <i className='me-1'> <img src={fb}></img></i>Log in with Facebook
                        </button>
                    </div>

                    <div className='mt-1 bg-white border border-2 mx-auto' style={{ width: "290px", boxShadow: "2px 2px 10px -2px grey" }}>
                        <div className="mt-4 mx-auto" style={{ width: "260px" }}>
                            <label className='fw-bold'>Email</label>
                            <input
                                type={'email'}
                                className="form-control"
                                name="email"
                                id="email"
                                onChange={formik.handleChange}
                                value={formik.values.email}
                            />
                        </div>
                        <div className="mt-3 mx-auto" style={{ width: "260px" }}>
                            <label className='fw-bold'>Password</label>
                            <span className='ms-5'><a href='#!' className='ms-4 small text-primary'>Forgot password?</a></span>
                            <input
                                type={'password'}
                                className="form-control"
                                name="password"
                                id='password'
                                onChange={formik.handleChange}
                                value={formik.values.password}
                            />
                        </div>
                        <div className='text-center'>
                            <input class="btn mt-3 mb-5" style={{ width: "260px", backgroundColor: "rgb(10,149,255)", color: "white" }} type="submit" value="Log in" />
                        </div>
                    </div>
                </div>
            </form>

            <div className='text-center mt-5'>
                <p> Don’t have an account? <Link to={"/signup"} className='text-primary'>Sign up</Link></p>
                <p> Are you an employer? <a href="#!" className='text-primary'>Sign up on Talent</a></p>
            </div>
        </div>

    )
}

export default Login;