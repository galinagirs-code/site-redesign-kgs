
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "@/components/CartContext";
import Index from "./pages/Index";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Production from "./pages/Production";
import Services from "./pages/Services";
import Parts from "./pages/Parts";
import Catalog from "./pages/Catalog";
import MachtyKoprovye from "./pages/MachtyKoprovye";
import SvaebojnyeMoloty from "./pages/SvaebojnyeMoloty";
import SvaebojnyeMashiny from "./pages/SvaebojnyeMashiny";
import BurovyeMashiny from "./pages/BurovyeMashiny";
import VibropogruzateliKranovye from "./pages/VibropogruzateliKranovye";
import VibropogruzateliEkskavatornye from "./pages/VibropogruzateliEkskavatornye";
import Svaeskusyvateli from "./pages/Svaeskusyvateli";
import Domkraty from "./pages/Domkraty";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <CartProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/production" element={<Production />} />
          <Route path="/services" element={<Services />} />
          <Route path="/parts" element={<Parts />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/catalog/machty-koprovye" element={<MachtyKoprovye />} />
          <Route path="/catalog/svaebojnye-moloty" element={<SvaebojnyeMoloty />} />
          <Route path="/catalog/svaebojnye-mashiny" element={<SvaebojnyeMashiny />} />
          <Route path="/catalog/burovye-mashiny" element={<BurovyeMashiny />} />
          <Route path="/catalog/vibropogružateli-kranovye" element={<VibropogruzateliKranovye />} />
          <Route path="/catalog/vibropogružateli-ekskavatornye" element={<VibropogruzateliEkskavatornye />} />
          <Route path="/catalog/svaeskusyvateli" element={<Svaeskusyvateli />} />
          <Route path="/catalog/domkraty" element={<Domkraty />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
    </CartProvider>
  </QueryClientProvider>
);

export default App;