import { useState } from "react";

function TeacherDetails({ onLogout }) {
  const [teacher] = useState({
    id: 1,
    name: "Dr. Ramesh",
    degree: "M.Sc., B.Ed.",
    email: "rajesh.kumar@gmail.com",
    phone: "+91 000000000",
    subject: "Mathematics",
    experience: "10 Years",
    qualification: "PhD in Mathematics",
    image: "dk.jpeg"
  });

  return (
    <section className="section" style={{ maxWidth: "700px", margin: "40px auto" }}>
      <div style={{
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        padding: "40px",
        borderRadius: "12px",
        color: "white",
        boxShadow: "0 8px 32px rgba(0,0,0,0.1)"
      }}>
        <div style={{ marginBottom: "20px" }}>
          <img 
            src={teacher.image} 
            alt={teacher.name}
            style={{
              width: "150px",
              height: "150px",
              borderRadius: "50%",
              border: "5px solid white",
              objectFit: "cover"
            }}
          />
        </div>

        <h2 style={{ margin: "10px 0", fontSize: "28px" }}>{teacher.name}</h2>

        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "20px",
          marginTop: "30px",
          textAlign: "left"
        }}>
          <div style={{ background: "rgba(255,255,255,0.1)", padding: "15px", borderRadius: "8px" }}>
            <label style={{ fontSize: "12px", opacity: 0.9 }}>DEGREE</label>
            <p style={{ margin: "5px 0", fontSize: "18px", fontWeight: "bold" }}>{teacher.degree}</p>
          </div>

          <div style={{ background: "rgba(255,255,255,0.1)", padding: "15px", borderRadius: "8px" }}>
            <label style={{ fontSize: "12px", opacity: 0.9 }}>QUALIFICATION</label>
            <p style={{ margin: "5px 0", fontSize: "18px", fontWeight: "bold" }}>{teacher.qualification}</p>
          </div>

          <div style={{ background: "rgba(255,255,255,0.1)", padding: "15px", borderRadius: "8px" }}>
            <label style={{ fontSize: "12px", opacity: 0.9 }}>SUBJECT</label>
            <p style={{ margin: "5px 0", fontSize: "18px", fontWeight: "bold" }}>{teacher.subject}</p>
          </div>

          <div style={{ background: "rgba(255,255,255,0.1)", padding: "15px", borderRadius: "8px" }}>
            <label style={{ fontSize: "12px", opacity: 0.9 }}>EXPERIENCE</label>
            <p style={{ margin: "5px 0", fontSize: "18px", fontWeight: "bold" }}>{teacher.experience}</p>
          </div>
        </div>

        <div style={{
          marginTop: "30px",
          padding: "20px",
          background: "rgba(255,255,255,0.1)",
          borderRadius: "8px",
          textAlign: "left"
        }}>
          <h3 style={{ margin: "0 0 15px 0", fontSize: "16px" }}>📞 Contact Information</h3>
          <p style={{ margin: "8px 0" }}>
            <strong>Email:</strong> {teacher.email}
          </p>
          <p style={{ margin: "8px 0" }}>
            <strong>Phone:</strong> {teacher.phone}
          </p>
        </div>

        <button 
          onClick={onLogout}
          style={{
            marginTop: "30px",
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

export default TeacherDetails;
