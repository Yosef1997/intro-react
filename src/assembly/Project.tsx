import workUtil from "../utils/works"
import Wrapper from "../assets/wrappers/Project"
import Section from "../components/Section"
import { FiArrowUpRight } from "react-icons/fi"

const Project = () => {
  const { workUrl } = workUtil

  return (
    <Wrapper>
      <Section
        title='Recent Work'
        child={
          <div>
            {workUrl.map((e) => {
              return (
                <div className='project-card'>
                  <div>
                    <h1>{e.url}</h1>
                    <h6>{e.description}</h6>
                  </div>
                  <button>
                    <FiArrowUpRight size={32} />
                  </button>
                </div>
              )
            })}
          </div>
        }
      />
    </Wrapper>
  )
}

export default Project
