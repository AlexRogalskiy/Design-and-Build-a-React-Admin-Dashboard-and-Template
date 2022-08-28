import { Suspense, Fragment, lazy } from "react";
import { Route, Navigate } from "react-router-dom";
import DashboardLayout from "layouts/DashboardLayout";
import MainLayout from "layouts/MainLayout";
import LandingView from "views/LandingView";
import AuthGuard from "components/AuthGuard";
import GuestGuard from "components/GuestGuard";
import LoadingScreen from "components/LoadingScreen";

export const renderRoutes = (routes = []) => {
  return routes.map((route, i) => {
    // routes with children: may or may not have a path
    if (route.routes) {
      let path = route.path ? route.path : false;
      let Layout = route.layout ? route.layout : Fragment;
      let Guard = route.guard ? route.guard : Fragment;

      return (
        <Route
          key={i + path}
          path={path}
          element={
            <Guard>
              <Layout />
            </Guard>
          }
        >
          {renderRoutes(route.routes)}
        </Route>
      );
    } else {
      // routes without children
      let Component = route.component;
      let path = route.path ? route.path : false;
      let index = route.path ? false : true;
      let Guard = route.guard ? route.guard : Fragment;

      if (route.layout) {
        // parent route: with a layout but no children
        let Layout = route.layout;
        return (
          <Route
            key={i + path}
            element={
              <Guard>
                <Layout />
              </Guard>
            }
          >
            <Route
              path={path}
              element={
                <Suspense fallback={<LoadingScreen />}>
                  <Component />
                </Suspense>
              }
            />
          </Route>
        );
      } else {
        // child route: index route or with a path, or
        // parent route: with no children or layout
        return (
          <Route
            key={i + path}
            path={path}
            index={index}
            element={
              <Guard>
                <Suspense fallback={<LoadingScreen />}>
                  <Component />
                </Suspense>
              </Guard>
            }
          />
        );
      }
    }
  });
};

const routes = [
  {
    layout: MainLayout,
    routes: [
      {
        path: "/",
        component: LandingView,
      },
      {
        path: "/404",
        component: lazy(() => import("views/errors/NotFoundView")),
      },
      {
        path: "/403",
        component: lazy(() => import("views/errors/NotAuthorizedView")),
      },
      {
        path: "/login",
        component: lazy(() => import("views/LoginView")),
        guard: GuestGuard,
      },
      {
        path: "/register",
        component: lazy(() => import("views/RegisterView")),
        guard: GuestGuard,
      },
      {
        path: "/login-unguarded",
        component: lazy(() => import("views/LoginView")),
      },
      {
        path: "/register-unguarded",
        component: lazy(() => import("views/RegisterView")),
      },
    ],
  },
  {
    layout: MainLayout,
    path: "/theme",
    component: lazy(() => import("views/ThemeView")),
  },
  {
    layout: DashboardLayout,
    guard: AuthGuard,
    routes: [
      {
        path: "/home",
        component: lazy(() => import("views/DashboardView")),
      },
      {
        path: "/account",
        component: lazy(() => import("views/AccountView")),
        guard: AuthGuard,
      },
    ],
  },
  {
    path: "/projects",
    layout: DashboardLayout,
    guard: AuthGuard,
    routes: [
      {
        component: lazy(() => import("views/ProjectsView")),
      },
      {
        path: ":projectId",
        component: lazy(() => import("views/ProjectView")),
      },
    ],
  },
  {
    path: "*",
    component: () => <Navigate to="/404" />,
  },
];

export default routes;
