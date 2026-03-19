import { useState } from "react";

function StudentRegistration({ onRegister, onToggleForm }) {
  const [formData, setFormData] = useState({
    name: "",
    rollNo: "",
    email: "",
    password: "",
    confirmPassword: "",
    class: "",
    phone: ""
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!formData.name || !formData.rollNo || !formData.email || !formData.password || !formData.class) {
      setError("Please fill all required fields");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    alert("Registration Successful! ✅ Please login with your credentials");
    onRegister();
  };

  return (
    <section className="section" style={{ maxWidth: "500px", margin: "40px auto" }}>
      <div style={{
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        padding: "40px",
        borderRadius: "12px",
        color: "white",
        boxShadow: "0 8px 32px rgba(0,0,0,0.1)"
      }}>
        <h2 style={{ margin: "0 0 30px 0" }}>📝 Student Registration</h2>

        {error && (
          <div style={{
            background: "#ff6b6b",
            color: "white",
            padding: "12px",
            borderRadius: "6px",
            marginBottom: "20px",
            fontSize: "14px"
          }}>
            ⚠️ {error}
          </div>
        )}

        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div>
            <label style={{ display: "block", marginBottom: "8px", fontSize: "14px" }}>Full Name *</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              style={{
                width: "100%",
                padding: "12px",
                border: "none",
                borderRadius: "6px",
                boxSizing: "border-box",
                fontSize: "16px"
              }}
            />
          </div>

          <div>
            <label style={{ display: "block", marginBottom: "8px", fontSize: "14px" }}>Roll Number *</label>
            <input
              type="text"
              name="rollNo"
              value={formData.rollNo}
              onChange={handleChange}
              placeholder="Enter your roll number"
              style={{
                width: "100%",
                padding: "12px",
                border: "none",
                borderRadius: "6px",
                boxSizing: "border-box",
                fontSize: "16px"
              }}
            />
          </div>

          <div>
            <label style={{ display: "block", marginBottom: "8px", fontSize: "14px" }}>Class *</label>
            <select
              name="class"
              value={formData.class}
              onChange={handleChange}
              style={{
                width: "100%",
                padding: "12px",
                border: "none",
                borderRadius: "6px",
                boxSizing: "border-box",
                fontSize: "16px"
              }}
            >
              <option value="">Select Class</option>
              <option value="10">Class 10</option>
              <option value="12">Class 12</option>
              <option value="B.Tech">B.Tech</option>
              <option value="M.Tech">M.Tech</option>
            </select>
          </div>

          <div>
            <label style={{ display: "block", marginBottom: "8px", fontSize: "14px" }}>Email *</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              style={{
                width: "100%",
                padding: "12px",
                border: "none",
                borderRadius: "6px",
                boxSizing: "border-box",
                fontSize: "16px"
              }}
            />
          </div>

          <div>
            <label style={{ display: "block", marginBottom: "8px", fontSize: "14px" }}>Phone</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
              style={{
                width: "100%",
                padding: "12px",
                border: "none",
                borderRadius: "6px",
                boxSizing: "border-box",
                fontSize: "16px"
              }}
            />
          </div>

          <div>
            <label style={{ display: "block", marginBottom: "8px", fontSize: "14px" }}>Password *</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter password (min 6 characters)"
              style={{
                width: "100%",
                padding: "12px",
                border: "none",
                borderRadius: "6px",
                boxSizing: "border-box",
                fontSize: "16px"
              }}
            />
          </div>

          <div>
            <label style={{ display: "block", marginBottom: "8px", fontSize: "14px" }}>Confirm Password *</label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm password"
              style={{
                width: "100%",
                padding: "12px",
                border: "none",
                borderRadius: "6px",
                boxSizing: "border-box",
                fontSize: "16px"
              }}
            />
          </div>

          <button
            type="submit"
            style={{
              padding: "12px",
              background: "#28a745",
              color: "white",
              border: "none",
              borderRadius: "6px",
              fontSize: "16px",
              fontWeight: "bold",
              cursor: "pointer",
              marginTop: "10px"
            }}
          >
            Register
          </button>
        </form>

        <p style={{ margin: "20px 0 0 0", fontSize: "14px" }}>
          Already have an account?{" "}
          <button
            onClick={onToggleForm}
            style={{
              background: "none",
              border: "none",
              color: "#ffd700",
              cursor: "pointer",
              fontSize: "14px",
              textDecoration: "underline",
              fontWeight: "bold"
            }}
          >
            Login here
          </button>
        </p>
      </div>
    </section>
  );
}

export default StudentRegistration;
