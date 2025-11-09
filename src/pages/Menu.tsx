import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import breakfastImg from "@/assets/breakfast.jpg";
import lunchImg from "@/assets/lunch.jpg";
import snacksImg from "@/assets/snacks.jpg";
import beveragesImg from "@/assets/beverages.jpg";
import dessertsImg from "@/assets/desserts.jpg";
import { Search, ShoppingCart, Plus, Minus, Leaf } from "lucide-react";

const Menu = () => {
  const [cart, setCart] = useState<Record<string, number>>({});
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    {
      id: "breakfast",
      name: "Breakfast",
      items: [
        { id: 1, name: "Pancake Stack", price: 60, image: breakfastImg, veg: true, popular: true },
        { id: 2, name: "Masala Dosa", price: 50, image: breakfastImg, veg: true },
        { id: 3, name: "Poha Bowl", price: 40, image: breakfastImg, veg: true },
      ]
    },
    {
      id: "lunch",
      name: "Lunch",
      items: [
        { id: 4, name: "Veg Thali", price: 120, image: lunchImg, veg: true, popular: true },
        { id: 5, name: "Chicken Biryani", price: 140, image: lunchImg, veg: false, popular: true },
        { id: 6, name: "Paneer Curry", price: 100, image: lunchImg, veg: true },
      ]
    },
    {
      id: "snacks",
      name: "Snacks",
      items: [
        { id: 7, name: "Samosa (2pc)", price: 30, image: snacksImg, veg: true, popular: true },
        { id: 8, name: "Veg Sandwich", price: 50, image: snacksImg, veg: true },
        { id: 9, name: "French Fries", price: 60, image: snacksImg, veg: true },
      ]
    },
    {
      id: "beverages",
      name: "Beverages",
      items: [
        { id: 10, name: "Mango Smoothie", price: 70, image: beveragesImg, veg: true, popular: true },
        { id: 11, name: "Cold Coffee", price: 60, image: beveragesImg, veg: true },
        { id: 12, name: "Fresh Lime Juice", price: 40, image: beveragesImg, veg: true },
      ]
    },
    {
      id: "desserts",
      name: "Desserts",
      items: [
        { id: 13, name: "Ice Cream", price: 50, image: dessertsImg, veg: true },
        { id: 14, name: "Brownie", price: 60, image: dessertsImg, veg: true, popular: true },
        { id: 15, name: "Gulab Jamun", price: 40, image: dessertsImg, veg: true },
      ]
    },
  ];

  const updateCart = (itemId: number, delta: number) => {
    setCart(prev => {
      const current = prev[itemId] || 0;
      const newValue = Math.max(0, current + delta);
      if (newValue === 0) {
        const { [itemId]: _, ...rest } = prev;
        return rest;
      }
      return { ...prev, [itemId]: newValue };
    });
  };

  const totalItems = Object.values(cart).reduce((sum, count) => sum + count, 0);

  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Header */}
      <div className="gradient-hero p-6 shadow-medium sticky top-0 z-10">
        <h1 className="text-3xl font-bold text-white mb-4">Our Menu</h1>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
          <Input
            type="search"
            placeholder="Search for dishes..."
            className="pl-10 bg-white"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6">
        <Tabs defaultValue="breakfast" className="w-full">
          <TabsList className="w-full justify-start overflow-x-auto mb-6 flex-nowrap">
            {categories.map((category) => (
              <TabsTrigger key={category.id} value={category.id} className="whitespace-nowrap">
                {category.name}
              </TabsTrigger>
            ))}
          </TabsList>

          {categories.map((category) => (
            <TabsContent key={category.id} value={category.id}>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.items.map((item) => (
                  <Card key={item.id} className="overflow-hidden hover:shadow-medium transition-smooth">
                    <div className="relative h-48">
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-3 left-3 flex gap-2">
                        {item.veg && (
                          <Badge variant="secondary" className="bg-green-500 text-white">
                            <Leaf className="w-3 h-3 mr-1" />
                            Veg
                          </Badge>
                        )}
                        {item.popular && (
                          <Badge className="bg-primary">Popular</Badge>
                        )}
                      </div>
                    </div>
                    
                    <CardContent className="p-4">
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h3 className="font-semibold text-lg">{item.name}</h3>
                          <p className="text-primary font-bold text-xl mt-1">₹{item.price}</p>
                        </div>
                      </div>
                      
                      {cart[item.id] > 0 ? (
                        <div className="flex items-center justify-between bg-primary text-white rounded-lg p-2">
                          <Button
                            variant="ghost"
                            size="icon"
                            className="text-white hover:bg-white/20 h-8 w-8"
                            onClick={() => updateCart(item.id, -1)}
                          >
                            <Minus className="w-4 h-4" />
                          </Button>
                          <span className="font-semibold text-lg">{cart[item.id]}</span>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="text-white hover:bg-white/20 h-8 w-8"
                            onClick={() => updateCart(item.id, 1)}
                          >
                            <Plus className="w-4 h-4" />
                          </Button>
                        </div>
                      ) : (
                        <Button 
                          variant="default" 
                          className="w-full"
                          onClick={() => updateCart(item.id, 1)}
                        >
                          Add to Cart
                        </Button>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>

      {/* Floating Cart Button */}
      {totalItems > 0 && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
          <Button 
            variant="cart" 
            size="lg" 
            className="px-8 py-6 text-lg shadow-strong"
            onClick={() => window.location.href = "/cart"}
          >
            <ShoppingCart className="w-6 h-6 mr-2" />
            View Cart ({totalItems} items)
          </Button>
        </div>
      )}
    </div>
  );
};

export default Menu;
