import React, { useEffect, useRef, useState } from "react";
import "./hero.css";

export default function Hero() {
  const canvasRef = useRef(null);
  const [mouse, setMouse] = useState({ x: null, y: null });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Resize listener
    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    // Mouse move listener
    const handleMouseMove = (e) => setMouse({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handleMouseMove);

    // Particle class with depth and glow
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
        this.color = `rgba(0, 255, 255, ${0.3 + 0.2 * this.layer})`;
      }

      draw() {
        ctx.fillStyle = this.color;
        ctx.shadowColor = "#0ff";
        ctx.shadowBlur = 8;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        // Wrap edges
        if (this.x > width) this.x = 0;
        if (this.x < 0) this.x = width;
        if (this.y > height) this.y = 0;
        if (this.y < 0) this.y = height;

        // Mouse attraction
        if (mouse.x && mouse.y) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 150) {
            this.vx += dx * 0.0007 * this.layer;
            this.vy += dy * 0.0007 * this.layer;
          }
        }

        this.draw();
      }
    }

    // Create particles
    const particles = [];
    const layerCount = 3;
    const particlesPerLayer = [30, 25, 20]; // front to back
    for (let l = 0; l < layerCount; l++) {
      for (let i = 0; i < particlesPerLayer[l]; i++) {
        particles.push(new Particle(l + 1));
      }
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.strokeStyle = `rgba(0, 255, 255, ${0.15 + 0.05 * particles[i].layer})`;
            ctx.lineWidth = 1;
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

  // CTA explosion
  const handleCTA = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const width = canvas.width;
    const height = canvas.height;

    const explosionParticles = [];
    for (let i = 0; i < 150; i++) {
      explosionParticles.push({
        x: width / 2,
        y: height / 2,
        vx: (Math.random() - 0.5) * 15,
        vy: (Math.random() - 0.5) * 15,
        size: Math.random() * 3 + 1,
      });
    }

    const animateExplosion = () => {
      ctx.clearRect(0, 0, width, height);
      explosionParticles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.vx *= 0.95;
        p.vy *= 0.95;
        p.size *= 0.97;
        ctx.fillStyle = `rgba(0,255,255,0.8)`;
        ctx.shadowColor = "#0ff";
        ctx.shadowBlur = 10;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      });
      if (explosionParticles[0].size > 0.1) requestAnimationFrame(animateExplosion);
    };
    animateExplosion();
  };

  return (
    <section className="relative min-h-screen bg-[#111] text-white flex items-center overflow-hidden">
      {/* Particle Background */}
      <canvas ref={canvasRef} id="particles" className="absolute inset-0 z-0" />

      {/* Foreground content */}
      <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
         <div className="flex items-center gap-2 mb-6 pt-[10px] text-sm uppercase tracking-widest text-gray-400">
  Design • Develop • Dominate
  <span>↗</span>
</div>
          <h1 className="text-7xl md:text-9xl font-bold leading-none mb-8">
            OnePress <br /> Solutions <span className="text-sm border border-gray-600 rounded-full px-3 py-1 ml-2 align-super"></span>
          </h1>

          <p className="text-lg md:text-xl text-gray-300 max-w-md leading-relaxed">
            With every single one of our clients, we bring forth deep passion for{" "}
            <span className="font-bold text-white"> creative problem solving </span>
            which is what we deliver.
          </p>

          {/* CTA Button */}
          <button
            onClick={handleCTA}
            className="mt-6 ml-[60px] px-6 py-3 bg-[#2563eb] rounded-lg text-white font-bold hover:bg-[#3b82f6] transition"
          >
            Explore Platform
          </button>
        </div>

        <div className="lg:text-right">
          <h2 className="text-6xl md:text-8xl font-bold mb-4">25k+</h2>
          <p className="text-xl text-gray-400">Projects completed successfully</p>
        </div>
      </div>

      {/* Down Arrow */}
      <div className="absolute bottom-12 left-12 animate-bounce">
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}