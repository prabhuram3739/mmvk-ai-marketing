export default function Dashboard() {
  return (
    <div
      style={{
        padding: "30px",
        color: "white",
      }}
    >
      <h1>Dashboard</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "20px",
          marginTop: "20px",
        }}
      >
        <div
          style={{
            background: "#1e1e2f",
            padding: "20px",
            borderRadius: "10px",
          }}
        >
          <h2>128</h2>
          <p>Posts Generated</p>
        </div>

        <div
          style={{
            background: "#1e1e2f",
            padding: "20px",
            borderRadius: "10px",
          }}
        >
          <h2>97</h2>
          <p>Published</p>
        </div>

        <div
          style={{
            background: "#1e1e2f",
            padding: "20px",
            borderRadius: "10px",
          }}
        >
          <h2>21</h2>
          <p>Scheduled</p>
        </div>

        <div
          style={{
            background: "#1e1e2f",
            padding: "20px",
            borderRadius: "10px",
          }}
        >
          <h2>18.4K</h2>
          <p>Followers</p>
        </div>
      </div>
    </div>
  );
}