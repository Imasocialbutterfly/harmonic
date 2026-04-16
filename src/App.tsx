import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Gallery from "./pages/Gallery";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import { DonationModalProvider } from "@/contexts/DonationModalContext";
import DonationModal from "@/components/DonationModal";

const queryClient = new QueryClient();

const App = () => {
  const clientId = import.meta.env.VITE_PAYPAL_CLIENT_ID;

  if (!clientId) {
    console.error("PayPal Client ID is missing! Check your .env file.");
    return <div>Configuration Error: Missing PayPal Client ID</div>;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <PayPalScriptProvider
        options={{
          clientId: clientId,
          currency: "USD",
          intent: "capture",
        }}
      >
        <DonationModalProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/gallery" element={<Gallery />} />
            </Routes>
          </BrowserRouter>
          <DonationModal />
        </DonationModalProvider>
      </PayPalScriptProvider>
    </QueryClientProvider>
  );
};

export default App;