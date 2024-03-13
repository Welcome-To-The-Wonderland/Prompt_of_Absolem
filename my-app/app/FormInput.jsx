
const FormInput = (props) => {
    return (
        <div className="formInput">
            <label>TestingInput</label>
            <input 
            ref={props.refer}
            placeholder={props.placeholder} 
            onChange={e=>props.setUsername(e.target.value)}
            />
        </div>
    )
}
export default FormInput;