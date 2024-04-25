import { ContactForm, ContactProfile, Footer } from "../assembly"
import Wrapper from "../assets/wrappers/Contact"
import { NavBar } from "../components"
import navUtil from "../utils/nav"

const Contact = () => {
  const { headerNav } = navUtil

  return (
    <Wrapper>
      <>
        <NavBar
          title='@Ayush Barnwal'
          navList={headerNav}
          textColor={"#0B0C0E"}
        />
        <div className='contact-body'>
          <ContactProfile />
          <ContactForm />
        </div>
        <Footer isLanding={false} />
      </>
    </Wrapper>
  )
}

export default Contact
