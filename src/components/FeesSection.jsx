import { useState } from "react";

function FeesSection() {
  const [students, setStudents] = useState([
    { id: 1, name: "Raj Kumar", email: "raj@gmail.com", totalFees: 50000, paidFees: 30000, pendingFees: 20000, status: "Partial" },
    { id: 2, name: "Priya Singh", email: "priya@gmail.com", totalFees: 50000, paidFees: 50000, pendingFees: 0, status: "Paid" },
    { id: 3, name: "Amit Patel", email: "amit@gmail.com", totalFees: 50000, paidFees: 0, pendingFees: 50000, status: "Pending" },
    { id: 4, name: "Sneha Gupta", email: "sneha@gmail.com", totalFees: 50000, paidFees: 25000, pendingFees: 25000, status: "Partial" },
    { id: 5, name: "Vikram Kumar", email: "vikram@gmail.com", totalFees: 50000, paidFees: 50000, pendingFees: 0, status: "Paid" },
  ]);

  const [filterStatus, setFilterStatus] = useState("All");

  const filteredStudents = filterStatus === "All" 
    ? students 
    : students.filter(student => student.status === filterStatus);

  const totalFeesAmount = students.reduce((sum, s) => sum + s.totalFees, 0);
  const totalPaidAmount = students.reduce((sum, s) => sum + s.paidFees, 0);
  const totalPendingAmount = students.reduce((sum, s) => sum + s.pendingFees, 0);

  return (
    <div className="fees-section">
      <h2>💰 Fees Management</h2>
      
      {/* Summary Cards */}
      <div className="fees-summary">
        <div className="fee-card total">
          <h3>Total Fees</h3>
          <p className="amount">₹{totalFeesAmount.toLocaleString()}</p>
        </div>
        <div className="fee-card paid">
          <h3>Paid Fees</h3>
          <p className="amount">₹{totalPaidAmount.toLocaleString()}</p>
        </div>
        <div className="fee-card pending">
          <h3>Pending Fees</h3>
          <p className="amount">₹{totalPendingAmount.toLocaleString()}</p>
        </div>
      </div>

      {/* Filter Section */}
      <div className="filter-section">
        <label>Filter by Status: </label>
        <select 
          value={filterStatus} 
          onChange={(e) => setFilterStatus(e.target.value)}
          className="filter-select"
        >
          <option>All</option>
          <option>Paid</option>
          <option>Partial</option>
          <option>Pending</option>
        </select>
      </div>

      {/* Fees Table */}
      <div className="fees-table-container">
        <table className="fees-table">
          <thead>
            <tr>
              <th>Student ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Total Fees</th>
              <th>Paid Fees</th>
              <th>Pending Fees</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredStudents.map(student => (
              <tr key={student.id} className={`status-${student.status.toLowerCase()}`}>
                <td>#{student.id}</td>
                <td>{student.name}</td>
                <td>{student.email}</td>
                <td>₹{student.totalFees.toLocaleString()}</td>
                <td className="paid">₹{student.paidFees.toLocaleString()}</td>
                <td className="pending">₹{student.pendingFees.toLocaleString()}</td>
                <td>
                  <span className={`status-badge status-${student.status.toLowerCase()}`}>
                    {student.status}
                  </span>
                </td>
                <td>
                  <button className="action-btn view-btn">View</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {filteredStudents.length === 0 && (
        <div style={{ textAlign: "center", padding: "40px", color: "#999" }}>
          <p>No students found with the selected filter.</p>
        </div>
      )}
    </div>
  );
}

export default FeesSection;
