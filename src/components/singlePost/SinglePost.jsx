import "./singlePost.css"

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img className="singlePostImg" src="https://images.unsplash.com/photo-1661961110218-35af7210f803?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt=""  />
        <h1 className="singlePostTitle">
            Lorem Ipsum Dolor Sıt Amed.
            <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
            </div>
        </h1>
        <div className="singlePostInfo">
            <span className="singlePostAutor">Autor : <b>Safak</b></span>
            <span className="singlePostDate">Date : <b>1 Haur ego</b></span>
        </div>
        <p className="singlePostDesc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita ea libero pariatur quaerat eum odio exercitationem corporis fugiat unde ullam minima, officiis eos et suscipit impedit harum, minus atque earum.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita ea libero pariatur quaerat eum odio exercitationem corporis fugiat unde ullam minima, officiis eos et suscipit impedit harum, minus atque earum.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita ea libero pariatur quaerat eum odio exercitationem corporis fugiat unde ullam minima, officiis eos et suscipit impedit harum, minus atque earum.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita ea libero pariatur quaerat eum odio exercitationem corporis fugiat unde ullam minima, officiis eos et suscipit impedit harum, minus atque earum.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita ea libero pariatur quaerat eum odio exercitationem corporis fugiat unde ullam minima, officiis eos et suscipit impedit harum, minus atque earum.
        
        </p>
      </div>
    </div>
  )
}
