import { NavLink } from "react-router-dom"
import Wrapper from "../assets/wrappers/SideBar"
import navUtils from "../utils/nav"
import { IoIosCloseCircle } from "react-icons/io"

const SideBar: React.FC<{ onClick: any }> = ({ onClick }) => {
  const { headerNav, footerNav } = navUtils
  const newHeaderNav = [
    {
      text: "Home",
      path: "/",
    },
    ...headerNav,
  ]

  return (
    <Wrapper>
      <div className='sidebar-container'>
        <div className='sidebar-menu'>
          <button onClick={onClick}>
            <IoIosCloseCircle size={60} />
          </button>
          {newHeaderNav.map((e) => {
            return (
              <NavLink to={e.path} key={e.text} className='navlink'>
                <h6 style={{ color: "#F4F7FA" }}>{e.text}</h6>
              </NavLink>
            )
          })}
        </div>
        <div className='sidebar-footer'>
          {footerNav.map((e) => {
            return (
              <NavLink to={e.path} key={e.text} className='navlink'>
                <h6 style={{ color: "#F4F7FA" }}>{e.text}</h6>
              </NavLink>
            )
          })}
        </div>
      </div>
    </Wrapper>
  )
}

export default SideBar
