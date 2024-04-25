import Wrapper from "../assets/wrappers/About"
import Section from "../components/Section"

const About = () => {
  return (
    <Wrapper>
      <Section
        title='About'
        child={
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
        }
      ></Section>
    </Wrapper>
  )
}

export default About
