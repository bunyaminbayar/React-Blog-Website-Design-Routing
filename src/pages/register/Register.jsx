import { Link } from "react-router-dom"
import "./register.css"

export default function Register() {
  return (
    <div className="register">
      <span className="registerTitle">Register</span>
      <form className="registerForm">
        <label>Username</label>
        <input type="text" className="registerInput" placeholder="Username" />
        <label>Email</label>
        <input type="email" className="registerInput" placeholder="Email" />
        <label>Password</label>
        <input type="password" className="registerInput" placeholder="Email" />
        <button className="registerButton">register</button>
      </form>
      <Link to="/login">
        <button className="registerLoginButton">Login</button>
      </Link>
    </div>
  )
}
