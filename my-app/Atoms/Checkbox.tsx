//used for component Form
//create a checkbox input field

interface defineProps{
    onChange: () => void;
    checked?: boolean;

}
export function FormCheckbox ({ onChange, checked} : defineProps)  {
    return (
        <input style = {styles.checkbox} 
        type="checkbox"
        onChange={onChange}
        checked={checked}
        />
    );
}

const styles = {
    checkbox: {
        margin: "10px",
    },
}

export default FormCheckbox;