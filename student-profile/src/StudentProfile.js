import React, { Component } from "react";

class StudentProfile extends Component {

  constructor(props) {
    super(props);

    console.log("Constructor: Component Initialized");

    this.state = {
      student: null,
      loading: true
    };
  }

  componentDidMount() {
    console.log("componentDidMount: Fetching Data");

    const API_URL =
      "https://raw.githubusercontent.com/SharanSaiVarshith/Devops_Fullstack_2026/main/student.json";

    fetch(API_URL)
      .then(response => response.json())
      .then(data => {
        this.setState({
          student: data,
          loading: false
        });
      })
      .catch(error => {
        console.error("Error:", error);
      });
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate: State Updated");

    if (prevState.student !== this.state.student) {
      console.log("Student Data Updated");
    }
  }

  componentWillUnmount() {
    console.log("componentWillUnmount: Component Removed");
  }

  render() {

    if (this.state.loading) {
      return <h3>Loading Student Data...</h3>;
    }

    const { student } = this.state;

    return (
      <div style={styles.card}>
        <h2>Student Profile</h2>

        <p><b>ID:</b> {student.id}</p>
        <p><b>Name:</b> {student.name}</p>
        <p><b>Branch:</b> {student.branch}</p>
        <p><b>Year:</b> {student.year}</p>
        <p><b>Email:</b> {student.email}</p>
      </div>
    );
  }
}

const styles = {
  card: {
    border: "2px solid #333",
    padding: "20px",
    width: "300px",
    borderRadius: "10px",
    background: "#f4f4f4",
    marginTop: "20px"
  }
};

export default StudentProfile;
