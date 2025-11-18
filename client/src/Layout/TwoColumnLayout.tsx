import { Outlet } from "react-router";
import NavigationBar from "../components/NavigationBar";
import Sidebar from "../components/Sidebar";

const TwoColumnLayout = () => {
    return <>
        <NavigationBar />
        <main className="container my-4">
            <Sidebar />
            <Outlet />
        </main>
    </>
}

export default TwoColumnLayout;