import React from 'react'
import Public from "@mui/icons-material/Public";
import Stars from "@mui/icons-material/Stars";
import Work from "@mui/icons-material/Work";
import "./css/Sidebar.css";
// import { Link } from "react-router-dom";

function Side() {

    return (
        <div className='sidebar'>
            <div className='sidebar-container'>
                <div className='sidebar-options'>
                    <div className='sidebar-option'>
                        <a>Home</a>
                    </div>
                    <div className='sidebar-option'>
                        <a>PUBLIC</a>
                        <div className='link'>
                            <div className='link-tag'>
                                <Public />
                                <a>Question</a>
                            </div>
                            <div className='tags'>
                                <p>Tags</p>
                                <p>Users</p>
                            </div>
                        </div>
                    </div>
                    <div className='sidebar-option'>
                        <p>COLLECTIVES</p>
                        <div className='link'>
                            <div className='link-tag'>
                                <Stars />
                                <a>Explore Collectives</a>
                            </div>
                        </div>
                    </div>
                    <div className='sidebar-option'>
                        <p>FIND A JOB</p>
                        <div className='link'>
                            <div className='link-tag'>
                                <a>Question</a>
                            </div>
                        </div>
                    </div>
                    <div className='sidebar-option'>
                        <p>TEAMS</p>
                        <div className='link-tag'>
                            <Work />
                            <a>Compaines</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Side;