import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import RootLayout from "@/layouts/RootLayout";
import Login from "@/pages/Login";
import TaskSpot from "@/pages/TaskSpot";
import InfoSpot from "@/pages/InfoSpot";
import ProSpot from "@/pages/ProSpot";
import NotFound from "@/pages/NotFound";
import AdminLayout from "@/layouts/Admin/AdminLayout";
import Application from "@/layouts/Admin/Application";
import Dashboard from "@/layouts/Admin/Dashboard";
import Governemnt from "@/layouts/Admin/Governemnt";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* All routes inside RootLayout get Navbar + Footer */}
        <Route element={<RootLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/TaskSpot" element={<TaskSpot />} />
          <Route path="/InfoSpot" element={<InfoSpot />} />
          <Route path="/ProSpot" element={<ProSpot />} />
          <Route path="/login" element={<Login />} />
        </Route>
        <Route path="*" element={<NotFound />} />
        {/* 404 has no layout */}
        {/* <Route path="*" element={<notFound />} /> */}

        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="government" element={<Governemnt />} />
          <Route path="applications" element={<Application />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
