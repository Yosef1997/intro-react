import { NavLink } from "react-router-dom"
import Wrapper from "../assets/wrappers/NavBar"

type navObj = {
  text: string
  path: string
}

interface NavProps {
  title: string
  navList: navObj[]
  textColor: any
}

const NavBar: React.FC<NavProps> = ({ title, navList, textColor }) => {
  return (
    <Wrapper>
      <div className='container'>
        <h6 style={{ color: textColor }}>{title}</h6>
        <div className='container-navlink'>
          {navList.map((e) => {
            return (
              <NavLink to={e.path} key={e.text} className='navlink'>
                <h6 style={{ color: textColor }}>{e.text}</h6>
              </NavLink>
            )
          })}
        </div>
      </div>
    </Wrapper>
  )
}

export default NavBar
