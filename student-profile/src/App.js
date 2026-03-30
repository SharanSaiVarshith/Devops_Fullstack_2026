import React, { useState } from "react";
import StudentProfile from "./StudentProfile";

function App() {

  const [show, setShow] = useState(true);

  return (
    <div style={{ padding: "20px" }}>

      <h1>Lifecycle Demonstration</h1>

      <button
        onClick={() => setShow(!show)}
        style={styles.btn}
      >
        {show ? "Hide Profile" : "Show Profile"}
      </button>

      {show && <StudentProfile />}

    </div>
  );
}

const styles = {
  btn: {
    padding: "10px 15px",
    background: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer"
  }
};

export default App;
