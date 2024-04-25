import NavBar from "../components/NavBar"
import navUtil from "../utils/nav"
import Wrapper from "../assets/wrappers/Footer"
import footerImg from "../assets/images/medium-profile-img.png"

interface footerProps {
  isLanding?: boolean
}

const Footer: React.FC<footerProps> = ({ isLanding }) => {
  const { footerNav } = navUtil

  return (
    <Wrapper>
      <>
        {isLanding ?? (
          <div className='container'>
            <p>
              Have something in mind? <br />
              <span>
                <img src={footerImg} alt='footerImg' />
                let’s build it together.
              </span>
            </p>
            <button>Get in touch</button>
          </div>
        )}

        <NavBar
          title='Build with 💖 by Brightscout & Ayush '
          navList={footerNav}
          textColor={"#F4F7FA"}
        />
      </>
    </Wrapper>
  )
}

export default Footer
