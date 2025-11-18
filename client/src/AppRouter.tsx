import { createBrowserRouter } from "react-router";
import HomePage from "./pages/HomePage";
import RootLayout from "./Layout/RootLayout";
import AboutusPage from "./pages/AboutusPage";
import TwoColumnLayout from "./Layout/TwoColumnLayout";
import ProductsPage from "./pages/ProductsPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import AuthLayout from "./Layout/AuthLayout";
import LoginPage from "./pages/LoginPage";
import RegistrationPage from "./pages/RegistrationPage";
import ContactusPage from "./pages/ContactusPage";
import NotFoundPage from "./pages/NotFound";

const Routers = createBrowserRouter([
    {
        path: "/",
        Component: RootLayout,
        children: [
            { index: true, Component: HomePage },
            { path: "aboutus", Component: AboutusPage },
            { path: "contactus", Component: ContactusPage },
        ],
    },
    {
        path: "/products",
        Component: TwoColumnLayout,
        children: [
            { index: true, Component: ProductsPage },
            { path: ":id", Component: ProductDetailsPage }
        ],
    },
    {
        path: "/auth",
        Component: AuthLayout,
        children: [
            { index: true, Component: LoginPage },
            { path: "register", Component: RegistrationPage }
        ],
    },
    {
        path: "*",
        element: <NotFoundPage />
    }
]);

export default Routers;