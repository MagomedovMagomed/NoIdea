import React, { useContext,useEffect,useState, } from "react";
import Edit from "../Image/edit.png"
import Delete from "../Image/delete.png"
import { Link, useLocation, useNavigate } from "react-router-dom";
import Menu from "../component/Menu";
import moment from "moment"
import { AuthContext } from "../context/authContext";
import axios from "axios";

//Эта страница предназначена для вывода полной информации о посте
const Single = () => {
    const [post, setPost] = useState({});
  
    const location = useLocation();
    const navigate = useNavigate();
  
    const postId = location.pathname.split("/")[2];
  
    const { currentUser } = useContext(AuthContext);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const res = await axios.get(`/posts/${postId}`);
          setPost(res.data);
        } catch (err) {
          console.log(err);
        }
      };
      fetchData();
    }, [postId]);
  
    const handleDelete = async ()=>{
      try {
        await axios.delete(`/posts/${postId}`);
        navigate("/")
      } catch (err) {
        console.log(err);
      }
    }
  
    const getText = (html) =>{
      const doc = new DOMParser().parseFromString(html, "text/html")
      return doc.body.textContent
    }
    return (
        <div className="single">
          <div className="content">
            <img className="imgPost" src={post.img} alt="" />
            <div className="user">
              {post.userImg && <img
                src={post.userImg}
                alt=""
              />}
              <div className="info">
                <span>{post.username}</span>
                <p>Posted {moment(post.date).fromNow()}</p>
              </div>
              {currentUser.username === post.username && (
                <div className="edit">
                  <Link to={`/write?edit=2`} state={post}>
                    <img src={Edit} alt="" />
                  </Link>
                  
                </div>
              )}
            </div>
            <h1>{post.title}</h1>
            <h2>{post.desc}</h2>
            </div>
          <Menu cat={post.cat}/>
        </div>
      );
    };
export default Single;