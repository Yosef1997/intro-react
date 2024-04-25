import Wrapper from "../assets/wrappers/Portfolio"
import workUtils from "../utils/works"

const Portfolio = () => {
  const { workImages } = workUtils

  return (
    <Wrapper>
      <div>
        {workImages.map((e) => {
          return <img src={e} alt='image' />
        })}
      </div>
    </Wrapper>
  )
}

export default Portfolio
