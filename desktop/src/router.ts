import { createBrowserRouter } from "react-router-dom"

export const router = createBrowserRouter([
  {
    path: "/",
    lazy: () => import("~/components/default-layout"),
    children: [
      {
        path: "",
        lazy: () => import("~/views/home"),
      },
    ],
  },
])
