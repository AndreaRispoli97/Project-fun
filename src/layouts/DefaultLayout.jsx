import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";

function DefaultLayout() {
    return (
        <>
            <header><NavBar /></header>
            <main><Outlet /></main>
            <footer><Footer /></footer>
        </>
    )
}

export default DefaultLayout