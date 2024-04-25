import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { Landing, Contact } from "./pages"
import { About, Project } from "./assembly"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
    children: [
      { index: true, element: <Landing /> },
      { path: "about", element: <About /> },
      { path: "work", element: <Project /> },
    ],
  },
  { path: "/contact", element: <Contact /> },
])
const App = () => {
  return <RouterProvider router={router} />
}

export default App
