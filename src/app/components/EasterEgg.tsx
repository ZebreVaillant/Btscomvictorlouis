import { useEffect, useState } from "react";
import confetti from "canvas-confetti";
import { Sparkles } from "lucide-react";

export function EasterEgg() {
  const [keys, setKeys] = useState<string[]>([]);
  const [activated, setActivated] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  // Konami code: ArrowUp, ArrowUp, ArrowDown, ArrowDown, ArrowLeft, ArrowRight, ArrowLeft, ArrowRight, b, a
  const konamiCode = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a"];

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      setKeys((prevKeys) => {
        const newKeys = [...prevKeys, e.key].slice(-konamiCode.length);
        
        if (newKeys.join(",") === konamiCode.join(",")) {
          triggerEasterEgg();
          return [];
        }
        
        return newKeys;
      });
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, []);

  const triggerEasterEgg = () => {
    setActivated(true);
    setShowMessage(true);

    // Confettis explosifs
    const duration = 3000;
    const end = Date.now() + duration;

    const frame = () => {
      confetti({
        particleCount: 7,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ["#1C5C7F", "#F39226", "#2A7BA0", "#E07B15"],
      });
      confetti({
        particleCount: 7,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ["#1C5C7F", "#F39226", "#2A7BA0", "#E07B15"],
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };

    frame();

    // Cacher le message après 5 secondes
    setTimeout(() => {
      setShowMessage(false);
    }, 5000);
  };

  // Easter egg simple : double-clic sur le logo
  useEffect(() => {
    let clickCount = 0;
    let clickTimer: NodeJS.Timeout;

    const handleLogoClick = () => {
      clickCount++;
      
      clearTimeout(clickTimer);
      
      if (clickCount === 5) {
        // Confettis simple
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          colors: ["#1C5C7F", "#F39226", "#2A7BA0"],
        });
        clickCount = 0;
      }
      
      clickTimer = setTimeout(() => {
        clickCount = 0;
      }, 2000);
    };

    // Ajouter l'écouteur sur les liens vers la page d'accueil
    const homeLinks = document.querySelectorAll('a[href="/"]');
    homeLinks.forEach((link) => {
      link.addEventListener("click", handleLogoClick);
    });

    return () => {
      homeLinks.forEach((link) => {
        link.removeEventListener("click", handleLogoClick);
      });
      clearTimeout(clickTimer);
    };
  }, []);

  if (!showMessage) return null;

  return (
    <div className="fixed inset-0 pointer-events-none flex items-center justify-center z-[10000]">
      <div className="bg-gradient-to-r from-[#1C5C7F] to-[#F39226] text-white px-12 py-8 rounded-3xl shadow-2xl animate-bounce pointer-events-auto">
        <div className="flex items-center gap-4">
          <Sparkles size={48} className="animate-spin" />
          <div>
            <h3 className="text-3xl font-bold mb-2">🎉 Bravo !</h3>
            <p className="text-xl">Vous avez trouvé l'Easter Egg !</p>
            <p className="text-sm text-white/80 mt-2">Futur étudiant en BTS Com' ? 😉</p>
          </div>
          <Sparkles size={48} className="animate-spin" style={{ animationDirection: "reverse" }} />
        </div>
      </div>
    </div>
  );
}
