import {
  Hero,
  About,
  Portfolio,
  Project,
  Testimonies,
  Footer,
} from "../assembly"

const Landing = () => {
  return (
    <div>
      <Hero />
      <About />
      <Project />
      <Portfolio />
      <Testimonies />
      <Footer />
    </div>
  )
}

export default Landing
