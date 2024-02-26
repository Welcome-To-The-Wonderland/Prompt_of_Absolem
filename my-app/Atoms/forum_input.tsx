interface defineProps {
    placeholder: string;
    type: string;
}
export function FormInput ({ type, placeholder, } : defineProps)  {
    return (
        <input style = {styles.formInput }type={type}
        placeholder={placeholder}
        />
    );
}

const styles = {
    formInput:{
        padding: "7.5px",
    }
}

export default FormInput;