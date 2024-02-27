import React from 'react';
import FormFields from '@/Components/FormRow';

interface defineProps{
    name: string;
}
const SectionEducation = ({ name } : defineProps) => {
  const formFields = [
    { type: 'text', placeholder: 'School Name' },
    { type: 'text', placeholder: 'Location' },
    { type: 'text', placeholder: 'Degree' },
    { type: 'text', placeholder: 'Start Date' },
    { type: 'text', placeholder: 'End Date' },
    { type: 'number', placeholder: 'GPA' },
    { type: 'text', placeholder: 'relevant coursework' },
  ];

  return (
    <div style={styles.section}>
      <h1>{name}</h1>
      <FormFields fields={formFields} />
    </div>
  );
};

const styles = {
  section: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
};

export default SectionEducation;
