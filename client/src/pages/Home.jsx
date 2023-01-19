import React from "react";
import { Link } from "react-router-dom";

const Home = () => {

    const posts = [
        {
            id:1,
            title: "Здесь у нас интересный заголовок",
            desc: "Здесь у нас расписано задание и в чем нужна помощь и т.д.",
            img: "Здесь будет картинка или не будет? Философский вопрос",
        },
        {
            id:2,
            title: "Здесь у нас интересный заголовок",
            desc: "Здесь у нас расписано задание и в чем нужна помощь и т.д.",
            img: "Здесь будет картинка или не будет? Философский вопрос",
        },
        {
            id:3,
            title: "Здесь у нас интересный заголовок",
            desc: "Здесь у нас расписано задание и в чем нужна помощь и т.д.",
            img: "Здесь будет картинка или не будет? Философский вопрос",
        },
        {
            id:4,
            title: "Здесь у нас интересный заголовок",
            desc: "Здесь у нас расписано задание и в чем нужна помощь и т.д.",
            img: "Здесь будет картинка или не будет? Философский вопрос",
        },
    ]

    return(
        <div className="home">
            <div className="posts">
                {posts.map(post=>(
                    <div className="post" key={post.id}>
                        <div className="content">
                            <p>{post.img}</p>
                        </div>
                        <div className="content">
                            <Link className="link" to={'/post/${post.id}'}>
                                <h1>{post.title}</h1>
                            </Link>
                            <p>{post.desc}</p>
                            <button>Читать дальше</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Home;