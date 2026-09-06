import React, { useState, useRef, useEffect } from 'react';
import { Terminal, CornerDownLeft, Trash2, Layout, Cpu, ArrowRight } from 'lucide-react';
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

export const TerminalCLI: React.FC<TerminalCLIProps> = ({ isFullScreen = false, onSwitchToVisual, onClose }) => {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState<HistoryItem[]>([
    {
      id: 1,
      command: 'init',
      response: {
        type: 'success',
        output: `PS C:\\Users\\MayurRepale> MayurOS PowerShell v7.4.1 [x64-Windows-System]
Type 'help' to inspect commands or 'gui' to launch the Visual Portfolio experience.`
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
      terminalEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
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

    if (trimmed === 'clear') {
      setHistory([]);
      setInputVal('');
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
    { label: '🎨 Launch GUI Portfolio (gui)', cmd: 'gui' },
    { label: '❓ Help', cmd: 'help' },
    { label: '⚡ Whoami', cmd: 'whoami' },
    { label: '🚀 Skills Matrix', cmd: 'skills' },
    { label: '📦 Projects', cmd: 'projects' },
    { label: '🏢 Experience', cmd: 'experience' },
    { label: '📫 Contact Info', cmd: 'contact' },
    { label: '💼 Sudo Hire', cmd: 'sudo hire' }
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
        className="rounded-3xl bg-obsidian-900 border border-white/20 shadow-2xl overflow-hidden font-mono text-xs sm:text-sm shadow-indigo-950/50"
      >
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
              placeholder="Type 'gui' for visual mode, 'help' for commands..."
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
              className={`px-3 py-1 rounded-lg border text-xs font-mono transition-all ${
                pill.cmd === 'gui'
                  ? 'bg-indigo-600 text-white border-indigo-500 font-semibold shadow-md shadow-indigo-500/30'
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
