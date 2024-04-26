import Wrapper from "../assets/wrappers/Hero"
import NavBar from "../components/NavBar"
import navUtil from "../utils/nav"
import hero from "../assets/images/hero.png"
import menuImage from "../assets/images/hero-menu.png"
import { useState } from "react"
import { SideBar } from "../components"

const Hero = () => {
  const { headerNav } = navUtil
  const [showSidebar, setShowSidebar] = useState(false)

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar)
    console.log(showSidebar)
  }

  return (
    <Wrapper>
      <div className='hero-container'>
        <NavBar
          title='@Ayush Barnwal'
          navList={headerNav}
          textColor={"#0B0C0E"}
        />
        <img src={hero} className='hero-image' />
        <button onClick={toggleSidebar}>
          <img src={menuImage} />
          <span>Hi I’m Ayush</span>
        </button>
        <div className='running-container'>
          <h1>- Webflow Developer - UI/UX Designer - Webflow Developer</h1>
        </div>
      </div>
      {showSidebar ? <SideBar onClick={toggleSidebar} /> : null}
    </Wrapper>
  )
}

export default Hero
