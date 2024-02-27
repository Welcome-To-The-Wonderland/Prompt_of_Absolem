import React from 'react';
import FormFields from '@/Components/FormRow';

interface defineProps{
    name: string;
}
const SectionName = ({ name } : defineProps) => {
  const formFields = [
    { type: 'email', placeholder: 'Email' },
    { type: 'tel', placeholder: 'Phone Number' },
    { type: 'url', placeholder: 'LinkedIn' },
    { type: 'url', placeholder: 'Github' },
    { type: 'url', placeholder: 'Website' },
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
  },
};

export default SectionName;
