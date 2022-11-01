import { Routes, BrowserRouter } from "react-router-dom";
import routes, { renderRoutes } from "routes";
import { AuthProvider } from "contexts/AuthContext";
import { ThemeProvider } from "@mui/material/styles";
import { SnackbarProvider } from "notistack";
import { createExtendedTheme } from "theme";
import useSetting from "hooks/useSetting";
import "App.css";
import { createClient, Provider } from "urql";

const client = createClient({
  url: process.env.REACT_APP_BACKEND_URL,
});

const App = () => {
  const { settings } = useSetting();

  const theme = createExtendedTheme({
    theme: settings.theme,
  });

  return (
    <Provider value={client}>
      <ThemeProvider theme={theme}>
        <SnackbarProvider dense maxSnack={3}>
          <BrowserRouter>
            <AuthProvider>
              <Routes>{renderRoutes(routes)}</Routes>
            </AuthProvider>
          </BrowserRouter>
        </SnackbarProvider>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
