import React from 'react';
import Form from '@/Molecules/FormItems'; 

interface FormFieldConfig {
  type: string;
  placeholder: string;
}

interface FormFieldsProps {
  fields: FormFieldConfig[];
}

const FormRow: React.FC<FormFieldsProps> = ({ fields }) => {
  return (
    <div style={styles.formSection}>
      {fields.map((field, index) => (
        <Form key={index} type={field.type} placeholder={field.placeholder} />
      ))}
    </div>
  );
};

const styles = {
  formSection: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    gap: "1%",
    flexWrap: "wrap",
  },
};

export default FormRow;
