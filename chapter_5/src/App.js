import { Routes, BrowserRouter } from "react-router-dom";
import routes, { renderRoutes } from "routes";
import { AuthProvider } from "contexts/AuthContext";
import { ThemeProvider } from "@mui/material/styles";
import { SnackbarProvider } from "notistack";
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
      <SnackbarProvider dense maxSnack={3}>
        <BrowserRouter>
          <AuthProvider>
            <Routes>{renderRoutes(routes)}</Routes>
          </AuthProvider>
        </BrowserRouter>
      </SnackbarProvider>
    </ThemeProvider>
  );
};

export default App;
