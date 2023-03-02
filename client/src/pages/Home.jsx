import React, { useEffect,useState } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
//Эта главная страница на которой будут выводиться посты
const Home = () => {
    //Константа постов, потом посты переедут в базу данных
    const [posts,setPosts] = useState([])

    const cat = useLocation().search

    useEffect(()=>{
        const fetchData = async ()=>{
            try{
                const res = await axios.get(`/posts`)
                setPosts(res.data)
            }catch(err){
                console.log(err)
            }
        }
        fetchData()
    },[])

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