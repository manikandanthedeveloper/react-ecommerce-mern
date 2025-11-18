import { Outlet } from "react-router";
import NavigationBar from "../components/NavigationBar";

const RootLayout = () => {
    return <>
        <NavigationBar />
        <main className="container my-4">
            <Outlet />
        </main>
    </>;
}

export default RootLayout;