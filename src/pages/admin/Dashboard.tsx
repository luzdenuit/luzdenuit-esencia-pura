import { motion } from "framer-motion";
import AdminLayout from "@/components/AdminLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Package, Receipt, Users, TrendingUp, ArrowUpRight, ArrowDownRight, MoreVertical, Eye } from "lucide-react";

export default function AdminDashboard() {
  const stats = [
    {
      title: "Pedidos totales",
      value: "156",
      icon: Receipt,
      trend: { value: "+12%", positive: true },
      subtitle: "este mes",
      color: "from-blue-500/20 to-blue-500/5"
    },
    {
      title: "Productos activos",
      value: "24",
      icon: Package,
      trend: { value: "8", positive: true },
      subtitle: "colecciones",
      color: "from-primary/20 to-primary/5"
    },
    {
      title: "Clientes",
      value: "89",
      icon: Users,
      trend: { value: "+8", positive: true },
      subtitle: "nuevos",
      color: "from-purple-500/20 to-purple-500/5"
    },
    {
      title: "Ingresos",
      value: "$12,450",
      icon: TrendingUp,
      trend: { value: "+18%", positive: true },
      subtitle: "este mes",
      color: "from-green-500/20 to-green-500/5"
    }
  ];

  const recentOrders = [
    { id: "#001", customer: "Ana García", product: "Vela Ritual Noche", total: "$89.00", status: "Completado", time: "Hace 5 min" },
    { id: "#002", customer: "Carlos Ruiz", product: "Vela Especiada", total: "$125.00", status: "Pendiente", time: "Hace 1 hora" },
    { id: "#003", customer: "María López", product: "Vela Fresca", total: "$65.00", status: "En proceso", time: "Hace 2 horas" },
    { id: "#004", customer: "José Martínez", product: "Set de 3 velas", total: "$210.00", status: "Completado", time: "Hace 3 horas" },
    { id: "#005", customer: "Laura Sánchez", product: "Vela Ritual Noche", total: "$89.00", status: "En proceso", time: "Hace 5 horas" }
  ];

  const topProducts = [
    { name: "Vela Ritual Noche", sales: 45, revenue: "$4,005", trend: "+23%" },
    { name: "Vela Especiada", sales: 38, revenue: "$4,750", trend: "+18%" },
    { name: "Vela Fresca", sales: 29, revenue: "$1,885", trend: "+12%" },
    { name: "Set de 3 velas", sales: 22, revenue: "$4,620", trend: "+31%" }
  ];

  const statusColors = {
    "Completado": "bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-500/20",
    "Pendiente": "bg-yellow-500/10 text-yellow-700 dark:text-yellow-400 border-yellow-500/20",
    "En proceso": "bg-blue-500/10 text-blue-700 dark:text-blue-400 border-blue-500/20"
  };

  return (
    <AdminLayout>
      <div className="space-y-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-serif font-bold text-foreground">Dashboard</h1>
              <p className="text-muted-foreground mt-1">Visión general de tu tienda</p>
            </div>
            <Button className="gap-2 shadow-sm hover:shadow-md transition-shadow">
              <Eye size={16} />
              Ver tienda
            </Button>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Card className="border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                <CardHeader className="flex flex-row items-center justify-between pb-2 relative z-10">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    {stat.title}
                  </CardTitle>
                  <div className="p-2 rounded-lg bg-gradient-to-br from-primary/10 to-primary/5 group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className="h-5 w-5 text-primary" />
                  </div>
                </CardHeader>
                <CardContent className="relative z-10">
                  <div className="text-3xl font-bold text-foreground mb-1">{stat.value}</div>
                  <div className="flex items-center gap-2 text-xs">
                    <span className={`flex items-center gap-1 font-medium ${stat.trend.positive ? 'text-emerald-600 dark:text-emerald-400' : 'text-red-600 dark:text-red-400'}`}>
                      {stat.trend.positive ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
                      {stat.trend.value}
                    </span>
                    <span className="text-muted-foreground">{stat.subtitle}</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Recent Orders */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.4 }}
          >
            <Card className="border-border shadow-sm">
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle className="text-xl font-serif">Pedidos recientes</CardTitle>
                  <p className="text-sm text-muted-foreground mt-1">Últimos pedidos realizados</p>
                </div>
                <Button variant="ghost" size="icon">
                  <MoreVertical size={18} />
                </Button>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {recentOrders.map((order, index) => (
                    <motion.div
                      key={order.id}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.2, delay: 0.5 + index * 0.05 }}
                      className="group flex items-center justify-between p-4 rounded-lg border border-border/50 hover:border-primary/30 hover:bg-accent/30 transition-all duration-200 cursor-pointer"
                    >
                      <div className="flex items-center gap-4 flex-1 min-w-0">
                        <div className="font-mono text-sm font-medium text-primary bg-primary/10 px-2 py-1 rounded">
                          {order.id}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="font-medium text-foreground group-hover:text-primary transition-colors truncate">
                            {order.customer}
                          </div>
                          <div className="text-sm text-muted-foreground truncate">{order.product}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="text-right hidden sm:block">
                          <div className="font-semibold text-foreground">{order.total}</div>
                          <div className="text-xs text-muted-foreground">{order.time}</div>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium border whitespace-nowrap ${statusColors[order.status as keyof typeof statusColors]}`}>
                          {order.status}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Top Products */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.4 }}
          >
            <Card className="border-border shadow-sm">
              <CardHeader>
                <CardTitle className="text-xl font-serif">Productos populares</CardTitle>
                <p className="text-sm text-muted-foreground mt-1">Los más vendidos</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {topProducts.map((product, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2, delay: 0.6 + index * 0.05 }}
                      className="group flex items-center gap-3 p-3 rounded-lg hover:bg-accent/50 transition-colors cursor-pointer"
                    >
                      <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center font-bold text-primary group-hover:scale-110 transition-transform shrink-0">
                        {index + 1}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-medium text-foreground truncate">{product.name}</div>
                        <div className="text-sm text-muted-foreground">{product.sales} ventas</div>
                      </div>
                      <div className="text-right">
                        <div className="font-semibold text-foreground">{product.revenue}</div>
                        <div className="text-xs text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                          <ArrowUpRight size={12} />
                          {product.trend}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </AdminLayout>
  );
}
