import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  ArrowLeft,
  CheckCircle2,
  Clock,
  MessageSquare,
  Facebook,
  Instagram,
  MessageCircle,
  Zap,
} from "lucide-react";

function ContactPageModern() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  useEffect(() => {
    emailjs.init("i21Nt1ALU89Sxazgv"); // public key-ul tău
  }, []);
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email";
    }
    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();

    if (Object.keys(newErrors).length === 0) {
      setIsSubmitting(true);

      console.log("🚀 Sending emails...");

      // ⭐ EMAIL 1: Către TINE (notificare cu detalii)
      emailjs
        .send(
          "service_xp7ck6c", // Service ID
          "template_e0vg7js", // Template-ul tău VECHI (notificare către tine)
          formData,
          "i21Nt1ALU89Sxazgv" // Public Key
        )
        .then((response) => {
          console.log("✅ Email sent to YOU!", response);

          // ⭐ EMAIL 2: Către CLIENT (auto-reply)
          return emailjs.send(
            "service_xp7ck6c", // Același Service ID
            "template_op9lvld", // ⭐⭐⭐ ÎNLOCUIEȘTE cu ID-ul template-ului NOU! ⭐⭐⭐
            formData,
            "i21Nt1ALU89Sxazgv" // Același Public Key
          );
        })
        .then((response) => {
          console.log("✅ Auto-reply sent to CLIENT!", response);
          setIsSubmitted(true);
          setIsSubmitting(false);
          setFormData({ name: "", email: "", subject: "", message: "" });
        })
        .catch((error) => {
          console.error("❌ Email error:", error);
          console.error("❌ Error details:", error.text);
          setIsSubmitting(false);
          alert("Something went wrong. Please try again later.");
        });
    } else {
      console.log("❌ Validation errors:", newErrors);
      setErrors(newErrors);
    }
  };
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "webFlorean@gmail.com",
      link: "mailto:webFlorean@gmail.com",
      description: "Response within 24h",
      color: "red",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+44 7454 185152",
      link: "tel:+447454185152",
      description: "Monday - Friday, 9:00 - 18:00",
      color: "orange",
    },
  ];

  const reasons = [
    {
      icon: Zap,
      title: "Fast Response",
      description: "I respond to all messages within 1 hour maximum",
    },
    {
      icon: MessageSquare,
      title: "Free Consultation",
      description: "The first discussion is always at no cost",
    },
    {
      icon: CheckCircle2,
      title: "No Obligations",
      description: "We discuss your ideas with no commitment",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white overflow-hidden relative">
      {/* Animated background grid cu parallax */}
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

      {/* Red/Orange Glowing orbs cu parallax */}
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

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-12">
        {/* Navigation cu animație */}
        <div
          className={`flex justify-between items-center mb-12 transition-all duration-1000 ${
            isVisible["nav"] !== false
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-10"
          }`}
          ref={(el) => {
            if (el && !sectionRefs.current["nav"]) {
              sectionRefs.current["nav"] = el;
              setIsVisible((prev) => ({ ...prev, nav: true }));
            }
          }}
        >
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-red-500 to-orange-500 rounded-lg blur-md opacity-0 group-hover:opacity-50 transition-opacity"></div>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
              Prolio
            </span>
          </Link>

          <Link
            to="/"
            className="inline-flex items-center gap-2 text-red-400 hover:text-red-300 font-medium transition-all group hover:scale-105"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span>Back</span>
          </Link>
        </div>

        {/* Hero Section cu parallax */}
        <div
          ref={(el) => (sectionRefs.current["hero"] = el)}
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible["hero"]
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
          style={{
            transform: `translateY(${scrollY * 0.1}px)`,
          }}
        >
          <div className="relative inline-block mb-6">
            <h1 className="text-5xl lg:text-7xl font-black bg-gradient-to-r from-red-400 via-orange-400 to-red-400 bg-clip-text text-transparent mb-4">
              GET IN TOUCH
            </h1>
            <div className="absolute -inset-1 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg blur opacity-30"></div>
          </div>

          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Have a project in mind or want to collaborate? <br />
            <span className="text-red-400 font-semibold">Let's talk!</span> 🚀
          </p>

          {/* Quick Stats cu animație stagger */}
          <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto">
            {[
              { label: "Response in", value: "24h", color: "red" },
              { label: "Consultation", value: "Free", color: "orange" },
              { label: "Satisfaction", value: "100%", color: "red" },
            ].map((stat, index) => (
              <div
                key={index}
                className={`text-center transition-all duration-1000 ${
                  isVisible["hero"]
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${(index + 1) * 150}ms` }}
              >
                <div
                  className={`text-4xl font-bold text-${stat.color}-400 mb-1`}
                >
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form - 2 columns cu animație 3D */}
          <div
            ref={(el) => (sectionRefs.current["form"] = el)}
            className={`lg:col-span-2 transition-all duration-1000 ${
              isVisible["form"]
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            <div
              className="bg-gray-800/50 backdrop-blur-sm p-8 lg:p-10 rounded-2xl border-2 border-red-500 shadow-[0_0_50px_rgba(239,68,68,0.3)] hover:shadow-[0_0_80px_rgba(239,68,68,0.4)] transition-all duration-500 hover:scale-[1.02]"
              style={{ transformStyle: "preserve-3d" }}
              onMouseMove={(e) => {
                const card = e.currentTarget;
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                const rotateX = (y - centerY) / 50;
                const rotateY = (centerX - x) / 50;
                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform =
                  "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)";
              }}
            >
              <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                Send a Message
              </h2>
              <p className="text-gray-300 mb-8">
                Fill out the form and I'll get back to you as soon as possible
                ⚡
              </p>

              {isSubmitted && (
                <div className="mb-8 p-6 bg-green-500 bg-opacity-20 border-2 border-green-500 rounded-xl shadow-[0_0_30px_rgba(34,197,94,0.3)] animate-pulse">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-green-400 mb-1">
                        ✅ Message sent successfully!
                      </p>
                      <p className="text-sm text-green-300">
                        I'll respond within 24 hours. Please check your spam
                        folder too.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name & Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-gray-900 border-2 ${
                        errors.name ? "border-red-500" : "border-gray-700"
                      } rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-red-500 transition-all shadow-inner hover:border-red-600 focus:scale-[1.02]`}
                      placeholder="John Doe"
                    />
                    {errors.name && (
                      <p className="mt-2 text-sm text-red-400 font-medium animate-pulse">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-gray-900 border-2 ${
                        errors.email ? "border-red-500" : "border-gray-700"
                      } rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-red-500 transition-all shadow-inner hover:border-red-600 focus:scale-[1.02]`}
                      placeholder="john@example.com"
                    />
                    {errors.email && (
                      <p className="mt-2 text-sm text-red-400 font-medium animate-pulse">
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-gray-900 border-2 ${
                      errors.subject ? "border-red-500" : "border-gray-700"
                    } rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-red-500 transition-all shadow-inner hover:border-red-600 focus:scale-[1.02]`}
                    placeholder="What would you like to discuss?"
                  />
                  {errors.subject && (
                    <p className="mt-2 text-sm text-red-400 font-medium animate-pulse">
                      {errors.subject}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="6"
                    className={`w-full px-4 py-3 bg-gray-900 border-2 ${
                      errors.message ? "border-red-500" : "border-gray-700"
                    } rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-red-500 transition-all resize-none shadow-inner hover:border-red-600 focus:scale-[1.02]`}
                    placeholder="Briefly describe your project or the questions you have..."
                  ></textarea>
                  {errors.message && (
                    <p className="mt-2 text-sm text-red-400 font-medium animate-pulse">
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-4 bg-gradient-to-r from-red-500 to-orange-500 font-bold text-lg rounded-lg
                           hover:shadow-[0_0_40px_rgba(239,68,68,0.8)] transition-all hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed
                           flex items-center justify-center gap-2 group relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span className="relative z-10">Sending...</span>
                    </>
                  ) : (
                    <>
                      <span className="relative z-10">Send Message</span>
                      <Send className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>

                <p className="text-sm text-gray-400 text-center">
                  🔒 We respect your data privacy
                </p>
              </form>
            </div>
          </div>

          {/* Sidebar cu animații stagger */}
          <div
            ref={(el) => (sectionRefs.current["sidebar"] = el)}
            className="space-y-6"
          >
            {/* Contact Info */}
            <div
              className={`transition-all duration-1000 ${
                isVisible["sidebar"]
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-10"
              }`}
            >
              <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                Contact Information
              </h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    className={`block bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border-2 border-${
                      info.color
                    }-500 
                             hover:shadow-[0_0_30px_rgba(239,68,68,0.3)] transition-all duration-500 group hover:scale-105 hover:-translate-y-2 ${
                               isVisible["sidebar"]
                                 ? "opacity-100 translate-x-0"
                                 : "opacity-0 translate-x-10"
                             }`}
                    style={{
                      transitionDelay: `${index * 100}ms`,
                      transformStyle: "preserve-3d",
                    }}
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className={`w-12 h-12 bg-${info.color}-500/20 border-2 border-${info.color}-500 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300`}
                      >
                        <info.icon
                          className={`w-6 h-6 text-${info.color}-400`}
                        />
                      </div>
                      <div>
                        <h4 className="font-bold text-white mb-1">
                          {info.title}
                        </h4>
                        <p
                          className={`text-${info.color}-400 font-semibold mb-1`}
                        >
                          {info.value}
                        </p>
                        <p className="text-sm text-gray-400">
                          {info.description}
                        </p>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Why Contact cu animație 3D */}
            <div
              className={`bg-gradient-to-br from-red-900/30 to-orange-900/30 p-8 rounded-2xl border-2 border-red-500/50 shadow-[0_0_40px_rgba(239,68,68,0.3)] transition-all duration-1000 hover:scale-105 hover:shadow-[0_0_60px_rgba(239,68,68,0.5)] ${
                isVisible["sidebar"]
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-10"
              }`}
              style={{
                transitionDelay: "300ms",
                transformStyle: "preserve-3d",
              }}
            >
              <h3 className="text-2xl font-bold mb-6 text-red-400">
                Why Contact Me?
              </h3>
              <div className="space-y-4">
                {reasons.map((reason, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 transform transition-all duration-300 hover:translate-x-2"
                  >
                    <div className="w-8 h-8 bg-red-500/20 border border-red-500 rounded-lg flex items-center justify-center flex-shrink-0 transition-transform hover:scale-110 hover:rotate-12">
                      <reason.icon className="w-4 h-4 text-red-400" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-1">
                        {reason.title}
                      </h4>
                      <p className="text-sm text-gray-300">
                        {reason.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Links cu animații */}
            <div
              className={`bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border-2 border-orange-500 shadow-[0_0_40px_rgba(251,146,60,0.2)] transition-all duration-1000 hover:shadow-[0_0_60px_rgba(251,146,60,0.4)] ${
                isVisible["sidebar"]
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-10"
              }`}
              style={{ transitionDelay: "400ms" }}
            >
              <h3 className="text-xl font-bold text-orange-400 mb-4">
                Connect With Me
              </h3>
              <div className="flex flex-wrap gap-3">
                {[
                  {
                    Icon: Github,
                    link: "https://github.com/ArcadiiFlorean",
                    label: "GitHub",
                  },
                  {
                    Icon: Linkedin,
                    link: "https://www.linkedin.com/in/arcadii-florean-6a9584397/",
                    label: "LinkedIn",
                  },
                  {
                    Icon: Facebook,
                    link: "https://www.facebook.com/arcadii.florean",
                    label: "Facebook",
                  },
                  {
                    Icon: Instagram,
                    link: "https://www.instagram.com/arcadiiflorean/",
                    label: "Instagram",
                  },
                  {
                    Icon: MessageCircle,
                    link: "https://wa.me/447454185152",
                    label: "WhatsApp",
                  },
                ].map(({ Icon, link, label }) => (
                  <a
                    key={label}
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-900 border-2 border-orange-500 rounded-lg hover:bg-gray-800 
                             transition-all duration-300 hover:scale-110 hover:-translate-y-2 hover:shadow-[0_0_25px_rgba(251,146,60,0.6)] group"
                    aria-label={label}
                    title={label}
                  >
                    <Icon className="w-5 h-5 text-orange-400 group-hover:text-red-400 transition-colors group-hover:rotate-12" />
                  </a>
                ))}
              </div>
            </div>

            {/* Availability cu animație pulsantă */}
            <div
              className={`bg-gradient-to-r from-green-500 to-emerald-500 p-6 rounded-2xl shadow-[0_0_30px_rgba(16,185,129,0.4)] transition-all duration-1000 hover:scale-105 hover:shadow-[0_0_50px_rgba(16,185,129,0.6)] ${
                isVisible["sidebar"]
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-10"
              }`}
              style={{ transitionDelay: "500ms" }}
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                <h3 className="text-xl font-bold text-white">
                  Available for new projects!
                </h3>
              </div>
              <p className="text-green-100">
                I'm open for collaborations and freelance projects. Let's create
                something extraordinary together! 🚀
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPageModern;
