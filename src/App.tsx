
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
import MachtyMsEx from "./pages/MachtyMsEx";
import SvaebojnyeMoloty from "./pages/SvaebojnyeMoloty";
import SvaebojnyeMashiny from "./pages/SvaebojnyeMashiny";
import BurovyeMashiny from "./pages/BurovyeMashiny";
import VibropogruzateliKranovye from "./pages/VibropogruzateliKranovye";
import VibropogruzateliEkskavatornye from "./pages/VibropogruzateliEkskavatornye";
import Svaeskusyvateli from "./pages/Svaeskusyvateli";
import Domkraty from "./pages/Domkraty";
import MolotyDongHao from "./pages/MolotyDongHao";
import MolotyStarkeHD from "./pages/MolotyStarkeHD";
import MolotySEMW from "./pages/MolotySEMW";
import MolotyJuli from "./pages/MolotyJuli";
import SvajnyeNagolovniki from "./pages/SvajnyeNagolovniki";
import StarkeLH from "./pages/StarkeLH";
import JuliKLB from "./pages/JuliKLB";
import Kburg from "./pages/Kburg";
import JintSH from "./pages/JintSH";
import JintSD from "./pages/JintSD";
import JuliJL from "./pages/JuliJL";
import YonganYZ from "./pages/YonganYZ";
import YonganYZVM from "./pages/YonganYZVM";
import YonganDZJ from "./pages/YonganDZJ";
import VibroSG from "./pages/VibroSG";
import VibroVH from "./pages/VibroVH";
import UdlinennayaStrela from "./pages/UdlinennayaStrela";
import KvikKapler from "./pages/KvikKapler";
import JuliYZS from "./pages/JuliYZS";
import SvaeskusyvateliKruglye from "./pages/SvaeskusyvateliKruglye";
import SvaeskusyvateliKvadratnye from "./pages/SvaeskusyvateliKvadratnye";
import DomkratyIzvlecheniya from "./pages/DomkratyIzvlecheniya";
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
          <Route path="/catalog/machty-ms-ex" element={<MachtyMsEx />} />
          <Route path="/catalog/svaebojnye-moloty" element={<SvaebojnyeMoloty />} />
          <Route path="/catalog/svaebojnye-mashiny" element={<SvaebojnyeMashiny />} />
          <Route path="/catalog/burovye-mashiny" element={<BurovyeMashiny />} />
          <Route path="/catalog/vibropogružateli-kranovye" element={<VibropogruzateliKranovye />} />
          <Route path="/catalog/vibropogružateli-ekskavatornye" element={<VibropogruzateliEkskavatornye />} />
          <Route path="/catalog/svaeskusyvateli" element={<Svaeskusyvateli />} />
          <Route path="/catalog/domkraty" element={<Domkraty />} />
          <Route path="/catalog/moloty-donghao" element={<MolotyDongHao />} />
          <Route path="/catalog/moloty-starke-hd" element={<MolotyStarkeHD />} />
          <Route path="/catalog/moloty-semw" element={<MolotySEMW />} />
          <Route path="/catalog/moloty-juli" element={<MolotyJuli />} />
          <Route path="/catalog/svajnye-nagolovniki" element={<SvajnyeNagolovniki />} />
          <Route path="/catalog/starke-lh" element={<StarkeLH />} />
          <Route path="/catalog/juli-klb" element={<JuliKLB />} />
          <Route path="/catalog/kburg" element={<Kburg />} />
          <Route path="/catalog/jint-sh" element={<JintSH />} />
          <Route path="/catalog/jint-sd" element={<JintSD />} />
          <Route path="/catalog/juli-jl" element={<JuliJL />} />
          <Route path="/catalog/yongan-yz" element={<YonganYZ />} />
          <Route path="/catalog/yongan-yz-vm" element={<YonganYZVM />} />
          <Route path="/catalog/yongan-dzj" element={<YonganDZJ />} />
          <Route path="/catalog/vibro-sg" element={<VibroSG />} />
          <Route path="/catalog/vibro-vh" element={<VibroVH />} />
          <Route path="/catalog/udlinennaya-strela" element={<UdlinennayaStrela />} />
          <Route path="/catalog/kvik-kapler" element={<KvikKapler />} />
          <Route path="/catalog/juli-yzs" element={<JuliYZS />} />
          <Route path="/catalog/svaeskusyvateli-kruglye" element={<SvaeskusyvateliKruglye />} />
          <Route path="/catalog/svaeskusyvateli-kvadratnye" element={<SvaeskusyvateliKvadratnye />} />
          <Route path="/catalog/domkraty-izvlecheniya" element={<DomkratyIzvlecheniya />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
    </CartProvider>
  </QueryClientProvider>
);

export default App;