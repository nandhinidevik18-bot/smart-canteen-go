import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Clock, CheckCircle2, Package } from "lucide-react";

const Orders = () => {
  const orders = [
    {
      id: "12345",
      date: "Today, 2:30 PM",
      items: ["2x Veg Thali", "3x Samosa"],
      total: 330,
      status: "preparing",
    },
    {
      id: "12344",
      date: "Yesterday, 1:15 PM",
      items: ["1x Chicken Biryani", "1x Cold Coffee"],
      total: 200,
      status: "completed",
    },
    {
      id: "12343",
      date: "Mar 15, 12:30 PM",
      items: ["1x Pancake Stack", "1x Orange Juice"],
      total: 100,
      status: "completed",
    },
  ];

  const getStatusConfig = (status: string) => {
    switch (status) {
      case "preparing":
        return {
          label: "Preparing",
          variant: "default" as const,
          icon: Clock,
          color: "text-primary",
        };
      case "ready":
        return {
          label: "Ready",
          variant: "default" as const,
          icon: Package,
          color: "text-accent",
        };
      case "completed":
        return {
          label: "Completed",
          variant: "secondary" as const,
          icon: CheckCircle2,
          color: "text-green-600",
        };
      default:
        return {
          label: status,
          variant: "secondary" as const,
          icon: Clock,
          color: "text-muted-foreground",
        };
    }
  };

  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Header */}
      <div className="gradient-hero p-6 shadow-medium">
        <div className="max-w-4xl mx-auto">
          <Link to="/dashboard">
            <Button variant="ghost" className="text-white hover:bg-white/20 mb-4">
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Dashboard
            </Button>
          </Link>
          <h1 className="text-3xl font-bold text-white">My Orders</h1>
          <p className="text-white/90 mt-2">View your order history</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-6">
        {orders.length === 0 ? (
          <Card className="p-12 text-center">
            <Package className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
            <p className="text-xl text-muted-foreground mb-4">No orders yet</p>
            <Link to="/menu">
              <Button variant="default" size="lg">Order Now</Button>
            </Link>
          </Card>
        ) : (
          <div className="space-y-4">
            {orders.map((order) => {
              const statusConfig = getStatusConfig(order.status);
              const StatusIcon = statusConfig.icon;

              return (
                <Card key={order.id} className="hover:shadow-medium transition-smooth">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="font-bold text-lg">Order #{order.id}</h3>
                          <Badge variant={statusConfig.variant}>
                            <StatusIcon className="w-3 h-3 mr-1" />
                            {statusConfig.label}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">{order.date}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold text-primary">₹{order.total}</p>
                      </div>
                    </div>

                    <div className="space-y-1 mb-4">
                      {order.items.map((item, index) => (
                        <p key={index} className="text-sm text-muted-foreground">
                          {item}
                        </p>
                      ))}
                    </div>

                    <div className="flex gap-3">
                      {order.status === "preparing" && (
                        <Link to="/order-tracking" className="flex-1">
                          <Button variant="default" className="w-full">
                            Track Order
                          </Button>
                        </Link>
                      )}
                      <Button variant="outline" className="flex-1">
                        Reorder
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Orders;
