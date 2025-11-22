import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, CreditCard } from "lucide-react";  // ⭐ Adaugă CreditCard

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/#services" },
    { name: "Pricing", path: "/pricing" },
    { name: "Contact", path: "/contact" },
  ];

  const scrollToServices = (e) => {
    if (location.pathname === "/") {
      e.preventDefault();
      const servicesSection = document.getElementById("services");
      if (servicesSection) {
        servicesSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-orange-500 rounded-lg flex items-center justify-center shadow-[0_0_20px_rgba(239,68,68,0.5)] transform group-hover:rotate-12 transition-all duration-300">
                <span className="text-white font-bold text-xl">AF</span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-red-500 to-orange-500 rounded-lg blur-md opacity-0 group-hover:opacity-50 transition-opacity"></div>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
            You drink coffee, I write code.
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={link.name === "Services" ? scrollToServices : undefined}
                className={`text-gray-300 hover:text-red-400 font-medium transition-colors ${
                  location.pathname === link.path ? "text-red-400" : ""
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA Buttons Desktop */}
          <div className="hidden md:flex items-center gap-3">
            {/* ⭐⭐⭐ PAYMENT BUTTON ⭐⭐⭐ */}
            <Link
              to="/payment"
              className="px-5 py-2.5 bg-white/5 border-2 border-green-500 text-green-400 rounded-lg font-semibold hover:bg-green-500/20 hover:shadow-[0_0_30px_rgba(34,197,94,0.6)] transition-all hover:scale-105 flex items-center gap-2"
            >
              <CreditCard className="w-5 h-5" />
              <span>Pay Now</span>
            </Link>

            <Link
              to="/contact"
              className="px-6 py-2.5 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-lg font-semibold hover:shadow-[0_0_30px_rgba(239,68,68,0.6)] transition-all hover:scale-105"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/5">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={(e) => {
                    setIsMenuOpen(false);
                    if (link.name === "Services") scrollToServices(e);
                  }}
                  className={`text-gray-300 hover:text-red-400 font-medium transition-colors py-2 ${
                    location.pathname === link.path ? "text-red-400" : ""
                  }`}
                >
                  {link.name}
                </Link>
              ))}

              {/* ⭐ Payment Button Mobile ⭐ */}
              <Link
                to="/payment"
                onClick={() => setIsMenuOpen(false)}
                className="px-5 py-3 bg-white/5 border-2 border-green-500 text-green-400 rounded-lg font-semibold text-center hover:bg-green-500/20 transition-all flex items-center justify-center gap-2"
              >
                <CreditCard className="w-5 h-5" />
                <span>Pay Now</span>
              </Link>

              <Link
                to="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="px-6 py-3 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-lg font-semibold text-center hover:shadow-[0_0_30px_rgba(239,68,68,0.6)] transition-all"
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;