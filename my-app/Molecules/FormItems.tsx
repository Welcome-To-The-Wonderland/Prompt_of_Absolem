'use client'
import FormInput from "@/Atoms/FormInput";
import FormCheckbox from "@/Atoms/Checkbox";
import React, {useState} from "react";

// you can utilize this by declaring what the input type is as well as what 
// you want the placeholder text to be
// syntax Ex: 
// <Form type="email" placeholder="Email" />


interface defineProps {
    type: string;
    placeholder: string;
}

export function Form ({ type, placeholder } : defineProps){
    //toggle the input fields that you want to use
    
    const [isDisabled, setIsDisabled] = useState(false);
    const toggleDisabled = () => {
        setIsDisabled(!isDisabled);
    }

    return (
        <div style={styles.form}>
            <FormCheckbox onChange={toggleDisabled} checked={!isDisabled}/>
            <FormInput type={type} placeholder={placeholder} disabled={isDisabled}/>
        </div>
    );
}

const styles = {
    form: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
}

export default Form;