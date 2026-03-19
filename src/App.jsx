import { useState } from "react";
import TeacherLogin from "./components/TeacherLogin";
import StudentLogin from "./components/StudentLogin";
import StudentRegistration from "./components/StudentRegistration";
import StudentDashboard from "./components/StudentDashboard";
import Attendance from "./components/Attendance";
import MarksEntry from "./components/MarksEntry";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AdminLogin from "./components/AdminLogin";
import AdminDashboard from "./components/AdminDashboard";
import "./components/admin.css";

function App() {
  const [userType, setUserType] = useState(null); // null, "teacher", "student", "admin"
  const [teacherLogged, setTeacherLogged] = useState(false);
  const [studentLogged, setStudentLogged] = useState(false);
  const [adminLogged, setAdminLogged] = useState(false);
  const [showStudentRegistration, setShowStudentRegistration] = useState(false);
  const [activeSection, setActiveSection] = useState("timetable");

  const teacher = {
    name: "Dinesh Kumar Kushwaha",
    degree: "M.Sc., B.Ed.",
    email: "Dinesh.kumar@gmail.com",
    phone: "+91 00000000",
    subject: "Web Development",
    experience: "10 Years",
    qualification: "PhD in Mathematics",
    image: "dk.jpeg"
  };

  // Portal Selection
  if (!userType) {
    return (
      <>
        <Navbar />
        <section className="section" style={{ maxWidth: "800px", margin: "60px auto" }}>
          <h2 style={{ fontSize: "32px", marginBottom: "40px" }}>Select Your Portal</h2>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, minmax(220px, 1fr))",
            gap: "30px"
          }}>
            {/* Teacher Portal */}
            <div style={{
              background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
              padding: "40px",
              borderRadius: "12px",
              color: "white",
              boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
              textAlign: "center"
            }}>
              <h3 style={{ fontSize: "24px", margin: "0 0 20px 0" }}>👨‍🏫 Teacher Portal</h3>
              <p style={{ margin: "0 0 30px 0", opacity: 0.9 }}>Login to manage attendance and marks</p>
              <button
                onClick={() => setUserType("teacher")}
                style={{
                  width: "100%",
                  padding: "12px",
                  background: "white",
                  color: "#667eea",
                  border: "none",
                  borderRadius: "6px",
                  fontSize: "16px",
                  fontWeight: "bold",
                  cursor: "pointer",
                  transition: "transform 0.3s"
                }}
                onMouseOver={(e) => e.target.style.transform = "scale(1.05)"}
                onMouseOut={(e) => e.target.style.transform = "scale(1)"}
              >
                Teacher Login
              </button>
            </div>

            {/* Student Portal */}
            <div style={{
              background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
              padding: "40px",
              borderRadius: "12px",
              color: "white",
              boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
              textAlign: "center"
            }}>
              <h3 style={{ fontSize: "24px", margin: "0 0 20px 0" }}>👨‍🎓 Student Portal</h3>
              <p style={{ margin: "0 0 30px 0", opacity: 0.9 }}>Login or register to view your grades</p>
              <button
                onClick={() => setUserType("student")}
                style={{
                  width: "100%",
                  padding: "12px",
                  background: "white",
                  color: "#f5576c",
                  border: "none",
                  borderRadius: "6px",
                  fontSize: "16px",
                  fontWeight: "bold",
                  cursor: "pointer",
                  transition: "transform 0.3s"
                }}
                onMouseOver={(e) => e.target.style.transform = "scale(1.05)"}
                onMouseOut={(e) => e.target.style.transform = "scale(1)"}
              >
                Student Portal
              </button>
            </div>

            {/* Admin Portal */}
            <div style={{
              background: "linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)",
              padding: "40px",
              borderRadius: "12px",
              color: "white",
              boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
              textAlign: "center"
            }}>
              <h3 style={{ fontSize: "24px", margin: "0 0 20px 0" }}>🔐 Admin Portal</h3>
              <p style={{ margin: "0 0 30px 0", opacity: 0.9 }}>Login to manage all records</p>
              <button
                onClick={() => setUserType("admin")}
                style={{
                  width: "100%",
                  padding: "12px",
                  background: "white",
                  color: "#1e3c72",
                  border: "none",
                  borderRadius: "6px",
                  fontSize: "16px",
                  fontWeight: "bold",
                  cursor: "pointer",
                  transition: "transform 0.3s"
                }}
                onMouseOver={(e) => e.target.style.transform = "scale(1.05)"}
                onMouseOut={(e) => e.target.style.transform = "scale(1)"}
              >
                Admin Login
              </button>
            </div>
          </div>
        </section>
        <Footer />
      </>
    );
  }

  // Teacher Portal
  if (userType === "teacher") {
    return (
      <>
        <Navbar />
        {!teacherLogged ? (
          <TeacherLogin onLogin={() => { setTeacherLogged(true); setActiveSection("timetable"); }} />
        ) : (
          <div className="home-page">
            <aside className="left-panel">
              <div className="profile-card">
                <img src={teacher.image} alt={teacher.name} className="profile-img" />
                <h2>{teacher.name}</h2>
                <p>{teacher.subject} Teacher</p>
                <p>{teacher.degree}</p>
                <p>{teacher.experience}</p>
                <div className="profile-contact">
                  <p><strong>Email:</strong> {teacher.email}</p>
                  <p><strong>Phone:</strong> {teacher.phone}</p>
                </div>
              </div>

              <div className="profile-actions">
                <button
                  className={`tile-btn ${activeSection === "timetable" ? "active" : ""}`}
                  onClick={() => setActiveSection("timetable")}
                >
                  Timetable
                </button>
                <button
                  className={`tile-btn ${activeSection === "attendance" ? "active" : ""}`}
                  onClick={() => setActiveSection("attendance")}
                >
                  Mark Attendance
                </button>
                <button
                  className={`tile-btn ${activeSection === "marks" ? "active" : ""}`}
                  onClick={() => setActiveSection("marks")}
                >
                  Marks Entry
                </button>
                <button className="logout-btn" onClick={() => { setTeacherLogged(false); setUserType(null); }}>
                  Back to Portal
                </button>
              </div>
            </aside>

            <main className="middle-panel">
              {activeSection === "timetable" && (
                <section className="section">
                  <h2>Class Time Table</h2>
                  <div style={{ marginTop: "20px" }}>
                    <iframe
                      src="/time1.html"
                      title="Time Table"
                      style={{ width: "100%", height: "600px", border: "1px solid #ccc", borderRadius: "8px" }}
                    />
                  </div>
                </section>
              )}
              {activeSection === "attendance" && <Attendance />}
              {activeSection === "marks" && <MarksEntry />}
            </main>
          </div>
        )}
        <Footer />
      </>
    );
  }

  // Student Portal
  if (userType === "student") {
    return (
      <>
        <Navbar />
        {!studentLogged ? (
          showStudentRegistration ? (
            <StudentRegistration 
              onRegister={() => setShowStudentRegistration(false)}
              onToggleForm={() => setShowStudentRegistration(false)}
            />
          ) : (
            <StudentLogin 
              onLogin={() => setStudentLogged(true)}
              onToggleForm={() => setShowStudentRegistration(true)}
            />
          )
        ) : (
          <StudentDashboard onLogout={() => { setStudentLogged(false); setUserType(null); }} />
        )}
        <Footer />
      </>
    );
  }

  // Admin Portal
  if (userType === "admin") {
    return (
      <>
        <Navbar />
        {!adminLogged ? (
          <AdminLogin onLogin={() => setAdminLogged(true)} />
        ) : (
          <AdminDashboard onLogout={() => { setAdminLogged(false); setUserType(null); }} />
        )}
        <Footer />
      </>
    );
  }
}

export default App;