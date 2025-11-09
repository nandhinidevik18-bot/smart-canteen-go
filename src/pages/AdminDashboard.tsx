import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  ShoppingBag, DollarSign, UtensilsCrossed, 
  TrendingUp, Clock, Package 
} from "lucide-react";

const AdminDashboard = () => {
  const stats = [
    { 
      label: "Total Orders Today", 
      value: "48", 
      icon: ShoppingBag, 
      color: "text-primary",
      bgColor: "bg-primary/10" 
    },
    { 
      label: "Revenue Today", 
      value: "₹5,840", 
      icon: DollarSign, 
      color: "text-green-600",
      bgColor: "bg-green-600/10" 
    },
    { 
      label: "Pending Orders", 
      value: "12", 
      icon: Clock, 
      color: "text-accent",
      bgColor: "bg-accent/10" 
    },
    { 
      label: "Menu Items", 
      value: "45", 
      icon: UtensilsCrossed, 
      color: "text-purple-600",
      bgColor: "bg-purple-600/10" 
    },
  ];

  const recentOrders = [
    { id: "12348", student: "John Smith", items: "2x Veg Thali", total: 240, status: "preparing" },
    { id: "12347", student: "Sarah Lee", items: "1x Biryani, 1x Coffee", total: 200, status: "preparing" },
    { id: "12346", student: "Mike Johnson", items: "3x Samosa", total: 90, status: "ready" },
  ];

  const popularItems = [
    { name: "Veg Thali", orders: 28, revenue: 3360 },
    { name: "Chicken Biryani", orders: 15, revenue: 2100 },
    { name: "Samosa (2pc)", orders: 42, revenue: 1260 },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="gradient-hero p-6 shadow-medium">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">Admin Dashboard</h1>
            <p className="text-white/90">MEC Canteen Management</p>
          </div>
          <Link to="/auth">
            <Button variant="secondary">Logout</Button>
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat) => (
            <Card key={stat.label} className="hover:shadow-medium transition-smooth">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
                    <p className="text-3xl font-bold">{stat.value}</p>
                  </div>
                  <div className={`p-3 rounded-full ${stat.bgColor}`}>
                    <stat.icon className={`w-6 h-6 ${stat.color}`} />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Recent Orders */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <Package className="text-primary" />
                  Recent Orders
                </CardTitle>
                <Link to="/admin/orders">
                  <Button variant="ghost" size="sm">View All</Button>
                </Link>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentOrders.map((order) => (
                  <div 
                    key={order.id} 
                    className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-muted transition-smooth"
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <p className="font-semibold">#{order.id}</p>
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          order.status === "preparing" 
                            ? "bg-primary/10 text-primary" 
                            : "bg-accent/10 text-accent"
                        }`}>
                          {order.status}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground">{order.student}</p>
                      <p className="text-sm">{order.items}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-lg text-primary">₹{order.total}</p>
                      <Link to="/admin/orders">
                        <Button variant="outline" size="sm" className="mt-2">
                          Manage
                        </Button>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Popular Items */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="text-primary" />
                Top Items
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {popularItems.map((item, index) => (
                  <div key={item.name} className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold">{item.name}</p>
                      <p className="text-sm text-muted-foreground">{item.orders} orders</p>
                      <p className="text-sm font-medium text-primary">₹{item.revenue}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <Link to="/admin/menu">
            <Card className="hover:shadow-medium transition-smooth cursor-pointer gradient-card">
              <CardContent className="p-8 text-center">
                <UtensilsCrossed className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Manage Menu</h3>
                <p className="text-muted-foreground">Add, edit, or remove menu items</p>
              </CardContent>
            </Card>
          </Link>
          
          <Link to="/admin/orders">
            <Card className="hover:shadow-medium transition-smooth cursor-pointer gradient-card">
              <CardContent className="p-8 text-center">
                <Package className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Manage Orders</h3>
                <p className="text-muted-foreground">View and update order status</p>
              </CardContent>
            </Card>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
