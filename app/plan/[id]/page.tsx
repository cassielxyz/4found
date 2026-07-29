"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Check, CheckCircle, AlertCircle, Mail, MapPin } from "lucide-react";

const plans = {
  lite: {
    name: "Starter Lite",
    price: "₹2,500",
    description: "Essential online presence. Get a fast, beautiful landing page for your brand.",
    features: [
      "Single Landing Page",
      "Responsive Mobile Design",
      "Contact Form Integration",
      "Free Subdomain Hosting",
      "Basic SEO Setup",
      "1 Week Support"
    ]
  },
  mvp: {
    name: "MVP Builder",
    price: "₹5,000",
    description: "Perfect for testing your idea. Get a fully functional minimum viable product.",
    features: [
      "Landing Page & Basic Auth",
      "Responsive Mobile Design",
      "Core Feature Implementation",
      "Free Hosting Setup",
      "Google Analytics Integration",
      "1 Month Support & Bug Fixes"
    ]
  },
  pro: {
    name: "Startup Pro",
    price: "₹10,000",
    description: "For emerging businesses scaling up. A robust full-stack web application.",
    features: [
      "Full-Stack Web App (React/Node)",
      "Payment Gateway (Razorpay/Stripe)",
      "Secure Admin Dashboard",
      "Role-Based Access Control",
      "Automated Email Workflows",
      "Advanced SEO Optimization",
      "3 Months Priority Support"
    ]
  },
  enterprise: {
    name: "Enterprise",
    price: "Custom Quote",
    description: "Complex logic & massive scale. A bespoke architecture built specifically for your needs.",
    features: [
      "Scalable Cloud Architecture (AWS)",
      "Cross-Platform Mobile Apps",
      "Microservices & Load Balancing",
      "Penetration Testing & Security",
      "Custom DevOps Pipelines (CI/CD)",
      "Dedicated Account Manager",
      "24/7 SLA Support"
    ]
  }
};

export default function PlanCheckout() {
  const params = useParams();
  const id = params.id as string;
  
  const planData = plans[id as keyof typeof plans];

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  if (!planData) {
    return (
      <div className="min-h-screen py-32 flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-4">Plan not found</h1>
        <Link href="/" className="text-[#D32F2F] hover:underline flex items-center gap-2">
          <ArrowLeft size={16} /> Return home
        </Link>
      </div>
    );
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          planName: planData.name
        }),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <div className="min-h-screen pt-32 pb-24 bg-gray-50 dark:bg-[#0A0A0A] transition-colors">
      <div className="container mx-auto px-8 max-w-6xl">
        <div className="mb-8">
          <Link href="/" className="text-gray-500 hover:text-[#D32F2F] transition-colors flex items-center gap-2 font-medium w-fit">
            <ArrowLeft size={18} /> Back to Plans
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Plan Details Summary */}
          <div className="lg:col-span-5 flex flex-col h-full">
            <div className="bg-white dark:bg-[#1A1A1A] p-10 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-800 flex-1">
              <div className="inline-block px-4 py-2 bg-[#D32F2F]/10 text-[#D32F2F] font-bold rounded-full text-sm mb-6 uppercase tracking-wider">
                Selected Plan
              </div>
              <h1 className="text-4xl font-extrabold mb-4 text-gray-900 dark:text-white">{planData.name}</h1>
              <div className="text-4xl font-extrabold mb-4 text-gray-900 dark:text-white">
                {planData.price}
                {planData.price !== "Custom Quote" && <span className="text-xl text-gray-500 font-medium">/project</span>}
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-8 pb-8 border-b border-gray-100 dark:border-gray-800">
                {planData.description}
              </p>
              
              <h3 className="text-lg font-bold mb-6 text-gray-900 dark:text-white">What's included:</h3>
              <ul className="flex flex-col gap-4 text-gray-700 dark:text-gray-300">
                {planData.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 font-medium">
                    <Check size={20} className="text-[#D32F2F] shrink-0 mt-0.5" /> 
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Checkout Form */}
          <div className="lg:col-span-7">
            <div className="bg-white dark:bg-[#1A1A1A] p-10 md:p-12 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-800 h-full flex flex-col justify-center">
              <h2 className="text-3xl font-extrabold mb-2 text-gray-900 dark:text-white">Let's get started</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-10">
                Fill out the form below to secure your <strong>{planData.name}</strong> plan. Our team will review your requirements and reach out within 24 hours to kick off the project.
              </p>
              
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-sm font-semibold text-gray-700 dark:text-gray-300">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name" 
                    className="px-4 py-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-[#111111] text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#D32F2F] focus:border-transparent transition-all"
                  />
                </div>
                
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm font-semibold text-gray-700 dark:text-gray-300">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email" 
                    className="px-4 py-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-[#111111] text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#D32F2F] focus:border-transparent transition-all"
                  />
                </div>
                
                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-sm font-semibold text-gray-700 dark:text-gray-300">Tell us about your project</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows={5}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="I want to build a..." 
                    className="px-4 py-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-[#111111] text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#D32F2F] focus:border-transparent transition-all resize-none"
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  disabled={status === "loading"}
                  className="btn-primary w-full py-4 rounded-xl font-bold text-white mt-4 disabled:opacity-70 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transition-all text-lg"
                >
                  {status === "loading" ? "Sending Request..." : `Secure ${planData.name} Plan`}
                </button>

                {status === "success" && (
                  <div className="mt-4 p-4 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 rounded-xl flex items-center gap-3 border border-green-200 dark:border-green-800">
                    <CheckCircle size={20} className="shrink-0" />
                    <p className="font-medium">Thank you! Your request has been received. We will contact you shortly.</p>
                  </div>
                )}

                {status === "error" && (
                  <div className="mt-4 p-4 bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-400 rounded-xl flex items-center gap-3 border border-red-200 dark:border-red-800">
                    <AlertCircle size={20} className="shrink-0" />
                    <p className="font-medium">Something went wrong. Please try again later or email us directly at main@4found.in.</p>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
