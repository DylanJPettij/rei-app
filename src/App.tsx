// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MyProperties from "./pages/MyProperties";
import MainLayout from "./layouts/MainLayout";
import RenovationCalculator from "./pages/RenovationCalculator";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/my-properties" element={<MyProperties />} />
        <Route path="/renovation-calculator" element={<RenovationCalculator />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;