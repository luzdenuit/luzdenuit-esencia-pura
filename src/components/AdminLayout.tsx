import { useState } from "react";
import { NavLink } from "react-router-dom";
import { 
  LayoutDashboard, 
  Package, 
  Tags, 
  LogOut, 
  Settings,
  Receipt,
  Flame,
  Menu,
  X,
  Search,
  Bell,
  ChevronLeft
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface AdminLinkProps {
  to: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  collapsed: boolean;
}

function AdminLink({ to, icon, children, collapsed }: AdminLinkProps) {
  return (
    <NavLink
      to={to}
      end
    >
      {({ isActive }) => (
        <div
          className={`group relative flex items-center ${collapsed ? 'justify-center' : 'gap-4'} px-4 py-3 rounded-lg transition-all duration-300 overflow-hidden
          ${
            isActive
              ? "bg-gradient-to-r from-primary/20 to-primary/10 text-primary font-medium shadow-sm"
              : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
          }`}
        >
          {/* Hover effect background */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* Icon with scale animation */}
          <div className="relative z-10 transition-transform duration-300 group-hover:scale-110">
            {icon}
          </div>
          
          {/* Text */}
          {!collapsed && <span className="relative z-10">{children}</span>}
          
          {/* Tooltip for collapsed state */}
          {collapsed && (
            <div className="absolute left-full ml-2 px-2 py-1 bg-popover text-popover-foreground text-sm rounded-md opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap shadow-lg z-50">
              {children}
            </div>
          )}
          
          {/* Active indicator */}
          {isActive && (
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-primary rounded-r-full animate-scale-in" />
          )}
        </div>
      )}
    </NavLink>
  );
}

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleLogout = () => {
    window.location.href = "/login";
  };

  return (
    <div className="flex min-h-screen w-full bg-background">

      {/* Mobile Overlay */}
      {mobileOpen && (
        <div 
          className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside 
        className={`${collapsed ? 'w-20' : 'w-72'} ${mobileOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'} fixed lg:static inset-y-0 left-0 z-50 bg-gradient-to-b from-card via-card to-card/95 shadow-xl border-r border-border/50 backdrop-blur-sm transition-all duration-300 ease-in-out`}
      >
        {/* Header con logo */}
        <div className="px-6 py-6 border-b border-border/50 flex items-center justify-between">
          <div className="flex items-center gap-3 overflow-hidden">
            <div className="p-2 rounded-lg bg-gradient-to-br from-primary/20 to-primary/10 shadow-sm shrink-0">
              <Flame className="h-6 w-6 text-primary" />
            </div>
            {!collapsed && (
              <div className="animate-fade-in">
                <h1 className="text-xl font-serif font-bold text-foreground tracking-wide">
                  Luz de Nuit
                </h1>
                <p className="text-xs text-muted-foreground">Panel admin</p>
              </div>
            )}
          </div>
          
          {/* Close button for mobile */}
          <button
            onClick={() => setMobileOpen(false)}
            className="lg:hidden p-2 hover:bg-accent rounded-lg transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Collapse toggle */}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="hidden lg:flex absolute -right-3 top-20 z-10 h-6 w-6 items-center justify-center rounded-full bg-card border border-border shadow-md hover:shadow-lg transition-all hover:scale-110"
        >
          <ChevronLeft size={14} className={`transition-transform duration-300 ${collapsed ? 'rotate-180' : ''}`} />
        </button>

        {/* Navigation */}
        <nav className="flex-1 px-4 py-6 space-y-8">
          <div className="space-y-2">
            {!collapsed && <p className="px-4 text-xs font-medium text-muted-foreground uppercase tracking-wider">Principal</p>}
            
            <AdminLink to="/admin" icon={<LayoutDashboard size={20} />} collapsed={collapsed}>
              Dashboard
            </AdminLink>

            <AdminLink to="/admin/pedidos" icon={<Receipt size={20} />} collapsed={collapsed}>
              Pedidos
            </AdminLink>

            <AdminLink to="/admin/productos" icon={<Package size={20} />} collapsed={collapsed}>
              Productos
            </AdminLink>

            <AdminLink to="/admin/categorias" icon={<Tags size={20} />} collapsed={collapsed}>
              Categorías
            </AdminLink>
          </div>

          {/* Separator */}
          <div className="h-px bg-border/50" />

          {/* Settings */}
          <div className="space-y-2">
            {!collapsed && <p className="px-4 text-xs font-medium text-muted-foreground uppercase tracking-wider">Sistema</p>}
            
            <AdminLink to="/admin/settings" icon={<Settings size={20} />} collapsed={collapsed}>
              Configuración
            </AdminLink>

            <button
              onClick={handleLogout}
              className={`group relative w-full flex items-center ${collapsed ? 'justify-center' : 'gap-4'} px-4 py-3 rounded-lg text-destructive hover:bg-destructive/10 transition-all duration-300 overflow-hidden`}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-destructive/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10 transition-transform duration-300 group-hover:scale-110">
                <LogOut size={20} />
              </div>
              {!collapsed && <span className="relative z-10 font-medium">Cerrar sesión</span>}
              
              {/* Tooltip for collapsed state */}
              {collapsed && (
                <div className="absolute left-full ml-2 px-2 py-1 bg-popover text-popover-foreground text-sm rounded-md opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap shadow-lg z-50">
                  Cerrar sesión
                </div>
              )}
            </button>
          </div>
        </nav>

        {/* Footer del sidebar */}
        {!collapsed && (
          <div className="px-6 py-4 border-t border-border/50 animate-fade-in">
            <div className="flex items-center gap-3 p-3 rounded-lg bg-accent/30 hover:bg-accent/40 transition-colors cursor-pointer">
              <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center text-primary-foreground font-serif font-bold shrink-0">
                A
              </div>
              <div className="flex-1 overflow-hidden">
                <p className="text-sm font-medium text-foreground truncate">Admin</p>
                <p className="text-xs text-muted-foreground truncate">admin@luzdenuit.com</p>
              </div>
            </div>
          </div>
        )}
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top Header */}
        <header className="sticky top-0 z-30 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="flex h-16 items-center gap-4 px-6">
            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setMobileOpen(true)}
            >
              <Menu size={20} />
            </Button>

            {/* Search */}
            <div className="flex-1 max-w-md">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Buscar productos, pedidos..."
                  className="pl-9 bg-accent/50 border-border/50 focus-visible:ring-primary/20"
                />
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" className="relative">
                <Bell size={20} />
                <span className="absolute top-2 right-2 h-2 w-2 bg-primary rounded-full animate-pulse" />
              </Button>
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 p-6 lg:p-8 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
