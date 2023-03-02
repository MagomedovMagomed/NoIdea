import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
//Эта страница предназначена для создания и редактирования поста
const Write = () => {
    const [value, setValue] = useState('');
    console.log(value)
    return(
        <div className="add">
            <div className="content">
                <input type="text" placeholder="Ttile" />
                <div className="editorContainer">
                <ReactQuill className="editor" theme="snow" value={value} onChange={setValue} />
                </div>
            </div>
            <div className="menu">
                <div className="item">
                    <h1>Publish</h1>
                    <span>
                        <b>Status: </b> Draft
                    </span>
                    <span>
                        <b>Visibility: </b> Public
                    </span>
                    <input style={{display:"none"}} type="file" id="file"></input>
                    <label htmlFor="file">Upload Image</label>
                    <div className="buttons">
                        <button>Save as a draft</button>
                        <button>Update</button>
                    </div>
                </div>
                <div className="item">
                    <h1>Category</h1>
                    <input type="radio" name="cat" value="art" id="art"></input>
                    <label htmlFor="art">Art</label>

                    <input type="radio" name="cat" value="science" id="science"></input>
                    <label htmlFor="science">science</label>

                    <input type="radio" name="cat" value="techo" id="techo"></input>
                    <label htmlFor="techo">techo</label>

                    <input type="radio" name="cat" value="cinema" id="cinema"></input>
                    <label htmlFor="cinema">cinema</label>

                    <input type="radio" name="cat" value="design" id="design"></input>
                    <label htmlFor="design">design</label>
                </div>
            </div>
        </div>
    )
}

export default Write;