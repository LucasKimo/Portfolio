import { createBrowserRouter } from "react-router";
import Home from "./pages/Home";
import PersonalStory from "./pages/Personal"
export const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/my-story",
    Component: PersonalStory,
  },
]);