import { NavLink } from "react-router-dom"
import contactImg from "../assets/images/medium-profile-img.png"
import navUtil from "../utils/nav"
import Wrapper from "../assets/wrappers/ContactProfile"

type navObj = {
  text: string
  path: string
}

const ContactProfile = () => {
  const { footerNav } = navUtil
  const newArr: navObj[] = [...footerNav, { text: "Figma", path: "/" }]
  return (
    <Wrapper>
      <>
        <img src={contactImg} alt='contact-img' />
        <p>Contact Details</p>
        <h5>ayush.barnwal@brightscout.com</h5>
        <h5>+91 8651447521</h5>
        <div id='break'></div>
        <p>Contact Details</p>
        {newArr.map((e, i) => {
          return (
            <NavLink to={e.path} key={i} className='navlink'>
              <h5 style={{ color: "#0B0C0E" }}>{e.text}</h5>
            </NavLink>
          )
        })}
      </>
    </Wrapper>
  )
}

export default ContactProfile
