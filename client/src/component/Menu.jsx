import React from "react";
import { Link } from "react-router-dom";


const Menu = () => {
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
        <div className="menu">
            <h1>Другие посты</h1>
            {posts.map(post=>(
                <div className="post" key={post.id}>
                    <img src={post.img} alt="" />
                    <h2>{post.title}</h2>
                    <button>Читать дальше</button>
                </div>
            ))}
        </div>
    )
}

export default Menu