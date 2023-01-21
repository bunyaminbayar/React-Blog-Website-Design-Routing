import "./write.css"

export default function Write() {
  return (
    <div className="write">
      <img className="writeImg" src="https://images.unsplash.com/photo-1661956602153-23384936a1d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
      <form className="writeForm">
        <div className="writeForm">
          <div className="writeFromGroup">
            <label htmlFor="fileInput">
              <i className="fas fa-plus writeIcon"></i>
            </label>
            <input type="file" id="fileInput" style={{display: "none"}}/>
            <input type="text" placeholder="Title" className="writeInput" autoFocus={true} />
          </div>
          <div className="writeFromGroup">
            <textarea placeholder="Tell your story ..." type="text" name="" id="" className="writeInput writeText"></textarea>
          </div>
          <button className="writeSubmit">Push</button>
        </div>
      </form>
    </div>
  )
}
