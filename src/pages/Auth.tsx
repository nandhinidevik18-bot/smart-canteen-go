import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import mecLogo from "@/assets/mec-logo.png";
import { UserCircle, ShieldCheck } from "lucide-react";

const Auth = () => {
  const navigate = useNavigate();
  const [isStudent, setIsStudent] = useState(true);

  const handleLogin = (e: React.FormEvent, userType: "student" | "admin") => {
    e.preventDefault();
    // For demo purposes, navigate directly
    if (userType === "student") {
      navigate("/dashboard");
    } else {
      navigate("/admin");
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <Card className="w-full max-w-md shadow-strong">
        <CardHeader className="text-center space-y-4">
          <img 
            src={mecLogo} 
            alt="MEC Canteen" 
            className="w-24 h-24 mx-auto"
          />
          <div>
            <CardTitle className="text-3xl font-bold text-primary">Welcome Back</CardTitle>
            <CardDescription className="text-base mt-2">Order smart, eat fresh</CardDescription>
          </div>
        </CardHeader>
        
        <CardContent>
          <Tabs defaultValue="student" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger value="student" onClick={() => setIsStudent(true)}>
                <UserCircle className="w-4 h-4 mr-2" />
                Student
              </TabsTrigger>
              <TabsTrigger value="admin" onClick={() => setIsStudent(false)}>
                <ShieldCheck className="w-4 h-4 mr-2" />
                Admin
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="student">
              <form onSubmit={(e) => handleLogin(e, "student")} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="student-email">Email</Label>
                  <Input id="student-email" type="email" placeholder="student@mec.edu" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="student-password">Password</Label>
                  <Input id="student-password" type="password" required />
                </div>
                <Button type="submit" className="w-full" size="lg">
                  Sign In
                </Button>
                <div className="text-center space-y-2">
                  <button type="button" className="text-sm text-muted-foreground hover:text-primary transition-smooth">
                    Forgot password?
                  </button>
                  <div className="text-sm">
                    Don't have an account?{" "}
                    <button type="button" className="text-primary font-medium hover:underline">
                      Sign up
                    </button>
                  </div>
                </div>
              </form>
            </TabsContent>
            
            <TabsContent value="admin">
              <form onSubmit={(e) => handleLogin(e, "admin")} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="admin-email">Admin Email</Label>
                  <Input id="admin-email" type="email" placeholder="admin@mec.edu" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="admin-password">Password</Label>
                  <Input id="admin-password" type="password" required />
                </div>
                <Button type="submit" className="w-full" size="lg">
                  Admin Sign In
                </Button>
              </form>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default Auth;
