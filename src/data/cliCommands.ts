import React from 'react';
import { PERSONAL_INFO, CASE_STUDIES, TECH_STACK, EXPERIENCES } from './portfolioData';

export interface CommandResponse {
  output: string | React.ReactNode;
  type?: 'text' | 'success' | 'error' | 'info' | 'code';
}

export function executeCLICommand(rawCmd: string): CommandResponse {
  const trimmed = rawCmd.trim().toLowerCase();
  const parts = trimmed.split(' ');
  const command = parts[0];
  const args = parts.slice(1);

  if (!command) {
    return { output: '' };
  }

  switch (command) {
    case 'help':
      return {
        type: 'info',
        output: `Available Commands:
  • gui / portfolio : Switch to Graphical Visual Portfolio 🎨
  • help           : Display available system commands
  • whoami         : Display engineer background & summary
  • skills         : List core technologies & proficiency levels
  • projects       : View featured projects and repositories
  • experience     : Show engineering career history
  • contact        : Get contact email, location, and social handles
  • sudo hire      : Execute hiring workflow protocol 🚀
  • clear          : Clear terminal screen output`
      };

    case 'gui':
    case 'portfolio':
    case 'visual':
      return {
        type: 'success',
        output: `[SYSTEM] Switching mode to Graphical Visual Portfolio UI... 🎨`
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
        s => `  [${s.category}] ${s.name.padEnd(28)} | Proficiency: ${s.proficiency}% | ${s.status}`
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
  🐙 GitHub   : ${PERSONAL_INFO.github}
  💼 LinkedIn : ${PERSONAL_INFO.linkedin}
  🐦 Twitter  : ${PERSONAL_INFO.twitter}
  📍 Location : ${PERSONAL_INFO.location}`
      };

    case 'sudo':
      if (args.includes('hire') || args.includes('hire-mayur')) {
        return {
          type: 'success',
          output: `[SUCCESS] Hiring Protocol Initialized! 🎉
Accessing calendar availability for Mayur Repale...
Direct Email: ${PERSONAL_INFO.email}
Status: Priority Response Guaranteed within 4 hours.
Thank you for your interest! Let's build extraordinary software together.`
        };
      }
      return {
        type: 'error',
        output: `sudo: '${args.join(' ')}' command not found. Try 'sudo hire'`
      };

    case 'date':
      return {
        type: 'info',
        output: `System Time: ${new Date().toLocaleString()} (${PERSONAL_INFO.timezone})`
      };

    case 'cat':
      if (args[0] === 'resume.txt' || args[0] === 'bio.txt') {
        return {
          type: 'info',
          output: `${PERSONAL_INFO.name}\n${PERSONAL_INFO.title}\n\n${PERSONAL_INFO.shortBio}`
        };
      }
      return {
        type: 'error',
        output: `cat: ${args[0] || 'file'}: No such file. Try 'cat resume.txt'`
      };

    default:
      return {
        type: 'error',
        output: `zsh: command not found: ${command}. Type 'help' for available commands.`
      };
  }
}
