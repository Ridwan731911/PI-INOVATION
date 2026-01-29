import { useLocation, useNavigate } from "react-router-dom";
import { LayoutDashboard, Lightbulb, PanelLeftClose, PanelLeftOpen } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,

  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarGroup,
} from "@/components/ui/sidebar";
import { useSidebar } from "@/components/ui/sidebar-context";

const menuItems = [
  { label: "Dashboard", icon: LayoutDashboard, path: "/dashboard" },
  { label: "Inovasi", icon: Lightbulb, path: "/inovasi" },
];

export function AppSidebar() {
  const location = useLocation();
  const navigate = useNavigate();
  const { toggleSidebar, open } = useSidebar();

  return (
    <Sidebar collapsible="icon" className="rounded-r-2xl border-none">
      <SidebarHeader className="p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 group-data-[collapsible=icon]:hidden">
            <img src="/logo2.png" alt="Logo" className="h-10" />
            <div className="text-white">
              <h1 className="text-lg font-bold leading-tight">Innovation</h1>
              <p className="text-sm italic text-blue-200">Platform</p>
            </div>
          </div>
          <button
            onClick={toggleSidebar}
            className="rounded-md p-1.5 text-white/70 hover:bg-white/10 hover:text-white"
          >
            {open ? <PanelLeftClose className="size-5" /> : <PanelLeftOpen className="size-5" />}
          </button>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            {menuItems.map((item) => (
              <SidebarMenuItem key={item.path}>
                <SidebarMenuButton
                  isActive={location.pathname === item.path}
                  onClick={() => navigate(item.path)}
                  className="text-white hover:bg-white/20 hover:text-white data-[active=true]:bg-white/20 data-[active=true]:text-white"
                >
                  <item.icon className="size-5" />
                  <span>{item.label}</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
