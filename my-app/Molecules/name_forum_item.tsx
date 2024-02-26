
import FormInput from "@/Atoms/forum_input";
import FormCheckbox from "@/Atoms/checkbox_button";

interface defineProps {
    type: string;
    placeholder: string;
}

export function Form ({ type, placeholder} : defineProps){
    return (
        <div style={styles.form}>
            <FormCheckbox/>
            <FormInput type={type} placeholder={placeholder} />
        </div>
    );
}

const styles = {
    form: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "10px",
    },
}

export default Form;