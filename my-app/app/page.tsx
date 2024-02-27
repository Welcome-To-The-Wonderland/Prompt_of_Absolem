
import Form from "@/Molecules/name_forum_item";

export default function Home() {
  return (
    <div style={styles.outerContainer}>
      {/* header Section */}
      <div>
        {/* FAQ   */}

        {/* Settings */}

      </div>
      {/* name section */}
      <div style={styles.nameSection}>
          <h1> Name </h1>
          <div style={styles.formSection}>
            <Form type="email" placeholder="Email" />
            <Form type="tel" placeholder="Phone Number" />
            <Form type="url" placeholder="LinkedIn" />
            <Form type="url" placeholder="Github" />
            <Form type="url" placeholder="Website" />
          </div>
      </div>

      {/* education section  */}
      <div>
          <h1>Education</h1>

      </div>
      {/* experience section */}

      {/* skills section */}
      
      <p>bottom</p>
    </div>
  );
}

const styles = {
  outerContainer: {
    textAlign: "center",
  },
  nameSection: {
    display: "flex",
    flexDirection: "column",
  },
  formSection: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
}