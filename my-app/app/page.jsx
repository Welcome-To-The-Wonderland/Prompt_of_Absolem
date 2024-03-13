import FormInput from "./FormInput.jsx";
import { useState } from "react";
export default function Home() {
//save every individual keystroke of a user
const [username, setUsername] = useState("");
console.log(username);

//save last instance input of a user
const usernameRef = userRef();
console.log(usernameRef);

//submission handling function
const handleSubmit = (e) => {
  e.preventDefault(); //without this, submit refreshes the page
  console.log(usernameRef);
};

  return (
      <form onSubmit={handleSubmit}>
        <FormInput refer={usernameRef} placeholder="username" setUsername/>
        <button>Submit</button>
      </form>
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