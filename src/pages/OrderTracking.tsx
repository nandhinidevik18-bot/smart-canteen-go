import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Clock, ChefHat, Package } from "lucide-react";

const OrderTracking = () => {
  const orderStatus = [
    { 
      id: 1, 
      label: "Order Placed", 
      completed: true, 
      icon: CheckCircle2,
      time: "2:30 PM" 
    },
    { 
      id: 2, 
      label: "Preparing", 
      completed: true, 
      icon: ChefHat,
      time: "2:35 PM" 
    },
    { 
      id: 3, 
      label: "Ready for Pickup", 
      completed: false, 
      icon: Package,
      time: "Estimated: 2:45 PM" 
    },
  ];

  const currentStep = orderStatus.findIndex(step => !step.completed);

  return (
    <div className="min-h-screen bg-background">
      {/* Success Header */}
      <div className="gradient-hero p-8 text-center shadow-medium">
        <div className="max-w-2xl mx-auto">
          <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle2 className="w-12 h-12 text-primary" />
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">Order Confirmed!</h1>
          <p className="text-white/90 text-lg">Order #12345</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Order Status */}
        <Card className="mb-6">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <Clock className="w-6 h-6 mr-2 text-primary" />
              Estimated Time: 5-10 minutes
            </h2>

            <div className="relative">
              {orderStatus.map((status, index) => (
                <div key={status.id} className="relative flex items-start mb-8 last:mb-0">
                  {/* Connector Line */}
                  {index < orderStatus.length - 1 && (
                    <div 
                      className={`absolute left-6 top-12 w-0.5 h-16 ${
                        status.completed ? 'bg-primary' : 'bg-border'
                      }`}
                    />
                  )}
                  
                  {/* Status Icon */}
                  <div 
                    className={`relative z-10 w-12 h-12 rounded-full flex items-center justify-center ${
                      status.completed 
                        ? 'bg-primary text-white' 
                        : index === currentStep
                        ? 'bg-primary/20 text-primary animate-pulse'
                        : 'bg-muted text-muted-foreground'
                    }`}
                  >
                    <status.icon className="w-6 h-6" />
                  </div>

                  {/* Status Info */}
                  <div className="ml-6 flex-1">
                    <h3 className={`font-semibold text-lg ${
                      status.completed ? 'text-foreground' : 'text-muted-foreground'
                    }`}>
                      {status.label}
                    </h3>
                    <p className="text-sm text-muted-foreground">{status.time}</p>
                    {index === currentStep && (
                      <p className="text-sm text-primary font-medium mt-1">In Progress...</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Order Details */}
        <Card className="mb-6">
          <CardContent className="p-6">
            <h3 className="font-bold text-lg mb-4">Order Items</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-muted-foreground">2x Veg Thali</span>
                <span className="font-medium">₹240</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">3x Samosa (2pc)</span>
                <span className="font-medium">₹90</span>
              </div>
              <div className="border-t pt-3 flex justify-between text-lg font-bold">
                <span>Total Paid</span>
                <span className="text-primary">₹330</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="grid md:grid-cols-2 gap-4">
          <Link to="/dashboard" className="w-full">
            <Button variant="outline" size="lg" className="w-full">
              Back to Dashboard
            </Button>
          </Link>
          <Link to="/orders" className="w-full">
            <Button variant="default" size="lg" className="w-full">
              View All Orders
            </Button>
          </Link>
        </div>

        {/* Info Box */}
        <Card className="mt-6 bg-secondary">
          <CardContent className="p-6 text-center">
            <p className="text-sm text-muted-foreground">
              You'll receive a notification when your order is ready for pickup at the counter
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default OrderTracking;
