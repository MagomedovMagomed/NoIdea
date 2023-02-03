import React, {useState} from "react";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css'


//Эта страница предназначена для создания и редактирования поста
const Write = () => {
    const [value, setValue] = useState('');

    return(
        <div className="containerpost">
            <div className="add">
                <div className="content">countent
                    <input type="text" value='Title'/>  
                    <div className="editorContainer">
                        <ReactQuill  className="editor" theme="snow" value={value} onChange={setValue} />
                    </div>
                </div>
                <div className="menu">
                    <div className="item">
                        <h1>Publish</h1>
                        <span>
                            <b>Status:</b> Draft
                        </span>
                        <span>
                            <b>Visibility:</b> Publish
                        </span>
                        <input style={{display: 'none'}} type="file" name="" id="file"></input>
                        <label className="file" htmlFor="file">Upload Image</label>
                        <div className="buttons">
                            <button>Save as a draft</button>
                            <button>Update</button>
                        </div>
                    </div>
                    <div className="item">
                        <h1>Category</h1>
                        <div className="cat">
                            <input type="radio" name="cat" value="art" id="art"/>
                            <label htmlFor="art">Art</label>
                        </div>
                        <div className="cat">
                            <input type="radio" name="cat" value="art" id="art"/>
                            <label htmlFor="art">Art</label>
                        </div>
                        <div className="cat">
                            <input type="radio" name="cat" value="science" id="science"/>
                            <label htmlFor="science">Science</label>
                        </div>
                        <div className="cat">
                            <input type="radio" name="cat" value="tech" id="tech"/>
                            <label htmlFor="tech">Tech</label>
                        </div>
                        <div className="cat">
                            <input type="radio" name="cat" value="cinema" id="cinema"/>
                            <label htmlFor="cinema">Cinema</label>
                        </div>
                        <div className="cat">
                            <input type="radio" name="cat" value="design" id="design"/>
                            <label htmlFor="design">Design</label>
                        </div>
                    </div>
                </div>     
            </div>
        </div>
    )
}

export default Write;