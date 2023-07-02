import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Service from "../Pages/Service";
import Projects from "../Pages/Projects";
import Education from "../Pages/Education";
import Contact from "../Pages/Contact";
import SingleProjectDetails from "../Pages/SingleProjectDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/service",
        element: <Service></Service>,
      },
      {
        path: "/projects",
        element: <Projects></Projects>,
        loader: () =>
          fetch("https://shipan-mallik-portfolio-server.vercel.app/projects"),
      },
      {
        path: "/projects/:id",
        element: <SingleProjectDetails></SingleProjectDetails>,
        loader: ({ params }) =>
          fetch(
            `https://shipan-mallik-portfolio-server.vercel.app/projects/${params.id}`
          ),
      },
      {
        path: "/education",
        element: <Education></Education>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
    ],
  },
]);

export default router;
