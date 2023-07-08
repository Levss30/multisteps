import "./Input.css"

const Input = ({label, placeholder}) => {
  return (
    <div className="input-control">
      <label>{label}</label>
      <input placeholder={placeholder}/>
    </div>
  )
}

export default Input