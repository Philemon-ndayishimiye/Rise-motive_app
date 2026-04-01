import { Outlet, NavLink } from "react-router-dom";
import logo from "../assets/logo.jpg";
import { cn } from "../lib/utils";
import {
  NavigationMenu,
  NavigationMenuItem,
  // NavigationMenuLink,
  NavigationMenuList,
} from "../components/ui/navigation-menu";
import { navigationMenuTriggerStyle } from "../components/ui/navigation-menu.styles";
import { User, Menu, X } from "lucide-react";
import { useState } from "react";
import Footer from "@/components/ui/Footer";

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  cn(navigationMenuTriggerStyle({ active: isActive }));

const navItems = [
  { to: "/", label: "Who We Are", end: true },
  { to: "/cluster", label: "Clusters" },
  { to: "/model", label: "Our Model" },
];

const RootLayout = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-white z-50">
      {/* HEADER */}
      <header className="sticky top-0 z-50 py-2 bg-white/95 backdrop-blur-md border-blue-5 ">
        <div className="max-w-7xl mx-auto h-16 flex items-center justify-between px-6">
          {/* LEFT: Logo */}
          <NavLink to="/" className="flex items-center gap-3 shrink-0 group">
            <div className="relative">
              <img
                src={logo}
                alt="Risemotive Logo"
                className="h-10 w-10 object-contain  group-hover:ring-blue-300 transition-all duration-300"
              />
            </div>
            <div className="leading-tight">
              <h2 className="font-extrabold text-[17px] tracking-wide text-[#1E3A8A] group-hover:text-blue-500 transition-colors duration-200 pb-2">
                RISEMOTIVE
              </h2>
              <p className="text-[11px] font-medium text-blue-400 tracking-wide">
                Building Skills. Delivering Solutions
              </p>
            </div>
          </NavLink>

          {/* CENTER: Desktop Navigation */}
          {/* CENTER: Desktop Navigation */}
          <div className="hidden md:flex flex-1 justify-center">
            <NavigationMenu>
              <NavigationMenuList className="gap-1">
                {navItems.map(({ to, label, end }) => (
                  <NavigationMenuItem key={to}>
                    <NavLink to={to} end={end} className={navLinkClass}>
                      {label}
                    </NavLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          {/* RIGHT: Login + Mobile Toggle */}
          <div className="flex items-center gap-3">
            {/* Portal Login Button */}
            <button className="hidden sm:flex items-center gap-2 px-4 py-2 text-sm font-medium text-[#1E3A8A] border border-blue-300 rounded-xl hover:bg-blue-50 hover:border-blue-400 active:scale-95 transition-all duration-200">
              <User className="w-4 h-4 text-blue-400" />
              Portal Login
            </button>

            {/* Mobile Hamburger */}
            <button
              className="md:hidden p-2 rounded-lg text-[#1E3A8A] hover:bg-blue-50 transition"
              onClick={() => setMobileOpen((prev) => !prev)}
              aria-label="Toggle navigation"
            >
              {mobileOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* MOBILE NAV DROPDOWN */}
        {mobileOpen && (
          <div className="md:hidden border-t border-blue-100 bg-white px-6 pb-4 flex flex-col gap-1 animate-in slide-in-from-top-2 duration-200">
            {navItems.map(({ to, label, end }) => (
              <NavLink
                key={to}
                to={to}
                end={end}
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) =>
                  cn(
                    "px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200",
                    isActive
                      ? "bg-blue-300 text-white"
                      : "text-[#1E3A8A] hover:bg-blue-50 hover:text-blue-500",
                  )
                }
              >
                {label}
              </NavLink>
            ))}

            {/* Mobile Portal Login */}
            <button className="mt-2 flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-[#1E3A8A] border border-blue-300 rounded-xl hover:bg-blue-50 transition w-full">
              <User className="w-4 h-4 text-blue-400" />
              Portal Login
            </button>
          </div>
        )}
      </header>

      {/* MAIN CONTENT */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* FOOTER */}
      <footer className=" border-blue-100 bg-[#F8FAFF]">
        <Footer />
      </footer>
    </div>
  );
};

export default RootLayout;
