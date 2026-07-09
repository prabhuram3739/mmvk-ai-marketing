import InstagramForm from "../components/instagram/InstagramForm";
import InstagramPostList from "../components/instagram/InstagramPostList";

export default function Instagram() {
  return (
    <div
      style={{
        padding: 30,
        color: "white",
      }}
    >
      <h1>Instagram Scheduler</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "3fr 1.2fr",
          gap: 30,
          marginTop: 25,
        }}
      >
        <InstagramForm />

        <InstagramPostList />
      </div>
    </div>
  );
}