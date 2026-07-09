import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Dashboard from "../pages/Dashboard";

export default function DashboardLayout() {
  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        background: "#121212",
      }}
    >
      <Sidebar />

      <div style={{ flex: 1 }}>
        <Header />
        <Outlet />
      </div>
    </div>
  );
}