import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import mecLogo from "@/assets/mec-logo.png";

const Splash = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/auth");
    }, 2500);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen gradient-hero flex flex-col items-center justify-center overflow-hidden">
      <div className="animate-float">
        <img 
          src={mecLogo} 
          alt="MEC Canteen Logo" 
          className="w-48 h-48 mb-8 drop-shadow-2xl"
        />
      </div>
      
      <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 tracking-tight">
        MEC CANTEEN
      </h1>
      
      <p className="text-2xl md:text-3xl text-white/90 font-medium tracking-wide animate-pulse-soft">
        ORDER SMART, EAT FRESH
      </p>
      
      <div className="mt-12 flex space-x-2">
        <div className="w-3 h-3 bg-white rounded-full animate-bounce" style={{ animationDelay: "0ms" }}></div>
        <div className="w-3 h-3 bg-white rounded-full animate-bounce" style={{ animationDelay: "150ms" }}></div>
        <div className="w-3 h-3 bg-white rounded-full animate-bounce" style={{ animationDelay: "300ms" }}></div>
      </div>
    </div>
  );
};

export default Splash;
