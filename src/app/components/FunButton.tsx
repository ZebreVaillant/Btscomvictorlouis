import { ReactNode, useState } from "react";
import { motion } from "motion/react";
import confetti from "canvas-confetti";

interface FunButtonProps {
  children: ReactNode;
  onClick?: () => void;
  href?: string;
  variant?: "primary" | "secondary";
  className?: string;
  withConfetti?: boolean;
}

export function FunButton({
  children,
  onClick,
  href,
  variant = "primary",
  className = "",
  withConfetti = false,
}: FunButtonProps) {
  const [isPressed, setIsPressed] = useState(false);

  const handleClick = (e: React.MouseEvent) => {
    if (withConfetti) {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = (rect.left + rect.width / 2) / window.innerWidth;
      const y = (rect.top + rect.height / 2) / window.innerHeight;

      confetti({
        particleCount: 30,
        spread: 60,
        origin: { x, y },
        colors: ["#1C5C7F", "#F39226", "#2A7BA0"],
      });
    }

    setIsPressed(true);
    setTimeout(() => setIsPressed(false), 200);
    
    if (onClick) onClick();
  };

  const baseClasses =
    variant === "primary"
      ? "bg-gradient-to-r from-[#F39226] to-[#E07B15] text-white shadow-lg hover:shadow-2xl hover:shadow-[#F39226]/30"
      : "bg-white/10 backdrop-blur-md border-2 border-white/50 text-white hover:bg-white/20";

  const combinedClasses = `inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold transition-all ${baseClasses} ${className}`;

  const buttonContent = (
    <motion.button
      className={combinedClasses}
      onClick={handleClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      animate={isPressed ? { rotate: [0, -5, 5, -5, 0] } : {}}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      {children}
    </motion.button>
  );

  if (href) {
    return (
      <a href={href} className="inline-block">
        {buttonContent}
      </a>
    );
  }

  return buttonContent;
}
