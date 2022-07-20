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

      return (
        <Route key={i} path={path} element={<Layout />}>
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
          <Route element={<Layout />}>
            <Route
              key={i}
              path={path}
              element={
                <Suspense fallback={<LoadingScreen />}>
                  <Guard>
                    <Component />
                  </Guard>
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
            key={i}
            path={path}
            index={index}
            element={
              <Suspense fallback={<LoadingScreen />}>
                <Guard>
                  <Component />
                </Guard>
              </Suspense>
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
    ],
  },
  {
    layout: MainLayout,
    path: "/theme",
    component: lazy(() => import("views/ThemeView")),
  },
  {
    layout: DashboardLayout,
    routes: [
      {
        path: "/home",
        component: lazy(() => import("views/DashboardView")),
        guard: AuthGuard,
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
    routes: [
      {
        component: lazy(() => import("views/ProjectsView")),
        guard: AuthGuard,
      },
      {
        path: ":projectId",
        component: lazy(() => import("views/ProjectView")),
        guard: AuthGuard,
      },
    ],
  },
  {
    path: "*",
    component: () => <Navigate to="/404" />,
  },
];

export default routes;
