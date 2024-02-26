interface defineProps {
    placeholder: string;
    type: string;
    disabled?: boolean;
}
export function FormInput ({ type, placeholder, disabled = false} : defineProps)  {
    return (
        <input style = {styles.formInput }type={type}
        placeholder={placeholder}
        disabled = {disabled}
        />
    );
}

const styles = {
    formInput:{
        padding: "7.5px",
    }
}

export default FormInput;