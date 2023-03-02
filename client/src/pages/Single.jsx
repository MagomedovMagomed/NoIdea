import React from "react";
import Edit from "../Image/edit.png"
import Delete from "../Image/delete.png"
import { Link, useLocation, useNavigate } from "react-router-dom";
import Menu from "../component/Menu";

//Эта страница предназначена для вывода полной информации о посте
const Single = () => {
    return(
        <div className="containerpost">
        <div className="single">
            <div className="content">
                <img src="https://i.postimg.cc/xCzF1bs9/Tylou-generated-idea-lamps-computer-f8eadbd7-51ac-4b41-95a3-4fae0ea9af41.png" />
                <div className="user">
                    <img src="https://pokatim.ru/uploads/posts/2020-06/1593531741_81397836_158623672110867_4158328593054953414_n.jpg" />
                    <div className="info">
                        <span>Егор</span>
                        <p>Запостил 2 дня назад</p>
                    </div>
                    <div className="edit">
                        <Link to={`/write?edit=2`}>
                            <img src={Edit} alt="" />
                        </Link>
                        
                        <img src={Delete} alt="" />
                    </div>
                </div>
                <h1> Здесь у нас интересный заголовок</h1>
                <p>Здесь у нас интересный заголовокЗдесь у нас интересный заголовокЗдесь у нас интересный заголовокЗдесь у нас интересный заголовокЗдесь у нас интересный заголовок
                Здесь у нас интересный заголовокЗдесь у нас интересный заголовокЗдесь у нас интересный заголовокЗдесь у нас интересный заголовокЗдесь у нас интересный заголовокЗдесь у нас интересный заголовокЗдесь у нас интересный заголовокЗдесь у нас интересный заголовокЗдесь у нас интересный заголовокЗдесь у нас интересный заголовок
                Здесь у нас интересный заголовокЗдесь у нас интересный заголовокЗдесь у нас интересный заголовокЗдесь у нас интересный заголовокЗдесь у нас интересный заголовок
                Здесь у нас интересный заголовокЗдесь у нас интересный заголовокЗдесь у нас интересный заголовокЗдесь у нас интересный заголовокЗдесь у нас интересный заголовок
                </p>
                <p>Здесь у нас интересный заголовокЗдесь у нас интересный заголовокЗдесь у нас интересный заголовокЗдесь у нас интересный заголовокЗдесь у нас интересный заголовок
                Здесь у нас интересный заголовокЗдесь у нас интересный заголовокЗдесь у нас интересный заголовокЗдесь у нас интересный заголовокЗдесь у нас интересный заголовок
                </p>

                <p>Здесь у нас интересный заголовокЗдесь у нас интересный заголовокЗдесь у нас интересный заголовокЗдесь у нас интересный заголовокЗдесь у нас интересный заголовок
                </p>
            </div>
            <Menu/>
        </div>
        </div>
    )
}

export default Single;