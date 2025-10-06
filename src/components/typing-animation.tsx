"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface TypingAnimationProps {
  text: string;
  className?: string;
  speed?: number;
}

export function TypingAnimation({
  text,
  className,
  speed = 150,
}: TypingAnimationProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setDisplayedText("");
    setIndex(0);
  }, [text]);

  useEffect(() => {
    if (index < text.length) {
      const timeoutId = setTimeout(() => {
        setDisplayedText((prev) => prev + text.charAt(index));
        setIndex((prev) => prev + 1);
      }, speed);
      return () => clearTimeout(timeoutId);
    }
  }, [index, speed, text]);

  return (
    <span className={cn(className, "inline-block")}>
      {displayedText}
      <span className="typing-cursor"></span>
    </span>
  );
}
