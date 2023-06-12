import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import "./App.scss";

import Auth from "./pages/Auth";
import Welcome from "./pages/Welcome";
import Subjects from "./pages/Subjects";
import { AuthContext } from "./components/context/auth-context";
import NewSubject from "./pages/NewSubject";
import { useContext } from "react";
import Notifications from "./pages/Notifications";

function App() {
  const authContext = useContext(AuthContext);

  const routes = [
    {
      path: "/",
      element: <Welcome />,
    },
    { path: "/auth", element: <Auth /> },
    { path: "/casovi", element: <Subjects /> },
    {
      path: "/new-subject",
      element: authContext.isLoggedIn ? (
        <NewSubject />
      ) : (
        <Navigate replace to="/" />
      ),
    },
    {
      path: "/notifications",
      element: authContext.isLoggedIn ? (
        <Notifications />
      ) : (
        <Navigate replace to="/" />
      ),
    },
    { path: "/*", element: <Navigate replace to="/" /> },
  ];

  const router = createBrowserRouter(routes);

  return <RouterProvider router={router} />;
}

export default App;
