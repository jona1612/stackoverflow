// import { Button } from 'bootstrap'
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import logo from "../../src/assets/logo 1.svg"
import userContext from './user_context'


function Navbar() {
    const context = useContext(userContext)
    // let user = context.user
    console.log(context.user)
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light rounded sticky-top " aria-label="Eleventh navbar example" style={{ width: "100vw", height: "9vh", boxShadow: "2px 2px 2px -2px grey" }}>

            <div class="container-fluid border-bottom-0 border-top border-warning border-5">
                <div class="navbar-brand"> <img src={logo} className='logo' />  Stack<span className='fw-bold'>overflow</span> </div>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample09" aria-controls="navbarsExample09" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarsExample09">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <Link class="nav-link " aria-current="page" to={"/main"}>Home</Link>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Products</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link">ForTeams</a>
                        </li>
                        {/* <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="dropdown09" data-bs-toggle="dropdown" aria-expanded="false">Dropdown</a>
                        </li> */}
                    </ul>
                    <form>
                        <input class="form-control" type="text" placeholder="Search" style={{ width: "45vw" }} aria-label="Search" />
                    </form>
                    {
                        !context.user.name ?
                            <div>
                                <Link to={"/login"} type='button' className='btn btn-outline-primary btn-sm ms-2' >Login </Link>
                                <Link to={"/signup"} type='button' className='btn btn-primary btn-sm ms-1' >Sign up </Link>
                            </div> : <Link to={"/login"}> <button onClick={() => { context.setUser({}) }} className='avatar'> {context.user.name[0]} </button></Link>
                    }
                </div>
            </div>
        </nav >
    )
}

export default Navbar;