import React, { useState } from 'react'
import axios from "axios";
// import logo from "../../src/assets/logo 1.svg"
import google from "../../src/assets/google1.svg";
import fb from "../../src/assets/facebook.svg";
import github from "../../src/assets/github.svg";

function Register() {
    const [displayName, setDisplayName] = useState("")
    const [emailId, setEmailId] = useState("")
    const [password, setPassword] = useState("")
    const [buttonDisabled, setButtonDisabled] = useState(false)

    let handleSubmit = async (e) => {
        e.preventDefault()
        if (displayName !== "" && emailId !== "" && password !== "") {
            const signUpInfo = {
                name: displayName,
                email: emailId,
                password: password,
            }
            setButtonDisabled(e.target.value === "")
            try {
                await axios.post("http://localhost:5000/api/users/signup", signUpInfo).then((res) => {
                    alert("question added")
                }).catch((error) => {
                    console.log(error)
                })
            } catch (error) {
                console.log(error);
            }

        }
    }

    return (

        <div className="">
            <form onSubmit={handleSubmit}>
                <div>
                    <div className='d-flex flex-column mt-4 mx-auto' style={{ width: "290px", }}>
                        <button type='button' className='btn btn-light btn-floating mb-2 border-2 border'>
                            <i> <img src={google}></img> </i>Sign up with Google
                        </button>
                    </div>
                    <div className='d-flex flex-column mx-auto' style={{ width: "290px" }}>
                        <button type='button' className='btn btn-dark btn-floating mb-2'>
                            <i className='me-1'> <img src={github}></img></i>Sign up with GitHub
                        </button>
                    </div>
                    <div className='d-flex flex-column mx-auto' style={{ width: "290px" }}>
                        <button type='button' className='btn btn-floating mb-2 text-white' style={{ backgroundColor: "rgb(56,84,153)" }}>
                            <i className='me-1'> <img src={fb}></img></i>Sign up with Facebook
                        </button>
                    </div>

                    <div className=' mt-1 bg-white border border-2 mx-auto' style={{ width: "290px", boxShadow: "2px 2px 10px -2px grey" }}>
                        <div className="col-lg-12 mt-4 mx-auto" style={{ width: "260px" }}>
                            <label className='fw-bold'>Display name</label>
                            <input
                                type={'text'}
                                className="form-control"
                                name="email"
                                value={displayName}
                                onChange={(e) => setDisplayName(e.target.value)}
                            />
                        </div>
                        <div className="col-lg-12 mt-4 mx-auto" style={{ width: "260px" }}>
                            <label className='fw-bold'>Email</label>
                            <input
                                type={'email'}
                                className="form-control"
                                name="email"
                                value={emailId}
                                onChange={(e) => setEmailId(e.target.value)}
                            />
                        </div>
                        <div className="col-lg-12 mt-3 mx-auto" style={{ width: "260px" }}>
                            <label className='fw-bold'>Password</label>
                            <input
                                type={'password'}
                                className="form-control"
                                name="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />

                            <p className='small'> Passwords must contain at least eight characters, including at least 1 letter and 1 number.</p>
                        </div>
                        <div className='text-center'>
                            <input disabled={buttonDisabled} class="btn mt-3 mb-5" style={{ width: "260px", backgroundColor: "rgb(10,149,255)", color: "white" }} type="submit" value="Log in" />
                        </div>
                        <p className='text-center small'>By clicking “Sign up”, you agree to our <a href='#!'>terms of service, privacy policy</a> and <a href='#!'>cookie policy</a></p>
                    </div>

                </div >
            </form >
            <div className='text-center mt-5'>
                <p> Don’t have an account? <a href='#!' className='fs-6'>Sign up</a></p>

                <p> Are you an employer? <a href="#!" className='fs-6'>Sing up on Talent</a></p>
            </div>
        </div >
    )
}

export default Register;