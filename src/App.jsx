import "./App.css";
import { ThemeProvider } from "./components/ui/theme-provider";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProjectView from "./pages/ProjectView";
import Footer from "./pages/sub-components/Footer";
// import { ModeToggle } from "./components/ui/mode-toggle";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/project/:id" element={<ProjectView />} />
          </Routes>
        </Router>
        <Footer />
        <ToastContainer position="bottom-right" theme="dark" />
      </ThemeProvider>
    </>
  );
}

export default App;
