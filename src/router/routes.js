import Home from "../views/home";
import Classify from "../views/classify";
import Shopcar from "../views/shopcar";
import Mine from "../views/mine";
import Login from "../views/login";
import Register from "../views/register";
import Develop from "../views/develop";
import Detail from "../views/detail";

const routes = [
    { path: "/", redirect: "/home" },
    { path: "/home", name: "home", component: Home },
    { path: "/classify", name: "classify", component: Classify },
    {
        path: "/shopcar",
        name: "shopcar",
        component: Shopcar,
        meta: {
            redirect: true
        }
    },
    { path: "/mine", name: "mine", component: Mine },
    { path: "/login", name: "login", component: Login },
    { path: "/register", name: "register", component: Register },
    { path: "/develop", name: "develop", component: Develop },
    { path: "/detail/:id", name: "detail", component: Detail }
];

export default routes;
