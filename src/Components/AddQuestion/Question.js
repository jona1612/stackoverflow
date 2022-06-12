import React, { useContext, useState } from 'react'
import ReactQuill from "react-quill"
import "react-quill/dist/quill.snow.css"
import { TagsInput } from "react-tag-input-component";
import "./Question.css"
import { useNavigate } from "react-router-dom";
import axios from "axios";
import userContext from '../user_context';
import Editor from "react-quill/lib/toolbar";

function Question() {

    var toolbarOptions = [
        ["bold", "italic", "underline", "strike"], // toggled buttons
        ["blockquote", "code-block"],

        [{ header: 1 }, { header: 2 }], // custom button values
        [{ list: "ordered" }, { list: "bullet" }],
        [{ script: "sub" }, { script: "super" }], // superscript/subscript
        [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
        [{ direction: "rtl" }], // text direction

        [{ size: ["small", false, "large", "huge"] }], // custom dropdown
        [{ header: [1, 2, 3, 4, 5, 6, false] }],

        [{ color: [] }, { background: [] }], // dropdown with defaults from theme
        [{ font: [] }],
        [{ align: [] }],

        ["clean"], // remove formatting button
    ];

    Editor.modules = {
        syntax: false,
        toolbar: toolbarOptions,
        clipboard: {
            // toggle to add extra line breaks when pasting HTML:
            matchVisual: false,
        },
    };

    Editor.formats = [
        "header",
        "font",
        "size",
        "bold",
        "italic",
        "underline",
        "strike",
        "blockquote",
        "list",
        "bullet",
        "indent",
        "link",
        "image",
        "video",
    ];

    const context = useContext(userContext)
    const user = context.user
    const [loading, setLoading] = useState(false)

    const [title, setTitle] = React.useState("")
    const [body, setBody] = React.useState("")
    const [tags, setTags] = React.useState([])

    const navigate = useNavigate();

    const handleQuill = (value) => {
        setBody(value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(user)


        if (title !== "" && body !== "") {
            setLoading(true)
            const bodyJSON = {
                title: title,
                body: body,
                tags: JSON.stringify(tags),
                user: user
            }

            await axios.post('http://localhost:5000/api/question', bodyJSON).then((res) => {
                alert('Question added succesfully')
                setLoading(false)
                navigate('/main')
            }).catch((err) => {
                console.log(err)
                setLoading(false)
            })
        }
    }

    return (
        <div className='add-question'>
            <div className='add-question-container'>
                <div className='head-title'>
                    <h1>Ask a public question</h1>
                </div>
                <div className='question-container'>
                    <div className='question-options'>
                        <div className='question-option'>
                            <div className='title'>
                                <h3>Title</h3>
                                <small>
                                    Be specific and imaging you're asking a question to another person
                                </small>
                                <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" placeholder='Add question title' />
                            </div>
                        </div>
                        <div className='question-option'>
                            <div className='title'>
                                <h3>Body</h3>
                                <small>
                                    Be specific and imaging you're asking a question to another person
                                </small>
                                <ReactQuill value={body} modules={Editor.modules} onChange={handleQuill} className='react-quill' theme='snow' />
                            </div>
                        </div>
                        <div className='question-option'>
                            <div className='title'>
                                <h3>Tags</h3>
                                <small>
                                    Add up to 5 tags to describe what your question is about
                                </small>
                                <TagsInput
                                    value={tags}
                                    onChange={setTags}
                                    name="fruits"
                                    placeHolder='press enter to add new tag' />
                            </div>
                        </div>
                    </div>
                </div>
                <button disabled={loading} type='submit' onClick={handleSubmit} className='button'>{
                    loading ? 'Adding question...' : "Add your question"
                }</button>
            </div>
        </div>
    )
}

export default Question;