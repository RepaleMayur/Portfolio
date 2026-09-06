import React from 'react';

interface ProjectCoverVisualProps {
  projectId: string;
  projectNumber: string;
  projectTitle: string;
}

export const ProjectCoverVisual: React.FC<ProjectCoverVisualProps> = ({
  projectId,
  projectNumber,
  projectTitle
}) => {
  return (
    <div className="w-full h-full relative overflow-hidden bg-[#09090B] flex items-center justify-center select-none font-mono">
      {/* Background Architectural Grid & Subtle Radial Glow */}
      <div 
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 50% 50%, rgba(168, 85, 247, 0.15) 0%, transparent 70%), 
                            linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px), 
                            linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px)`,
          backgroundSize: '100% 100%, 32px 32px, 32px 32px'
        }}
      />

      {/* PROJECT SPECIFIC ABSTRACT SYSTEM VISUALIZATION */}
      {renderVisualContent(projectId, projectNumber, projectTitle)}
    </div>
  );
};

function renderVisualContent(projectId: string, number: string, title: string) {
  switch (projectId) {
    case 'rrims':
      return <RRIMSVisual number={number} title={title} />;
    case 'ai-voice-assistant':
      return <AIVoiceVisual number={number} title={title} />;
    case 'highness-platform':
      return <HighnessVisual number={number} title={title} />;
    case 'mulika-store':
      return <MulikaStoreVisual number={number} title={title} />;
    case 'stone-ridge-wellness':
      return <StoneRidgeVisual number={number} title={title} />;
    case 'mipl-store-locator':
      return <MIPLStoreLocatorVisual number={number} title={title} />;
    case 'au-skincare':
      return <AuSkincareVisual number={number} title={title} />;
    case 'email-pdf-automation':
    case 'email-pdf-parser':
      return <EmailPDFAutomationVisual number={number} title={title} />;
    case 'pdf-security-redactor':
      return <PDFRedactorVisual number={number} title={title} />;
    case 'pdf-merger-splitter':
      return <PDFMergerVisual number={number} title={title} />;
    case 'scorecard-dashboard':
      return <ScorecardVisual number={number} title={title} />;
    case 'ecommerce-store-engine':
      return <EcommerceStoreVisual number={number} title={title} />;
    case 'weather-dashboard':
      return <WeatherDashboardVisual number={number} title={title} />;
    default:
      return <GenericAbstractVisual number={number} title={title} />;
  }
}

/* =========================================================================
   01 / RRIMS — RECRUITMENT & INTERVIEW WORKFLOW
   CANDIDATE → SCREENING → INTERVIEW → FEEDBACK → DECISION
   ========================================================================= */
const RRIMSVisual: React.FC<{ number: string; title: string }> = () => (
  <div className="relative w-full h-full p-6 flex flex-col justify-between items-center text-white/80">
    {/* Cover Header Badge */}
    <div className="w-full flex justify-between items-center border-b border-white/10 pb-3">
      <span className="text-[10px] sm:text-xs text-purple-400 tracking-widest font-bold">
        01 // WORKFLOW ENGINE PIPELINE
      </span>
      <span className="text-[10px] text-white/40 tracking-widest hidden sm:inline">
        RECRUITMENT MATRIX · FASTAPI + POSTGRESQL
      </span>
    </div>

    {/* Connected Nodes Workflow Diagram */}
    <div className="relative w-full max-w-xl my-auto py-4 flex items-center justify-between">
      {/* SVG Connecting Vector Lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none" viewBox="0 0 500 100">
        <defs>
          <linearGradient id="rrimsFlowGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#A855F7" stopOpacity="0.2" />
            <stop offset="50%" stopColor="#C084FC" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#A855F7" stopOpacity="0.2" />
          </linearGradient>
        </defs>
        <line x1="50" y1="50" x2="450" y2="50" stroke="rgba(255,255,255,0.12)" strokeWidth="1.5" />
        <path
          d="M 50,50 L 150,50 L 250,50 L 350,50 L 450,50"
          stroke="url(#rrimsFlowGrad)"
          strokeWidth="2"
          strokeDasharray="6 4"
          className="animate-pulse"
        />
      </svg>

      {/* 1. CANDIDATE */}
      <div className="relative z-10 flex flex-col items-center gap-2 group-hover:scale-105 transition-transform">
        <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-[#13111C] border border-white/20 flex items-center justify-center shadow-lg">
          <span className="text-[11px] font-bold text-white/70 font-mono">INGEST</span>
        </div>
        <span className="text-[9px] sm:text-[10px] text-white/70 tracking-widest font-mono font-bold">CANDIDATE</span>
      </div>

      {/* Arrow Indicator */}
      <span className="relative z-10 text-[10px] text-purple-400 font-mono font-bold">→</span>

      {/* 2. SCREENING */}
      <div className="relative z-10 flex flex-col items-center gap-2 group-hover:scale-105 transition-transform">
        <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-[#1A132B] border border-purple-500/40 flex items-center justify-center shadow-lg">
          <span className="text-[11px] font-bold text-purple-300 font-mono">EVAL</span>
        </div>
        <span className="text-[9px] sm:text-[10px] text-purple-400 tracking-widest font-mono font-bold">SCREENING</span>
      </div>

      {/* Arrow Indicator */}
      <span className="relative z-10 text-[10px] text-purple-400 font-mono font-bold">→</span>

      {/* 3. INTERVIEW */}
      <div className="relative z-10 flex flex-col items-center gap-2 group-hover:scale-110 transition-transform">
        <div className="relative w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-purple-950/80 border-2 border-purple-500 flex items-center justify-center shadow-2xl">
          <span className="w-2.5 h-2.5 rounded-full bg-purple-400 animate-ping absolute" />
          <span className="w-2.5 h-2.5 rounded-full bg-purple-300 relative z-10" />
        </div>
        <span className="text-[10px] sm:text-[11px] text-white font-mono font-bold tracking-widest">INTERVIEW</span>
      </div>

      {/* Arrow Indicator */}
      <span className="relative z-10 text-[10px] text-purple-400 font-mono font-bold">→</span>

      {/* 4. FEEDBACK */}
      <div className="relative z-10 flex flex-col items-center gap-2 group-hover:scale-105 transition-transform">
        <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-[#1A132B] border border-purple-500/40 flex items-center justify-center shadow-lg">
          <span className="text-[11px] font-bold text-purple-300 font-mono">NOTES</span>
        </div>
        <span className="text-[9px] sm:text-[10px] text-purple-400 tracking-widest font-mono font-bold">FEEDBACK</span>
      </div>

      {/* Arrow Indicator */}
      <span className="relative z-10 text-[10px] text-emerald-400 font-mono font-bold">→</span>

      {/* 5. DECISION */}
      <div className="relative z-10 flex flex-col items-center gap-2 group-hover:scale-105 transition-transform">
        <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-[#13111C] border border-emerald-500/50 flex items-center justify-center shadow-lg">
          <span className="text-[11px] font-bold text-emerald-400 font-mono">FINAL</span>
        </div>
        <span className="text-[9px] sm:text-[10px] text-emerald-400 tracking-widest font-mono font-bold">DECISION</span>
      </div>
    </div>

    {/* Footer Status Pill */}
    <div className="w-full flex justify-between items-center text-[10px] text-white/40 pt-3 border-t border-white/5 font-mono">
      <span>WORKFLOW: CANDIDATE → SCREENING → INTERVIEW → FEEDBACK → DECISION</span>
      <span className="text-purple-400 font-bold">STATUS: ACTIVE PIPELINE</span>
    </div>
  </div>
);

/* =========================================================================
   02 / AI VOICE ASSISTANT — VOICE & SIGNAL PROCESSING
   VOICE → STT → AI → TTS → RESPONSE
   ========================================================================= */
const AIVoiceVisual: React.FC<{ number: string; title: string }> = () => (
  <div className="relative w-full h-full p-6 flex flex-col justify-between items-center text-white/80">
    <div className="w-full flex justify-between items-center border-b border-white/10 pb-3">
      <span className="text-[10px] sm:text-xs text-purple-400 tracking-widest font-bold font-mono">
        02 // SPEECH SYNTHESIS & AI SIGNAL PIPELINE
      </span>
      <span className="text-[10px] text-white/40 tracking-widest hidden sm:inline font-mono">
        WHISPER · GROQ AI · EDGE-TTS
      </span>
    </div>

    {/* Audio Waveform & Signal Flow Pipeline */}
    <div className="relative w-full max-w-xl my-auto py-2 flex flex-col items-center gap-5">
      {/* Dynamic Spectrum Waveform Visual */}
      <div className="flex items-center justify-center gap-1.5 h-16 sm:h-20 w-full px-4">
        {[25, 45, 75, 40, 95, 60, 100, 80, 35, 90, 65, 85, 45, 70, 85, 50, 30].map((height, i) => (
          <div
            key={i}
            className="w-1.5 sm:w-2 bg-gradient-to-t from-purple-950 via-purple-500 to-purple-300 rounded-full transition-all duration-300"
            style={{
              height: `${height}%`,
              opacity: (i % 2 === 0) ? 0.95 : 0.6
            }}
          />
        ))}
      </div>

      {/* Signal Node Pipeline */}
      <div className="flex items-center justify-between w-full max-w-lg bg-[#12101D] border border-white/15 px-3 sm:px-5 py-2.5 rounded-xl font-mono text-[10px] sm:text-xs">
        <span className="text-white/80 font-bold">VOICE</span>
        <span className="text-purple-400">→</span>
        <span className="text-purple-300 font-bold">STT</span>
        <span className="text-purple-400">→</span>
        <span className="text-purple-400 font-bold bg-purple-900/60 px-2 py-0.5 rounded border border-purple-500/40">AI CORE</span>
        <span className="text-purple-400">→</span>
        <span className="text-purple-300 font-bold">TTS</span>
        <span className="text-purple-400">→</span>
        <span className="text-emerald-400 font-bold">RESPONSE</span>
      </div>
    </div>

    <div className="w-full flex justify-between items-center text-[10px] text-white/40 pt-3 border-t border-white/5 font-mono">
      <span>SIGNAL FLOW: VOICE → STT → AI → TTS → RESPONSE</span>
      <span className="text-purple-400 font-bold">LATENCY: &lt;35MS</span>
    </div>
  </div>
);

/* =========================================================================
   03 / HIGHNESS PLATFORM — BUSINESS DATA TELEMETRY
   ========================================================================= */
const HighnessVisual: React.FC<{ number: string; title: string }> = () => (
  <div className="relative w-full h-full p-6 flex flex-col justify-between items-center text-white/80">
    <div className="w-full flex justify-between items-center border-b border-white/10 pb-3">
      <span className="text-[10px] sm:text-xs text-purple-400 tracking-widest font-bold font-mono">
        03 // BUSINESS MANAGEMENT TELEMETRY
      </span>
      <span className="text-[10px] text-white/40 tracking-widest hidden sm:inline font-mono">
        REACT + PHP + MYSQL DASHBOARD
      </span>
    </div>

    {/* Abstract Geometric Data Telemetry Panel */}
    <div className="relative w-full max-w-lg my-auto py-2 grid grid-cols-3 gap-3">
      <div className="bg-[#12101D] border border-white/10 rounded-xl p-3.5 flex flex-col justify-between">
        <span className="text-[9px] text-white/50 tracking-widest font-mono">INVENTORY UNITS</span>
        <span className="text-lg sm:text-2xl font-bold text-white mt-1">24,890</span>
        <span className="text-[9px] text-emerald-400 mt-1 font-mono">↑ +14.2% SYNC</span>
      </div>

      <div className="bg-[#12101D] border border-purple-500/30 rounded-xl p-3.5 flex flex-col justify-between">
        <span className="text-[9px] text-purple-300 tracking-widest font-mono">CLIENT REQUESTS</span>
        <span className="text-lg sm:text-2xl font-bold text-purple-300 mt-1">50,000</span>
        <span className="text-[9px] text-purple-400 mt-1 font-mono">LATENCY &lt;30MS</span>
      </div>

      <div className="bg-[#12101D] border border-white/10 rounded-xl p-3.5 flex flex-col justify-between">
        <span className="text-[9px] text-white/50 tracking-widest font-mono">SYSTEM UPTIME</span>
        <span className="text-lg sm:text-2xl font-bold text-white mt-1">99.99%</span>
        <span className="text-[9px] text-emerald-400 mt-1 font-mono">SLA VERIFIED</span>
      </div>
    </div>

    <div className="w-full flex justify-between items-center text-[10px] text-white/40 pt-3 border-t border-white/5 font-mono">
      <span>DATABASE: MYSQL PARTITIONED</span>
      <span className="text-purple-400 font-bold">BUSINESS PLATFORM ACTIVE</span>
    </div>
  </div>
);

/* =========================================================================
   04 / MULIKA STORE — TRANSACTIONAL E-COMMERCE MATRIX
   PRODUCT → CART → ORDER → PAYMENT → DELIVERY
   ========================================================================= */
const MulikaStoreVisual: React.FC<{ number: string; title: string }> = () => (
  <div className="relative w-full h-full p-6 flex flex-col justify-between items-center text-white/80">
    <div className="w-full flex justify-between items-center border-b border-white/10 pb-3">
      <span className="text-[10px] sm:text-xs text-purple-400 tracking-widest font-bold font-mono">
        04 // TRANSACTIONAL E-COMMERCE PIPELINE
      </span>
      <span className="text-[10px] text-white/40 tracking-widest hidden sm:inline font-mono">
        REACT + CODEIGNITER + POSTGRESQL
      </span>
    </div>

    {/* Abstract E-Commerce Node Pipeline */}
    <div className="relative w-full max-w-xl my-auto py-2 flex items-center justify-between gap-1.5 sm:gap-3 font-mono text-[9px] sm:text-xs">
      <div className="flex-1 bg-[#12101D] border border-white/15 p-2.5 sm:p-3 rounded-xl flex flex-col items-center text-center">
        <span className="text-white/50 text-[9px]">01</span>
        <span className="text-white font-bold mt-0.5">PRODUCT</span>
      </div>
      <span className="text-purple-400 font-bold">→</span>
      <div className="flex-1 bg-[#12101D] border border-white/15 p-2.5 sm:p-3 rounded-xl flex flex-col items-center text-center">
        <span className="text-white/50 text-[9px]">02</span>
        <span className="text-white font-bold mt-0.5">CART</span>
      </div>
      <span className="text-purple-400 font-bold">→</span>
      <div className="flex-1 bg-purple-950/50 border border-purple-500/40 p-2.5 sm:p-3 rounded-xl flex flex-col items-center text-center shadow-lg">
        <span className="text-purple-300 text-[9px]">03</span>
        <span className="text-purple-200 font-bold mt-0.5">ORDER</span>
      </div>
      <span className="text-purple-400 font-bold">→</span>
      <div className="flex-1 bg-[#12101D] border border-white/15 p-2.5 sm:p-3 rounded-xl flex flex-col items-center text-center">
        <span className="text-white/50 text-[9px]">04</span>
        <span className="text-white font-bold mt-0.5">PAYMENT</span>
      </div>
      <span className="text-emerald-400 font-bold">→</span>
      <div className="flex-1 bg-[#12101D] border border-emerald-500/40 p-2.5 sm:p-3 rounded-xl flex flex-col items-center text-center">
        <span className="text-emerald-400 text-[9px]">05</span>
        <span className="text-emerald-300 font-bold mt-0.5">DELIVERY</span>
      </div>
    </div>

    <div className="w-full flex justify-between items-center text-[10px] text-white/40 pt-3 border-t border-white/5 font-mono">
      <span>WORKFLOW: PRODUCT → CART → ORDER → PAYMENT → DELIVERY</span>
      <span className="text-purple-400 font-bold">TRANSACTIONAL ENGINE</span>
    </div>
  </div>
);

/* =========================================================================
   05 / STONE RIDGE WELLNESS — BOOKING CALENDAR MATRIX
   ========================================================================= */
const StoneRidgeVisual: React.FC<{ number: string; title: string }> = () => (
  <div className="relative w-full h-full p-6 flex flex-col justify-between items-center text-white/80">
    <div className="w-full flex justify-between items-center border-b border-white/10 pb-3">
      <span className="text-[10px] sm:text-xs text-purple-400 tracking-widest font-bold">
        05 // RESERVATION & BOOKING MATRIX
      </span>
      <span className="text-[10px] text-white/40 tracking-widest hidden sm:inline">
        WORDPRESS + ELEMENTOR + PHP
      </span>
    </div>

    <div className="relative w-full max-w-md my-auto py-2 flex items-center justify-around">
      <div className="bg-[#12101D] border border-purple-500/30 rounded-xl p-4 text-center">
        <span className="text-2xl font-bold text-purple-300">150</span>
        <span className="text-[10px] text-white/60 block mt-1">DAILY APPOINTMENTS</span>
      </div>
      <div className="bg-[#12101D] border border-emerald-500/30 rounded-xl p-4 text-center">
        <span className="text-2xl font-bold text-emerald-400">95%</span>
        <span className="text-[10px] text-white/60 block mt-1">SATISFACTION RATE</span>
      </div>
    </div>

    <div className="w-full flex justify-between items-center text-[10px] text-white/40 pt-3 border-t border-white/5">
      <span>CLIENT: STONE RIDGE WELLNESS</span>
      <span className="text-purple-400 font-bold">BOOKING ENGINE ONLINE</span>
    </div>
  </div>
);

/* =========================================================================
   06 / MIPL STORE LOCATOR — GEO SPATIAL MAP NODE
   ========================================================================= */
const MIPLStoreLocatorVisual: React.FC<{ number: string; title: string }> = () => (
  <div className="relative w-full h-full p-6 flex flex-col justify-between items-center text-white/80">
    <div className="w-full flex justify-between items-center border-b border-white/10 pb-3">
      <span className="text-[10px] sm:text-xs text-purple-400 tracking-widest font-bold">
        06 // GEOSPATIAL MAP NODE PLUGIN
      </span>
      <span className="text-[10px] text-white/40 tracking-widest hidden sm:inline">
        GOOGLE MAPS API + WP PLUGIN API
      </span>
    </div>

    <div className="relative w-full max-w-md my-auto py-2 flex items-center justify-center gap-4">
      <div className="relative w-16 h-16 rounded-full border-2 border-purple-500/40 flex items-center justify-center bg-purple-950/30">
        <span className="w-4 h-4 rounded-full bg-purple-400 animate-ping absolute" />
        <span className="w-3 h-3 rounded-full bg-purple-300 relative z-10" />
      </div>
      <div className="flex flex-col text-xs space-y-1 font-mono">
        <span className="text-white font-bold">GOOGLE MAPS GEOCODING API</span>
        <span className="text-white/60">RADIUS & DISTANCE FILTERING</span>
        <span className="text-purple-400 font-bold">STORE LOCATOR PLUGIN</span>
      </div>
    </div>

    <div className="w-full flex justify-between items-center text-[10px] text-white/40 pt-3 border-t border-white/5">
      <span>OFFICIAL WORDPRESS PLUGIN</span>
      <span className="text-purple-400 font-bold">AUTOCOMPLETE SEARCH</span>
    </div>
  </div>
);

/* =========================================================================
   07 / AU SKINCARE — BRAND PLATFORM & SEO FUNNEL
   ========================================================================= */
const AuSkincareVisual: React.FC<{ number: string; title: string }> = () => (
  <div className="relative w-full h-full p-6 flex flex-col justify-between items-center text-white/80">
    <div className="w-full flex justify-between items-center border-b border-white/10 pb-3">
      <span className="text-[10px] sm:text-xs text-purple-400 tracking-widest font-bold">
        07 // BRAND PLATFORM & SEO ENGINE
      </span>
      <span className="text-[10px] text-white/40 tracking-widest hidden sm:inline">
        WORDPRESS + SEO OPTIMIZATION
      </span>
    </div>

    <div className="relative w-full max-w-md my-auto py-2 grid grid-cols-2 gap-4">
      <div className="bg-[#12101D] border border-white/10 p-4 rounded-xl text-center">
        <span className="text-xl font-bold text-white">+30%</span>
        <span className="text-[10px] text-white/60 block mt-1">USER ENGAGEMENT</span>
      </div>
      <div className="bg-[#12101D] border border-purple-500/30 p-4 rounded-xl text-center">
        <span className="text-xl font-bold text-purple-300">-25%</span>
        <span className="text-[10px] text-white/60 block mt-1">BOUNCE RATE</span>
      </div>
    </div>

    <div className="w-full flex justify-between items-center text-[10px] text-white/40 pt-3 border-t border-white/5">
      <span>CLIENT: AU SKINCARE</span>
      <span className="text-purple-400 font-bold">SEO ENGINE OPTIMIZED</span>
    </div>
  </div>
);

/* =========================================================================
   08 / EMAIL & PDF AUTOMATION — DOCUMENT AUTOMATION PIPELINE
   EMAIL RECEIVED → DOWNLOAD DOC → DO OCR → APPLY RULES → SAVE & REPLY
   ========================================================================= */
const EmailPDFAutomationVisual: React.FC<{ number: string; title: string }> = () => (
  <div className="relative w-full h-full p-4 sm:p-6 flex flex-col justify-between items-center text-white/80">
    <div className="w-full flex justify-between items-center border-b border-white/10 pb-2.5 sm:pb-3 font-mono">
      <span className="text-[10px] sm:text-xs text-purple-400 tracking-widest font-bold">
        03 // AUTOMATED INBOX & OCR PIPELINE
      </span>
      <span className="text-[10px] text-white/40 tracking-widest hidden sm:inline">
        PYTHON + TESSERACT OCR + IMAP/SMTP
      </span>
    </div>

    {/* Pipeline Workflow Diagram */}
    <div className="relative w-full max-w-2xl my-auto py-2 flex items-center justify-between gap-1 sm:gap-2 font-mono text-[8px] sm:text-[11px]">
      {/* 1. EMAIL RECEIVED */}
      <div className="flex-1 bg-[#12101D] border border-white/15 p-1.5 sm:p-2.5 rounded-xl flex flex-col items-center text-center">
        <span className="text-white/40 text-[7px] sm:text-[9px]">01 // INGEST</span>
        <span className="text-white font-bold mt-0.5">EMAIL RECV</span>
      </div>

      <span className="text-purple-400 font-bold text-[9px] sm:text-[10px]">→</span>

      {/* 2. DOWNLOAD DOC */}
      <div className="flex-1 bg-[#12101D] border border-white/15 p-1.5 sm:p-2.5 rounded-xl flex flex-col items-center text-center">
        <span className="text-white/40 text-[7px] sm:text-[9px]">02 // ATTACH</span>
        <span className="text-white font-bold mt-0.5">DOWNLOAD</span>
      </div>

      <span className="text-purple-400 font-bold text-[9px] sm:text-[10px]">→</span>

      {/* 3. DO OCR */}
      <div className="flex-1 bg-purple-950/60 border border-purple-500/50 p-1.5 sm:p-2.5 rounded-xl flex flex-col items-center text-center shadow-lg">
        <span className="text-purple-300 text-[7px] sm:text-[9px]">03 // PARSE</span>
        <span className="text-purple-200 font-bold mt-0.5">DO OCR</span>
      </div>

      <span className="text-purple-400 font-bold text-[9px] sm:text-[10px]">→</span>

      {/* 4. APPLY RULES */}
      <div className="flex-1 bg-[#12101D] border border-white/15 p-1.5 sm:p-2.5 rounded-xl flex flex-col items-center text-center">
        <span className="text-white/40 text-[7px] sm:text-[9px]">04 // LOGIC</span>
        <span className="text-white font-bold mt-0.5">RULES</span>
      </div>

      <span className="text-emerald-400 font-bold text-[9px] sm:text-[10px]">→</span>

      {/* 5. SAVE & AUTO-REPLY */}
      <div className="flex-1 bg-[#12101D] border border-emerald-500/40 p-1.5 sm:p-2.5 rounded-xl flex flex-col items-center text-center">
        <span className="text-emerald-400 text-[7px] sm:text-[9px]">05 // DISPATCH</span>
        <span className="text-emerald-300 font-bold mt-0.5">SAVE & REPLY</span>
      </div>
    </div>

    <div className="w-full flex justify-between items-center text-[9px] sm:text-[10px] text-white/40 pt-2.5 sm:pt-3 border-t border-white/5 font-mono">
      <span className="truncate max-w-[65%] sm:max-w-none">WORKFLOW: EMAIL INGEST → DOC DOWNLOAD → OCR DATA → APPLY RULES → SAVE & REPLY</span>
      <span className="text-purple-400 font-bold flex-shrink-0">AUTOMATION ACTIVE</span>
    </div>
  </div>
);

/* =========================================================================
   09 / PDF SECURITY REDACTOR — PII REDACTION SHIELD
   ========================================================================= */
const PDFRedactorVisual: React.FC<{ number: string; title: string }> = () => (
  <div className="relative w-full h-full p-6 flex flex-col justify-between items-center text-white/80">
    <div className="w-full flex justify-between items-center border-b border-white/10 pb-3">
      <span className="text-[10px] sm:text-xs text-purple-400 tracking-widest font-bold">
        09 // PII REDACTION & AUDIT SHIELD
      </span>
      <span className="text-[10px] text-white/40 tracking-widest hidden sm:inline">
        PYTHON + PYMUPDF + REGEX
      </span>
    </div>

    <div className="relative w-full max-w-md my-auto py-2 flex flex-col items-center gap-2">
      <div className="w-full bg-[#12101D] border border-purple-500/40 p-3.5 rounded-xl flex items-center justify-between">
        <span className="text-xs text-white/60">CONFIDENTIAL PII SEARCH</span>
        <span className="text-xs bg-purple-900/60 text-purple-300 px-3 py-1 rounded-md font-bold">
          [ REDACTED ]
        </span>
      </div>
      <span className="text-[10px] text-emerald-400 font-bold">AUDIT SHIELD & PRIVACY COMPLIANT</span>
    </div>

    <div className="w-full flex justify-between items-center text-[10px] text-white/40 pt-3 border-t border-white/5">
      <span>DOCUMENT SECURITY TOOL</span>
      <span className="text-purple-400 font-bold">REGEX MASKING ACTIVE</span>
    </div>
  </div>
);

/* =========================================================================
   10 / PDF MERGER & SPLITTER — BUNDLE PROCESSING
   ========================================================================= */
const PDFMergerVisual: React.FC<{ number: string; title: string }> = () => (
  <div className="relative w-full h-full p-6 flex flex-col justify-between items-center text-white/80">
    <div className="w-full flex justify-between items-center border-b border-white/10 pb-3">
      <span className="text-[10px] sm:text-xs text-purple-400 tracking-widest font-bold">
        10 // DOCUMENT SPLITTER & BUNDLE ENGINE
      </span>
      <span className="text-[10px] text-white/40 tracking-widest hidden sm:inline">
        PYTHON + TKINTER + PYPDF2
      </span>
    </div>

    <div className="relative w-full max-w-md my-auto py-2 flex items-center justify-center gap-3">
      <div className="bg-[#12101D] border border-white/10 p-3 rounded-xl text-center">
        <span className="text-xs font-bold text-white">MULTIPAGE BUNDLE</span>
      </div>
      <span className="text-purple-400 font-bold">⟶ SPLIT & RENAME ⟶</span>
      <div className="bg-[#12101D] border border-purple-500/40 p-3 rounded-xl text-center">
        <span className="text-xs font-bold text-purple-300">SINGLE PAGES</span>
      </div>
    </div>

    <div className="w-full flex justify-between items-center text-[10px] text-white/40 pt-3 border-t border-white/5">
      <span>STANDALONE DESKTOP UTILITY</span>
      <span className="text-purple-400 font-bold">REGEX RENAMER ACTIVE</span>
    </div>
  </div>
);

/* =========================================================================
   11 / SCORECARD DASHBOARD — METRICS RANKING MATRIX
   ========================================================================= */
const ScorecardVisual: React.FC<{ number: string; title: string }> = () => (
  <div className="relative w-full h-full p-6 flex flex-col justify-between items-center text-white/80">
    <div className="w-full flex justify-between items-center border-b border-white/10 pb-3">
      <span className="text-[10px] sm:text-xs text-purple-400 tracking-widest font-bold">
        11 // PERFORMANCE RANKING MATRIX
      </span>
      <span className="text-[10px] text-white/40 tracking-widest hidden sm:inline">
        PHP + JAVASCRIPT + MYSQL
      </span>
    </div>

    <div className="relative w-full max-w-md my-auto py-2 grid grid-cols-3 gap-3 text-center">
      <div className="bg-[#12101D] border border-white/10 p-3 rounded-xl">
        <span className="text-xs font-bold text-white block">RANK #1</span>
        <span className="text-[10px] text-emerald-400">98.5 PTS</span>
      </div>
      <div className="bg-[#12101D] border border-purple-500/30 p-3 rounded-xl">
        <span className="text-xs font-bold text-purple-300 block">CHARTS</span>
        <span className="text-[10px] text-purple-400">REAL-TIME</span>
      </div>
      <div className="bg-[#12101D] border border-white/10 p-3 rounded-xl">
        <span className="text-xs font-bold text-white block">EXPORT</span>
        <span className="text-[10px] text-white/60">PDF / CSV</span>
      </div>
    </div>

    <div className="w-full flex justify-between items-center text-[10px] text-white/40 pt-3 border-t border-white/5">
      <span>INTERNAL SCORECARD ENGINE</span>
      <span className="text-purple-400 font-bold">RANKING LOGIC ACTIVE</span>
    </div>
  </div>
);

/* =========================================================================
   12 / E-COMMERCE STORE ENGINE — WOOCOMMERCE + RAZORPAY
   ========================================================================= */
const EcommerceStoreVisual: React.FC<{ number: string; title: string }> = () => (
  <div className="relative w-full h-full p-6 flex flex-col justify-between items-center text-white/80">
    <div className="w-full flex justify-between items-center border-b border-white/10 pb-3">
      <span className="text-[10px] sm:text-xs text-purple-400 tracking-widest font-bold">
        12 // STOREFRONT & RAZORPAY GATEWAY
      </span>
      <span className="text-[10px] text-white/40 tracking-widest hidden sm:inline">
        WOOCOMMERCE + WORDPRESS + PHP
      </span>
    </div>

    <div className="relative w-full max-w-md my-auto py-2 flex items-center justify-around">
      <div className="bg-[#12101D] border border-purple-500/40 p-4 rounded-xl text-center">
        <span className="text-lg font-bold text-purple-300">RAZORPAY</span>
        <span className="text-[10px] text-white/60 block mt-1">PAYMENT GATEWAY</span>
      </div>
      <div className="bg-[#12101D] border border-emerald-500/30 p-4 rounded-xl text-center">
        <span className="text-lg font-bold text-emerald-400">+30%</span>
        <span className="text-[10px] text-white/60 block mt-1">SPEED BOOST</span>
      </div>
    </div>

    <div className="w-full flex justify-between items-center text-[10px] text-white/40 pt-3 border-t border-white/5">
      <span>WOOCOMMERCE PLATFORM</span>
      <span className="text-purple-400 font-bold">INVENTORY SYNC ACTIVE</span>
    </div>
  </div>
);

/* =========================================================================
   13 / WEATHER DASHBOARD — ATMOSPHERIC DATA STREAM
   ========================================================================= */
const WeatherDashboardVisual: React.FC<{ number: string; title: string }> = () => (
  <div className="relative w-full h-full p-6 flex flex-col justify-between items-center text-white/80">
    <div className="w-full flex justify-between items-center border-b border-white/10 pb-3">
      <span className="text-[10px] sm:text-xs text-purple-400 tracking-widest font-bold">
        13 // GLOBAL ATMOSPHERIC DATA STREAM
      </span>
      <span className="text-[10px] text-white/40 tracking-widest hidden sm:inline">
        REACT.JS + OPENWEATHER API
      </span>
    </div>

    <div className="relative w-full max-w-md my-auto py-2 flex items-center justify-around">
      <div className="bg-[#12101D] border border-purple-500/40 p-4 rounded-xl text-center">
        <span className="text-2xl font-bold text-purple-300">1,000+</span>
        <span className="text-[10px] text-white/60 block mt-1">GLOBAL LOCATIONS</span>
      </div>
      <div className="bg-[#12101D] border border-white/10 p-4 rounded-xl text-center">
        <span className="text-2xl font-bold text-white">LIVE</span>
        <span className="text-[10px] text-emerald-400 block mt-1">API STREAM</span>
      </div>
    </div>

    <div className="w-full flex justify-between items-center text-[10px] text-white/40 pt-3 border-t border-white/5">
      <span>OPENWEATHER ENGINE</span>
      <span className="text-purple-400 font-bold">INSTANT SEARCH READY</span>
    </div>
  </div>
);

/* =========================================================================
   DEFAULT FALLBACK ABSTRACT VISUAL
   ========================================================================= */
const GenericAbstractVisual: React.FC<{ number: string; title: string }> = ({ number, title }) => (
  <div className="relative w-full h-full p-6 flex flex-col justify-between items-center text-white/80">
    <div className="w-full flex justify-between items-center border-b border-white/10 pb-3">
      <span className="text-[10px] sm:text-xs text-purple-400 tracking-widest font-bold">
        {number} // {title}
      </span>
      <span className="text-[10px] text-white/40 tracking-widest font-bold">
        SYSTEM ARCHITECTURE
      </span>
    </div>

    <div className="relative w-full max-w-md my-auto py-2 flex items-center justify-center gap-3">
      <div className="bg-[#12101D] border border-purple-500/40 p-4 rounded-xl text-center">
        <span className="text-sm font-bold text-purple-200 uppercase">{title}</span>
      </div>
    </div>

    <div className="w-full flex justify-between items-center text-[10px] text-white/40 pt-3 border-t border-white/5">
      <span>CASE STUDY ARCHIVE</span>
      <span className="text-purple-400 font-bold">ENGINEERING SYSTEM</span>
    </div>
  </div>
);
