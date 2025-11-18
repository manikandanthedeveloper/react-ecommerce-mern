import { Outlet } from "react-router";
import NavigationBar from "../components/NavigationBar";
import HomeBanner from "../components/HomeBanner";

const RootLayout = () => {
    return <>
        <NavigationBar />
        <HomeBanner />
        <main className="container my-4">
            <Outlet />
        </main>
    </>;
}

export default RootLayout;