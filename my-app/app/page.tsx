import SectionName from "@/Organisms/SectionName";
import SectionEducation from "@/Organisms/SectionEducation";

export default function Home() {
  // State to keep track of SectionEducation instances

  return (
    <div style={styles.outerContainer}>
      {/* header Section */}
      <div>
        {/* FAQ   */}

        {/* Settings */}

      </div>
      <div>
          {/* name section */}
          <SectionName name="Name" />
          {/* education section */}
          <SectionEducation name="Education" />
          {/* experience section */}

          {/* skills section */}
      </div>
     
      
      <p>bottom</p>
    </div>
  );
}

const styles = {
  outerContainer: {
    textAlign: "center",
  },
}