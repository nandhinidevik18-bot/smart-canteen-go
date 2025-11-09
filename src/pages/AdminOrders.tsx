import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, Clock, CheckCircle2, Package, User } from "lucide-react";

const AdminOrders = () => {
  const [orders, setOrders] = useState([
    {
      id: "12348",
      student: "John Smith",
      studentId: "MEC2024001",
      items: ["2x Veg Thali", "1x Cold Coffee"],
      total: 300,
      status: "preparing",
      time: "2:45 PM",
    },
    {
      id: "12347",
      student: "Sarah Lee",
      studentId: "MEC2024002",
      items: ["1x Chicken Biryani", "2x Samosa"],
      total: 200,
      status: "preparing",
      time: "2:40 PM",
    },
    {
      id: "12346",
      student: "Mike Johnson",
      studentId: "MEC2024003",
      items: ["3x Samosa", "1x Mango Smoothie"],
      total: 160,
      status: "ready",
      time: "2:30 PM",
    },
    {
      id: "12345",
      student: "Emily Davis",
      studentId: "MEC2024004",
      items: ["1x Pancake Stack", "1x Coffee"],
      total: 120,
      status: "completed",
      time: "2:15 PM",
    },
  ]);

  const updateOrderStatus = (orderId: string, newStatus: string) => {
    setOrders(prev =>
      prev.map(order =>
        order.id === orderId ? { ...order, status: newStatus } : order
      )
    );
  };

  const getStatusConfig = (status: string) => {
    switch (status) {
      case "preparing":
        return { label: "Preparing", icon: Clock, color: "bg-primary" };
      case "ready":
        return { label: "Ready", icon: Package, color: "bg-accent" };
      case "completed":
        return { label: "Completed", icon: CheckCircle2, color: "bg-green-600" };
      default:
        return { label: status, icon: Clock, color: "bg-muted" };
    }
  };

  const filterOrders = (status: string) => {
    if (status === "all") return orders;
    return orders.filter(order => order.status === status);
  };

  const OrderCard = ({ order }: { order: typeof orders[0] }) => {
    const statusConfig = getStatusConfig(order.status);
    const StatusIcon = statusConfig.icon;

    return (
      <Card className="hover:shadow-medium transition-smooth">
        <CardContent className="p-6">
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <h3 className="font-bold text-xl">Order #{order.id}</h3>
                <Badge className={statusConfig.color}>
                  <StatusIcon className="w-3 h-3 mr-1" />
                  {statusConfig.label}
                </Badge>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
                <User className="w-4 h-4" />
                <span>{order.student}</span>
                <span className="text-xs">({order.studentId})</span>
              </div>
              <p className="text-sm text-muted-foreground">{order.time}</p>
            </div>
            <div className="text-right">
              <p className="text-2xl font-bold text-primary">₹{order.total}</p>
            </div>
          </div>

          <div className="mb-4 p-3 bg-muted rounded-lg">
            <p className="text-sm font-medium mb-2">Order Items:</p>
            {order.items.map((item, index) => (
              <p key={index} className="text-sm text-muted-foreground">
                • {item}
              </p>
            ))}
          </div>

          <div className="flex gap-2">
            {order.status === "preparing" && (
              <Button
                variant="default"
                className="flex-1"
                onClick={() => updateOrderStatus(order.id, "ready")}
              >
                Mark as Ready
              </Button>
            )}
            {order.status === "ready" && (
              <Button
                variant="default"
                className="flex-1 bg-green-600 hover:bg-green-700"
                onClick={() => updateOrderStatus(order.id, "completed")}
              >
                Mark as Completed
              </Button>
            )}
            {order.status === "completed" && (
              <Button variant="outline" className="flex-1" disabled>
                Order Completed
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    );
  };

  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Header */}
      <div className="gradient-hero p-6 shadow-medium">
        <div className="max-w-7xl mx-auto">
          <Link to="/admin">
            <Button variant="ghost" className="text-white hover:bg-white/20 mb-4">
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Dashboard
            </Button>
          </Link>
          <h1 className="text-3xl font-bold text-white">Order Management</h1>
          <p className="text-white/90 mt-2">View and manage all orders</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6">
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-6">
            <TabsTrigger value="all">
              All ({orders.length})
            </TabsTrigger>
            <TabsTrigger value="preparing">
              Preparing ({filterOrders("preparing").length})
            </TabsTrigger>
            <TabsTrigger value="ready">
              Ready ({filterOrders("ready").length})
            </TabsTrigger>
            <TabsTrigger value="completed">
              Completed ({filterOrders("completed").length})
            </TabsTrigger>
          </TabsList>

          {["all", "preparing", "ready", "completed"].map((status) => (
            <TabsContent key={status} value={status}>
              <div className="grid md:grid-cols-2 gap-6">
                {filterOrders(status).map((order) => (
                  <OrderCard key={order.id} order={order} />
                ))}
              </div>
              {filterOrders(status).length === 0 && (
                <Card className="p-12 text-center">
                  <Package className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                  <p className="text-xl text-muted-foreground">No {status} orders</p>
                </Card>
              )}
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
};

export default AdminOrders;
