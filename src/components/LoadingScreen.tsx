import { Progress } from "@/components/ui/progress";
import { useEffect, useState } from "react";

const LoadingScreen = ({ onLoadingComplete }: { onLoadingComplete: () => void }) => {
  const [progress, setProgress] = useState(0);
  const letters = "LOADING".split("");

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => Math.min(prev + 1, 100));
    }, 50);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (progress === 100) {
      onLoadingComplete();
    }
  }, [progress, onLoadingComplete]);

  return (
    <div className="fixed inset-0 bg-background flex flex-col items-center justify-center bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900 via-background to-background">
      <div className="relative mb-12">
        <div className="absolute inset-0 blur-3xl bg-blue-500/20 rounded-full" />
        <div className="relative flex gap-4">
          {letters.map((letter, index) => (
            <span
              key={index}
              className="text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50"
              style={{
                opacity: progress > index * 10 ? 1 : 0.2,
                transition: "opacity 0.5s ease",
                animationName: progress > index * 10 ? "float" : "none",
                animationDuration: progress > index * 10 ? "3s" : "0s",
                animationTimingFunction: "ease-in-out",
                animationIterationCount: progress > index * 10 ? "infinite" : "0",
                animationDelay: `${index * 0.1}s`,
              }}
            >
              {letter}
            </span>
          ))}
        </div>
      </div>

      <div className="relative w-[300px] mb-8">
        <div className="absolute inset-0 blur-lg bg-blue-500/20" />
        <Progress
          value={progress}
          className="h-2 relative"
          style={{
            background:
              "linear-gradient(90deg, rgba(59,130,246,0.2) 0%, rgba(59,130,246,0.1) 100%)",
          }}
        />
      </div>

      <p className="text-lg text-blue-200/80 font-medium tracking-wider">{progress}%</p>
    </div>
  );
};

export default LoadingScreen;
