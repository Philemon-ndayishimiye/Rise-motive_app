import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";

import { Bell } from "lucide-react";
//import { Avatar, AvatarImage } from "@/components/ui/avatar";

export default function AdminHeader() {
  return (
    <div className="h-16  flex items-center justify-start pl-[57%]">
      {/* LEFT: Welcome */}
      <h2 className="font-semibold text-lg">Welcome, Admin 👋</h2>

      {/* RIGHT: Menu */}
      <div className="flex items-center gap-6">
        {/* 🔔 Notification */}
        <Bell className="cursor-pointer" />

        {/* 👤 Profile Menu using NavigationMenu */}
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>
                <img
                  src="https://via.placeholder.com/30"
                  className="w-8 h-8 rounded-full cursor-pointer"
                />
              </NavigationMenuTrigger>

              <NavigationMenuContent>
                <ul className="w-37.5 p-2 space-y-1">
                  <li>
                    <NavigationMenuLink>Profile</NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink>Settings</NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink className="text-red-500">
                      Logout
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  );
}
