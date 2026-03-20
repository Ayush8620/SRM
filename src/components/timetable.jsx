import React from "react";

const Timetable = () => {
  return (
    <div style={{ fontFamily: "'Segoe UI', Arial, sans-serif", backgroundColor: "#f4f6f9", padding: "20px" }}>
      
      <h2 style={{ textAlign: "center", color: "#333" }}>
        Weekly Timetable (Section A & B)
      </h2>

      <table style={{
        width: "95%",
        margin: "20px auto",
        borderCollapse: "collapse",
        textAlign: "center",
        boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
        background: "white",
        borderRadius: "12px",
        overflow: "hidden"
      }}>
        
        <thead>
          <tr>
            <th style={thStyle}>Day / Period</th>
            <th style={thStyle}>1<br />9-10 A.M</th>
            <th style={thStyle}>2<br />10-11 A.M.</th>
            <th style={thStyle}>3<br />11-12 P.M.</th>
            <th style={thStyle}>4<br />12-1 P.M.</th>
            <th style={recessHeader}>Recess<br />1-2 P.M.</th>
            <th style={thStyle}>5<br />2-3 P.M.</th>
            <th style={thStyle}>6<br />3-4 P.M.</th>
          </tr>
        </thead>

        <tbody>
          {rows.map((row, index) => (
            <tr key={index}>
              <td style={dayStyle}>{row.day}</td>
              {row.data.map((cell, i) => (
                <td key={i} style={getCellStyle(cell)}>
                  {cell === "Break" ? "Break" : cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>

      </table>
    </div>
  );
};

const thStyle = {
  border: "1px solid #ddd",
  padding: "10px",
  backgroundColor: "#4CAF50",
  color: "white"
};

const recessHeader = {
  ...thStyle,
  backgroundColor: "#ffc107",
  color: "#000"
};

const dayStyle = {
  border: "1px solid #ddd",
  padding: "10px",
  backgroundColor: "#2c3e50",
  color: "white",
  fontWeight: "bold"
};

const getCellStyle = (type) => {
  const base = {
    border: "1px solid #ddd",
    padding: "10px",
    fontWeight: "bold"
  };

  switch (type) {
    case "Sec A":
      return { ...base, backgroundColor: "#d1e7dd", color: "#0f5132" };
    case "Sec B":
      return { ...base, backgroundColor: "#cfe2ff", color: "#084298" };
    case "Free":
      return { ...base, backgroundColor: "#ede7f6", color: "#4a148c" };
    case "Break":
      return { ...base, backgroundColor: "#ffc107", color: "#000" };
    default:
      return base;
  }
};

const rows = [
  {
    day: "Monday",
    data: ["Sec A", "Sec B", "Free", "Sec A", "Break", "Sec B", "Free"]
  },
  {
    day: "Tuesday",
    data: ["Sec B", "Sec A", "Sec B", "Free", "Break", "Sec A", "Sec B"]
  },
  {
    day: "Wednesday",
    data: ["Free", "Sec A", "Sec B", "Sec A", "Break", "Free", "Sec B"]
  },
  {
    day: "Thursday",
    data: ["Sec A", "Free", "Sec B", "Sec A", "Break", "Sec B", "Free"]
  },
  {
    day: "Friday",
    data: ["Sec B", "Sec A", "Free", "Sec B", "Break", "Sec A", "Sec B"]
  },
  {
    day: "Saturday",
    data: ["Free", "Sec B", "Sec A", "Sec B", "Break", "Free", "Sec A"]
  }
];

export default Timetable;