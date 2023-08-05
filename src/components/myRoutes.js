import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import Home from "../pages/home"
import Projects from "../pages/projects"

export const MyRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route
                    path="*"
                    element={<Navigate to="/" replace />}
                />
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
            </Routes>
        </Router>
    )
}