import React from 'react'


const experiences = [
  {
    period: "January 2025 - Present",
    role: "Software Engineer",
    company: "PC Group",
    description:
      "Specialized in real-time industrial dashboards and data-driven user interfaces. Experienced in designing and building responsive web applications using React, JavaScript, HTML, CSS, and MSSQL integration. Strong foundation in system design and automation, with a focus on developing scalable and intuitive frontend solutions for data visualization and monitoring systems",
  },
  {
    period: "November 2023 - December 2024",
    role: "System and Project Engineer",
    company: "PC Group",
    description:
      "Experienced in industrial automation, PLC/SCADA systems, and real-time monitoring solutions. Involved in the design and implementation of data-driven dashboards, modular UI components, and scalable system architectures. Strong background in translating operational requirements into reliable technical solutions, with exposure to scripting, data integration, and end-to-end project delivery",
  },
];

const Experiences = () => {
  return (
    <section id="experiences" className="py-32 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-16 text-center">Experience</h2>

        <div className="relative">
          {/* Timeline vertical line */}
          <div className="timeline-glow absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2"></div>

          {/* Timeline items */}
          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className="relative grid md:grid-cols-2 gap-8 animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 150}ms` }}
              >
                {/* Timeline dot - same x position as line */}
                <div className="absolute left-4 md:left-1/2 top-8 -translate-x-1/2 z-10">
                  <div className="w-4 h-4 rounded-full bg-primary shadow-[0_0_12px_rgba(32,178,166,0.9)] border border-primary/80" />
                </div>

                {/* Content */}
                <div
                  className={`pl-14 md:pl-0 ${
                    idx % 2 === 0
                      ? "md:pr-16 md:text-right"
                      : "md:col-start-2 md:pl-16"
                  }`}
                >
                  <div className="timeline-card rounded-3xl px-8 py-7">
                    <p className="text-primary font-semibold mb-4">{exp.period}</p>

                    <h3 className="text-2xl font-bold leading-tight">{exp.role}</h3>

                    <p className="text-lg text-muted-foreground mt-1">{exp.company}</p>

                    <p className="text-muted-foreground mt-6 leading-7">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experiences;

