import React from "react";
import { Link } from "react-router-dom";
//Эта главная страница на которой будут выводиться посты
const Home = () => {
    //Константа постов, потом посты переедут в базу данных
    const posts = [
        {
            //id поста
            id:1,
            //Название поста
            title: "Здесь у нас интересный заголовок",
            //Описание поста
            desc: "Здесь у нас расписано задание и в чем нужна помощь и т.д.",
            //Путь картинки
            img: "https://the-distance.ru/wp-content/uploads/2022/03/QAxWSl0M3iYDlMMVysmXZWEwcYqrD3uWEf0Riyec.jpeg",
            //В будующем будет больше параметров
        },
        {
            id:2,
            title: "Здесь у нас интересный заголовок",
            desc: "Здесь у нас расписано задание и в чем нужна помощь и т.д.",
            img: "https://the-distance.ru/wp-content/uploads/2022/03/QAxWSl0M3iYDlMMVysmXZWEwcYqrD3uWEf0Riyec.jpeg",
        },
        {
            id:3,
            title: "Здесь у нас интересный заголовок",
            desc: "Здесь у нас расписано задание и в чем нужна помощь и т.д.",
            img: "https://the-distance.ru/wp-content/uploads/2022/03/QAxWSl0M3iYDlMMVysmXZWEwcYqrD3uWEf0Riyec.jpeg",
        },
        {
            id:4,
            title: "Здесь у нас интересный заголовок",
            desc: "Здесь у нас расписано задание и в чем нужна помощь и т.д.",
            img: "https://the-distance.ru/wp-content/uploads/2022/03/QAxWSl0M3iYDlMMVysmXZWEwcYqrD3uWEf0Riyec.jpeg",
        },
    ]

    return(
        <div className="home">
            <div className="posts">
                {posts.map(post=>(
                    <div className="post" key={post.id}>
                        <div className="img">
                            <img src={post.img} alt=""/>
                        </div>
                        <div className="content">
                            <Link className="link" to={`/post/${post.id}`}>
                                <h1>{post.title}</h1>
                            </Link>
                            <p>{post.desc}</p>
                            <div className="buttons">
                                <button>Читать дальше</button>
                                <button>Плохо</button>
                                <button>Хорошо</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Home;