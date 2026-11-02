import React, { useState, useRef, useEffect } from 'react';
import { Terminal, CornerDownLeft, Trash2, Layout, Cpu, ArrowRight } from 'lucide-react';
import confetti from 'canvas-confetti';
import { executeCLICommand } from '../data/cliCommands';
import { soundFX } from '../utils/sound';

interface HistoryItem {
  id: number;
  command: string;
  response: ReturnType<typeof executeCLICommand>;
  timestamp: string;
}

interface TerminalCLIProps {
  isFullScreen?: boolean;
  onSwitchToVisual?: () => void;
  onClose?: () => void;
}

const MatrixRain: React.FC<{ onExit: () => void }> = ({ onExit }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 600);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 400);

    const characters = '01MAYURREPALEFASTAPIPYTHONREACTPOSTGRES0123456789ABCDEFｦｱｳｴｵｶｷｹｺｻｼｽｾｿﾀﾂﾃﾅﾆﾇﾈ';
    const fontSize = 14;
    const columns = Math.max(1, Math.floor(width / fontSize));
    const drops: number[] = Array(columns).fill(1);

    const draw = () => {
      ctx.fillStyle = 'rgba(10, 12, 16, 0.08)';
      ctx.fillRect(0, 0, width, height);

      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = characters[Math.floor(Math.random() * characters.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        // Head of drop is bright white/green
        if (Math.random() > 0.85) {
          ctx.fillStyle = '#FFFFFF';
        } else {
          ctx.fillStyle = '#10B981';
        }

        ctx.fillText(text, x, y);

        if (y > height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onExit();
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onExit]);

  return (
    <div
      onClick={onExit}
      className="absolute inset-0 z-20 bg-[#06080D] cursor-pointer flex flex-col justify-between overflow-hidden rounded-3xl"
    >
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full block" />
      <div className="relative z-30 p-3 sm:p-4 flex justify-between items-center text-xs font-mono bg-black/70 backdrop-blur-sm border-b border-emerald-500/30 text-emerald-400">
        <span className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span className="font-bold">MAYUROS MATRIX STREAM ACTIVE</span>
        </span>
        <button
          onClick={onExit}
          className="px-2.5 py-1 rounded bg-emerald-500/20 hover:bg-emerald-500/40 text-emerald-300 border border-emerald-500/40 text-[11px] transition-colors"
        >
          Exit (ESC)
        </button>
      </div>
      <div className="relative z-30 p-2 text-center text-[10px] sm:text-xs font-mono text-emerald-400/80 bg-black/70 pointer-events-none">
        Tap anywhere or press ESC to return to shell
      </div>
    </div>
  );
};

export const TerminalCLI: React.FC<TerminalCLIProps> = ({ isFullScreen = false, onSwitchToVisual, onClose }) => {
  const [inputVal, setInputVal] = useState('');
  const [isMatrixActive, setIsMatrixActive] = useState(false);
  const [history, setHistory] = useState<HistoryItem[]>([
    {
      id: 1,
      command: 'init',
      response: {
        type: 'success',
        output: `PS C:\\Users\\MayurRepale> MayurOS PowerShell v7.4.1 [x64-Windows-System]
Type 'neofetch' for system overview, 'ask <question>' for AI agent, or 'help' for commands.`
      },
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [cmdHistory, setCmdHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState<number>(-1);

  const terminalBodyRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (terminalBodyRef.current) {
      terminalBodyRef.current.scrollTo({
        top: terminalBodyRef.current.scrollHeight,
        behavior: 'smooth'
      });
    }
  }, [history]);

  useEffect(() => {
    // Auto-scroll window to center MayurOS terminal when opened
    const terminalEl = document.getElementById('terminal');
    if (terminalEl) {
      const lenis = (window as unknown as { lenis?: { scrollTo: (target: unknown, opts?: unknown) => void } }).lenis;
      if (lenis) {
        lenis.scrollTo(terminalEl, { duration: 1.2, offset: -40 });
      } else {
        terminalEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
    setTimeout(() => {
      inputRef.current?.focus();
    }, 200);
  }, [isFullScreen]);

  const handleCommandSubmit = (cmdToRun?: string) => {
    const targetCmd = cmdToRun !== undefined ? cmdToRun : inputVal;
    const trimmed = targetCmd.trim().toLowerCase();

    if (!trimmed) return;

    soundFX.playClick();

    if (trimmed === 'gui' || trimmed === 'portfolio' || trimmed === 'visual') {
      if (onSwitchToVisual) {
        onSwitchToVisual();
        return;
      }
    }

    if (trimmed === 'matrix') {
      setIsMatrixActive(true);
      setInputVal('');
      return;
    }

    if (trimmed === 'clear') {
      setHistory([]);
      setInputVal('');
      return;
    }

    if (trimmed === 'sudo hire' || trimmed === 'hire') {
      try {
        confetti({
          particleCount: 120,
          spread: 80,
          origin: { y: 0.6 },
          colors: ['#A855F7', '#EC4899', '#3B82F6', '#10B981', '#F59E0B']
        });
        soundFX.playSuccess();
      } catch {}
    }

    if (trimmed === 'ask') {
      const res = executeCLICommand('ask');
      setHistory(prev => [
        ...prev,
        {
          id: Date.now(),
          command: 'ask',
          response: res,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
      ]);
      setCmdHistory(prev => [...prev, 'ask']);
      setHistoryIndex(-1);
      setInputVal('ask why hire you?');
      return;
    }

    const res = executeCLICommand(targetCmd);

    setHistory(prev => [
      ...prev,
      {
        id: Date.now(),
        command: targetCmd,
        response: res,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }
    ]);

    setCmdHistory(prev => [...prev, targetCmd]);
    setHistoryIndex(-1);
    setInputVal('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    soundFX.playKeypress();

    if (e.key === 'Enter') {
      e.preventDefault();
      handleCommandSubmit();
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (cmdHistory.length > 0) {
        const nextIdx = historyIndex + 1 < cmdHistory.length ? historyIndex + 1 : historyIndex;
        setHistoryIndex(nextIdx);
        setInputVal(cmdHistory[cmdHistory.length - 1 - nextIdx] || '');
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const nextIdx = historyIndex - 1;
        setHistoryIndex(nextIdx);
        setInputVal(cmdHistory[cmdHistory.length - 1 - nextIdx] || '');
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInputVal('');
      }
    }
  };

  const quickPills = [
    { label: '🎨 Launch GUI', cmd: 'gui' },
    { label: '💻 Neofetch', cmd: 'neofetch' },
    { label: '🤖 Ask AI', cmd: 'ask' },
    { label: '⚡ Skills Matrix', cmd: 'skills' },
    { label: '📦 Projects', cmd: 'projects' },
    { label: '🏢 Experience', cmd: 'experience' },
    { label: '🚀 Benchmark', cmd: 'benchmark' },
    { label: '🟢 Matrix Rain', cmd: 'matrix' },
    { label: '🎉 Sudo Hire', cmd: 'sudo hire' }
  ];

  return (
    <div
      className={
        isFullScreen
          ? 'min-h-screen pt-28 pb-16 flex flex-col justify-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'
          : 'py-24 relative bg-obsidian-950/80 border-t border-white/5 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8'
      }
      id="terminal"
    >
      {/* Header Banner if Fullscreen */}
      {isFullScreen && (
        <div className="text-center mb-8">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs font-mono mb-4">
            <Cpu className="w-3.5 h-3.5" />
            <span>MayurOS v7.4 PowerShell Engine Active</span>
          </div>
          <h1 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight">
            Mayur Repale <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">PowerShell Console</span>
          </h1>
          <p className="text-xs sm:text-sm font-mono text-slate-400 mt-2 max-w-2xl mx-auto">
            Welcome! Interact with Mayur&apos;s background, skills, and projects via command-line, or toggle to the visual GUI portfolio anytime.
          </p>

          {/* Quick CTA to switch */}
          <div className="mt-6 flex justify-center">
            <button
              onClick={() => {
                soundFX.playClick();
                if (onSwitchToVisual) onSwitchToVisual();
              }}
              onMouseEnter={() => soundFX.playHover()}
              className="px-6 py-3 rounded-2xl bg-gradient-to-r from-indigo-600 via-cyan-600 to-emerald-500 text-white font-display font-semibold text-xs shadow-xl shadow-indigo-500/20 hover:scale-[1.02] active:scale-95 transition-all flex items-center space-x-2"
            >
              <Layout className="w-4 h-4" />
              <span>Switch to Visual GUI Portfolio Mode</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {!isFullScreen && (
        <div className="text-center mb-10">
          <div className="inline-flex items-center space-x-2 text-indigo-400 text-xs font-mono tracking-widest uppercase mb-3">
            <Terminal className="w-4 h-4" />
            <span>Interactive Terminal Shell</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
            MayurOS CLI Environment
          </h2>
        </div>
      )}

      {/* Terminal Window Container */}
      <div
        onClick={() => inputRef.current?.focus()}
        className="relative rounded-3xl bg-obsidian-900 border border-white/20 shadow-2xl overflow-hidden font-mono text-xs sm:text-sm shadow-indigo-950/50"
      >
        {/* Matrix Rain Overlay */}
        {isMatrixActive && <MatrixRain onExit={() => setIsMatrixActive(false)} />}

        {/* Top Window Bar */}
        <div className="px-4 py-3 bg-obsidian-950 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div
              className={`w-3 h-3 rounded-full bg-rose-500/80 ${onClose ? 'cursor-pointer hover:scale-110 transition-transform' : ''}`}
              onClick={() => {
                if (onClose) onClose();
              }}
              title={onClose ? 'Close Terminal' : 'Terminal Window'}
            />
            <div className="w-3 h-3 rounded-full bg-amber-500/80" />
            <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
            <span className="text-xs text-slate-400 ml-2 font-mono">
              PowerShell 7.4.1 • C:\Users\MayurRepale\portfolio
            </span>
          </div>

          <div className="flex items-center space-x-3">
            {onSwitchToVisual && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  soundFX.playClick();
                  onSwitchToVisual();
                }}
                className="px-2.5 py-1 rounded-lg bg-indigo-600/80 hover:bg-indigo-600 text-white text-[11px] font-mono flex items-center space-x-1 transition-colors"
              >
                <Layout className="w-3.5 h-3.5" />
                <span>Launch GUI</span>
              </button>
            )}

            <button
              onClick={(e) => {
                e.stopPropagation();
                soundFX.playClick();
                setHistory([]);
              }}
              title="Clear Output"
              className="text-slate-400 hover:text-white p-1 rounded-md hover:bg-white/10"
            >
              <Trash2 className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Terminal Output Body */}
        <div
          data-lenis-prevent
          onWheel={(e) => e.stopPropagation()}
          ref={terminalBodyRef}
          className={
            isFullScreen
              ? 'p-6 h-[420px] sm:h-[480px] overflow-y-auto custom-scrollbar space-y-4 bg-obsidian-950/95 text-slate-200'
              : 'p-6 h-80 sm:h-96 overflow-y-auto custom-scrollbar space-y-4 bg-obsidian-950/95 text-slate-200'
          }
        >
          {history.map((item) => (
            <div key={item.id} className="space-y-1.5">
              {/* Command Prompt Line */}
              <div className="flex items-center space-x-2 text-slate-400">
                <span className="text-cyan-400 font-semibold">PS C:\MayurRepale&gt;</span>
                <span className="text-white font-medium">{item.command}</span>
                <span className="text-[10px] text-slate-500 ml-auto">{item.timestamp}</span>
              </div>

              {/* Output Response */}
              <div className="pl-4 border-l-2 border-indigo-500/40 py-1">
                <pre
                  className={`whitespace-pre-wrap font-mono ${
                    item.response.type === 'success'
                      ? 'text-emerald-400'
                      : item.response.type === 'error'
                      ? 'text-rose-400'
                      : item.response.type === 'info'
                      ? 'text-cyan-300'
                      : item.response.type === 'warning'
                      ? 'text-amber-400'
                      : item.response.type === 'matrix'
                      ? 'text-emerald-300 font-bold'
                      : 'text-slate-300'
                  }`}
                >
                  {item.response.output}
                </pre>
              </div>
            </div>
          ))}

          {/* Interactive Input Line */}
          <div className="flex items-center space-x-2 pt-2">
            <span className="text-cyan-400 font-semibold flex-shrink-0">PS C:\MayurRepale&gt;</span>
            <input
              ref={inputRef}
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Try 'neofetch', 'ask why hire you?', 'matrix', 'sudo hire'..."
              className="w-full bg-transparent border-none outline-none text-white font-mono placeholder:text-slate-600 focus:ring-0"
            />
            <button
              onClick={() => handleCommandSubmit()}
              className="p-1 rounded-md text-slate-400 hover:text-cyan-400"
            >
              <CornerDownLeft className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Command Pills Bar */}
        <div className="p-4 bg-obsidian-950 border-t border-white/10 flex flex-wrap gap-2 items-center">
          <span className="text-[11px] text-slate-500 font-mono mr-1">Shortcuts:</span>
          {quickPills.map((pill, idx) => (
            <button
              key={idx}
              onClick={() => handleCommandSubmit(pill.cmd)}
              onMouseEnter={() => soundFX.playHover()}
              className={`px-3 py-1 rounded-lg border text-xs font-mono transition-all cursor-pointer ${
                pill.cmd === 'gui'
                  ? 'bg-indigo-600 text-white border-indigo-500 font-semibold shadow-md shadow-indigo-500/30'
                  : pill.cmd === 'sudo hire'
                  ? 'bg-purple-600/20 border-purple-500/50 text-purple-300 hover:bg-purple-600/30 font-semibold shadow-md shadow-purple-500/20'
                  : pill.cmd === 'matrix'
                  ? 'bg-emerald-600/20 border-emerald-500/50 text-emerald-300 hover:bg-emerald-600/30 font-semibold shadow-md shadow-emerald-500/20'
                  : pill.cmd === 'neofetch'
                  ? 'bg-cyan-600/20 border-cyan-500/50 text-cyan-200 hover:bg-cyan-600/30 font-semibold'
                  : 'bg-white/5 border-white/10 hover:border-cyan-500/50 text-cyan-300 hover:bg-cyan-500/10'
              }`}
            >
              {pill.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
