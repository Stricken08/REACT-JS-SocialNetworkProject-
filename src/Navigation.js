import Home from "./assets/view/Home";
import Inscription from "./assets/view/Inscription";
import Login from "./assets/view/Login";
import ErrorPage from "./assets/view/ErrorPage";
import { createBrowserRouter } from "react-router-dom";
import Profil from "./components/Profil";
import ModifProfil from "./components/ModifProfil";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/profil",
    element: <ModifProfil />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/inscription",
    element: <Inscription />,
  },
]);
