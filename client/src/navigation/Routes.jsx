import Home from "../pages/public/Home";
import Detail from "../pages/public/Detail";
import NoMatch from "../pages/public/NoMatch";

const Routes = [
  {
    component: Home,
    path: "",
    title: "Home",
    to: "home",
    type: "public",
  },
  {
    component: NoMatch,
    path: "/not-found",
    title: "404 Not found",
    to: "home",
    type: "public",
  },
  {
    component: Detail,
    path: "/:id",
    title: "Detail",
    to: "home",
    type: "public",
  },
  {
    component: NoMatch,
    path: "*",
    title: "404 Not found",
    to: "home",
    type: "public",
  },
];

export default Routes;
