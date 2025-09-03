// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MyProperties from "./pages/MyProperties";
import MainLayout from "./layouts/MainLayout";
import RenovationCalculator from "./pages/RenovationCalculator";
import LoginForm from "./components/LoginForm";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RenovationCalculator />} />
      </Routes>
    </Router>
  );
}

export default App;
