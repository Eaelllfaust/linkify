"use client";

import { useEffect, useState } from "react";
import { cn } from "@/utils";

interface TypingAnimationProps {
  text: string;
  typingSpeed?: number;
  deletingSpeed?: number;
  delayBeforeDelete?: number;
  delayBeforeType?: number;
  className?: string;
}

const TypingAnimation = ({
  text,
  typingSpeed = 150,
  deletingSpeed = 100,
  delayBeforeDelete = 1000,
  delayBeforeType = 500,
  className,
}: TypingAnimationProps) => {
  const [displayedText, setDisplayedText] = useState<string>("");
  const [isDeleting, setIsDeleting] = useState<boolean>(false);
  const [isWaiting, setIsWaiting] = useState<boolean>(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    const animate = () => {
      if (isWaiting) {
        timeout = setTimeout(() => {
          setIsWaiting(false);
          setIsDeleting(!isDeleting);
        }, isDeleting ? delayBeforeType : delayBeforeDelete);
        return;
      }

      if (!isDeleting && displayedText === text) {
        setIsWaiting(true);
        return;
      }

      if (isDeleting && displayedText === "") {
        setIsWaiting(true);
        return;
      }

      const speed = isDeleting ? deletingSpeed : typingSpeed;
      timeout = setTimeout(() => {
        setDisplayedText(prev => 
          isDeleting 
            ? prev.slice(0, -1)
            : text.slice(0, prev.length + 1)
        );
      }, speed);
    };

    animate();

    return () => clearTimeout(timeout);
  }, [
    displayedText,
    isDeleting,
    isWaiting,
    text,
    typingSpeed,
    deletingSpeed,
    delayBeforeDelete,
    delayBeforeType
  ]);

  return (
    <h1
      className={cn(
        "font-display text-center text-4xl font-bold leading-[5rem] tracking-[-0.02em]",
        className,
      )}
    >
      {displayedText}
      <span className="animate-pulse">|</span>
    </h1>
  );
};

export default TypingAnimation;