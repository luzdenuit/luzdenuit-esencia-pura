import AdminLayout from "@/components/AdminLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Package, Receipt, Users, TrendingUp } from "lucide-react";

export default function AdminDashboard() {
  const stats = [
    {
      title: "Pedidos totales",
      value: "156",
      icon: <Receipt className="h-5 w-5" />,
      trend: "+12% este mes"
    },
    {
      title: "Productos activos",
      value: "24",
      icon: <Package className="h-5 w-5" />,
      trend: "8 colecciones"
    },
    {
      title: "Clientes",
      value: "89",
      icon: <Users className="h-5 w-5" />,
      trend: "+8 nuevos"
    },
    {
      title: "Ingresos",
      value: "$12,450",
      icon: <TrendingUp className="h-5 w-5" />,
      trend: "+18% este mes"
    }
  ];

  const recentOrders = [
    { id: "#001", customer: "Ana García", total: "$89.00", status: "Completado" },
    { id: "#002", customer: "Carlos Ruiz", total: "$125.00", status: "Pendiente" },
    { id: "#003", customer: "María López", total: "$65.00", status: "En proceso" },
    { id: "#004", customer: "José Martínez", total: "$210.00", status: "Completado" }
  ];

  return (
    <AdminLayout>
      <div className="space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-serif font-bold text-foreground">Dashboard</h1>
          <p className="text-muted-foreground mt-2">Bienvenido al panel de administración</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="border-border">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {stat.title}
                </CardTitle>
                <div className="text-primary">{stat.icon}</div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                <p className="text-xs text-muted-foreground mt-1">{stat.trend}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Recent Orders */}
        <Card className="border-border">
          <CardHeader>
            <CardTitle className="text-xl font-serif">Pedidos recientes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentOrders.map((order) => (
                <div 
                  key={order.id} 
                  className="flex items-center justify-between p-4 rounded-lg bg-accent/30 hover:bg-accent/50 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="font-mono text-sm font-medium text-muted-foreground">
                      {order.id}
                    </div>
                    <div>
                      <div className="font-medium text-foreground">{order.customer}</div>
                      <div className="text-sm text-muted-foreground">{order.total}</div>
                    </div>
                  </div>
                  <div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      order.status === "Completado" 
                        ? "bg-primary/10 text-primary" 
                        : order.status === "Pendiente"
                        ? "bg-yellow-500/10 text-yellow-700 dark:text-yellow-500"
                        : "bg-blue-500/10 text-blue-700 dark:text-blue-500"
                    }`}>
                      {order.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
}
