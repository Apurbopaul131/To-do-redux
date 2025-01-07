import App from "@/App";
import Task from "@/pages/task";
import Users from "@/pages/users";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Task />,
      },
      {
        path: "/users",
        element: <Users />,
      },
    ],
  },
]);
export default router;
