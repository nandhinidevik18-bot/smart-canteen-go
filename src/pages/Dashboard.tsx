import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import dashboardHero from "@/assets/dashboard-hero.jpg";
import breakfastImg from "@/assets/breakfast.jpg";
import lunchImg from "@/assets/lunch.jpg";
import snacksImg from "@/assets/snacks.jpg";
import { 
  UtensilsCrossed, 
  ShoppingBag, 
  Wallet, 
  Tag,
  Clock,
  TrendingUp
} from "lucide-react";

const Dashboard = () => {
  const quickLinks = [
    { icon: UtensilsCrossed, label: "View Menu", href: "/menu", color: "text-primary" },
    { icon: ShoppingBag, label: "My Orders", href: "/orders", color: "text-accent" },
    { icon: Wallet, label: "Wallet", href: "/profile", color: "text-green-600" },
    { icon: Tag, label: "Offers", href: "/menu", color: "text-destructive" },
  ];

  const specials = [
    { name: "Breakfast Combo", price: "₹80", image: breakfastImg, tag: "Popular" },
    { name: "Lunch Thali", price: "₹120", image: lunchImg, tag: "Best Seller" },
    { name: "Snack Pack", price: "₹60", image: snacksImg, tag: "New" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative h-64 overflow-hidden">
        <img 
          src={dashboardHero} 
          alt="Canteen Hero" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 gradient-hero opacity-90"></div>
        <div className="absolute inset-0 flex flex-col justify-center px-6">
          <h1 className="text-4xl font-bold text-white mb-2">
            Welcome, Student! 👋
          </h1>
          <p className="text-white/90 text-lg">
            Order smart, eat fresh
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Quick Actions */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 -mt-12 relative z-10">
          {quickLinks.map((link) => (
            <Link key={link.href} to={link.href}>
              <Card className="hover:shadow-medium transition-smooth cursor-pointer gradient-card">
                <CardContent className="p-6 text-center">
                  <link.icon className={`w-8 h-8 mx-auto mb-3 ${link.color}`} />
                  <p className="font-medium text-sm">{link.label}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* Today's Specials */}
        <section className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <TrendingUp className="text-primary" />
              Today's Specials
            </h2>
            <Link to="/menu">
              <Button variant="ghost" size="sm">View All</Button>
            </Link>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {specials.map((item) => (
              <Card key={item.name} className="overflow-hidden hover:shadow-medium transition-smooth group">
                <div className="relative h-48">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
                  />
                  <div className="absolute top-3 right-3">
                    <span className="bg-primary text-white px-3 py-1 rounded-full text-xs font-semibold">
                      {item.tag}
                    </span>
                  </div>
                </div>
                <CardContent className="p-4">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="font-semibold text-lg">{item.name}</h3>
                    <span className="text-primary font-bold text-lg">{item.price}</span>
                  </div>
                  <Button variant="default" className="w-full">
                    Add to Cart
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Quick Stats */}
        <div className="grid md:grid-cols-3 gap-4">
          <Card className="gradient-card">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary/10 rounded-full">
                  <Clock className="text-primary w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Avg. Wait Time</p>
                  <p className="text-2xl font-bold">5-10 min</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="gradient-card">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-accent/10 rounded-full">
                  <ShoppingBag className="text-accent w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Total Orders</p>
                  <p className="text-2xl font-bold">24</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="gradient-card">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-green-500/10 rounded-full">
                  <Wallet className="text-green-600 w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Wallet Balance</p>
                  <p className="text-2xl font-bold">₹500</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* CTA */}
        <div className="mt-8 text-center gradient-hero rounded-2xl p-12 shadow-strong">
          <h2 className="text-3xl font-bold text-white mb-4">
            Hungry? Let's Order! 🍔
          </h2>
          <p className="text-white/90 mb-6 text-lg">
            Browse our delicious menu and place your order now
          </p>
          <Link to="/menu">
            <Button variant="secondary" size="lg" className="text-lg px-8">
              Browse Menu
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
