function Navbar() {
  return (
    <nav style={{
      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      color: "white",
      padding: "16px 24px",
      boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
      marginBottom: "24px"
    }}>
      <div style={{ maxWidth: "1126px", margin: "0 auto" }}>
        <h1 style={{ margin: "0", fontSize: "28px", fontWeight: "bold" }}>
          📚 Academia Student Management
        </h1>
      </div>
    </nav>
  );
}

export default Navbar;
