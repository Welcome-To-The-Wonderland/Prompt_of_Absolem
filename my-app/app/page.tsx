'use client'
import React, { useState } from "react";
import SectionName from "@/Organisms/SectionName";
import SectionEducation from "@/Organisms/SectionEducation";

export default function Home() {
  // State to keep track of SectionEducation instances with unique IDs
  const [educationSections, setEducationSections] = useState([{ id: 1 }]);
  const [nextId, setNextId] = useState(2); // Counter for the next unique ID

  // Function to add another SectionEducation instance
  const addEducationSection = () => {
    setEducationSections([...educationSections, { id: nextId }]);
    setNextId(nextId + 1); // Increment the ID for the next new item
  };

  // Function to remove a specific SectionEducation instance by ID
  const removeEducationSection = (idToRemove) => {
    setEducationSections(educationSections.filter(section => section.id !== idToRemove));
  };

  return (
    <div style={styles.outerContainer}>
      <div>
        {/* Header content here */}
      </div>
      <div>
        <SectionName name="Name" />
        {educationSections.map((section, index) => (
          <div key={section.id}>
            {/* Dynamically generate the name based on the position in the array */}
            <SectionEducation name={`Education ${index + 1}`} />
            <button onClick={() => removeEducationSection(section.id)} disabled={educationSections.length === 1}>Remove</button>
          </div>
        ))}
        <button onClick={addEducationSection}>Add Education</button>
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
