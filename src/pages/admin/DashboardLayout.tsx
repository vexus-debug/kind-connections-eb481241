import { ReactNode } from "react";
import { Navigate, Link, useLocation } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import {
  Home, FileText, Stethoscope, Users, Phone, Image, Settings,
  LogOut, ChevronRight, LayoutDashboard, Menu, PanelLeft, MessageSquare, Loader2,
  type LucideIcon,
} from "lucide-react";
import { useState } from "react";
import logo from "@/assets/logo.jpg";

interface NavItem { label: string; to: string; icon: LucideIcon }

const navItems: NavItem[] = [
  { label: "Dashboard", to: "/admin", icon: LayoutDashboard },
  { label: "Home Page", to: "/admin/home", icon: Home },
  { label: "Services Page", to: "/admin/services", icon: Stethoscope },
  { label: "About Page", to: "/admin/about", icon: Users },
  { label: "Contact Page", to: "/admin/contact", icon: Phone },
  { label: "Gallery Page", to: "/admin/gallery", icon: Image },
  { label: "Reviews", to: "/admin/reviews", icon: MessageSquare },
  { label: "Header & Footer", to: "/admin/header-footer", icon: PanelLeft },
  { label: "Legal Pages", to: "/admin/legal", icon: FileText },
  { label: "Site Settings", to: "/admin/settings", icon: Settings },
];

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  const { isAuthenticated, isAdmin, user, loading, logout } = useAuth();
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center">
      <Loader2 className="h-8 w-8 animate-spin text-primary" />
    </div>
  );

  if (!isAuthenticated || !isAdmin) return <Navigate to="/admin/login" replace />;

  const isActive = (path: string) => {
    if (path === "/admin") return location.pathname === "/admin";
    return location.pathname.startsWith(path);
  };

  const SidebarContent = () => (
    <div className="flex flex-col h-full">
      <div className="p-5 border-b border-border/50">
        <div className="flex items-center gap-3">
          <img src={logo} alt="Rubi Smile" className="h-10 w-10 rounded-xl object-cover" />
          <div>
            <span className="font-display text-sm font-bold text-foreground block">Rubi Smile</span>
            <span className="font-body text-[10px] text-muted-foreground">Admin Panel</span>
          </div>
        </div>
      </div>

      <nav className="flex-1 overflow-y-auto p-3 space-y-1">
        {navItems.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            onClick={() => setSidebarOpen(false)}
            className={`flex items-center gap-3 rounded-xl px-4 py-3 font-display text-sm font-medium transition-all duration-200 group ${
              isActive(item.to)
                ? "bg-primary text-primary-foreground shadow-sm"
                : "text-muted-foreground hover:bg-muted hover:text-foreground"
            }`}
          >
            <item.icon className="h-4 w-4 shrink-0" />
            <span className="truncate">{item.label}</span>
            {isActive(item.to) && <ChevronRight className="h-3.5 w-3.5 ml-auto" />}
          </Link>
        ))}
      </nav>

      <div className="p-4 border-t border-border/50 space-y-3">
        <div className="flex items-center gap-3 px-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-accent/10 font-display text-sm font-bold text-accent">
            {user?.email?.[0]?.toUpperCase() || "A"}
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-display text-xs font-semibold text-foreground truncate">{user?.email}</p>
            <p className="font-body text-[10px] text-muted-foreground">Administrator</p>
          </div>
        </div>
        <button
          onClick={() => logout()}
          className="w-full flex items-center justify-center gap-2 rounded-xl border border-border px-4 py-2.5 font-display text-xs font-semibold text-muted-foreground hover:text-destructive hover:border-destructive/30 hover:bg-destructive/5 transition-all"
        >
          <LogOut className="h-3.5 w-3.5" /> Sign Out
        </button>
        <Link
          to="/"
          className="w-full flex items-center justify-center gap-2 rounded-xl bg-accent/10 px-4 py-2.5 font-display text-xs font-semibold text-accent hover:bg-accent/20 transition-all"
        >
          View Website
        </Link>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen flex bg-muted/30">
      <aside className="hidden lg:flex w-[260px] shrink-0 flex-col bg-card border-r border-border/50 fixed inset-y-0 left-0 z-40">
        <SidebarContent />
      </aside>

      {sidebarOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-foreground/50 backdrop-blur-sm" onClick={() => setSidebarOpen(false)} />
          <aside className="absolute left-0 top-0 bottom-0 w-[280px] bg-card shadow-elevated">
            <SidebarContent />
          </aside>
        </div>
      )}

      <div className="flex-1 lg:ml-[260px] flex flex-col min-h-screen">
        <header className="sticky top-0 z-30 flex items-center gap-4 bg-card/80 backdrop-blur-md border-b border-border/50 px-6 h-16">
          <button onClick={() => setSidebarOpen(true)} className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors">
            <Menu className="h-5 w-5" />
          </button>
          <h1 className="font-display text-lg font-bold text-foreground">
            {navItems.find((n) => isActive(n.to))?.label || "Dashboard"}
          </h1>
        </header>
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;
