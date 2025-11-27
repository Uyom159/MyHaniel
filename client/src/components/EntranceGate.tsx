import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import backgroundImage from "@assets/generated_images/romantic_rose_petals_background.png";

interface EntranceGateProps {
  onEnter: () => void;
}

export default function EntranceGate({ onEnter }: EntranceGateProps) {
  const [noButtonPosition, setNoButtonPosition] = useState({ top: 0, left: 0 });
  const [moveCount, setMoveCount] = useState(0);
  const [isNoButtonAbsolute, setIsNoButtonAbsolute] = useState(false);
  const noButtonRef = useRef<HTMLButtonElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const moveNoButton = (e: React.MouseEvent | React.TouchEvent) => {
    if (moveCount >= 4) return;

    const container = containerRef.current;
    if (!container) return;

    const containerRect = container.getBoundingClientRect();
    const buttonWidth = 120;
    const buttonHeight = 48;

    const maxX = containerRect.width - buttonWidth;
    const maxY = containerRect.height - buttonHeight;

    const newLeft = Math.random() * maxX;
    const newTop = Math.random() * maxY;

    setNoButtonPosition({ top: newTop, left: newLeft });
    setIsNoButtonAbsolute(true);
    setMoveCount(moveCount + 1);
  };

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/40" />
      
      <div className="relative z-10 text-center px-4 max-w-2xl">
        <div className="flex justify-center gap-4 mb-8">
          <Heart className="w-8 h-8 text-primary fill-primary animate-pulse" />
          <Heart className="w-6 h-6 text-primary fill-primary animate-pulse delay-75" />
        </div>
        
        <h1 className="font-serif text-5xl md:text-6xl font-bold text-white mb-4" data-testid="text-entrance-question">
          I Love You
        </h1>
        <p className="font-sans text-3xl md:text-4xl text-white/95 mb-12" data-testid="text-entrance-subquestion">
          Do you Love me too?
        </p>
        
        <div className="flex justify-center gap-6 relative">
          <Button
            size="lg"
            className="px-12 py-6 text-lg font-medium rounded-full"
            onClick={onEnter}
            data-testid="button-yes"
          >
            Yes ♥
          </Button>
          
          <Button
            ref={noButtonRef}
            size="lg"
            variant="outline"
            className={`px-12 py-6 text-lg font-medium rounded-full bg-background/80 backdrop-blur-sm transition-all duration-300 ${
              isNoButtonAbsolute ? "absolute" : ""
            }`}
            style={
              isNoButtonAbsolute
                ? {
                    top: `${noButtonPosition.top}px`,
                    left: `${noButtonPosition.left}px`,
                  }
                : {}
            }
            onMouseEnter={moveNoButton}
            onTouchStart={moveNoButton}
            data-testid="button-no"
          >
            No
          </Button>
        </div>
        
        <div className="flex justify-center gap-4 mt-12">
          <Heart className="w-6 h-6 text-primary fill-primary animate-pulse delay-150" />
          <Heart className="w-8 h-8 text-primary fill-primary animate-pulse" />
        </div>
      </div>
    </div>
  );
}
