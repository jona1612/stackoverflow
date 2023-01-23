import React, { useEffect, useState } from 'react';
import Side from './Side';
import Main from './Main';
import "./css/index.css";
import axios from 'axios';

function Index() {
    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        async function getQuestion() {
            await axios.get("https://stackoverflow-backend-jonathan.vercel.app/api/question").then((res) => {
                setQuestions(res.data.reverse());
                // console.log(res.data)
            })
                .catch((err) => {
                    console.log(err)
                });
        }
        getQuestion();
    }, []);

    return (
        <div className="stack-index">
            <div className="stack-index-content">
                <Side />
                <Main questions={questions} />
            </div>
        </div>
    );
}

export default Index;