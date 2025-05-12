
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/50 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="text-xl font-bold bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">
          Portfolio
        </a>
        <div className="flex gap-8 items-center">
          <a href="#about" className="text-sm text-foreground/80 hover:text-foreground transition-colors">About</a>
          <a href="#projects" className="text-sm text-foreground/80 hover:text-foreground transition-colors">Projects</a>
          <a href="#skills" className="text-sm text-foreground/80 hover:text-foreground transition-colors">Skills</a>
          <Button variant="secondary" className="bg-primary/10 hover:bg-primary/20">
            Contact
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
