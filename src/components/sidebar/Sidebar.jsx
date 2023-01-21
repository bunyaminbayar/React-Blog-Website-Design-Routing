import "./sidebar.css"

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">About Me</span>
                <img className="sidebarImg" src="https://cdn.pixabay.com/photo/2018/08/23/07/35/thunderstorm-3625405_960_720.jpg" alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque numquam accusantium </p>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">CATEGORİES</span>
                <div className="sidebarList">
                    <ul className="sidebarList">
                        <li className="sidebarListItem">Life</li>
                        <li className="sidebarListItem">Music</li>
                        <li className="sidebarListItem">Sport</li>
                        <li className="sidebarListItem">Style</li>
                        <li className="sidebarListItem">Tech</li>
                        <li className="sidebarListItem">Cinema</li>
                    </ul>
                </div>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">Flow Us</span>
                <div className="sidebarSocial">
                    <i className="sidebarIcon fab fa-facebook-square"></i>
                    <i className="sidebarIcon fab fa-twitter-square"></i>
                    <i className="sidebarIcon fab fa-pinterest-square"></i>
                    <i className="sidebarIcon fab fa-instagram-square"></i>
                </div>
            </div>
        </div>
    )
}
