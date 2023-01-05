import "./styles.css";
import { useState } from "react";
import Student from "./modal/student";

export default function App() {
  const [students, setStudents] = useState([]);
  function onSubmit(e) {
    e.preventDefault();
    const student = new Student(
      e.target.name.value,
      e.target.roll.value,
      getTime()
    );
    for (var i = 0; i < students.length; i++) {
      if (students[i].rollNo.localeCompare(student.rollNo) === 0) {
        return;
      }
    }
    setStudents((oldArray) => [...oldArray, student]);
  }

  function getTime() {
    var d = new Date();
    return d.toLocaleTimeString("en-US", { hour12: false });
  }

  function checkOut(student) {
    for (var i = 0; i < students.length; i++) {
      if (students[i].rollNo.localeCompare(student.rollNo) === 0) {
        const s = students[i];
        s.setCheckout(getTime());
        student[i] = s;
      }
    }
    setStudents([...students]);
  }
  return (
    <div className="App">
      <h1>Student Attendance</h1>
      <form onSubmit={onSubmit}>
        <input id="roll" type="text" placeholder="Roll No" required />
        <input id="name" type="text" placeholder="Name" required />
        <button>Submit</button>
      </form>
      <h2>Students in Class</h2>
      <div className="students">
        <div className="student">
          <div>Name</div>
          <div>Roll no</div>
          <div>Check IN</div>
          <div>Check Out</div>
        </div>
        {students.map((s) => {
          return <StudentWidget checkOut={checkOut} key={s.rollNo} s={s} />;
        })}
      </div>
    </div>
  );
}

function StudentWidget({ s, checkOut }) {
  return (
    <div className="student">
      <div>{s.name}</div>
      <div>{s.rollNo}</div>
      <div>{s.checkIn}</div>
      <div>{s.checkOut}</div>
      {s.checkOut ? "" : <button onClick={() => checkOut(s)}>checkOut</button>}
    </div>
  );
}
