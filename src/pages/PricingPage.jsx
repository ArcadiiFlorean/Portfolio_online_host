import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { landingPackages, websitePackages } from "../data/packages";
import {
  Zap,
  Rocket,
  Crown,
  Globe,
  Building2,
  Briefcase,
  Check, // ⭐⭐⭐ ADAUGĂ ASTA! ⭐⭐⭐
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  Clock,
  Award,
  MessageSquare,
  Mail,
  Phone,
  MapPin,
  Palette,
  Smartphone,
} from "lucide-react";

function PricingPage() {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState({});
  const sectionRefs = useRef({});

  // Parallax scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Intersection Observer pentru animații la scroll
  useEffect(() => {
    const observers = [];

    Object.keys(sectionRefs.current).forEach((key) => {
      const element = sectionRefs.current[key];
      if (!element) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [key]: true }));
          }
        },
        { threshold: 0.1 }
      );

      observer.observe(element);
      observers.push(observer);
    });

    return () => observers.forEach((observer) => observer.disconnect());
  }, []);

  const processSteps = [
    {
      number: "01",
      title: "Free Consultation",
      description: "We discuss your project, objectives and budget",
    },
    {
      number: "02",
      title: "Custom Quote",
      description: "You receive a detailed quote with timeline and costs",
    },
    {
      number: "03",
      title: "Design & Development",
      description: "We create your site with continuous revisions",
    },
    {
      number: "04",
      title: "Launch & Support",
      description: "We publish your site and provide technical support",
    },
  ];

  const faqs = [
    {
      q: "Do prices include VAT?",
      a: "Yes, all displayed prices include VAT. There are no hidden costs - what you see is what you pay.",
    },
    {
      q: "Can I make changes after launch?",
      a: "Of course! We offer training for the admin panel (for Website Business) or you can request changes directly from us. The first 30 days after launch include free technical support.",
    },
    {
      q: "What happens after the first year of hosting?",
      a: "After the first year, you can choose to renew your hosting with us (approximately 100-200 RON/year) or transfer the site to another provider. The site is 100% yours.",
    },
    {
      q: "Do you offer maintenance services?",
      a: "Yes! We offer monthly maintenance packages that include: security updates, backups, minor content changes and priority support. Prices from 100 RON/month.",
    },
    {
      q: "Can I add custom features?",
      a: "Absolutely! If you need special features (booking system, calculators, API integrations), we can develop them on request. Contact me for a custom quote.",
    },
    {
      q: "Do you accept installment payments?",
      a: "Yes, for projects over 1,000 RON we can discuss payments in 2-3 installments: advance at start, installment at design and final at launch.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white scroll-smooth overflow-hidden relative">
      {/* Animated background grid */}
      <div
        className="fixed inset-0 opacity-10"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`,
          transition: "transform 0.1s ease-out",
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        ></div>
      </div>

      {/* Red/Orange Glowing Orbs */}
      <div
        className="fixed top-1/4 right-1/4 w-[600px] h-[600px] bg-gradient-to-br from-red-600 via-orange-600 to-red-700 rounded-full blur-[150px] opacity-30 animate-pulse"
        style={{
          transform: `translate(${scrollY * 0.15}px, ${scrollY * 0.2}px)`,
          transition: "transform 0.1s ease-out",
          animationDuration: "4s",
        }}
      ></div>
      <div
        className="fixed bottom-1/4 left-1/3 w-[400px] h-[400px] bg-gradient-to-tr from-orange-600 to-red-600 rounded-full blur-[120px] opacity-20 animate-pulse"
        style={{
          animationDelay: "2s",
          animationDuration: "5s",
          transform: `translate(${-scrollY * 0.1}px, ${-scrollY * 0.15}px)`,
          transition: "transform 0.1s ease-out",
        }}
      ></div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-orange-500 rounded-lg flex items-center justify-center shadow-[0_0_20px_rgba(239,68,68,0.5)] transform group-hover:rotate-12 transition-all duration-300">
                  <span className="text-white font-bold text-xl">AF</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-red-500 to-orange-500 rounded-lg blur-md opacity-0 group-hover:opacity-50 transition-opacity"></div>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                CoffeeCoder
              </span>
            </Link>

            <Link
              to="/"
              className="inline-flex items-center gap-2 text-gray-300 hover:text-red-400 font-medium transition-colors group"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              <span>Back</span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-32 lg:py-40 overflow-hidden pt-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div
            ref={(el) => (sectionRefs.current["hero"] = el)}
            className={`max-w-3xl mx-auto text-center transition-all duration-1000 ${
              isVisible["hero"]
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 bg-gradient-to-r from-red-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
              Clear and Transparent Pricing
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              No hidden costs. No unpleasant surprises.
              <span className="block mt-2 font-semibold text-white">
                Invest smartly in your online presence.
              </span>
            </p>

            {/* Service Type Navigation */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a
                href="#landing-pages"
                className="group px-8 py-4 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-full font-bold hover:shadow-[0_0_40px_rgba(239,68,68,0.6)] transition-all hover:scale-105 flex items-center justify-center gap-2"
              >
                <Zap className="w-5 h-5" />
                <span>View Landing Pages</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#websites"
                className="group px-8 py-4 bg-white/5 border-2 border-white/10 text-white rounded-full font-bold hover:bg-white/10 hover:border-red-500/50 hover:shadow-[0_0_30px_rgba(239,68,68,0.3)] transition-all hover:scale-105 flex items-center justify-center gap-2"
              >
                <Globe className="w-5 h-5" />
                <span>View Websites</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
              {[
                { icon: CheckCircle2, text: "Secure Payment" },
                { icon: Clock, text: "On-Time Delivery" },
                { icon: MessageSquare, text: "Continuous Support" },
              ].map((badge, index) => (
                <div key={index} className="flex items-center gap-2">
                  <badge.icon className="w-5 h-5 text-red-400" />
                  <span className="font-medium">{badge.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards - Landing Pages */}
      <section className="py-16 lg:py-24 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          {/* Landing Pages Section */}
          <div id="landing-pages" className="scroll-mt-20 mb-20">
            <div
              ref={(el) => (sectionRefs.current["landing-header"] = el)}
              className={`text-center mb-12 transition-all duration-1000 ${
                isVisible["landing-header"]
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/20 border border-red-500/50 rounded-full mb-4">
                <Zap className="w-5 h-5 text-red-400" />
                <span className="text-sm font-bold text-red-400 uppercase tracking-wide">
                  Landing Pages
                </span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                Pages optimized for conversion
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Choose the perfect package for your marketing campaign
              </p>
            </div>

            <div
              ref={(el) => (sectionRefs.current["landing-cards"] = el)}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {landingPackages.map((pkg, index) => {
                const Icon = pkg.icon;
                return (
                  <div
                    key={pkg.id}
                    className={`relative bg-gray-800/50 backdrop-blur-sm rounded-3xl p-8 border-2 transition-all duration-700 hover:scale-105 hover:-translate-y-2 ${
                      pkg.popular
                        ? "border-red-500 shadow-[0_0_40px_rgba(239,68,68,0.4)] scale-105"
                        : "border-gray-700 hover:border-red-500/50 hover:shadow-[0_0_30px_rgba(239,68,68,0.2)]"
                    } ${
                      isVisible["landing-cards"]
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-20"
                    }`}
                    style={{
                      transitionDelay: `${index * 150}ms`,
                      transformStyle: "preserve-3d",
                    }}
                  >
                    {/* Popular Badge */}
                    {pkg.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <span className="px-4 py-1 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-full text-sm font-bold shadow-[0_0_20px_rgba(239,68,68,0.6)]">
                          ⭐ MOST POPULAR
                        </span>
                      </div>
                    )}

                    {/* Icon */}
                    <div className="w-14 h-14 bg-red-500/20 border-2 border-red-500 rounded-2xl flex items-center justify-center mb-6">
                      <Icon className="w-7 h-7 text-red-400" />
                    </div>

                    {/* Header */}
                    <div className="mb-6">
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {pkg.name}
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed mb-4">
                        {pkg.description}
                      </p>

                      {/* Price */}
                      <div className="flex items-baseline justify-center">
                        <span className="text-2xl font-bold text-red-400">
                          £
                        </span>
                        <span className="text-5xl font-bold">{pkg.price}</span>
                      </div>

                      {/* Meta info */}
                      <div className="flex flex-col gap-2 text-sm text-gray-400">
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-red-400" />
                          <span>{pkg.deliveryTime}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-red-400" />
                          <span>{pkg.revisions}</span>
                        </div>
                      </div>
                    </div>

                    {/* Features */}
                    <div className="mb-6">
                      <h4 className="font-bold text-white mb-3 text-sm">
                        WHAT YOU GET:
                      </h4>
                      <ul className="space-y-2">
                        {pkg.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <Check className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-300 text-sm">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Ideal for */}
                    <div className="mb-6 p-4 bg-red-500/10 border border-red-500/30 rounded-xl">
                      <h4 className="font-bold text-white mb-2 text-xs uppercase tracking-wide">
                        Ideal for:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {pkg.ideal.map((item, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-1 bg-gray-800 border border-gray-700 rounded-lg text-xs font-medium text-gray-300"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* CTA */}
                    <Link to="/contact">
                      <button
                        className={`w-full px-6 py-3 rounded-xl font-bold transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 group ${
                          pkg.popular
                            ? "bg-gradient-to-r from-red-500 to-orange-500 text-white hover:shadow-[0_0_30px_rgba(239,68,68,0.6)]"
                            : "bg-white/5 border-2 border-red-500 text-red-400 hover:bg-red-500/20 hover:shadow-[0_0_20px_rgba(239,68,68,0.4)]"
                        }`}
                      >
                        <span>Order Now</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Websites Section */}
          <div id="websites" className="scroll-mt-20">
            <div
              ref={(el) => (sectionRefs.current["website-header"] = el)}
              className={`text-center mb-12 transition-all duration-1000 ${
                isVisible["website-header"]
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/20 border border-orange-500/50 rounded-full mb-4">
                <Globe className="w-5 h-5 text-orange-400" />
                <span className="text-sm font-bold text-orange-400 uppercase tracking-wide">
                  Website-uri Business
                </span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                Professional presentation websites
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Complete platforms for your online business
              </p>
            </div>

            <div
              ref={(el) => (sectionRefs.current["website-cards"] = el)}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {websitePackages.map((pkg, index) => {
                const Icon = pkg.icon;
                return (
                  <div
                    key={pkg.id}
                    className={`relative bg-gray-800/50 backdrop-blur-sm rounded-3xl p-8 border-2 transition-all duration-700 hover:scale-105 hover:-translate-y-2 ${
                      pkg.popular
                        ? "border-orange-500 shadow-[0_0_40px_rgba(251,146,60,0.4)] scale-105"
                        : "border-gray-700 hover:border-orange-500/50 hover:shadow-[0_0_30px_rgba(251,146,60,0.2)]"
                    } ${
                      isVisible["website-cards"]
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-20"
                    }`}
                    style={{
                      transitionDelay: `${index * 150}ms`,
                      transformStyle: "preserve-3d",
                    }}
                  >
                    {/* Popular Badge */}
                    {pkg.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <span className="px-4 py-1 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full text-sm font-bold shadow-[0_0_20px_rgba(251,146,60,0.6)]">
                          ⭐ MOST POPULAR
                        </span>
                      </div>
                    )}

                    {/* Icon */}
                    <div className="w-14 h-14 bg-orange-500/20 border-2 border-orange-500 rounded-2xl flex items-center justify-center mb-6">
                      <Icon className="w-7 h-7 text-orange-400" />
                    </div>

                    {/* Header */}
                    <div className="mb-6">
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {pkg.name}
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed mb-4">
                        {pkg.description}
                      </p>

                      {/* Price */}
                      <div className="flex items-baseline gap-2 mb-3">
                        <span className="text-2xl font-bold text-orange-400">
                          £
                        </span>{" "}
                        {/* ✅ Adaugă asta */}
                        <span className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                          {pkg.price}
                        </span>
                      </div>

                      {/* Meta info */}
                      <div className="flex flex-col gap-2 text-sm text-gray-400">
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-orange-400" />
                          <span>{pkg.deliveryTime}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-orange-400" />
                          <span>{pkg.revisions}</span>
                        </div>
                      </div>
                    </div>

                    {/* Features */}
                    <div className="mb-6">
                      <h4 className="font-bold text-white mb-3 text-sm">
                        WHAT YOU GET:
                      </h4>
                      <ul className="space-y-2">
                        {pkg.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <Check className="w-4 h-4 text-orange-400 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-300 text-sm">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Ideal for */}
                    <div className="mb-6 p-4 bg-orange-500/10 border border-orange-500/30 rounded-xl">
                      <h4 className="font-bold text-white mb-2 text-xs uppercase tracking-wide">
                        Ideal for:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {pkg.ideal.map((item, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-1 bg-gray-800 border border-gray-700 rounded-lg text-xs font-medium text-gray-300"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* CTA */}
                    <Link to="/contact">
                      <button
                        className={`w-full px-6 py-3 rounded-xl font-bold transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 group ${
                          pkg.popular
                            ? "bg-gradient-to-r from-orange-500 to-red-500 text-white hover:shadow-[0_0_30px_rgba(251,146,60,0.6)]"
                            : "bg-white/5 border-2 border-orange-500 text-orange-400 hover:bg-orange-500/20 hover:shadow-[0_0_20px_rgba(251,146,60,0.4)]"
                        }`}
                      >
                        <span>Order Now</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Custom Projects CTA */}
          <div
            ref={(el) => (sectionRefs.current["custom-cta"] = el)}
            className={`mt-20 transition-all duration-1000 ${
              isVisible["custom-cta"]
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="bg-gradient-to-br from-red-900/30 to-orange-900/30 border-2 border-red-500/30 text-white p-10 rounded-3xl text-center backdrop-blur-sm hover:shadow-[0_0_60px_rgba(239,68,68,0.3)] transition-all duration-500">
              <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                Need something custom?
              </h3>
              <p className="text-gray-300 text-lg mb-6 max-w-2xl mx-auto">
                E-commerce, complex platforms or special features? Let's talk
                and I'll create a custom quote for you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <button className="px-8 py-4 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-full font-bold hover:shadow-[0_0_40px_rgba(239,68,68,0.6)] transition-all hover:scale-105">
                    Request Custom Quote
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 lg:py-24 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div
            ref={(el) => (sectionRefs.current["process-header"] = el)}
            className={`text-center mb-16 transition-all duration-1000 ${
              isVisible["process-header"]
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
              How does the process work?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              4 simple steps from idea to your live website
            </p>
          </div>

          <div
            ref={(el) => (sectionRefs.current["process-steps"] = el)}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {processSteps.map((step, index) => (
              <div
                key={index}
                className={`text-center transition-all duration-1000 ${
                  isVisible["process-steps"]
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-[0_0_30px_rgba(239,68,68,0.5)]">
                  <span className="text-3xl font-black text-white">
                    {step.number}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-24 relative">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10">
          <div
            ref={(el) => (sectionRefs.current["faq-header"] = el)}
            className={`text-center mb-12 transition-all duration-1000 ${
              isVisible["faq-header"]
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-300">
              Answers to the most common questions about pricing
            </p>
          </div>

          <div
            ref={(el) => (sectionRefs.current["faq-items"] = el)}
            className="space-y-4"
          >
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border-2 border-gray-700 hover:border-red-500/50 hover:shadow-[0_0_30px_rgba(239,68,68,0.2)] transition-all duration-500 ${
                  isVisible["faq-items"]
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <h3 className="text-xl font-bold text-white mb-3">{faq.q}</h3>
                <p className="text-gray-300 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>

          {/* Still have questions */}
          <div className="text-center mt-12">
            <p className="text-lg text-gray-300 mb-4">Still have questions?</p>
            <Link to="/contact">
              <button className="px-8 py-4 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-full font-bold hover:shadow-[0_0_40px_rgba(239,68,68,0.6)] transition-all hover:scale-105">
                Contact Me Directly
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* What's Included Banner */}
      <section className="py-16 lg:py-24 relative bg-gradient-to-b from-transparent to-gray-900/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div
            ref={(el) => (sectionRefs.current["included-header"] = el)}
            className={`text-center mb-12 transition-all duration-1000 ${
              isVisible["included-header"]
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
              What's included in every project
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Regardless of the package, you benefit from these advantages
            </p>
          </div>

          <div
            ref={(el) => (sectionRefs.current["included-items"] = el)}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              {
                title: "24/7 Support",
                description:
                  "Quick response to messages and technical problem solving",
              },
              {
                title: "Mobile-first",
                description:
                  "All websites are perfect on phone, tablet and desktop",
              },
              {
                title: "SEO Optimized",
                description: "Proper configuration for search engines",
              },
              {
                title: "Performance",
                description: "Fast sites, optimized for loading speed",
              },
            ].map((item, index) => (
              <div
                key={index}
                className={`text-center transition-all duration-1000 ${
                  isVisible["included-items"]
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 bg-red-500/20 border-2 border-red-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-6 h-6 text-red-400" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-white">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 lg:py-24 relative">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 bg-gradient-to-r from-red-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
            Ready to get started?
          </h2>
          <p className="text-xl text-gray-300 mb-10 leading-relaxed">
            Choose a package or contact me for a custom quote. The first
            consultation is always free!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <button className="px-10 py-4 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-full font-bold text-lg hover:shadow-[0_0_40px_rgba(239,68,68,0.8)] transition-all hover:scale-105">
                Start Now
              </button>
            </Link>
            <a href="mailto:webFlorean@gmail.com">
              <button className="px-10 py-4 bg-white/5 border-2 border-orange-500 text-orange-400 rounded-full font-bold text-lg hover:bg-orange-500/20 hover:shadow-[0_0_30px_rgba(251,146,60,0.5)] transition-all hover:scale-105">
                Email Me Directly
              </button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default PricingPage;
