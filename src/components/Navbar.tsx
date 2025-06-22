import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="text-xl font-bold bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent"
        >
          Portfolio
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8 items-center">
          <a
            href="#about"
            className="text-sm text-foreground/80 hover:text-foreground transition-colors"
          >
            About
          </a>
          <a
            href="#projects"
            className="text-sm text-foreground/80 hover:text-foreground transition-colors"
          >
            Projects
          </a>
          <a
            href="#skills"
            className="text-sm text-foreground/80 hover:text-foreground transition-colors"
          >
            Skills
          </a>
          <Button
            variant="secondary"
            className="bg-primary/10 hover:bg-primary/20"
          >
            Contact
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden" onClick={() => setOpen(true)}>
          <Menu className="w-6 h-6 text-foreground" />
        </button>
      </div>

      {/* Mobile Sidebar (Solid Background) */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-background text-foreground shadow-xl border-l border-white/10 transition-transform duration-300 z-50 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6 flex flex-col gap-6 h-full">
          <div className="flex justify-between items-center mb-2">
            <span className="text-lg font-semibold">Menu</span>
            <button onClick={() => setOpen(false)}>
              <X className="w-6 h-6 text-foreground" />
            </button>
          </div>
          <a
            href="#about"
            onClick={() => setOpen(false)}
            className="text-sm text-foreground/80 hover:text-foreground transition-colors"
          >
            About
          </a>
          <a
            href="#projects"
            onClick={() => setOpen(false)}
            className="text-sm text-foreground/80 hover:text-foreground transition-colors"
          >
            Projects
          </a>
          <a
            href="#skills"
            onClick={() => setOpen(false)}
            className="text-sm text-foreground/80 hover:text-foreground transition-colors"
          >
            Skills
          </a>
          <Button
            variant="secondary"
            className="bg-primary/10 hover:bg-primary/20 mt-auto"
            onClick={() => setOpen(false)}
          >
            Contact
          </Button>
        </div>
      </div>

      {/* Backdrop */}
      {open && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setOpen(false)}
        />
      )}
    </nav>
  );
};

export default Navbar;
