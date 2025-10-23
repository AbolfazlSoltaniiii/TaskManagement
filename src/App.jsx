import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayout from "./layouts/MainLayout.jsx";
import MainPage from "./pages/main/MainPage.jsx";
import Login from "./pages/auth/Login.jsx";
import Register from "./pages/auth/Register.jsx";

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <MainPage />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "tasks",
        element: <div>Tasks</div>,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
