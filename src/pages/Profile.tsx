import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { 
  User, Mail, CreditCard, Lock, 
  History, Wallet, Bell, LogOut 
} from "lucide-react";

const Profile = () => {
  const menuItems = [
    { icon: User, label: "Edit Profile", href: "#" },
    { icon: History, label: "Order History", href: "/orders" },
    { icon: Wallet, label: "Wallet & Payments", href: "#" },
    { icon: Bell, label: "Notifications", href: "#" },
    { icon: Lock, label: "Change Password", href: "#" },
  ];

  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Header */}
      <div className="gradient-hero p-6 shadow-medium">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-white mb-2">Profile</h1>
          <p className="text-white/90">Manage your account settings</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-6">
        {/* Profile Card */}
        <Card className="mb-6 gradient-card shadow-medium">
          <CardContent className="p-8 text-center">
            <Avatar className="w-24 h-24 mx-auto mb-4">
              <AvatarFallback className="bg-primary text-white text-3xl font-bold">
                JS
              </AvatarFallback>
            </Avatar>
            <h2 className="text-2xl font-bold mb-1">John Smith</h2>
            <p className="text-muted-foreground mb-4">john.smith@mec.edu</p>
            <div className="flex items-center justify-center gap-2 text-sm">
              <CreditCard className="w-4 h-4 text-primary" />
              <span className="text-muted-foreground">College ID:</span>
              <span className="font-semibold">MEC2024001</span>
            </div>
          </CardContent>
        </Card>

        {/* Wallet Balance */}
        <Card className="mb-6 bg-gradient-to-br from-primary to-accent text-white shadow-medium">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white/80 mb-1">Wallet Balance</p>
                <p className="text-4xl font-bold">₹500</p>
              </div>
              <Wallet className="w-12 h-12 text-white/80" />
            </div>
            <Button 
              variant="secondary" 
              size="sm" 
              className="mt-4"
            >
              Add Money
            </Button>
          </CardContent>
        </Card>

        {/* Menu Options */}
        <Card className="mb-6">
          <CardContent className="p-0">
            {menuItems.map((item, index) => (
              <Link 
                key={item.label} 
                to={item.href}
                className={`flex items-center p-4 hover:bg-muted transition-smooth ${
                  index !== menuItems.length - 1 ? 'border-b' : ''
                }`}
              >
                <div className="p-2 bg-primary/10 rounded-lg mr-4">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <span className="font-medium flex-1">{item.label}</span>
                <svg 
                  className="w-5 h-5 text-muted-foreground" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            ))}
          </CardContent>
        </Card>

        {/* Logout Button */}
        <Link to="/auth">
          <Button 
            variant="destructive" 
            size="lg" 
            className="w-full"
          >
            <LogOut className="w-5 h-5 mr-2" />
            Logout
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Profile;
