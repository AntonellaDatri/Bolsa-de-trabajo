
function FormInput(props){
    const {label, invalidMessage, onChange, type} = props

    return(
        <div className="mb-3">
            <label className="form-label">{label}</label>
                <input type="text" className="form-control" onChange = {onChange} type = {type} required/>
                <div className="invalid-feedback">
                    {invalidMessage}
                </div>
        </div>
    )
}

function Select(props){
    const {option, invalidMessage, options, onChange, type} = props
    return (
        <div className = "mb-3">
            <select className="form-select" id="validationCustom04" onChange = {onChange} type = {type} required>
                <option selected="" disabled="" value="" >{option}</option>
                {options.map(element => (
                    <option>{element}</option>
                ))}
            </select>
            <div className="invalid-feedback">
                {invalidMessage}
            </div>
        </div>
    )
}

function inputGroup(props){
    const {invalidMessage, simbol, onChange, type} = props
    return(
        <div className="input-group has-validation mb-3">
            <span className="input-group-text" id="inputGroupPrepend">{simbol}</span>
            <input type="text" className="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" onChange = {onChange} type = {type} required/>
            <div className="invalid-feedback">
               {invalidMessage}
            </div>
        </div>
    )
}

function TextareaInbox(props){
    const {label, invalidMessage, onChange, type} = props
    return(
        <div className="mb-3">
            <label className="form-label">{label}</label>
            <textarea className="form-control" id="validationTextarea" placeholder="Escribe aqui..." onChange = {onChange} type = {type}  required></textarea>
            <div className="invalid-feedback">
                {invalidMessage}
            </div>
        </div>
    )
}

        
export default {FormInput, 
                Select, 
                inputGroup,
                TextareaInbox};
