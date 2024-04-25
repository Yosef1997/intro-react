import Wrapper from "../assets/wrappers/FormRow"

interface formRow {
  name: string
  labelText?: string
  rows?: number
  defaultValue?: string
}

const FormRow: React.FC<formRow> = ({
  name,
  labelText,
  rows,
  defaultValue,
}) => {
  return (
    <Wrapper>
      <div className='form-container'>
        <label htmlFor={name}>{labelText || name}</label>
        <textarea
          id={name}
          name={name}
          rows={rows ?? 1}
          defaultValue={defaultValue || ""}
          required
        />
      </div>
    </Wrapper>
  )
}

export default FormRow
