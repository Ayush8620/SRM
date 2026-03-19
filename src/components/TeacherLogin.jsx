import { useState } from "react";

function TeacherLogin({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (email && password) {
      alert("Login Successful! ✅");
      onLogin();
    }
  };

  return (
    <section className="section">
      <form className="contact-form" onSubmit={handleLogin}>
        <h2>Teacher Login</h2>
        <input 
          type="email" 
          placeholder="Email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
        />
        <input 
          type="password" 
          placeholder="Password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          required 
        />
        <button type="submit" className="btn">Login</button>
      </form>
    </section>
  );
}

export default TeacherLogin;