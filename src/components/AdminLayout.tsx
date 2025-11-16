import { NavLink } from "react-router-dom";
import { 
  LayoutDashboard, 
  Package, 
  Tags, 
  LogOut, 
  Settings,
  Receipt,
  Flame
} from "lucide-react";

interface AdminLinkProps {
  to: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}

function AdminLink({ to, icon, children }: AdminLinkProps) {
  return (
    <NavLink
      to={to}
      end
    >
      {({ isActive }) => (
        <div
          className={`group relative flex items-center gap-4 px-4 py-3 rounded-lg transition-all duration-300 overflow-hidden
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
          <span className="relative z-10">{children}</span>
          
          {/* Active indicator */}
          {isActive && (
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-primary rounded-r-full" />
          )}
        </div>
      )}
    </NavLink>
  );
}

export default function AdminLayout({ children }: { children: React.ReactNode }) {

  const handleLogout = () => {
    // TODO: Conectar con Lovable Cloud para autenticación real
    window.location.href = "/login";
  };

  return (
    <div className="flex min-h-screen w-full bg-background">

      {/* Sidebar */}
      <aside className="w-72 bg-gradient-to-b from-card via-card to-card/95 shadow-xl border-r border-border/50 backdrop-blur-sm">
        
        {/* Header con logo */}
        <div className="px-6 py-8 border-b border-border/50">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-gradient-to-br from-primary/20 to-primary/10 shadow-sm">
              <Flame className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h1 className="text-xl font-serif font-bold text-foreground tracking-wide">
                Luz de Nuit
              </h1>
              <p className="text-xs text-muted-foreground">Panel de administración</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 py-6">
          <div className="space-y-2">
            <AdminLink to="/admin" icon={<LayoutDashboard size={20} />}>
              Dashboard
            </AdminLink>

            <AdminLink to="/admin/pedidos" icon={<Receipt size={20} />}>
              Pedidos
            </AdminLink>

            <AdminLink to="/admin/productos" icon={<Package size={20} />}>
              Productos
            </AdminLink>

            <AdminLink to="/admin/categorias" icon={<Tags size={20} />}>
              Categorías
            </AdminLink>
          </div>

          {/* Separator */}
          <div className="my-6 h-px bg-border/50" />

          {/* Settings */}
          <div className="space-y-2">
            <AdminLink to="/admin/settings" icon={<Settings size={20} />}>
              Configuración
            </AdminLink>

            <button
              onClick={handleLogout}
              className="group relative w-full flex items-center gap-4 px-4 py-3 rounded-lg text-destructive hover:bg-destructive/10 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-destructive/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10 transition-transform duration-300 group-hover:scale-110">
                <LogOut size={20} />
              </div>
              <span className="relative z-10 font-medium">Cerrar sesión</span>
            </button>
          </div>
        </nav>

        {/* Footer del sidebar */}
        <div className="px-6 py-4 border-t border-border/50">
          <div className="flex items-center gap-3 p-3 rounded-lg bg-accent/30">
            <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center text-primary-foreground font-serif font-bold">
              A
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-foreground">Admin</p>
              <p className="text-xs text-muted-foreground">admin@luzdenuit.com</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Contenido principal */}
      <main className="flex-1 p-8 overflow-auto">
        {children}
      </main>
    </div>
  );
}
