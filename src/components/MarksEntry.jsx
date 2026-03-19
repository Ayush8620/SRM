import { useState } from "react";

function MarksEntry() {
  const students = [
    { id: "1", name: "Narendra Modi" },
    { id: "2", name: "Amit Shah" },
    { id: "3", name: "Rahul Gandhi" },
    { id: "4", name: "Sonia Gandhi" },
    { id: "5", name: "Arvind Kejriwal" },
    { id: "6", name: "Yogi Adityanath" },
    { id: "7", name: "Mamata Banerjee" },
    { id: "8", name: "Mayawati" },
    { id: "9", name: "Nitish Kumar" },
    { id: "10", name: "Lalu Prasad Yadav" },
    { id: "11", name: "K Chandrashekar Rao" },
    { id: "12", name: "Pinarayi Vijayan" },
    { id: "13", name: "Uddhav Thackeray" },
    { id: "14", name: "Ashok Gehlot" },
    { id: "15", name: "Vasundhara Raje" },
  ];

  const [marks, setMarks] = useState({});

  const handleMarkChange = (id, value) => {
    setMarks((prev) => ({ ...prev, [id]: value }));
  };

  const submitMarks = (e) => {
    e.preventDefault();
    console.log("Submitted Marks:", marks);
    alert("Marks submitted successfully! ✅");
  };

  return (
    <section id="marks" className="section">
      <h2>Enter Student Marks</h2>
      <form onSubmit={submitMarks}>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ background: "#e8f0ff" }}>
              <th style={{ padding: "10px", border: "1px solid #ddd" }}>Roll No</th>
              <th style={{ padding: "10px", border: "1px solid #ddd" }}>Name</th>
              <th style={{ padding: "10px", border: "1px solid #ddd" }}>Marks</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.id}>
                <td style={{ padding: "10px", border: "1px solid #ddd" }}>{student.id}</td>
                <td style={{ padding: "10px", border: "1px solid #ddd" }}>{student.name}</td>
                <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                  <input
                    type="number"
                    min="0"
                    max="100"
                    value={marks[student.id] || ""}
                    onChange={(e) => handleMarkChange(student.id, e.target.value)}
                    style={{ width: "80px", padding: "6px", border: "1px solid #b5b5b5", borderRadius: "5px" }}
                    required
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div style={{ marginTop: "15px" }}>
          <button type="submit" className="btn" style={{ padding: "10px 16px" }}>
            Submit All Marks
          </button>
        </div>
      </form>
    </section>
  );
}

export default MarksEntry;