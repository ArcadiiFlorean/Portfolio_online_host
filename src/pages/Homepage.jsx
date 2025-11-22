import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  Zap,
  Globe,
  Palette,
  Smartphone,
  CheckCircle2,
  ArrowRight,
  MessageSquare,
  Clock,
  Award,
  Instagram,
  Twitter,
  Linkedin,
  Dribbble,
} from "lucide-react";

function HomePage() {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState({});
  const sectionRefs = useRef({});

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

  const services = [
    {
      icon: Zap,
      title: "Landing Pages",
      description:
        "High-converting landing pages designed to capture attention and drive action. Perfect for marketing campaigns and product launches.",
      color: "red",
      features: [
        "Conversion-optimized design",
        "Mobile-first approach",
        "Integrated contact forms",
        "Fast delivery (3-7 days)",
      ],
    },
    {
      icon: Globe,
      title: "Business Websites",
      description:
        "Professional websites that establish credibility and showcase your brand. Fully responsive and optimized for search engines.",
      color: "orange",
      features: [
        "Premium custom design",
        "Up to 15 pages",
        "Easy admin panel",
        "SEO optimized",
      ],
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description:
        "User-centered design that combines aesthetics with functionality. Creating intuitive interfaces that users love.",
      color: "red",
      features: [
        "Modern & clean design",
        "User research",
        "Wireframes & prototypes",
        "Design systems",
      ],
    },
    {
      icon: Smartphone,
      title: "Responsive Design",
      description:
        "Websites that look stunning on every device. Mobile-first approach ensuring perfect experience across all screens.",
      color: "orange",
      features: [
        "Mobile optimization",
        "Tablet friendly",
        "Desktop perfect",
        "Cross-browser compatible",
      ],
    },
  ];

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

  const whyChooseMe = [
    {
      icon: Clock,
      title: "Fast Response",
      description: "I respond to all messages within 1 hours maximum",
    },
    {
      icon: MessageSquare,
      title: "Free Consultation",
      description: "The first discussion is always at no cost",
    },
    {
      icon: Award,
      title: "Quality Guaranteed",
      description: "100% satisfaction or your money back",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white overflow-hidden relative">
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
            backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        ></div>
      </div>

      {/* Red Glowing Orb */}
      <div
        className="fixed top-1/4 right-1/4 w-[700px] h-[700px] bg-gradient-to-br from-red-600 via-red-700 to-orange-600 rounded-full blur-[200px] opacity-40"
        style={{
          transform: `translate(${scrollY * 0.15}px, ${scrollY * 0.2}px)`,
          transition: "transform 0.1s ease-out",
        }}
      ></div>

      <div className="relative z-10">
       {/* Hero Section with Photo */}
<section className="min-h-screen flex items-center justify-center px-6 lg:px-8 pt-32 lg:pt-40 pb-10">
  <div
    ref={(el) => (sectionRefs.current["hero"] = el)}
    className={`max-w-6xl mx-auto text-center transition-all duration-1000 ${
      isVisible["hero"]
        ? "opacity-100 translate-y-0"
        : "opacity-0 translate-y-10"
    }`}
  >
    {/* Photo First - Centered & Large */}
    <div className="flex flex-col items-center mb-12">
      <div className="relative w-72 h-72 lg:w-96 lg:h-96 mb-8">
        {/* Photo Circle with Glow */}
        <div className="w-full h-full rounded-full overflow-hidden border-4 border-red-500/30 shadow-[0_0_80px_rgba(239,68,68,0.6)] hover:shadow-[0_0_120px_rgba(239,68,68,0.8)] transition-all duration-500">
          <img 
            src="/Foto.jpg" 
            alt="Arcadii Florean" 
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.parentElement.style.background = 'linear-gradient(135deg, #ef4444 0%, #f97316 100%)';
            }}
          />
        </div>
        
        {/* Decorative Ring */}
        <div className="absolute inset-0 rounded-full border-2 border-red-500/20 animate-ping" style={{ animationDuration: '3s' }}></div>
      </div>

      {/* Name Below Photo - One Line */}
      <h1 className="text-5xl lg:text-7xl xl:text-8xl font-light tracking-widest mb-4">
        <span className="text-white">ARCADII </span>
        <span className="text-red-400 font-semibold">FLOREAN</span>
      </h1>

      {/* Subtitle */}
      <div className="text-center mb-8">
        <span className="text-gray-400 text-sm uppercase tracking-widest">Web Designer & Developer</span>
      </div>
    </div>

    {/* Skills Tags */}
    <div className="flex flex-wrap justify-center gap-4 mb-8">
      {["#Branding", "#UI/UX Design", "#Development", "#Animation"].map(
        (tag, index) => (
          <span
            key={index}
            className="text-sm text-gray-400 font-medium"
          >
            {tag}
          </span>
        )
      )}
    </div>

    {/* Social Badges */}
    <div className="flex justify-center gap-3 mb-10">
      <span className="text-sm text-gray-400 font-medium">
        Available for Work
      </span>
      {[
        { icon: Instagram, label: "IG" },
        { icon: Twitter, label: "TW" },
        { icon: Linkedin, label: "LN" },
        { icon: Dribbble, label: "DB" },
      ].map((social, index) => (
        <div
          key={index}
          className="w-10 h-10 bg-white/10 border border-white/20 rounded-full flex items-center justify-center hover:bg-red-500/20 hover:border-red-500 transition-all cursor-pointer"
        >
          <social.icon className="w-5 h-5 text-gray-400 hover:text-red-400" />
        </div>
      ))}
    </div>

    {/* Bio Text */}
    <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed">
      Welcome to my portfolio! I'm{" "}
      <span className="text-white font-semibold">Arcadii Florean</span>,
      a passionate and innovative web designer and developer based in{" "}
      <span className="text-red-400">United Kingdom</span>. With 09
      years of experience in the industry, I specialize in creating
      visually stunning and highly functional websites that provide an
      exceptional user experience.
    </p>

    {/* CTA Buttons */}
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <Link to="/pricing">
        <button className="px-10 py-4 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-full font-bold text-lg hover:shadow-[0_0_40px_rgba(239,68,68,0.8)] transition-all hover:scale-105 flex items-center justify-center gap-2 group">
          <span>View Pricing</span>
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </Link>
      <Link to="/contact">
        <button className="px-10 py-4 bg-white/5 border-2 border-orange-500 text-orange-400 rounded-full font-bold text-lg hover:bg-orange-500/20 hover:shadow-[0_0_30px_rgba(251,146,60,0.5)] transition-all hover:scale-105">
          Get Started
        </button>
      </Link>
    </div>
  </div>
</section>
        {/* Services Section */}
        <section id="services" className="py-20 lg:py-32 px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div
              ref={(el) => (sectionRefs.current["services-header"] = el)}
              className={`text-center mb-16 transition-all duration-1000 ${
                isVisible["services-header"]
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <h2 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-red-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
                What I Do
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Specialized services to help your business succeed online
              </p>
            </div>

            <div
              ref={(el) => (sectionRefs.current["services-grid"] = el)}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
            >
              {services.map((service, index) => (
                <div
                  key={index}
                  className={`bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border-2 border-gray-700 hover:border-${
                    service.color
                  }-500 hover:shadow-[0_0_40px_rgba(239,68,68,0.3)] transition-all duration-500 group ${
                    isVisible["services-grid"]
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div
                      className={`w-14 h-14 bg-${service.color}-500/20 border-2 border-${service.color}-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300`}
                    >
                      <service.icon
                        className={`w-7 h-7 text-${service.color}-400`}
                      />
                    </div>
                    <div>
                      <h3
                        className={`text-2xl font-bold mb-2 bg-gradient-to-r from-${service.color}-400 to-orange-400 bg-clip-text text-transparent`}
                      >
                        {service.title}
                      </h3>
                    </div>
                  </div>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-2 text-gray-400 text-sm"
                      >
                        <CheckCircle2
                          className={`w-4 h-4 text-${service.color}-400 flex-shrink-0`}
                        />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link to="/pricing">
                <button className="px-8 py-4 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-full font-bold hover:shadow-[0_0_40px_rgba(239,68,68,0.6)] transition-all hover:scale-105 inline-flex items-center gap-2 group">
                  <span>View All Packages</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 lg:py-32 px-6 lg:px-8 bg-gradient-to-b from-transparent to-gray-900/50">
          <div className="max-w-7xl mx-auto">
            <div
              ref={(el) => (sectionRefs.current["process-header"] = el)}
              className={`text-center mb-16 transition-all duration-1000 ${
                isVisible["process-header"]
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <h2 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                How It Works
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

        {/* Why Choose Me Section */}
        <section className="py-20 lg:py-32 px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div
              ref={(el) => (sectionRefs.current["why-header"] = el)}
              className={`text-center mb-16 transition-all duration-1000 ${
                isVisible["why-header"]
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <h2 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                Why Work With Me
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Commitment to quality and client satisfaction
              </p>
            </div>

            <div
              ref={(el) => (sectionRefs.current["why-items"] = el)}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {whyChooseMe.map((item, index) => (
                <div
                  key={index}
                  className={`bg-gradient-to-br from-red-900/30 to-orange-900/30 p-8 rounded-2xl border-2 border-red-500/30 hover:border-red-500/50 hover:shadow-[0_0_40px_rgba(239,68,68,0.3)] transition-all duration-500 ${
                    isVisible["why-items"]
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="w-12 h-12 bg-red-500/20 border-2 border-red-500 rounded-xl flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-red-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-300">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 lg:py-32 px-6 lg:px-8">
          <div
            ref={(el) => (sectionRefs.current["final-cta"] = el)}
            className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${
              isVisible["final-cta"]
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="bg-gradient-to-br from-red-900/30 to-orange-900/30 border-2 border-red-500/30 p-10 lg:p-16 rounded-3xl backdrop-blur-sm">
              <h2 className="text-3xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-red-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
                Ready to Start Your Project?
              </h2>
              <p className="text-xl text-gray-300 mb-10 leading-relaxed">
                Let's discuss your ideas and create something amazing together.
                <br />
                <span className="text-red-400 font-semibold">
                  First consultation is always free!
                </span>
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <button className="px-10 py-4 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-full font-bold text-lg hover:shadow-[0_0_40px_rgba(239,68,68,0.8)] transition-all hover:scale-105">
                    Get in Touch
                  </button>
                </Link>
                <Link to="/pricing">
                  <button className="px-10 py-4 bg-white/5 border-2 border-orange-500 text-orange-400 rounded-full font-bold text-lg hover:bg-orange-500/20 hover:shadow-[0_0_30px_rgba(251,146,60,0.5)] transition-all hover:scale-105">
                    View Pricing
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default HomePage;
