import DashboardIcon from "@mui/icons-material/Dashboard";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import SettingsIcon from "@mui/icons-material/Settings";
import PlaceIcon from "@mui/icons-material/Place";

const menu = [
  { icon: <DashboardIcon />, title: "Dashboard" },
  { icon: <InstagramIcon />, title: "Instagram" },
  { icon: <FacebookIcon />, title: "Facebook" },
  { icon: <PlaceIcon />, title: "Google Business" },
  { icon: <AnalyticsIcon />, title: "Analytics" },
  { icon: <SettingsIcon />, title: "Settings" },
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
      <h2>MMVK AI</h2>

      {menu.map((item) => (
        <div
          key={item.title}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 15,
            padding: "14px 10px",
            cursor: "pointer",
            borderRadius: 8,
          }}
        >
          {item.icon}
          {item.title}
        </div>
      ))}
    </div>
  );
}