// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import RenovationCalculator from "./pages/RenovationCalculator";

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
