import { Outlet, NavLink } from "react-router-dom";
import logo from "../../assets/logo.jpg";
import {
  Globe,
  FileText,
  Palette,
  Code,
  Scale,
  GraduationCap,
  UserPlus,
} from "lucide-react";
import AdminHeader from "./AdminHeader";

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  `flex items-center gap-2 px-3 py-2 rounded-lg transition-colors duration-200 ${
    isActive ? "bg-blue-600 text-blue-100" : "hover:bg-blue-700/40 text-white"
  }`;

export default function AdminLayout() {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-74 bg-linear-to-b from-blue-300 to-blue-900 font-family-playfair text-white ">
        <div className="pt-2 pl-2">
          <div className="flex items-center gap-3 shrink-0 group">
            <div className="relative">
              <img
                src={logo}
                alt="Risemotive Logo"
                className="h-10 w-10 object-contain group-hover:ring-blue-300 transition-all duration-300"
              />
            </div>
            <div className="leading-tight">
              <h2 className="font-extrabold text-[17px] tracking-wide text-[#1E3A8A] group-hover:text-blue-500 transition-colors duration-200 pb-2 font-family-playfair">
                RISEMOTIVE
              </h2>
              <p className="text-[11px] font-medium text-blue-400 tracking-wide font-family-playfair">
                Building Skills. Delivering Solutions
              </p>
            </div>
          </div>
        </div>
        <h1 className="text-[20px] font-bold mb-3 pt-5 text-center">
          Admin Panel
        </h1>

        <ul className="space-y-4 font-family-playfair text-[16px]">
          <li className="">
            <NavLink to="/admin/government" className={navLinkClass}>
              <Globe />
              <h1>e-Government and Online Services</h1>
            </NavLink>
          </li>
          <li>
            <NavLink to="/admin/applications" className={navLinkClass}>
              <FileText />
              <h1> Applications and Documentation</h1>
            </NavLink>
          </li>
          <li>
            <NavLink to="/admin/creative" className={navLinkClass}>
              <Palette />
              <h1>Creative and Media Services</h1>
            </NavLink>
          </li>
          <li>
            <NavLink to="/admin/web" className={navLinkClass}>
              <Code />
              <h1>Web and Digital Solution</h1>
            </NavLink>
          </li>
          <li>
            <NavLink to="/admin/legal" className={navLinkClass}>
              <Scale />
              <h1>Legal and Official Services</h1>
            </NavLink>
          </li>
          <li>
            <NavLink to="/admin/students" className={navLinkClass}>
              <GraduationCap />
              <h1>Student Applications</h1>
            </NavLink>
          </li>
          <li>
            <NavLink to="/admin/staff" className={navLinkClass}>
              <UserPlus />
              <h1>Add Staff</h1>
            </NavLink>
          </li>
          
        </ul>

        
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <div className="h-16 border-b flex items-center justify-between px-6">
          <AdminHeader />
        </div>
        <div className="p-6 overflow-y-auto flex-1">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
