"use client";

import { useEffect, useRef } from "react";
import { useScroll } from "framer-motion";

// Particle class definition
class Particle {
  x: number;
  y: number;
  baseX: number;
  baseY: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
  color: string;
  depth: number;

  constructor() {
    this.baseX = Math.random() * window.innerWidth;
    this.baseY = Math.random() * window.innerHeight;
    this.x = this.baseX;
    this.y = this.baseY;
    this.size = Math.random() * 6 + 3; // Larger for more blur
    this.depth = this.size / 8; // Depth for parallax
    this.speedX = (Math.random() - 0.5) * 0.2;
    this.speedY = (Math.random() - 0.5) * 0.2;
    this.opacity = Math.random() * 0.15 + 0.05; // Very subtle
    
    // Lighter blue gradient colors for subtlety
    const colors = ["#93c5fd", "#bfdbfe", "#dbeafe", "#60a5fa", "#3b82f6"];
    this.color = colors[Math.floor(Math.random() * colors.length)];
  }

  update(scrollProgress: number, canvasHeight: number) {
    // Parallax effect based on scroll
    const scrollOffset = scrollProgress * 2000;
    
    // Move particles based on depth (parallax)
    const parallaxX = Math.sin(scrollOffset * 0.0005 * this.depth) * 30 * this.depth;
    const parallaxY = scrollOffset * this.depth * 0.2;
    
    this.x = this.baseX + parallaxX + this.speedX;
    this.y = (this.baseY - parallaxY) % (canvasHeight + 100);
    
    // Wrap around
    if (this.y < -100) {
      this.y = canvasHeight + 100;
      this.baseY = canvasHeight + 100;
    }
    
    // Floating animation
    this.baseX += this.speedX * 0.5;
    this.baseY += this.speedY * 0.5;
    
    // Keep within bounds
    if (this.baseX < -50) this.baseX = window.innerWidth + 50;
    if (this.baseX > window.innerWidth + 50) this.baseX = -50;
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.save();
    ctx.fillStyle = this.color;
    ctx.globalAlpha = this.opacity * 0.15; // Very subtle
    
    // Draw particle with stronger blur
    ctx.shadowBlur = 30;
    ctx.shadowColor = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
    
    // Add extra blur layer
    ctx.shadowBlur = 50;
    ctx.globalAlpha = this.opacity * 0.08;
    ctx.fill();
    
    ctx.restore();
  }
}

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { scrollYProgress } = useScroll();
  const particlesRef = useRef<Particle[]>([] as Particle[]);
  const animationFrameRef = useRef<number>(0);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Create particles
    const particleCount = 120; // More particles but more subtle
    const particles: Particle[] = [];
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }
    particlesRef.current = particles;

    // Animation loop
    let currentScrollProgress = 0;

    const animate = () => {
      if (!ctx || !canvas) return;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw particles
      particles.forEach((particle) => {
        particle.update(currentScrollProgress, canvas.height);
        particle.draw(ctx);
      });

      // Draw connections between nearby particles (very subtle)
      ctx.globalAlpha = 0.02;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            ctx.strokeStyle = "#93c5fd";
            ctx.lineWidth = 0.3;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    // Update scroll progress
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      currentScrollProgress = latest;
    });

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      unsubscribe();
    };
  }, [scrollYProgress]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none"
      style={{ 
        zIndex: 1,
        filter: 'blur(3px)',
        opacity: 0.15
      }}
    />
  );
}
