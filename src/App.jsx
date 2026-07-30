import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Staff from "./pages/Staff";
import Vendor from "./pages/Vendor";
import Center from "./pages/Center";
import Duty from "./pages/Duty";
import Salary from "./pages/Salary";
import Settings from "./pages/Settings";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/staff" element={<Staff />} />
        <Route path="/vendor" element={<Vendor />} />
        <Route path="/center" element={<Center />} />
        <Route path="/duty" element={<Duty />} />
        <Route path="/salary" element={<Salary />} />
        <Route path="/settings" element={<Settings />} />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;