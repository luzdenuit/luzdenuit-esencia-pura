import { NavLink } from "react-router-dom";
import { 
  LayoutDashboard, 
  Package, 
  Tags, 
  LogOut, 
  Settings,
  Receipt 
} from "lucide-react";
import { supabase } from "@/lib/supabaseClient";

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
      className={({ isActive }) =>
        `flex items-center gap-3 px-3 py-2.5 rounded-md transition-colors duration-200
        ${
          isActive
            ? "bg-primary/10 text-primary font-medium"
            : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
        }`
      }
    >
      {icon}
      {children}
    </NavLink>
  );
}

export default function AdminLayout({ children }: { children: React.ReactNode }) {

  const handleLogout = async () => {
    await supabase.auth.signOut();
    window.location.href = "/login";
  };

  return (
    <div className="flex min-h-screen w-full bg-background">

      {/* Sidebar */}
      <aside className="w-64 bg-card shadow-sm border-r border-border">
        <div className="px-6 py-6 border-b border-border">
          <h1 className="text-2xl font-serif font-bold text-primary">Admin • Nuit</h1>
        </div>

        <nav className="mt-6 flex flex-col gap-1 px-4">
          <AdminLink to="/admin" icon={<LayoutDashboard size={18} />}>
            Dashboard
          </AdminLink>

          <AdminLink to="/admin/pedidos" icon={<Receipt size={18} />}>
            Pedidos
          </AdminLink>

          <AdminLink to="/admin/productos" icon={<Package size={18} />}>
            Productos
          </AdminLink>

          <AdminLink to="/admin/categorias" icon={<Tags size={18} />}>
            Categorías
          </AdminLink>

          <AdminLink to="/admin/settings" icon={<Settings size={18} />}>
            Configuración
          </AdminLink>

          <button
            onClick={handleLogout}
            className="mt-6 flex items-center gap-3 px-3 py-2.5 rounded-md text-destructive hover:bg-destructive/10 transition-colors duration-200"
          >
            <LogOut size={18} /> 
            Cerrar sesión
          </button>
        </nav>
      </aside>

      {/* Contenido principal */}
      <main className="flex-1 p-8 overflow-auto">
        {children}
      </main>
    </div>
  );
}
