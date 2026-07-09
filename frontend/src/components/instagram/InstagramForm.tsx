export default function InstagramForm() {
  return (
    <div
      style={{
        background: "#1f2937",
        padding: 25,
        borderRadius: 12,
      }}
    >
      <h2>Create Instagram Post</h2>

      <br />

      <input
        placeholder="Caption"
        style={{
          width: "100%",
          padding: 12,
          marginBottom: 15,
        }}
      />

      <textarea
        rows={6}
        placeholder="Write your caption..."
        style={{
          width: "100%",
          padding: 12,
          marginBottom: 15,
        }}
      />

      <input
        type="file"
        style={{
          marginBottom: 15,
        }}
      />

      <br />

      <input
        type="date"
        style={{
          padding: 10,
          marginRight: 10,
        }}
      />

      <input
        type="time"
        style={{
          padding: 10,
        }}
      />

      <br />
      <br />

      <input
        placeholder="#pollachi #friedrice"
        style={{
          width: "100%",
          padding: 12,
        }}
      />

      <br />
      <br />

      <button
        style={{
            display: "flex",
gap: 10,
marginTop: 20,
          cursor: "pointer",
          background: "#2563eb",
color: "white",
border: "none",
borderRadius: 8,
        }}
      >
        Generate AI Caption
      </button>

      <button
        style={{
display: "flex",
gap: 10,
marginTop: 20,
          cursor: "pointer",
          background: "#22c55e",
color: "white",
border: "none",
borderRadius: 8,
        }}
      >
        Schedule Post
      </button>
    </div>
  );
}