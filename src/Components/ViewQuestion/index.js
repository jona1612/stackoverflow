import React from 'react'
import MainQuestion from "./MainQuestion"
import Side from "../StackOverFlow/Side"
import "../StackOverFlow/css/index.css"

function index() {
    return (
        <div className="stack-index mt-5">
            <div className="stack-index-content">
                <Side />
                <MainQuestion />
            </div>
        </div>
    )
}

export default index;