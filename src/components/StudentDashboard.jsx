import { useState } from "react";

function StudentDashboard({ onLogout }) {
  const [student] = useState({
    name: "Harshit Tripathi",
    rollNo: "42",
    course: "btech",
    email: "harshittr@gmail.com",
    phone: "+91 8081218881",
    image: "img.jpeg",
    marks: {
      math: 85,
      english: 78,
      science: 92,
      social: 88
    },
    attendance: {
      present: 35,
      absent: 5,
      percent: 87.5
    }
  });

  return (
    <section className="section" style={{ maxWidth: "900px", margin: "40px auto" }}>
      <div style={{
        background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
        padding: "40px",
        borderRadius: "12px",
        color: "white",
        boxShadow: "0 8px 32px rgba(0,0,0,0.1)"
      }}>
        <div style={{
          display: "flex",
          alignItems: "center",
          marginBottom: "30px",
          gap: "30px"
        }}>
          <div>
            <img
              src={student.image}
              alt={student.name}
              style={{
                width: "150px",
                height: "150px",
                borderRadius: "50%",
                border: "5px solid white",
                objectFit: "cover"
              }}
            />
          </div>

          <div style={{ textAlign: "left", flex: 1 }}>
            <h2 style={{ margin: "0 0 10px 0", fontSize: "28px" }}>{student.name}</h2>
            <p style={{ margin: "8px 0" }}><strong>Roll No:</strong> {student.rollNo}</p>
            <p style={{ margin: "8px 0" }}><strong>Course:</strong> {student.course}</p>
            <p style={{ margin: "8px 0" }}><strong>Email:</strong> {student.email}</p>
            <p style={{ margin: "8px 0" }}><strong>Phone:</strong> {student.phone}</p>
          </div>
        </div>

        <div style={{
          background: "rgba(255,255,255,0.1)",
          padding: "20px",
          borderRadius: "8px",
          marginBottom: "20px"
        }}>
          <h3 style={{ margin: "0 0 15px 0" }}>📊 Academic Marks</h3>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "15px"
          }}>
            {Object.entries(student.marks).map(([subject, marks]) => (
              <div key={subject} style={{
                background: "rgba(255,255,255,0.1)",
                padding: "15px",
                borderRadius: "6px",
                textAlign: "center"
              }}>
                <p style={{ margin: "0 0 8px 0", fontSize: "14px", opacity: 0.9 }}>
                  {subject.charAt(0).toUpperCase() + subject.slice(1)}
                </p>
                <p style={{ margin: "0", fontSize: "24px", fontWeight: "bold" }}>
                  {marks}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div style={{
          background: "rgba(255,255,255,0.1)",
          padding: "20px",
          borderRadius: "8px",
          marginBottom: "20px"
        }}>
          <h3 style={{ margin: "0 0 15px 0" }}>📅 Attendance</h3>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "15px"
          }}>
            <div style={{
              background: "rgba(40, 167, 69, 0.3)",
              padding: "15px",
              borderRadius: "6px",
              textAlign: "center"
            }}>
              <p style={{ margin: "0 0 8px 0", fontSize: "14px" }}>Present</p>
              <p style={{ margin: "0", fontSize: "24px", fontWeight: "bold" }}>
                {student.attendance.present}
              </p>
            </div>

            <div style={{
              background: "rgba(220, 53, 69, 0.3)",
              padding: "15px",
              borderRadius: "6px",
              textAlign: "center"
            }}>
              <p style={{ margin: "0 0 8px 0", fontSize: "14px" }}>Absent</p>
              <p style={{ margin: "0", fontSize: "24px", fontWeight: "bold" }}>
                {student.attendance.absent}
              </p>
            </div>

            <div style={{
              background: "rgba(255, 193, 7, 0.3)",
              padding: "15px",
              borderRadius: "6px",
              textAlign: "center"
            }}>
              <p style={{ margin: "0 0 8px 0", fontSize: "14px" }}>Percentage</p>
              <p style={{ margin: "0", fontSize: "24px", fontWeight: "bold" }}>
                {student.attendance.percent}%
              </p>
            </div>
          </div>
        </div>

        <button
          onClick={onLogout}
          style={{
            width: "100%",
            padding: "12px 30px",
            background: "#ff6b6b",
            color: "white",
            border: "none",
            borderRadius: "6px",
            fontSize: "16px",
            fontWeight: "bold",
            cursor: "pointer",
            transition: "background 0.3s"
          }}
          onMouseOver={(e) => e.target.style.background = "#ff5252"}
          onMouseOut={(e) => e.target.style.background = "#ff6b6b"}
        >
          🚪 Logout
        </button>
      </div>
    </section>
  );
}

export default StudentDashboard;
