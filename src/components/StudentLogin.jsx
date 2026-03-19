import { useState } from "react";

function StudentLogin({ onLogin, onToggleForm }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Please fill in all fields");
      return;
    }

    if (password.length < 6) {
      setError("Invalid password");
      return;
    }

    alert("Student Login Successful! ✅");
    onLogin();
  };

  return (
    <section className="section" style={{ maxWidth: "500px", margin: "40px auto" }}>
      <div style={{
        background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
        padding: "40px",
        borderRadius: "12px",
        color: "white",
        boxShadow: "0 8px 32px rgba(0,0,0,0.1)"
      }}>
        <h2 style={{ margin: "0 0 30px 0" }}>👨‍🎓 Student Login</h2>

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
              placeholder="Enter your email"
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
              placeholder="Enter your password"
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
              padding: "12px",
              background: "#ffd700",
              color: "black",
              border: "none",
              borderRadius: "6px",
              fontSize: "16px",
              fontWeight: "bold",
              cursor: "pointer",
              marginTop: "10px",
              transition: "background 0.3s"
            }}
            onMouseOver={(e) => e.target.style.background = "#ffed4e"}
            onMouseOut={(e) => e.target.style.background = "#ffd700"}
          >
            Login
          </button>
        </form>

        <p style={{ margin: "20px 0 0 0", fontSize: "14px" }}>
          Don't have an account?{" "}
          <button
            onClick={onToggleForm}
            style={{
              background: "none",
              border: "none",
              color: "#ffffff",
              cursor: "pointer",
              fontSize: "14px",
              textDecoration: "underline",
              fontWeight: "bold"
            }}
          >
            Register here
          </button>
        </p>
      </div>
    </section>
  );
}

export default StudentLogin;
