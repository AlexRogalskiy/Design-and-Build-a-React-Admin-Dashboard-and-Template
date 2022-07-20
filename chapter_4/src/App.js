import { Routes, BrowserRouter } from "react-router-dom";
import routes, { renderRoutes } from "routes";
import { AuthProvider } from "contexts/AuthContext";
import { ThemeProvider } from "@mui/material/styles";
import { createExtendedTheme } from "theme";
import useSetting from "hooks/useSetting";
import "App.css";

const App = () => {
  const { settings } = useSetting();

  const theme = createExtendedTheme({
    theme: settings.theme,
  });

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <AuthProvider>
          <Routes>{renderRoutes(routes)}</Routes>
        </AuthProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
