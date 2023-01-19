import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    return(
        <footer>
            <Link className="link" >
                <h6>О компании</h6>
            </Link>
            <Link className="link">
                <h6>Помощь</h6>
            </Link>
            <Link className="link">
                <h6>Контакты</h6>
            </Link>
        </footer>
    );
};

export default Footer;