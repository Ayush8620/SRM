import { useState } from "react";
import FeesSection from "./FeesSection";

function AdminDashboard({ onLogout }) {
  const [activeSection, setActiveSection] = useState("overview");

  const [studentsData] = useState([
    { id: 1, name: "Raj Kumar", email: "raj@gmail.com", class: "12A", rollNo: "001", phone: "9876543210" },
    { id: 2, name: "Priya Singh", email: "priya@gmail.com", class: "12A", rollNo: "002", phone: "9876543211" },
    { id: 3, name: "Amit Patel", email: "amit@gmail.com", class: "12B", rollNo: "003", phone: "9876543212" },
    { id: 4, name: "Sneha Gupta", email: "sneha@gmail.com", class: "12B", rollNo: "004", phone: "9876543213" },
    { id: 5, name: "Vikram Kumar", email: "vikram@gmail.com", class: "11A", rollNo: "005", phone: "9876543214" },
  ]);

  const [teachersData] = useState([
    { id: 1, name: "Dinesh Kumar Kushwaha", subject: "Web Development", email: "dinesh@gmail.com", phone: "+91 9876543210", experience: "10 Years" },
    { id: 2, name: "Ashish Dwivedi  ", subject: "DSTL", email: "ashish@gmail.com", phone: "+91 9876543211", experience: "8 Years" },
    { id: 3, name: "Priya Sharma", subject: "English", email: "priya@gmail.com", phone: "+91 9876543212", experience: "6 Years" },
    { id: 4, name: "Rajesh Singh", subject: "Science", email: "rajesh@gmail.com", phone: "+91 9876543213", experience: "12 Years" },
  ]);

  return (
    <div className="admin-dashboard">
      <aside className="admin-sidebar">
        <div className="admin-profile">
          <div className="admin-avatar">👤</div>
          <h3>Admin Panel</h3>
          <p>System Administrator</p>
        </div>

        <nav className="admin-nav">
          <button
            className={`admin-nav-btn ${activeSection === "overview" ? "active" : ""}`}
            onClick={() => setActiveSection("overview")}
          >
            📊 Overview
          </button>
          <button
            className={`admin-nav-btn ${activeSection === "students" ? "active" : ""}`}
            onClick={() => setActiveSection("students")}
          >
            👨‍🎓 Students
          </button>
          <button
            className={`admin-nav-btn ${activeSection === "teachers" ? "active" : ""}`}
            onClick={() => setActiveSection("teachers")}
          >
            👨‍🏫 Teachers
          </button>
          <button
            className={`admin-nav-btn ${activeSection === "fees" ? "active" : ""}`}
            onClick={() => setActiveSection("fees")}
          >
            💰 Fees
          </button>
          <button
            className="admin-nav-btn logout-btn"
            onClick={onLogout}
          >
            🚪 Logout
          </button>
        </nav>
      </aside>

      <main className="admin-content">
        {/* Overview Section */}
        {activeSection === "overview" && (
          <div className="admin-section">
            <h2>📊 Dashboard Overview</h2>
            <div className="stats-grid">
              <div className="stat-card">
                <span className="stat-icon">👨‍🎓</span>
                <div className="stat-content">
                  <h4>Total Students</h4>
                  <p className="stat-number">{studentsData.length}</p>
                </div>
              </div>
              <div className="stat-card">
                <span className="stat-icon">👨‍🏫</span>
                <div className="stat-content">
                  <h4>Total Teachers</h4>
                  <p className="stat-number">{teachersData.length}</p>
                </div>
              </div>
              <div className="stat-card">
                <span className="stat-icon">💰</span>
                <div className="stat-content">
                  <h4>Total Revenue</h4>
                  <p className="stat-number">₹20,500,000</p>
                </div>
              </div>
              <div className="stat-card">
                <span className="stat-icon">⏳</span>
                <div className="stat-content">
                  <h4>Pending Fees</h4>
                  <p className="stat-number">₹75,000</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Students Section */}
        {activeSection === "students" && (
          <div className="admin-section">
            <h2>👨‍🎓 Students Management</h2>
            <div className="table-container">
              <table className="admin-table">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Class</th>
                    <th>Roll No</th>
                    <th>Phone</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {studentsData.map(student => (
                    <tr key={student.id}>
                      <td>#{student.id}</td>
                      <td>{student.name}</td>
                      <td>{student.email}</td>
                      <td>{student.class}</td>
                      <td>{student.rollNo}</td>
                      <td>{student.phone}</td>
                      <td>
                        <button className="table-action-btn">Edit</button>
                        <button className="table-action-btn delete">Delete</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Teachers Section */}
        {activeSection === "teachers" && (
          <div className="admin-section">
            <h2>👨‍🏫 Teachers Management</h2>
            <div className="table-container">
              <table className="admin-table">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Subject</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Experience</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {teachersData.map(teacher => (
                    <tr key={teacher.id}>
                      <td>#{teacher.id}</td>
                      <td>{teacher.name}</td>
                      <td>{teacher.subject}</td>
                      <td>{teacher.email}</td>
                      <td>{teacher.phone}</td>
                      <td>{teacher.experience}</td>
                      <td>
                        <button className="table-action-btn">Edit</button>
                        <button className="table-action-btn delete">Delete</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Fees Section */}
        {activeSection === "fees" && (
          <FeesSection />
        )}
      </main>
    </div>
  );
}

export default AdminDashboard;
