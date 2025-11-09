import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowLeft, Plus, Edit, Trash2, 
  Search, ToggleLeft, ToggleRight 
} from "lucide-react";
import breakfastImg from "@/assets/breakfast.jpg";
import lunchImg from "@/assets/lunch.jpg";
import snacksImg from "@/assets/snacks.jpg";

const AdminMenu = () => {
  const [menuItems, setMenuItems] = useState([
    { id: 1, name: "Pancake Stack", price: 60, category: "Breakfast", image: breakfastImg, available: true },
    { id: 2, name: "Veg Thali", price: 120, category: "Lunch", image: lunchImg, available: true },
    { id: 3, name: "Samosa (2pc)", price: 30, category: "Snacks", image: snacksImg, available: false },
  ]);

  const toggleAvailability = (id: number) => {
    setMenuItems(prev => 
      prev.map(item => 
        item.id === id ? { ...item, available: !item.available } : item
      )
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
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-white">Menu Management</h1>
              <p className="text-white/90 mt-2">Manage your canteen menu items</p>
            </div>
            <Button variant="secondary" size="lg">
              <Plus className="w-5 h-5 mr-2" />
              Add New Item
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Search */}
        <Card className="mb-6">
          <CardContent className="p-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <Input
                type="search"
                placeholder="Search menu items..."
                className="pl-10"
              />
            </div>
          </CardContent>
        </Card>

        {/* Menu Items */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {menuItems.map((item) => (
            <Card key={item.id} className="overflow-hidden hover:shadow-medium transition-smooth">
              <div className="relative h-48">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 right-3">
                  <Badge variant={item.available ? "default" : "secondary"}>
                    {item.available ? "Available" : "Unavailable"}
                  </Badge>
                </div>
              </div>
              
              <CardContent className="p-4">
                <div className="mb-3">
                  <h3 className="font-semibold text-lg mb-1">{item.name}</h3>
                  <p className="text-sm text-muted-foreground">{item.category}</p>
                  <p className="text-primary font-bold text-xl mt-2">₹{item.price}</p>
                </div>
                
                <div className="flex gap-2">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex-1"
                    onClick={() => toggleAvailability(item.id)}
                  >
                    {item.available ? (
                      <>
                        <ToggleRight className="w-4 h-4 mr-1" />
                        Disable
                      </>
                    ) : (
                      <>
                        <ToggleLeft className="w-4 h-4 mr-1" />
                        Enable
                      </>
                    )}
                  </Button>
                  <Button variant="outline" size="sm">
                    <Edit className="w-4 h-4" />
                  </Button>
                  <Button variant="outline" size="sm" className="text-destructive hover:text-destructive">
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Add Item Placeholder */}
        <Card className="mt-6 border-2 border-dashed hover:border-primary transition-smooth cursor-pointer">
          <CardContent className="p-12 text-center">
            <Plus className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Add New Menu Item</h3>
            <p className="text-muted-foreground mb-4">Upload images and set pricing</p>
            <Button variant="default" size="lg">
              Add Item
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminMenu;
