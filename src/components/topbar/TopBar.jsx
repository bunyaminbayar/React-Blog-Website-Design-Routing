import { Link } from "react-router-dom";
import "./topbar.css";

export default function TopBar() {
    const user = false;
    return (
        <div className='top'>
            <div className="topLeft">
                <i className="topIcon fab fa-facebook-square"></i>
                <i className="topIcon fab fa-twitter-square"></i>
                <i className="topIcon fab fa-pinterest-square"></i>
                <i className="topIcon fab fa-instagram-square"></i>
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem">
                        <Link to={"/"}>Home</Link>
                    </li>
                    <li className="topListItem">About</li>
                    <li className="topListItem">Contract</li>
                    <li className="topListItem">
                        <Link to={"/write"}>Write</Link>
                    </li>
                    <li className="topListItem">
                        {user && "LogOut"}
                    </li>
                </ul>
            </div>
            <div className="topRight">
                {user ? (
                    <img className="topImage" src="https://media.licdn.com/dms/image/D4E03AQHAom2C_Uzgog/profile-displayphoto-shrink_200_200/0/1667592856529?e=1679529600&v=beta&t=qLTiFVOtLhS2-XDSNpzmK7ZUCDyoz0hZ5l2yKoKfzv8" alt="" />
                ) : (
                    <>
                     <Link to={"/login"}>Login</Link>
                     <Link to={"/register"}>Register</Link>
                    </>
                )}
                <i className="topSearchIcon fa fa-search"></i>
            </div>
        </div>
    )
}
