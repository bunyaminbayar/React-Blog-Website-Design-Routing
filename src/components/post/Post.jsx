import "./post.css"

export default function Post() {
  return (
    <div className="post">
      <img className="postImg" src="https://images.unsplash.com/photo-1661961110372-8a7682543120?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
    <div className="postInfo">
      <div className="postCats">
        <span className="postCat">
          Music
        </span>
        <span className="postCat">
          Life
        </span>
      </div>
      <span className="postTitle">Lorem ipsum dolor sit amet </span>
    <hr />
    <span className="postDate">1 hour ago</span>
    <p className="postDesc">
    consectetur adipisicing elit. Aperiam aut explicabo ut ullam accusantium fugiat minus doloribus! Id nemo expedita repellat debitis? Fugit distinctio error quidem molestias, dolorum vel. Amet.
    <br />
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem commodi sapiente, praesentium similique quibusdam quisquam. Aperiam alias voluptatem iste hic. Obcaecati ratione earum perspiciatis, sunt eveniet aperiam numquam expedita ipsum!
    </p>
    </div>
    </div>
  )
}
