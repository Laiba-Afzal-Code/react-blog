import { Link } from 'react-router-dom';
import './footer.css';


export default function Footer() {
  return (
    <>
    <div className="footer">
<div className="footerWapper">
    <div className="webContent">
    <div className="content">
        <h1 className='footerTitle'>Blog</h1>
        <span>Coding Profaction blog website</span>
        <span className='web'><i className="fa-solid fa-code"></i> codingblog.com</span>
        <span className='email'><i className="fa-solid fa-envelope"></i> codingblog@.com</span>
    </div>
    </div>
    <div className="webpages">
      
        <div className="sidebarItem">
          <div className="footerTitle">FOLLOW US</div>
          <div className="sidebarSocial">
            <Link to="https://www.facebook.com/" target="blanlk">
              <i className="fa-brands fa-square-facebook"></i>
            </Link>
            <Link to="https://twitter.com/" target="blanlk">
              <i className="fa-brands fa-square-twitter"></i>
            </Link>
            <Link to="https://www.instagram.com/" target="blanlk">
              <i className="fa-brands fa-square-instagram"></i>
            </Link>
            <Link to="https://www.pinterest.com/" target="blanlk">
              <i className="fa-brands fa-pinterest"></i>
            </Link>
          </div>
        </div>
        <div className="listpages">
        <Link to={"/"} className='link'>
        <span>HOME</span>
        </Link>
        <Link to={"/contact"} className='link'>
        <span>CONTENT US</span>
        </Link>
        <Link to={"/write"} className='link'>
        <span>WRITE BLOGS</span>
        </Link>
        <Link to={"/setting"} className='link'>
        <span>SETTING</span>
        </Link>
        </div>
    </div>
</div>
<div className="copy">© CodingBlog 2024 copyrights Privacy policy (Laiba-Afzal-Coding<i className="fa-solid fa-code"></i>)</div>
    </div>
      
    </>
  )
}
