import { useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import NotificationPanel from "./components/NotificationPanel";
import Welcome from "./pages/Welcome";
import Input from "./pages/Input";
import CareerRoadmap from "./pages/CareerRoadmap";
import Opportunities from "./pages/Opportunities";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="min-h-screen bg-background">
            <Navigation onNotificationsClick={() => setIsNotificationOpen(true)} />
            <Routes>
              <Route path="/" element={<Welcome />} />
              <Route path="/input" element={<Input />} />
              <Route path="/roadmap" element={<CareerRoadmap />} />
              <Route path="/opportunities" element={<Opportunities />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
            <NotificationPanel 
              isOpen={isNotificationOpen}
              onClose={() => setIsNotificationOpen(false)}
            />
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
