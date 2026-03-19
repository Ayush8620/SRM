import { useState } from "react";

function AdminLogin({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    setError("");

    if (email === "admin@gmail.com" && password === "admin123") {
      alert("Admin Login Successful! ✅");
      onLogin();
    } else {
      setError("Invalid admin credentials");
    }
  };

  return (
    <section className="section" style={{ maxWidth: "500px", margin: "40px auto" }}>
      <div style={{
        background: "linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)",
        padding: "40px",
        borderRadius: "12px",
        color: "white",
        boxShadow: "0 8px 32px rgba(0,0,0,0.1)"
      }}>
        <h2 style={{ margin: "0 0 30px 0" }}>🔐 Admin Login</h2>

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

        <form onSubmit={handleLogin} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div>
            <label style={{ display: "block", marginBottom: "8px", fontSize: "14px" }}>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter admin email"
              style={{
                width: "100%",
                padding: "12px",
                border: "none",
                borderRadius: "6px",
                boxSizing: "border-box",
                fontSize: "16px",
                color: "black"
              }}
            />
          </div>

          <div>
            <label style={{ display: "block", marginBottom: "8px", fontSize: "14px" }}>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter admin password"
              style={{
                width: "100%",
                padding: "12px",
                border: "none",
                borderRadius: "6px",
                boxSizing: "border-box",
                fontSize: "16px",
                color: "black"
              }}
            />
          </div>

          <button
            type="submit"
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
            Login
          </button>
        </form>

        <div style={{
          marginTop: "20px",
          fontSize: "12px",
          opacity: 0.8,
          textAlign: "center"
        }}>
          <p>Demo Credentials:</p>
          <p>Email: admin@gmail.com</p>
          <p>Password: admin123</p>
        </div>
      </div>
    </section>
  );
}

export default AdminLogin;
