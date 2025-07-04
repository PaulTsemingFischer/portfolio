// app/routes/dashboard._index.tsx
export default function DashboardIndex() {
  return (
    <div>
      <h1>Dashboard Overview</h1>
      <div className="stats-grid">
        <div className="stat-card">
          <h3>Total Users</h3>
          <p>1,234</p>
        </div>
        <div className="stat-card">
          <h3>Revenue</h3>
          <p>$12,345</p>
        </div>
        <div className="stat-card">
          <h3>Orders</h3>
          <p>567</p>
        </div>
      </div>
    </div>
  );
}
