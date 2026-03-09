import { createBrowserRouter } from "react-router";
import { Root } from "./components/Root";
import { Home } from "./pages/Home";
import { Programme } from "./pages/Programme";
import { Debouches } from "./pages/Debouches";
import { Admission } from "./pages/Admission";
import { Contact } from "./pages/Contact";
import { Portfolios } from "./pages/Portfolios";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "programme", Component: Programme },
      { path: "debouches", Component: Debouches },
      { path: "portfolios", Component: Portfolios },
      { path: "admission", Component: Admission },
      { path: "contact", Component: Contact },
    ],
  },
]);