import { Link } from "react-router-dom"
import "./login.css"

export default function Login() {
  return (
    <div className="login">
        <span className="loginTitle">Login</span>
      <form className="loginForm">
        <label>Email</label>
        <input type="email" className="loginInput" placeholder="Email" />
        <label>Password</label>
        <input type="password" className="loginInput" placeholder="Email" />
        <button className="loginButton">Login</button>
      </form>
      <Link to="/register">
      <button className="loginRegisterButton">Register</button>
      </Link>
    </div>
  )
}
