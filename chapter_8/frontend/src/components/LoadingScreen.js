import { Box, LinearProgress } from "@mui/material";
import { styled } from "@mui/material/styles";

const RootDiv = styled("div")(({ theme }) => ({
  alignItems: "center",
  backgroundColor: theme.palette.background.default,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  height: "100vh",
  padding: theme.spacing(3),
}));

const LoadingScreen = () => {
  return (
    <RootDiv>
      <Box width={600}>
        <LinearProgress />
      </Box>
    </RootDiv>
  );
};

export default LoadingScreen;
