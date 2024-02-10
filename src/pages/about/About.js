import './about.css'
import Sidebar from '../../components/sidebar/Sidebar'

export default function About() {
  return (
      <>

    <div className="about">
        <div className="aboutwapper">
            <div className="aboutTop">
                <h1 className="aboutTobhead"><i className="fa-solid fa-vial"></i> Know About Us our Blog Website <i className="fa-brands fa-docker"></i></h1>
            <img src="https://media.licdn.com/dms/image/D5612AQFlxMRpK-On8g/article-cover_image-shrink_720_1280/0/1670602482212?e=2147483647&v=beta&t=1HWOX81_1_mfqzP2kdHty9dnCVgb-dmVsMuYhBKCnRQ" alt="about" />
            </div>
            <div className="aboutMid">
                <h1 className='services'><i className="fa-solid fa-cart-shopping"></i> Services</h1>
                <div className="aboutcardList">
                    <div className="card">
                        <div className="cardTop"><h1><i className="fa-solid fa-arrows-to-dot"></i> Blogs</h1></div>
                        <div className="cardcontent"><h3> Blogs Services</h3></div>
                    </div>
                    <div className="card">
                        <div className="cardTop"><h1><i className="fa-solid fa-code"></i> Coding</h1></div>
                        <div className="cardcontent"><h3>Web Development</h3></div>
                    </div>
                    <div className="card">
                        <div className="cardTop"><h1> <i className="fa-solid fa-wand-magic-sparkles"></i> Magic Complex</h1></div>
                        <div className="cardcontent"><h3>Magical Complex </h3></div>
                    </div>

                </div>
            </div>
            <div className="aboutLast">
                <h1><i className="fa-solid fa-microscope"></i> Konw More</h1>
                <p>Web Development blog site information Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla consequatur voluptatum harum nemo perferendis facilis quidem vitae porro, a quam aperiam cupiditate rerum commodi error tempore recusandae, veritatis culpa hic!</p>
            </div>
        </div>
        <Sidebar/>
    </div>

      
    </>
  )
}
