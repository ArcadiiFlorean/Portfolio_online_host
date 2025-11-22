import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PricingPage from "./pages/PricingPage";
import ContactPage from "./pages/ContactPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./ScrollToTop";

// ⭐ DOAR ACESTE 3 IMPORTURI (nu mai pune PaymentPage de 2 ori!)
import PaymentPage from "./components/PaymentPage";
import CheckoutPage from "./components/CheckoutPage";
import PaymentSuccess from "./components/PaymentSuccess";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/contact" element={<ContactPage />} />

            {/* ⭐ CELE 3 RUTE NOI - fără duplicate! */}
            <Route path="/payment" element={<PaymentPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/payment-success" element={<PaymentSuccess />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
