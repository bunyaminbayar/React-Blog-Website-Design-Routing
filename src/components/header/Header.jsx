import "./header.css"

export default function Header() {
  return (
    <div className='header'>
      <div className="headerTitles">
        <span className="headerTitleSm">React & Node</span>
        <span className="headerTitleLg">Blog</span>
      </div>
      <img className="headerImg" src="https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547_960_720.jpg" alt="" />
    </div>
  )
}
