import React, {useMemo} from 'react'
import {Download, Linkedin, Github} from "lucide-react";

const Hero = () => {

  // useMemo: memoizes (stores in cache) the result of a computation, reuses it if same inputs occur agai, avoids unncessary recalculation during re-rendering
  // stores position of 30 random generated dots
  const dots = useMemo(() => {
    return Array.from({ length: 30 }, (_, i) => {
      return {
        id: i,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        duration: 15 + Math.random() * 20,
        delay: Math.random() * 5,
      };
    });
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      
      {/* Animated background layer */}
      {/* pointer-events-none: dots ignore mouse interactions */}
      {/* Dots move through animation in a line (slow-drift animation) at different durations*/}
      <div className="absolute inset-0 pointer-events-none -z-10">
        {dots.map((dot) => (
          <div
            key={dot.id}
            className="absolute w-1.5 h-1.5 rounded-full opacity-60"
            style={{
              backgroundColor: "#20B2A6",
              left: dot.left,
              top: dot.top,
              animation: `slow-drift ${dot.duration}s ease-in-out infinite`,
              animationDelay: `${dot.delay}s`,
            }}
          />
        ))}
      </div>

      {/* Content */} 
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-[0.35fr_0.65fr] gap-12 items-center">

          {/* Left Column - Profile Image */}
          <div className="flex justify-center">
            <div className="rounded-full glow-border p-1">
              <div className="w-48 h-48 rounded-full overflow-hidden glass">
                <img
                  src="/Profile Picture.jpeg"
                  alt="Soong Shin Ee profile picture"
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
            </div>
          </div>
          

          {/* RIGHT SIDE — HERO CONTENT */}
          <div className="flex flex-col gap-6 text-center lg:text-left">

            {/* Social Links*/}
            <div className="flex items-center justify-center lg:justify-start gap-4 animate-fade-in animation-delay-400">
              <span className=" text-muted-foreground">Follow: </span>
              {[
                {icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/shin-ee-soong-1007a7254/"},
                {icon: Github, label: "Github", href: "#"},
              ].map((social, idx) => (
                <a 
                  key = {idx} 
                  href = {social.href} 
                  title = {social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
                >
                  {<social.icon className="w-5 h-5"/>}
                  </a>
              ))}
            </div>

            {/* Role badge */}
            <div className="flex gap-3 justify-center lg:justify-start">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary w-fit">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                Solution Architect Engineer
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary w-fit">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                System & Project Engineer
              </span>
            </div>

            {/* Hero description */}
            <p className="text-muted-foreground max-w-xl mx-auto lg:mx-0">
              I am a Solution Architect Engineer with a background in Electrical and Electronic Engineering, 
              currently developing web-based data dashboards for industrial monitoring systems.
            </p>
            <p className="text-muted-foreground max-w-xl mx-auto lg:mx-0">
              My work focuses on building scalable monitoring platforms that integrate plant data, 
              MSSQL databases, production metrics, and real-time visualizations to support operational decision-making.
            </p>

            <p className="text-muted-foreground max-w-xl mx-auto lg:mx-0">
            I am currently expanding my skills in modern frontend and full-stack development with React, 
            with a passion for building scalable, data-driven, and user-friendly web applications.
            </p>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
