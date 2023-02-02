import React from "react";
import Edit from "../Image/edit.png"
import Delete from "../Image/delete.png"
import { Link, useLocation, useNavigate } from "react-router-dom";

//Эта страница предназначена для вывода полной информации о посте
const Single = () => {
    return(
        <div className="single">
            <div className="content">
                <img src="https://the-distance.ru/wp-content/uploads/2022/03/QAxWSl0M3iYDlMMVysmXZWEwcYqrD3uWEf0Riyec.jpeg" />
                <div className="user">
                    <img src="https://pokatim.ru/uploads/posts/2020-06/1593531741_81397836_158623672110867_4158328593054953414_n.jpg" />
                    <div className="info">
                        <span>John</span>
                        <p>Posted 2 days ago</p>
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
            </div>
            <div className="menu">m</div>
        </div>
    )
}

export default Single;