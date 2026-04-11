import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import RootLayout from "@/layouts/RootLayout";
import Login from "@/pages/Login";
import TaskSpot from "@/pages/TaskSpot";
import InfoSpot from "@/pages/InfoSpot";
import ProSpot from "@/pages/ProSpot";
import AdminLayout from "@/layouts/Admin/AdminLayout";
import Application from "@/layouts/Admin/Application";
import Dashboard from "@/layouts/Admin/Dashboard";
import Governemnt from "@/layouts/Admin/Governemnt";
import Web from "@/layouts/Admin/Web";
import CreativePage from "@/layouts/Admin/CreativePage";
import LegalandOfficialServices from "@/layouts/Admin/LegalandOfficialServices";
import StudentApplication from "@/layouts/Admin/StudentApplication";
import ViewStaff from "@/layouts/Admin/ViewStaff";
import OrderedProduct from "@/layouts/Admin/OrderedProduct";
import Notifications from "@/layouts/Admin/Notifications";
import Settings from "@/layouts/Admin/Settings";
import ProfilePage from "@/layouts/Admin/ProfilePage";

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
        {/* <Route path="*" element={<NotFound />} /> */}
        {/* 404 has no layout */}
        {/* <Route path="*" element={<notFound />} /> */}

        <Route path="/admin" element={<AdminLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="government" element={<Governemnt />} />
          <Route path="applications" element={<Application />} />
          <Route path="order" element={<OrderedProduct />} />
          <Route path="staff" element={<ViewStaff />} />
          <Route path="creative" element={<CreativePage />} />
          <Route path="web" element={<Web />} />
          <Route path="students" element={<StudentApplication />} />
          <Route path="legal" element={<LegalandOfficialServices />} />
          <Route path="notification" element={<Notifications />} />
          <Route path="settings" element={<Settings />} />
          <Route path="profile" element={<ProfilePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
