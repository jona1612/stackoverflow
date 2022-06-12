import { Button } from 'bootstrap'
import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../../src/assets/logo 1.svg"

function Navbar() {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light rounded sticky-top " aria-label="Eleventh navbar example" style={{ width: "100vw", height: "9vh", boxShadow: "2px 2px 2px -2px grey" }}>

            <div class="container-fluid border-bottom-0 border-top border-warning border-5">
                <Link class="navbar-brand" to="/main" > <img src={logo} className='logo' />  Stack<span className='fw-bold'>overflow</span> </Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample09" aria-controls="navbarsExample09" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarsExample09">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link " aria-current="page" href="#">About</a>
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
                    <div>
                        <Link to={"/login"} type='button' className='btn btn-outline-primary btn-sm ms-2' >Login </Link>
                        <Link to={"/signup"} type='button' className='btn btn-primary btn-sm ms-1' >Sign up </Link>
                    </div>
                </div>
            </div>
        </nav >
    )
}

export default Navbar