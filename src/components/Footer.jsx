import React from "react";
import { Link } from "react-router-dom";
import { Github, Linkedin, Mail, Phone, MapPin } from "lucide-react";

function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/#services" },
    { name: "Pricing", path: "/pricing" },
    { name: "Contact", path: "/contact" },
  ];

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/ArcadiiFlorean",
      icon: Github,
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/arcadii-florean-6a9584397/",
      icon: Linkedin,
    },
  ];

  return (
    <footer className="bg-[#0a0a0a] border-t border-red-500/20 relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-red-900/5 to-transparent pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Column */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4 group">
              <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-orange-500 rounded-lg flex items-center justify-center shadow-[0_0_20px_rgba(239,68,68,0.5)] transform group-hover:rotate-12 transition-all duration-300">
                <span className="text-white font-bold text-xl">AF</span>
              </div>
              <span className="text-lg font-bold bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                Arcadii Florean
              </span>
            </Link>
            <p className="text-gray-400 mb-4 max-w-sm">
              Specialized in creating high-converting landing pages and
              professional websites that drive results.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 border-2 border-gray-700 rounded-lg flex items-center justify-center hover:border-red-500 hover:shadow-[0_0_20px_rgba(239,68,68,0.3)] transition-all hover:scale-110"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5 text-gray-400 hover:text-red-400 transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="text-white font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-red-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-white font-bold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:webFlorean@gmail.com"
                  className="flex items-center gap-2 text-gray-400 hover:text-red-400 transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  <span className="text-sm">webFlorean@gmail.com</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+447454185152"
                  className="flex items-center gap-2 text-gray-400 hover:text-red-400 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span className="text-sm">+44 7454 185152</span>
                </a>
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">London, UK</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-gray-400 text-sm">
            © {currentYear} Arcadii Florean. All rights reserved.
          </div>
          <div className="text-gray-500 text-sm">
            Made with ❤️ using React & Tailwind CSS
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;