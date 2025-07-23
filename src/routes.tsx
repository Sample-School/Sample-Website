import { Routes, Route } from "react-router-dom";
import { NavBar } from "./components/navBar/navBar";

export function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<NavBar />} />
        </Routes>
    );
}