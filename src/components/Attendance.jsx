import { useState } from "react";

function Attendance() {
  const [students, setStudents] = useState([
    { id: 1, name: "Narendra Modi", status: "" },
    { id: 2, name: "Rahul Gandhi", status: "" },
    { id: 3, name: "Mamta Banerjee", status: "" },
    { id: 4, name: "Akhilesh Yadav", status: "" },
    { id: 5, name: "Mulayam Singh", status: "" },
    { id: 6, name: "Yogi Adityanath", status: "" },
    { id: 7, name: "Mayawati", status: "" },
    { id: 8, name: "Sonia Gandhi", status: "" },
    { id: 9, name: "Arvind Kejriwal", status: "" },
    { id: 10, name: "Priyanka Gandhi", status: "" },
    { id: 11, name: "Lalu Prasad Yadav", status: "" },
    { id: 12, name: "Nitish Kumar", status: "" },
    { id: 13, name: "Amit Shah", status: "" },

  ]);

  const markStatus = (id, status) => {
    setStudents(students.map(s => 
      s.id === id ? { ...s, status: status } : s
    ));
  };

  return (
    <section id="attendance" className="section">
      <h2>Student Attendance</h2>
      <table style={{ width: "100%", background: "beige", color: "black", borderRadius: "8px" }}>
        <thead>
          <tr style={{ background: "#4facfe", color: "white" }}>
            <th>Roll No</th>
            <th>Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {students.map((s) => (
            <tr key={s.id} style={{ 
              backgroundColor: s.status === "present" ? "#d4edda" : s.status === "absent" ? "#f8d7da" : s.status === "Mass Bunk" ? "#fff3cd" : "transparent",
            }}>
              <td>{s.id}</td>
              <td>{s.name}</td>
              <td>
                <button onClick={() => markStatus(s.id, "present")} className="btn" style={{ background: "#28a745", padding: "5px 10px", margin: "5px" }}>Present</button>
                <button onClick={() => markStatus(s.id, "absent")} className="btn" style={{ background: "#dc3545", padding: "5px 10px" }}>Absent</button>
                <button onClick={() => markStatus(s.id, "Mass Bunk")} className="btn" style={{ background: "#94a83d", padding: "5px 10px", margin: "5px" }}>Bunk</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default Attendance;