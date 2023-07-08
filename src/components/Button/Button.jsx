import "./Button.css"

const Button = ({children, onClick, simple, style}) => {
  return (
    <button className={`${simple ? 'simple' : "advanced"}`} style={style} onClick={onClick}>{children}</button> 
  )                                  
}

export default Button 

