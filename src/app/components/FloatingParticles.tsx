import { motion } from "motion/react";

export function FloatingParticles() {
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    size: Math.random() * 10 + 5,
    x: Math.random() * 100,
    delay: Math.random() * 5,
    duration: Math.random() * 10 + 10,
  }));

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-gradient-to-br from-[#F39226]/20 to-[#1C5C7F]/20 blur-sm"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.x}%`,
          }}
          animate={{
            y: ["-100vh", "100vh"],
            x: [0, Math.random() * 100 - 50],
            opacity: [0, 0.6, 0],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}
