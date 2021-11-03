import './Input.css';

const Input = (props) => {

    let inputElement = null;
    let inputClasses = "InputElement";
    if(props.invalid && props.touched){
        inputClasses = "InputElement Invalid";
    }

    switch(props.elementType){
        case ('input'):
            inputElement = <input {...props.elementConfig} className={inputClasses} value={props.value} onChange={props.changed}/>
            break;
        case ('textarea'):
            inputElement = <textarea {...props.elementConfig} className={inputClasses} value={props.value} onChange={props.changed}/>
            break;
        case ('select'):
            inputElement = (
                <select className={inputClasses} value={props.value} onChange={props.changed}>
                    {props.elementConfig.options.map(option => (
                        <option key={option.value} value={option.value}>
                            {option.displayValue}
                        </option>
                    ))}
                </select>
            )
            break;
        default:
            inputElement = <input className={inputClasses} value={props.value}/>
    }


    return(
        <div className="Input">
            <label className="Label">{props.label}</label>
            {inputElement}
        </div>
    )
}

export default Input;