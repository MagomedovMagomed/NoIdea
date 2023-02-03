import React, {useState} from "react";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css'


//Эта страница предназначена для создания и редактирования поста
const Write = () => {
    const [value, setValue] = useState('');

    return(
        <div className="containerpost">
            <div className="add">
                <div className="content">Контент
                    <input type="text" value='Title'/>  
                    <div className="editorContainer">
                        <ReactQuill  className="editor" theme="snow" value={value} onChange={setValue} />
                    </div>
                </div>
                <div className="menu">
                    <div className="item">
                        <h1>Публикация</h1>
                        <span>
                            <b>Статус:</b> Пишется
                        </span>
                        <span>
                            <b>Видимость:</b> Опубликовано
                        </span>
                        <input style={{display: 'none'}} type="file" name="" id="file"></input>
                        <label className="file" htmlFor="file">Загрузить картинку</label>
                        <div className="buttons">
                            <button>Сохранить черновик</button>
                            <button>Обновить</button>
                        </div>
                    </div>
                    <div className="item">
                        <h1>Категории</h1>
                        <div className="cat">
                            <input type="radio" name="cat" value="art" id="art"/>
                            <label htmlFor="art">Python</label>
                        </div>
                        <div className="cat">
                            <input type="radio" name="cat" value="art" id="art"/>
                            <label htmlFor="art">Javascript</label>
                        </div>
                        <div className="cat">
                            <input type="radio" name="cat" value="science" id="science"/>
                            <label htmlFor="science">Golang</label>
                        </div>
                        <div className="cat">
                            <input type="radio" name="cat" value="tech" id="tech"/>
                            <label htmlFor="tech">C#</label>
                        </div>
                        <div className="cat">
                            <input type="radio" name="cat" value="cinema" id="cinema"/>
                            <label htmlFor="cinema">Ruby</label>
                        </div>
                        <div className="cat">
                            <input type="radio" name="cat" value="design" id="design"/>
                            <label htmlFor="design">Life</label>
                        </div>
                    </div>
                </div>     
            </div>
        </div>
    )
}

export default Write;