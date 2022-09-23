import { useState } from "react";
import { Outlet } from "react-router-dom";
import { styled } from "@mui/material/styles";
import NavBar from "./NavBar";
import TopBar from "./TopBar";

const Root = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  display: "flex",
  minHeight: "100vh",
  overflow: "hidden",
  width: "100%",
}));

const DashboardLayout = () => {
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <Root>
      <TopBar onMobileNavOpen={() => setMobileNavOpen(true)} />
      <div style={{ display: "flex", width: "100%" }}>
        <NavBar
          onMobileClose={() => setMobileNavOpen(false)}
          openMobile={isMobileNavOpen}
        />
        <div
          style={{
            display: "flex",
            flex: "1 1 auto",
            overflow: "hidden",
            height: "100%",
          }}
        >
          <Outlet />
        </div>
      </div>
    </Root>
  );
};

export default DashboardLayout;
