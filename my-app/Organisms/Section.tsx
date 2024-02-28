import React from 'react';
import FormFields from '@/Components/FormRow';

interface defineProps{
    name: string;
}
const Section = ( props ) => {
  const formFields = props.formFields;
  return (
    <div style={styles.section}>
      <h1>{props.name}</h1>
      <FormFields fields={formFields} />
    </div>
  );
};

const styles = {
  section: {
    display: "flex",
    flexDirection: "column",
  },
};

export default Section;
