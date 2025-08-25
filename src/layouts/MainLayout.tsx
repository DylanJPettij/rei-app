import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-300">
      <Navbar />
      <main>
        <Outlet /> {/* This is where child routes render */}
      </main>
    </div>
  );
};

export default MainLayout;