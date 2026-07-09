import { NavLink } from "react-router-dom";

import DashboardIcon from "@mui/icons-material/Dashboard";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import SettingsIcon from "@mui/icons-material/Settings";
import PlaceIcon from "@mui/icons-material/Place";

const menu = [
  {
    title: "Dashboard",
    icon: <DashboardIcon />,
    path: "/",
  },
  {
    title: "Instagram",
    icon: <InstagramIcon />,
    path: "/instagram",
  },
  {
    title: "Facebook",
    icon: <FacebookIcon />,
    path: "/facebook",
  },
  {
    title: "Google Business",
    icon: <PlaceIcon />,
    path: "/google-business",
  },
  {
    title: "Analytics",
    icon: <AnalyticsIcon />,
    path: "/analytics",
  },
  {
    title: "Settings",
    icon: <SettingsIcon />,
    path: "/settings",
  },
];

export default function Sidebar() {
  return (
    <div
      style={{
        width: 260,
        background: "#111827",
        color: "white",
        padding: 20,
      }}
    >
      <h2 style={{ marginBottom: 30 }}>MMVK AI</h2>

      {menu.map((item) => (
        <NavLink
          key={item.title}
          to={item.path}
          style={({ isActive }) => ({
            display: "flex",
            alignItems: "center",
            gap: 15,
            padding: "14px 12px",
            marginBottom: 8,
            color: "white",
            textDecoration: "none",
            borderRadius: 8,
            background: isActive ? "#2563eb" : "transparent",
          })}
        >
          {item.icon}
          {item.title}
        </NavLink>
      ))}
    </div>
  );
}