import { Routes, BrowserRouter } from "react-router-dom";
import routes, { renderRoutes } from "routes";
import { AuthProvider } from "contexts/AuthContext";

const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>{renderRoutes(routes)}</Routes>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;
