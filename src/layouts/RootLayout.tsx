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
import { Menu, Search, X } from "lucide-react";
import { useState } from "react";
import Footer from "@/components/ui/Footer";
import TrackingSearch from "@/components/TrackingCodeSearch";

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  cn(navigationMenuTriggerStyle({ active: isActive }));

const navItems = [
  { to: "/", label: "Who We Are", end: true },
  { to: "/TaskSpot", label: "RM TaskSpot" },
  { to: "/ProSpot", label: "RM ProSpot " },
  { to: "/InfoSpot", label: "RM InfoSpot " },
];

const RootLayout = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-white z-50">
      {/* HEADER */}
      <header className="sticky top-0 z-50 py-2 bg-white/95 backdrop-blur-md border-blue-5 ">
        <div className="max-w-7xl mx-auto h-16 flex items-center justify-between px-6">
          {/* LEFT: Logo */}
          <NavLink to="/" className="flex items-center  shrink-0 group">
            <div className="relative">
              <img
                src={logo}
                alt="Risemotive Logo"
                className="h-15 w-15 object-contain  group-hover:ring-blue-300 transition-all duration-300"
              />
            </div>
            <div className="leading-tight">
              <h2 className="font-extrabold text-[17px] tracking-wide text-[#1E3A8A] group-hover:text-blue-500 transition-colors duration-200 pb-2 font-family-playfair">
                RISEMOTIVE
              </h2>
              <p className="text-[11px] font-medium text-blue-400 tracking-wide font-family-playfair"></p>
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
            <button
              onClick={() => setOpenSearch(true)}
              className="hidden sm:flex items-center gap-2 px-4 py-2 text-sm font-medium text-[#1E3A8A] border border-blue-300 rounded-xl hover:bg-blue-50 hover:border-blue-400 active:scale-95 transition-all duration-200 cursor-pointer font-family-playfair"
            >
              <Search className="w-4 h-4 text-blue-400" />
              Track Request
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
                    "px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 font-family-playfair",
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
            <button
              onClick={() => setOpenSearch(true)}
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-[#1E3A8A] border border-blue-300 rounded-xl hover:bg-blue-50 hover:border-blue-400 active:scale-95 transition-all duration-200 cursor-pointer font-family-playfair"
            >
              <Search className="w-4 h-4 text-blue-400" />
              Track Request
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

      {openSearch && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.4)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 9999,
            padding: "20px",
          }}
          onClick={() => setOpenSearch(false)}
        >
          <div
            style={{
              width: "100%",
              maxWidth: "900px",
              background: "#fff",
              borderRadius: "16px",
              padding: "20px",
              boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
              position: "relative",
              maxHeight: "90vh",
              overflowY: "auto",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setOpenSearch(false)}
              style={{
                position: "absolute",
                top: "10px",
                right: "10px",
                background: "#EFF6FF",
                border: "none",
                borderRadius: "8px",
                padding: "6px 10px",
                cursor: "pointer",
                fontWeight: 600,
                color: "#1E3A8A",
              }}
            >
              ✕
            </button>

            {/* Your search component */}
            <TrackingSearch />
          </div>
        </div>
      )}
    </div>
  );
};

export default RootLayout;
