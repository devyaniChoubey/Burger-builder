import './button.css';


const button = (props) => (
    <button onClick={props.clicked} className={`Button ${props.btnType === "Success" ? "Success" : "Danger"}`}>{props.children}</button>
)

export default button;