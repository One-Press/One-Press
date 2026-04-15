import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom"; // Added for button navigation
import "./hero.css";

export default function Hero() {
  const canvasRef = useRef(null);
  const navigate = useNavigate();
  const [mouse, setMouse] = useState({ x: null, y: null });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    const handleMouseMove = (e) => setMouse({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handleMouseMove);

    class Particle {
      constructor(layer) {
        this.layer = layer;
        this.reset();
      }

      reset() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * (0.3 + 0.2 * this.layer);
        this.vy = (Math.random() - 0.5) * (0.3 + 0.2 * this.layer);
        this.size = Math.random() * (1.5 + this.layer) + 1;
        // Updated color to match your brand's neon green
        this.color = `rgba(124, 252, 0, ${0.2 + 0.1 * this.layer})`; 
      }

      draw() {
        ctx.fillStyle = this.color;
        ctx.shadowColor = "#7CFC00";
        ctx.shadowBlur = 5;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x > width) this.x = 0;
        if (this.x < 0) this.x = width;
        if (this.y > height) this.y = 0;
        if (this.y < 0) this.y = height;

        if (mouse.x && mouse.y) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 150) {
            this.vx += dx * 0.0005 * this.layer;
            this.vy += dy * 0.0005 * this.layer;
          }
        }
        this.draw();
      }
    }

    const particles = [];
    const layerCount = 3;
    const particlesPerLayer = [25, 20, 15];
    for (let l = 0; l < layerCount; l++) {
      for (let i = 0; i < particlesPerLayer[l]; i++) {
        particles.push(new Particle(l + 1));
      }
    }

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 150) {
            ctx.strokeStyle = `rgba(124, 252, 0, ${0.1})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
      particles.forEach((p) => p.update());
      requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mouse]);

  const handleCTA = () => {
    navigate('/services'); // Redirect to services on click
  };

  return (
    <section className="relative min-h-screen bg-[#0a0a0a] text-white flex items-center overflow-hidden selection:bg-[#7CFC00] selection:text-black">
      {/* Particle Background */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0 opacity-40" />

      {/* Container Refinement: 
          Added 'pt-32' to ensure content starts below the fixed Navbar.
          Added 'pb-12' for bottom breathing room.
      */}
      <div className="container mx-auto px-6 relative z-10 pt-32 pb-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          {/* Top Tagline */}
<div className="flex items-center gap-3 mb-8 text-base font-black uppercase tracking-[0.4em] text-[#7CFC00]">            Digital Marketing Agency in USA
            <span className="animate-pulse">↗</span>
          </div>
          
          {/* Main SEO Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 tracking-tight uppercase italic">
            One Press <span className="text-[#7CFC00]">Solutions</span>
          </h1>

          {/* Agency Description */}
          <p className="text-lg md:text-xl text-white-400 max-w-lg leading-relaxed mb-10">
            One Press Solutions is a full-service digital marketing agency offering 
            <span className="text-white font-bold"> SEO, social media, web design & content marketing. </span> 
            We bring forth deep passion for creative problem solving to grow your business online today!
          </p>

          {/* Action Button */}
          <button
            onClick={handleCTA}
            className="group flex items-center gap-4 bg-[#7CFC00] text-black px-10 py-5 rounded-full font-black uppercase text-sm tracking-widest hover:bg-white transition-all shadow-2xl shadow-[#7CFC00]/20"
          >
            Explore Platform
            <span className="group-hover:translate-x-2 transition-transform">→</span>
          </button>
        </div>

        {/* Hero Stats Section */}
        <div className="lg:text-right">
          <h2 className="text-7xl md:text-[10rem] font-black mb-2 italic tracking-tighter leading-none">
            5k<span className="text-[#7CFC00]">+</span>
          </h2>
          <p className="text-sm md:text-base font-mono uppercase tracking-[0.3em] text-white-500">
            Projects completed successfully
          </p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-30">
        <span className="text-[10px] uppercase tracking-[0.5em] font-bold rotate-90 mb-10">Scroll</span>
        <div className="w-[1px] h-16 bg-gradient-to-b from-[#7CFC00] to-transparent"></div>
      </div>
    </section>
  );
  }