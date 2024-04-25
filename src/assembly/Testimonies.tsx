import Wrapper from "../assets/wrappers/Testimonies"
import Section from "../components/Section"
import testimonies from "../utils/testimonies"

const Testimonies = () => {
  return (
    <Wrapper>
      <Section
        title='Testimonials'
        child={
          <div>
            {testimonies.map((e) => {
              return (
                <div className='testimony-card'>
                  <p>{e.testi}</p>
                  <figure>
                    <img src={e.img} alt='testi-image' />
                    <figcaption>
                      <h5>{e.name}</h5>
                      <h6>{e.job}</h6>
                    </figcaption>
                  </figure>
                </div>
              )
            })}
          </div>
        }
      />
    </Wrapper>
  )
}

export default Testimonies
