import { Outlet } from "react-router-dom";
import { styled } from "@mui/material/styles";
import TopBar from "./TopBar";

const Wrapper = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  display: "flex",
  minHeight: "100%",
  flex: "1 1 auto",
  overflow: "hidden",
}));

const MainLayout = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
      }}
    >
      <Wrapper>
        <TopBar />
        <Outlet />
      </Wrapper>
    </div>
  );
};

export default MainLayout;
