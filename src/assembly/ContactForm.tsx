import Wrapper from "../assets/wrappers/ContactForm"
import FormRow from "../components/FormRow"

const ContactForm = () => {
  return (
    <Wrapper>
      <>
        <h2>Let’s build something cool together</h2>
        <FormRow name='Name' defaultValue='James Robert' />
        <FormRow name='Email' defaultValue='ayush.barnwal@brightscout.com' />
        <FormRow name='Subject' defaultValue='For web design work Enquire' />
        <FormRow name='Message' rows={5} defaultValue='Type your Message' />
        <button>Submit</button>
      </>
    </Wrapper>
  )
}

export default ContactForm
