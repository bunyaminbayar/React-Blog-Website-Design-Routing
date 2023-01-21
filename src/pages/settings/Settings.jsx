import Sidebar from "../../components/sidebar/Sidebar"
import "./settings.css"

export default function Settings() {
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
        <span className="settingsUpdateTitle">Upsdate Your acconnt</span>
        <span className="settingsDeleteTitle">Delete acconnt</span>
        </div>
        <form className="settingsForm">
          <div className="settingsPP">
            <img className="settingsImg" src="https://images.unsplash.com/photo-1674164832362-21b65ab25617?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
          <label htmlFor="fileInput">
            <i className="settingsPPIcon far fa-user-circle"></i>
            <input type="file" id="fileInput" style={{display: "none"}} />
          </label>
          </div>
          <label className="settingsLabel">Username</label>
          <input type="text" placeholder="Username" />
          <label>Email</label>
          <input type="email" placeholder="Email" />
          <label>Password</label>
          <input type="password" />
          <button className="settingsSubmit">Update</button>
          
        </form>
      </div>
      <Sidebar />
    </div>
  )
}
