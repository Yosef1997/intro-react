import Wrapper from "../assets/wrappers/Section"

interface sectionProps {
  title: string
  child: any
}

const Section: React.FC<sectionProps> = ({ title, child }) => {
  return (
    <Wrapper>
      <div className='container'>
        <div className='title'>{title}</div>
        <div>{child}</div>
      </div>
    </Wrapper>
  )
}

export default Section
