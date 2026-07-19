"use client";

import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
  color: string;
  depth: number;
  pulse: number;
  pulseSpeed: number;
};

type LightBeam = {
  x: number;
  y: number;
  length: number;
  angle: number;
  speed: number;
  opacity: number;
  width: number;
};

export function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let particles: Particle[] = [];
    let lightBeams: LightBeam[] = [];
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let targetMouseX = mouseX;
    let targetMouseY = mouseY;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const motionScale = prefersReducedMotion ? 0.15 : 1;

    const resizeCanvas = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const width = window.innerWidth;
      const height = window.innerHeight;

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.scale(dpr, dpr);
    };

    const createParticles = () => {
      particles = [];
      const width = window.innerWidth;
      const height = window.innerHeight;
      const count = Math.min(Math.floor((width * height) / 18000), 100);

      for (let i = 0; i < count; i++) {
        const depth = Math.random();
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          size: depth * 2.5 + 0.5,
          speedX: (Math.random() - 0.5) * 0.25 * (0.5 + depth),
          speedY: (Math.random() - 0.5) * 0.25 * (0.5 + depth),
          opacity: depth * 0.4 + 0.15,
          color: ["#60A5FA", "#3B82F6", "#7DD3FC", "#1D4ED8", "#93C5FD"][Math.floor(Math.random() * 5)],
          depth,
          pulse: Math.random() * Math.PI * 2,
          pulseSpeed: 0.01 + Math.random() * 0.02,
        });
      }
    };

    const createLightBeams = () => {
      lightBeams = [];
      const width = window.innerWidth;
      const height = window.innerHeight;
      const count = Math.min(Math.floor(width / 400), 6);

      for (let i = 0; i < count; i++) {
        lightBeams.push({
          x: Math.random() * width,
          y: Math.random() * height * 0.3,
          length: height * 0.5 + Math.random() * height * 0.4,
          angle: (Math.random() - 0.5) * 0.3,
          speed: 0.0002 + Math.random() * 0.0003,
          opacity: 0.015 + Math.random() * 0.025,
          width: 80 + Math.random() * 120,
        });
      }
    };

    const drawBackground = (width: number, height: number) => {
      const gradient = ctx.createRadialGradient(
        width * 0.5,
        height * 0.4,
        0,
        width * 0.5,
        height * 0.5,
        Math.max(width, height) * 0.8
      );
      gradient.addColorStop(0, "#0B1E3D");
      gradient.addColorStop(0.5, "#07111F");
      gradient.addColorStop(1, "#020617");

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);
    };

    const drawGrid = (time: number, width: number, height: number) => {
      ctx.strokeStyle = "rgba(59, 130, 246, 0.035)";
      ctx.lineWidth = 1;

      const gridSize = 64;
      const offset = (time / 80) % gridSize;

      ctx.beginPath();
      for (let x = offset; x < width; x += gridSize) {
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
      }
      for (let y = offset; y < height; y += gridSize) {
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
      }
      ctx.stroke();

      ctx.strokeStyle = "rgba(125, 211, 252, 0.02)";
      ctx.beginPath();
      for (let x = offset + gridSize / 2; x < width; x += gridSize) {
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
      }
      for (let y = offset + gridSize / 2; y < height; y += gridSize) {
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
      }
      ctx.stroke();
    };

    const drawParticles = (time: number) => {
      particles.forEach((p) => {
        p.x += p.speedX * motionScale;
        p.y += p.speedY * motionScale;
        p.pulse += p.pulseSpeed * motionScale;

        if (p.x < -20) p.x = window.innerWidth + 20;
        if (p.x > window.innerWidth + 20) p.x = -20;
        if (p.y < -20) p.y = window.innerHeight + 20;
        if (p.y > window.innerHeight + 20) p.y = -20;

        const pulseFactor = Math.sin(p.pulse) * 0.3 + 0.7;
        const currentOpacity = p.opacity * pulseFactor;
        const currentSize = p.size * (0.9 + pulseFactor * 0.2);

        ctx.beginPath();
        ctx.arc(p.x, p.y, currentSize, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = currentOpacity;
        ctx.fill();

        if (p.depth > 0.5) {
          ctx.beginPath();
          ctx.arc(p.x, p.y, currentSize * 3.5, 0, Math.PI * 2);
          ctx.fillStyle = p.color;
          ctx.globalAlpha = currentOpacity * 0.15;
          ctx.fill();
        }
      });

      ctx.globalAlpha = 1;
    };

    const drawEnergyWaves = (time: number, width: number, height: number) => {
      const waveCount = 3;
      for (let i = 0; i < waveCount; i++) {
        const y = height * (0.3 + i * 0.25);
        const amplitude = 30 + i * 15;
        const frequency = 0.003 + i * 0.001;
        const speed = time * (0.0005 + i * 0.0002) * motionScale;

        ctx.beginPath();
        ctx.moveTo(0, y);

        for (let x = 0; x <= width; x += 4) {
          const yOffset = Math.sin(x * frequency + speed) * amplitude + Math.sin(x * frequency * 2.5 + speed * 1.5) * (amplitude * 0.4);
          ctx.lineTo(x, y + yOffset);
        }

        ctx.lineTo(width, height);
        ctx.lineTo(0, height);
        ctx.closePath();

        const gradient = ctx.createLinearGradient(0, y - amplitude, 0, y + amplitude + 100);
        gradient.addColorStop(0, "transparent");
        gradient.addColorStop(0.5, `rgba(59, 130, 246, ${0.02 + i * 0.01})`);
        gradient.addColorStop(1, "transparent");

        ctx.fillStyle = gradient;
        ctx.fill();
      }
    };

    const drawLightBeams = (time: number) => {
      lightBeams.forEach((beam) => {
        const x = beam.x + Math.sin(time * beam.speed) * 100 * motionScale;
        const y = beam.y + Math.cos(time * beam.speed * 1.3) * 50 * motionScale;

        const gradient = ctx.createLinearGradient(x, y, x + Math.sin(beam.angle) * beam.length, y + beam.length);
        gradient.addColorStop(0, "transparent");
        gradient.addColorStop(0.5, `rgba(125, 211, 252, ${beam.opacity})`);
        gradient.addColorStop(1, "transparent");

        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(beam.angle + Math.sin(time * 0.0001) * 0.05 * motionScale);

        ctx.fillStyle = gradient;
        ctx.fillRect(-beam.width / 2, 0, beam.width, beam.length);

        ctx.restore();
      });
    };

    const drawAmbientGlow = (time: number, width: number, height: number) => {
      const t = time / 15000;
      const glows = [
        { x: width * 0.2, y: height * 0.3, color: [59, 130, 246], size: 350, opacity: 0.06 },
        { x: width * 0.8, y: height * 0.7, color: [29, 78, 216], size: 300, opacity: 0.05 },
        { x: width * 0.5, y: height * 0.5, color: [125, 211, 252], size: 250, opacity: 0.04 },
        { x: width * 0.3, y: height * 0.8, color: [59, 130, 246], size: 280, opacity: 0.035 },
      ];

      glows.forEach((glow, i) => {
        const offsetX = Math.sin(t + i * 1.5) * 40 * motionScale;
        const offsetY = Math.cos(t + i * 1.5) * 40 * motionScale;

        const gradient = ctx.createRadialGradient(
          glow.x + offsetX,
          glow.y + offsetY,
          0,
          glow.x + offsetX,
          glow.y + offsetY,
          glow.size
        );

        gradient.addColorStop(0, `rgba(${glow.color.join("," )}, ${glow.opacity})`);
        gradient.addColorStop(1, "transparent");

        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, width, height);
      });

      const mouseGlow = ctx.createRadialGradient(mouseX, mouseY, 0, mouseX, mouseY, 250);
      mouseGlow.addColorStop(0, "rgba(59, 130, 246, 0.04)");
      mouseGlow.addColorStop(1, "transparent");

      ctx.fillStyle = mouseGlow;
      ctx.fillRect(0, 0, width, height);
    };

    const drawNoise = (width: number, height: number) => {
      const imageData = ctx.getImageData(0, 0, width, height);
      const data = imageData.data;

      for (let i = 0; i < data.length; i += 16) {
        const noise = (Math.random() - 0.5) * 8;
        data[i] = Math.max(0, Math.min(255, data[i] + noise));
        data[i + 1] = Math.max(0, Math.min(255, data[i + 1] + noise));
        data[i + 2] = Math.max(0, Math.min(255, data[i + 2] + noise));
      }

      ctx.putImageData(imageData, 0, 0);
    };

    const animate = (time: number) => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      ctx.clearRect(0, 0, width, height);

      drawBackground(width, height);
      drawGrid(time, width, height);
      drawAmbientGlow(time, width, height);
      drawEnergyWaves(time, width, height);
      drawLightBeams(time);
      drawParticles(time);

      if (time % 3 === 0) {
        drawNoise(width, height);
      }

      animationId = window.requestAnimationFrame(animate);
    };

    resizeCanvas();
    createParticles();
    createLightBeams();
    animationId = window.requestAnimationFrame(animate);

    const handleResize = () => {
      resizeCanvas();
      createParticles();
      createLightBeams();
    };

    const handlePointerMove = (event: PointerEvent) => {
      targetMouseX = event.clientX;
      targetMouseY = event.clientY;
    };

    window.addEventListener("resize", handleResize, { passive: true });
    window.addEventListener("pointermove", handlePointerMove, { passive: true });

    return () => {
      window.cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("pointermove", handlePointerMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-[-1] pointer-events-none"
      aria-hidden="true"
    />
  );
}
