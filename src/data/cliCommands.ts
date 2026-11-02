import { PERSONAL_INFO, CASE_STUDIES, TECH_STACK, EXPERIENCES } from './portfolioData';

export interface CommandResponse {
  output: string;
  type?: 'text' | 'success' | 'error' | 'info' | 'code' | 'warning' | 'matrix';
}

function handleAIQuery(query: string): CommandResponse {
  if (!query) {
    return {
      type: 'info',
      output: `🤖 MAYUROS AI AGENT [v2.4-Autonomous]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Ask me any question about Mayur's engineering work, skills, or experience!

Popular prompts to try:
  • ask why should we hire you?
  • ask fastapi microservices
  • ask ai automation experience
  • ask tech stack
  • ask availability & notice period
  • ask contact`
    };
  }

  const q = query.toLowerCase();

  if (q.includes('why') && (q.includes('hire') || q.includes('choose') || q.includes('fit'))) {
    return {
      type: 'success',
      output: `🤖 AI RESPONSE: Why Hire Mayur Repale?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
1. Full-Cycle Engineering: Builds responsive, high-performance frontends (React, TypeScript) and resilient backend microservices (FastAPI, PostgreSQL, Redis).
2. Production AI Delivery: Hands-on experience integrating Generative AI models and document extraction into live SaaS production workflows.
3. Measurable Impact: Engineered microservices reducing endpoint latency by 20%, cut technical debt by 30%, and maintained 99.9% uptime SLA.
4. Fast Delivery & High Ownership: Pragmatic problem solver who ships clean, robust code on deadline.`
    };
  }

  if (q.includes('fastapi') || q.includes('backend') || q.includes('python') || q.includes('architecture') || q.includes('redis')) {
    return {
      type: 'success',
      output: `🤖 AI RESPONSE: Backend Architecture & FastAPI
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• Frameworks : FastAPI (async endpoints, Pydantic validation, dependency injection), PHP CodeIgniter.
• Databases  : PostgreSQL (complex queries, CTE optimizations, schema migrations), Redis (caching layers, session management, latency reduction).
• Concurrency: Async Python microservices, RESTful design, WebSocket live streams, high-throughput batch workers.`
    };
  }

  if (q.includes('ai') || q.includes('llm') || q.includes('automation') || q.includes('rag') || q.includes('genai')) {
    return {
      type: 'success',
      output: `🤖 AI RESPONSE: AI & Workflow Automation Experience
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• Integrated Generative AI pipelines into enterprise platforms for automated document ingestion, extraction, and decision intelligence.
• Designed automated backend data processing routines eliminating manual data entry bottlenecks.
• Proficient with Prompt Engineering, JSON schema enforcement, Redis caching for inference results, and model API orchestration.`
    };
  }

  if (q.includes('available') || q.includes('notice') || q.includes('salary') || q.includes('join') || q.includes('role')) {
    return {
      type: 'success',
      output: `🤖 AI RESPONSE: Availability & Target Roles
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• Desired Roles : Software Engineer / Full Stack Developer / Backend AI Engineer
• Availability  : Actively interviewing · Immediate / flexible joining
• Work Mode     : Remote / Hybrid / On-site (Pune & open to relocation)
• Contact       : mayurrepale55@gmail.com | +91 98344 86575`
    };
  }

  if (q.includes('stack') || q.includes('tech') || q.includes('skill')) {
    return {
      type: 'success',
      output: `🤖 AI RESPONSE: Core Tech Arsenal
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• Languages  : Python, TypeScript, JavaScript, SQL, PHP
• Frameworks : FastAPI, React.js, Tailwind CSS, CodeIgniter, WordPress
• Data & Ops : PostgreSQL, MySQL, Redis, Docker, AWS, Git`
    };
  }

  // Default response for arbitrary queries
  return {
    type: 'info',
    output: `🤖 AI RESPONSE to "${query}":
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Mayur Repale is a Software Engineer specializing in high-throughput backend microservices (FastAPI/Python), reactive frontends (React), and modern AI automation pipelines.

Feel free to ask about his "tech stack", "fastapi experience", or type "sudo hire" to connect directly!`
  };
}

export function executeCLICommand(rawCmd: string): CommandResponse {
  const trimmed = rawCmd.trim();
  const parts = trimmed.split(' ');
  const command = parts[0].toLowerCase();
  const args = parts.slice(1);
  const argString = args.join(' ').replace(/^["']|["']$/g, '').trim();

  if (!command) {
    return { output: '' };
  }

  // Handle AI ask / chat
  if (command === 'ask' || command === 'chat' || command === 'ai') {
    return handleAIQuery(argString);
  }

  switch (command) {
    case 'help':
      return {
        type: 'info',
        output: `MAYUROS POWERSHELL COMMAND DIRECTORY:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  • neofetch         : Display system specs & ASCII logo 💻
  • ask <question>   : Ask Mayur's AI agent anything about his work 🤖
  • benchmark        : Run simulated live backend latency & stress test ⚡
  • matrix           : Launch falling green digital rain effect 🟢
  • sudo hire        : Activate hiring protocol & confetti celebration 🎉
  • projects         : Browse featured software projects & repositories 📦
  • skills           : View technical stack & proficiency matrix 🛠️
  • experience       : Display full career history & achievements 🏢
  • contact          : Show email, phone, GitHub & LinkedIn handles 📬
  • whoami           : Display engineer biography & core philosophy ⚡
  • cat secret.env   : Peek into secret environment configuration 🔒
  • coffee           : Brew an engineer's essential power beverage ☕
  • gui / portfolio  : Return to Graphical Visual Portfolio UI 🎨
  • clear            : Clear current terminal screen`
      };

    case 'neofetch':
      return {
        type: 'info',
        output: `   __  __ _____ 
  |  \\/  |  __ \\    mayur@mayuros-station
  | \\  / | |__) |   ---------------------
  | |\\/| |  _  /    OS      : MayurOS PowerShell v7.4.1 (x86_64)
  | |  | | | \\ \\    Host    : Full Stack Software Engineer · AI & Systems
  |_|  |_|_|  \\_\\   Uptime  : 4+ Years in Production
                    Kernel  : Fast-API 0.115 / React 19.2 / Node 22
                    Shell   : pwsh 7.4.1 / zsh
                    Stack   : Python · FastAPI · React · PostgreSQL · Redis · Docker
                    AI Dev  : GenAI Integrations · Document Parsers · LLM Pipelines
                    Memory  : 100% Focused / Zero Runtime Crashes
                    Status  : 🟢 Open to High-Impact Engineering Roles
                    Location: Pune, India (IST / UTC+5:30)
                    Colors  : ● ● ● ● ● ● ● ●`
      };

    case 'benchmark':
      return {
        type: 'success',
        output: `[SYSTEM BENCHMARK: MAYUROS HIGH-THROUGHPUT ENGINE]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
[■■■■■■■■■■■■■■■■■■■■] 100% COMPLETE

  ✔ Redis Cache P99 Latency    : 0.8ms (Cache Hit Ratio: 98.6%)
  ✔ FastAPI Async Endpoint     : 11.4ms (Throughput: 14,200 req/sec)
  ✔ PostgreSQL Pool Concurrency: 50 active / 0 query bottlenecks
  ✔ Docker Container Build     : Multi-stage lightweight (124MB)
  ✔ API Response Compression   : Brotli / Gzip enabled
  ✔ Health Check Status        : HTTP 200 OK — Production Grade 🚀`
      };

    case 'coffee':
      return {
        type: 'warning',
        output: `      )  (
     (   ) )
      ) ( (
    _______)_
 .-'---------|
( C|/\\/\\/\\/\\/|
 '-.________/
   '========'
[BREWING]: Double-shot espresso extracted at 9 bars.
Energy level: 100%. Ready to architect resilient systems!`
      };

    case 'matrix':
      return {
        type: 'matrix',
        output: `[INITIALIZING MATRIX STREAM...] Entering cybernetic feed... (Press ESC or click to exit)`
      };

    case 'cat':
      if (args[0] === 'secret.env' || args[0] === '.env') {
        return {
          type: 'warning',
          output: `[SECRET ENVIRONMENT VARIABLES]
NODE_ENV=production
TARGET_ROLE="Senior / Full-Stack Engineer"
PRIMARY_SUPERPOWER="Building backend services that don't fall over"
COFFEE_INTAKE_DAILY="3 cups"
FAVORITE_DATABASE="PostgreSQL with Redis cache"
PASSION_FOR_AI="100%"
IMMEDIATE_JOINER="Yes / Flexible notice period"
SALARY_EXPECTATION="Market competitive for top talent"`
        };
      }
      if (args[0] === 'resume.txt' || args[0] === 'bio.txt') {
        return {
          type: 'info',
          output: `${PERSONAL_INFO.name}\n${PERSONAL_INFO.title}\n\n${PERSONAL_INFO.fullBio}`
        };
      }
      return {
        type: 'error',
        output: `cat: '${args[0] || 'file'}': No such file. Try 'cat secret.env' or 'cat resume.txt'`
      };

    case 'whoami':
      return {
        type: 'info',
        output: `MAYUR REPALE — ${PERSONAL_INFO.title}
Location: ${PERSONAL_INFO.location} (${PERSONAL_INFO.timezone})
Status: ${PERSONAL_INFO.statusTag}

Bio: ${PERSONAL_INFO.fullBio}`
      };

    case 'skills':
      const formattedSkills = TECH_STACK.map(
        s => `  [${s.category}] ${s.name.padEnd(25)} | Proficiency: ${s.proficiency}% | ${s.status}`
      ).join('\n');
      return {
        type: 'success',
        output: `CORE TECH STACK MATRIX:\n${formattedSkills}`
      };

    case 'projects':
      const formattedProjects = CASE_STUDIES.map(
        (p, idx) => `  [${p.number || idx + 1}] ${p.title} — ${p.subtitle} (${p.category})\n      Stack: ${p.techStack.join(', ')}\n      Details: ${p.description}\n      Link: ${p.linkUrl}`
      ).join('\n\n');
      return {
        type: 'info',
        output: `FEATURED SOFTWARE ENGINEERING PROJECTS:\n\n${formattedProjects}`
      };

    case 'experience':
      const formattedExp = EXPERIENCES.map(
        e => `  🏢 ${e.company} — ${e.role} (${e.period})\n     Role Type: ${e.type} | Location: ${e.location}\n     Key Impact:\n` +
          e.achievements.map(a => `      - ${a}`).join('\n')
      ).join('\n\n');
      return {
        type: 'info',
        output: `CAREER JOURNEY:\n\n${formattedExp}`
      };

    case 'contact':
      return {
        type: 'success',
        output: `CONTACT INFORMATION:
  📧 Email    : ${PERSONAL_INFO.email}
  📱 Phone    : +91 98344 86575
  🐙 GitHub   : ${PERSONAL_INFO.github}
  💼 LinkedIn : ${PERSONAL_INFO.linkedin}
  🐦 Twitter  : ${PERSONAL_INFO.twitter}
  📍 Location : ${PERSONAL_INFO.location}`
      };

    case 'sudo':
      if (args.includes('hire') || args.includes('hire-mayur')) {
        return {
          type: 'success',
          output: `🎉 [HIRING PROTOCOL ACTIVATED] 🎉
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Candidate : Mayur Repale (Full-Stack Engineer)
Email     : ${PERSONAL_INFO.email}
Phone     : +91 98344 86575
Response  : Guaranteed Priority Response within 4 hours.

Available for:
  ✔ Full Stack / Senior Software Engineer
  ✔ AI & Backend Systems Engineering
  ✔ High-Concurrency Web Microservices

"Thank you for your interest! Let's build extraordinary software together."`
        };
      }
      return {
        type: 'error',
        output: `sudo: '${args.join(' ')}' command not found. Try 'sudo hire'`
      };

    case 'hire':
      return executeCLICommand('sudo hire');

    case 'date':
      return {
        type: 'info',
        output: `System Time: ${new Date().toLocaleString()} (${PERSONAL_INFO.timezone})`
      };

    case 'gui':
    case 'portfolio':
    case 'visual':
      return {
        type: 'success',
        output: `[SYSTEM] Switching mode to Graphical Visual Portfolio UI... 🎨`
      };

    default:
      return {
        type: 'error',
        output: `zsh: command not found: '${command}'. Type 'help' to see available commands or 'neofetch' for system overview.`
      };
  }
}
