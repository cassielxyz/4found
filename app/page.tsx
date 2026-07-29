"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight, Code, Layout, Smartphone, Cloud, Search, Shield, Check, ExternalLink, Mail, MapPin, CheckCircle, AlertCircle } from "lucide-react";

export default function Home() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

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
        body: JSON.stringify(formData),
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

  const services = [
    { icon: <Layout size={32} />, title: "Web Development", description: "Custom responsive websites and complex web applications built with modern frameworks like React and Next.js." },
    { icon: <Smartphone size={32} />, title: "Mobile App Development", description: "Native and cross-platform mobile experiences for iOS and Android using React Native." },
    { icon: <Code size={32} />, title: "Custom SaaS Platforms", description: "End-to-end product development, from MVP to fully scalable cloud architecture." },
    { icon: <Cloud size={32} />, title: "Cloud Infrastructure", description: "Robust AWS & Google Cloud setups ensuring your application scales seamlessly under load." },
    { icon: <Search size={32} />, title: "SEO Optimization", description: "Technical SEO and performance tuning so your startup gets discovered organically." },
    { icon: <Shield size={32} />, title: "Security & Auditing", description: "Vulnerability assessments and secure coding practices to protect user data." }
  ];

  const steps = [
    { num: "01", title: "Discovery & Planning", desc: "We align with your vision, understand your target audience, and outline the exact technical roadmap needed to succeed." },
    { num: "02", title: "UI/UX Design", desc: "Our design team crafts intuitive, engaging interfaces that look beautiful and convert effectively." },
    { num: "03", title: "Agile Development", desc: "We build your product in rapid sprints, keeping you updated constantly. No black boxes." },
    { num: "04", title: "Testing & QA", desc: "Rigorous automated and manual testing ensures your application is bug-free and performant." },
    { num: "05", title: "Launch & Support", desc: "We handle the deployment, monitor the launch, and provide ongoing maintenance." },
  ];

  const projects = [
    { title: "Fintech Dashboard", category: "Web App", image: "/assets/portfolio_banking.png" },
    { title: "Healthcare Portal", category: "SaaS Platform", image: "/assets/portfolio_hospital.png" },
    { title: "EdTech Mobile App", category: "Mobile App", image: "/assets/portfolio_school.png" },
    { title: "Inventory Management", category: "Enterprise System", image: "/assets/portfolio_inventory.png" },
    { title: "Corporate Website", category: "Web Development", image: "/assets/portfolio_corporate.png" },
    { title: "Social Networking App", category: "Mobile App", image: "/assets/portfolio_network.png" }
  ];

  const techStack = [
    { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
    { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" },
    { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
    { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
    { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
    { name: "GraphQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/graphql/graphql-plain.svg" },
    { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
    { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
    { name: "Kubernetes", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-plain.svg" },
    { name: "AWS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
    { name: "Tailwind CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
    { name: "Figma", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" }
  ];

  return (
    <div className="flex flex-col items-center w-full bg-white dark:bg-[#0A0A0A] transition-colors">
      {/* Hero Section */}
      <section className="w-full">
        <div className="container mx-auto px-8 max-w-7xl pt-16 pb-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col items-start gap-6 relative z-10">
            <div className="inline-block px-4 py-2 bg-[#D32F2F]/10 text-[#D32F2F] font-semibold rounded-full text-sm tracking-wide">
              EMERGING STARTUP
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white">
              We Build Modern <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D32F2F] to-[#FF6659]">
                SaaS Solutions
              </span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-lg leading-relaxed">
              Founded by a team of ambitious college students, 4Found is an emerging tech company dedicated to delivering scalable, high-performance web and mobile applications for modern businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-4 w-full sm:w-auto">
              <a href="#contact" className="btn-primary w-full sm:w-auto flex items-center justify-center gap-2 group px-8 py-3 rounded-xl text-white font-semibold shadow-lg">
                Start Your Project <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#portfolio" className="btn-secondary w-full sm:w-auto px-8 py-3 rounded-xl font-semibold flex items-center justify-center text-center">
                View Our Work
              </a>
            </div>
            
            <div className="mt-8 flex items-center gap-8 text-sm font-semibold text-gray-500 dark:text-gray-400">
              <div className="flex flex-col">
                <span className="text-3xl text-[#D32F2F] font-bold">10+</span>
                <span>Projects Shipped</span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl text-[#D32F2F] font-bold">100%</span>
                <span>Dedication</span>
              </div>
            </div>
          </div>
          
          <div className="relative w-full aspect-square md:aspect-video lg:aspect-square flex justify-center items-center">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#D32F2F]/20 to-transparent rounded-full blur-3xl -z-10 animate-pulse"></div>
            <Image 
              src="/assets/hero_illustration.png" 
              alt="Hero Illustration" 
              width={600} 
              height={600} 
              className="w-full h-auto max-w-lg object-contain drop-shadow-2xl"
              priority
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="w-full bg-gray-50 dark:bg-[#111111] py-24 transition-colors">
        <div className="container mx-auto px-8 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-extrabold mb-6 text-gray-900 dark:text-white">Our Services</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              We offer comprehensive software development services tailored for emerging startups and established enterprises.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((svc, idx) => (
              <div key={idx} className="bg-white dark:bg-[#1A1A1A] p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 hover:-translate-y-2 transition-transform duration-300">
                <div className="w-16 h-16 bg-[#D32F2F]/10 rounded-2xl flex items-center justify-center text-[#D32F2F] mb-6">
                  {svc.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">{svc.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{svc.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="w-full bg-white dark:bg-[#0A0A0A] py-24 transition-colors">
        <div className="container mx-auto px-8 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-extrabold mb-6 text-gray-900 dark:text-white">Our Tech Stack</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              We build with modern, scalable, and secure technologies to future-proof your product.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {techStack.map((tech, idx) => (
              <div key={idx} className="flex flex-col items-center justify-center gap-4 group hover:-translate-y-1 transition-transform">
                <div className="relative w-16 h-16">
                  <Image 
                    src={tech.logo} 
                    alt={tech.name} 
                    fill 
                    unoptimized
                    className="object-contain filter grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 ease-in-out dark:brightness-200 dark:group-hover:brightness-100" 
                  />
                </div>
                <span className="font-semibold text-gray-900 dark:text-white text-sm">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="w-full py-24 bg-white dark:bg-[#0A0A0A] transition-colors">
        <div className="container mx-auto px-8 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold mb-6 text-gray-900 dark:text-white">Our Process</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              A transparent, streamlined workflow designed to take your idea from concept to scalable reality.
            </p>
          </div>

          <div className="flex flex-col gap-8 relative before:absolute before:inset-0 before:ml-[35px] md:before:mx-auto md:before:translate-x-0 before:h-full before:w-1 before:bg-gradient-to-b before:from-[#D32F2F] before:to-transparent">
            {steps.map((step, idx) => (
              <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                {/* Timeline dot */}
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white dark:border-[#0A0A0A] bg-[#D32F2F] text-white font-bold shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 shadow-md">
                  {step.num}
                </div>
                
                {/* Card */}
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] bg-gray-50 dark:bg-[#1A1A1A] p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800">
                  <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{step.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="w-full bg-gray-50 dark:bg-[#111111] py-24 transition-colors">
        <div className="container mx-auto px-8 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-extrabold mb-6 text-gray-900 dark:text-white">Our Featured Work</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              A selection of projects we've built. From bold startups to complex enterprise tools.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((proj, idx) => (
              <div key={idx} className="group relative rounded-2xl overflow-hidden bg-white dark:bg-[#1A1A1A] shadow-sm">
                <div className="relative w-full aspect-[4/3] overflow-hidden bg-gray-200 dark:bg-gray-800">
                  <Image 
                    src={proj.image} 
                    alt={proj.title} 
                    fill 
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#D32F2F] hover:scale-110 transition-transform">
                      <ExternalLink size={20} />
                    </button>
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-sm font-semibold text-[#D32F2F] mb-1 uppercase tracking-wider">{proj.category}</div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">{proj.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="w-full py-24 bg-white dark:bg-[#0A0A0A] transition-colors">
        <div className="container mx-auto px-8 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-extrabold mb-6 text-gray-900 dark:text-white">Transparent, Startup-Friendly Pricing</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              As a startup ourselves, we know the value of cost-effective solutions. We've optimized our pricing to help emerging businesses scale without breaking the bank.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            {/* Plan 1 */}
            <div className="bg-gray-50 dark:bg-[#1A1A1A] p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 flex flex-col h-full">
              <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">MVP Builder</h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm mb-6">Perfect for testing your idea</p>
              <div className="text-4xl font-extrabold mb-6 text-gray-900 dark:text-white">₹5,000<span className="text-lg text-gray-500 font-medium">/project</span></div>
              <ul className="flex flex-col gap-4 mb-8 flex-1 text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-3"><Check size={20} className="text-[#D32F2F] shrink-0 mt-0.5" /> <span>Landing Page & Basic Auth</span></li>
                <li className="flex items-start gap-3"><Check size={20} className="text-[#D32F2F] shrink-0 mt-0.5" /> <span>Responsive Mobile Design</span></li>
                <li className="flex items-start gap-3"><Check size={20} className="text-[#D32F2F] shrink-0 mt-0.5" /> <span>Core Feature Implementation</span></li>
                <li className="flex items-start gap-3"><Check size={20} className="text-[#D32F2F] shrink-0 mt-0.5" /> <span>1 Month Support</span></li>
              </ul>
              <a href="#contact" className="btn-secondary w-full py-3 rounded-xl block text-center font-semibold border-gray-300 dark:border-gray-700">Choose MVP</a>
            </div>

            {/* Plan 2 */}
            <div className="bg-white dark:bg-[#1A1A1A] p-8 rounded-2xl shadow-xl dark:shadow-none border-2 border-[#D32F2F] relative transform md:-translate-y-4 flex flex-col h-full">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#D32F2F] text-white px-4 py-1 rounded-full text-xs font-bold tracking-wide">MOST POPULAR</div>
              <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">Startup Pro</h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm mb-6">For emerging businesses scaling up</p>
              <div className="text-4xl font-extrabold mb-6 text-gray-900 dark:text-white">₹10,000<span className="text-lg text-gray-500 font-medium">/project</span></div>
              <ul className="flex flex-col gap-4 mb-8 flex-1 text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-3"><Check size={20} className="text-[#D32F2F] shrink-0 mt-0.5" /> <span>Full-Stack Web App (React/Node)</span></li>
                <li className="flex items-start gap-3"><Check size={20} className="text-[#D32F2F] shrink-0 mt-0.5" /> <span>API Integrations & Database</span></li>
                <li className="flex items-start gap-3"><Check size={20} className="text-[#D32F2F] shrink-0 mt-0.5" /> <span>Admin Dashboard</span></li>
                <li className="flex items-start gap-3"><Check size={20} className="text-[#D32F2F] shrink-0 mt-0.5" /> <span>SEO & Performance Optimization</span></li>
                <li className="flex items-start gap-3"><Check size={20} className="text-[#D32F2F] shrink-0 mt-0.5" /> <span>3 Months Support</span></li>
              </ul>
              <a href="#contact" className="btn-primary w-full py-3 rounded-xl block text-center font-semibold text-white shadow-lg">Choose Pro</a>
            </div>

            {/* Plan 3 */}
            <div className="bg-gray-50 dark:bg-[#1A1A1A] p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 flex flex-col h-full">
              <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">Enterprise</h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm mb-6">Complex logic & massive scale</p>
              <div className="text-4xl font-extrabold mb-6 text-gray-900 dark:text-white">Custom<span className="text-lg text-gray-500 font-medium">/quote</span></div>
              <ul className="flex flex-col gap-4 mb-8 flex-1 text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-3"><Check size={20} className="text-[#D32F2F] shrink-0 mt-0.5" /> <span>Cloud Architecture Design</span></li>
                <li className="flex items-start gap-3"><Check size={20} className="text-[#D32F2F] shrink-0 mt-0.5" /> <span>Cross-Platform Mobile Apps</span></li>
                <li className="flex items-start gap-3"><Check size={20} className="text-[#D32F2F] shrink-0 mt-0.5" /> <span>Microservices & High Availability</span></li>
                <li className="flex items-start gap-3"><Check size={20} className="text-[#D32F2F] shrink-0 mt-0.5" /> <span>Advanced Security & Compliance</span></li>
                <li className="flex items-start gap-3"><Check size={20} className="text-[#D32F2F] shrink-0 mt-0.5" /> <span>Dedicated Team</span></li>
              </ul>
              <a href="#contact" className="btn-secondary w-full py-3 rounded-xl block text-center font-semibold border-gray-300 dark:border-gray-700">Get a Quote</a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="w-full bg-gray-50 dark:bg-[#111111] py-24 transition-colors">
        <div className="container mx-auto px-8 max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-extrabold mb-6 text-gray-900 dark:text-white">Let's Work Together</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Have a project in mind? We'd love to hear about it. Drop us a message and we'll get back to you within 24 hours.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white dark:bg-[#1A1A1A] rounded-3xl overflow-hidden shadow-sm border border-gray-100 dark:border-gray-800">
            <div className="p-12 lg:p-16 flex flex-col justify-between bg-white dark:bg-[#151515] border-r border-gray-100 dark:border-gray-800">
              <div>
                <h3 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Contact Information</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-12">
                  We are currently accepting new projects. Reach out to discuss how we can help your business grow.
                </p>
                
                <div className="flex flex-col gap-6">
                  <div className="flex items-center gap-4 text-gray-700 dark:text-gray-300">
                    <div className="w-12 h-12 bg-gray-50 dark:bg-[#1A1A1A] rounded-full flex items-center justify-center shadow-sm border border-gray-100 dark:border-gray-800 text-[#D32F2F]">
                      <Mail size={20} />
                    </div>
                    <div>
                      <div className="font-semibold text-sm text-gray-500">Email Us</div>
                      <div className="font-bold text-gray-900 dark:text-white">main@4found.in</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 text-gray-700 dark:text-gray-300">
                    <div className="w-12 h-12 bg-gray-50 dark:bg-[#1A1A1A] rounded-full flex items-center justify-center shadow-sm border border-gray-100 dark:border-gray-800 text-[#D32F2F]">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <div className="font-semibold text-sm text-gray-500">Location</div>
                      <div className="font-bold text-gray-900 dark:text-white">Tamil Nadu, India</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-16">
                <div className="inline-block px-4 py-2 bg-[#D32F2F]/10 text-[#D32F2F] font-semibold rounded-full text-sm">
                  Available for work
                </div>
              </div>
            </div>
            
            <div className="p-12 lg:p-16">
              <h3 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white">Send us a Message</h3>
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
                    className="px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-[#111111] text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#D32F2F] focus:border-transparent transition-all"
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
                    className="px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-[#111111] text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#D32F2F] focus:border-transparent transition-all"
                  />
                </div>
                
                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-sm font-semibold text-gray-700 dark:text-gray-300">Message</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows={5}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project..." 
                    className="px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-[#111111] text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#D32F2F] focus:border-transparent transition-all resize-none"
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  disabled={status === "loading"}
                  className="btn-primary w-full py-4 rounded-xl font-bold text-white mt-4 disabled:opacity-70 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transition-all"
                >
                  {status === "loading" ? "Sending..." : "Send Message"}
                </button>

                {status === "success" && (
                  <div className="mt-4 p-4 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 rounded-xl flex items-center gap-3">
                    <CheckCircle size={20} />
                    <p className="font-medium">Thank you! Your message has been sent successfully.</p>
                  </div>
                )}

                {status === "error" && (
                  <div className="mt-4 p-4 bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-400 rounded-xl flex items-center gap-3">
                    <AlertCircle size={20} />
                    <p className="font-medium">Something went wrong. Please try again later.</p>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
