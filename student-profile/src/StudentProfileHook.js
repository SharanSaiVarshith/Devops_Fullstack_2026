import React, { useState, useEffect } from "react";

function StudentProfileHook() {

  const [student, setStudent] = useState(null);
  const [loading, setLoading] = useState(true);

  // 🔴 Replace with your GitHub raw URL
  const API_URL =
    "https://raw.githubusercontent.com/username/repo/main/student.json";

  useEffect(() => {

    console.log("useEffect: Mounted");

    fetch(API_URL)
      .then(res => res.json())
      .then(data => {
        setStudent(data);
        setLoading(false);
      });

    // Cleanup = Unmount
    return () => {
      console.log("useEffect: Unmounted");
    };

  }, []); // [] = run only on mount/unmount


  useEffect(() => {
    console.log("useEffect: Updated");
  }, [student]);


  if (loading) {
    return <h3>Loading...</h3>;
  }

  return (
    <div style={styles.card}>
      <h2>Student Profile (Hook)</h2>

      <p><b>ID:</b> {student.id}</p>
      <p><b>Name:</b> {student.name}</p>
      <p><b>Branch:</b> {student.branch}</p>
      <p><b>Year:</b> {student.year}</p>
      <p><b>Email:</b> {student.email}</p>
    </div>
  );
}

const styles = {
  card: {
    border: "2px solid #444",
    padding: "20px",
    width: "300px",
    borderRadius: "10px",
    background: "#eaf6ff",
    marginTop: "20px"
  }
};

export default StudentProfileHook;
