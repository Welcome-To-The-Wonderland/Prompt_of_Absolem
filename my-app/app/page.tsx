'use client'
import React, { useState } from "react";
import SectionName from "@/Organisms/SectionName";
import SectionEducation from "@/Organisms/SectionEducation";
import Section from "@/Organisms/Section";

export default function Home() {
  const [SectionName, setSectionName] = useState([
    { type: 'email', placeholder: 'Email' },
    { type: 'tel', placeholder: 'Phone Number' },
    { type: 'url', placeholder: 'LinkedIn' },
    { type: 'url', placeholder: 'Github' },
    { type: 'url', placeholder: 'Website' },
  ]);

  const [SectionEducation, setSectionEducation] = useState([
    { type: 'text', placeholder: 'School Name' },
    { type: 'text', placeholder: 'Location' },
    { type: 'text', placeholder: 'Degree' },
    { type: 'text', placeholder: 'Start Date' },
    { type: 'text', placeholder: 'End Date' },
    { type: 'number', placeholder: 'GPA' },
    { type: 'text', placeholder: 'relevant coursework' },
  ]);

  return (
    <div style={styles.outerContainer}>
      <div>
        {/* Header content here 
          - need FAQ
          - need settings button
          - need search bar so we can search labels
        */}
      </div>
      <div>
        <Section formFields={SectionName} name="Name" />
        <Section formFields={SectionEducation} name="Education" />
        {/* Other sections */}
      </div>
      <p>bottom</p>
    </div>
  );
}

const styles = {
  outerContainer: {
    textAlign: "center",
  },

};
