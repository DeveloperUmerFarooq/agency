import { Blocks, Braces, Coffee } from 'lucide-react'

export const CAPABILITIES = Object.freeze([
  {
    id: '01',
    name: 'MERN',
    eyebrow: 'Product velocity',
    description: 'Fast, responsive products built across MongoDB, Express, React, and Node.js — from first release to a platform ready to scale.',
    tags: ['React', 'Node.js', 'MongoDB', 'Express'],
    signal: 'REALTIME / PRODUCT',
    icon: Braces,
  },
  {
    id: '02',
    name: 'Laravel + Vue',
    eyebrow: 'Operational clarity',
    description: 'Reliable business platforms with thoughtful interfaces, clean domain logic, and workflows that make complex operations feel simple.',
    tags: ['Laravel', 'Vue.js', 'MySQL', 'REST APIs'],
    signal: 'WORKFLOW / PLATFORM',
    icon: Blocks,
  },
  {
    id: '03',
    name: 'Spring Boot',
    eyebrow: 'Enterprise confidence',
    description: 'Secure Java systems engineered for demanding integrations, high-volume services, and long-term maintainability.',
    tags: ['Java', 'Spring Boot', 'PostgreSQL', 'REST APIs'],
    signal: 'SECURE / SERVICES',
    icon: Coffee,
  },
])

export const SECURITY_SERVICES = Object.freeze([
  { id: '01', title: 'Security audits', description: 'Find risks across code, configuration, architecture, and access — then turn them into a clear remediation plan.' },
  { id: '02', title: 'Application security', description: 'Bring threat modeling, secure development practices, and focused reviews into the product lifecycle.' },
  { id: '03', title: 'Penetration testing', description: 'Test web applications and APIs through controlled, scoped assessments that surface exploitable weaknesses.' },
  { id: '04', title: 'System hardening', description: 'Strengthen permissions, dependencies, infrastructure settings, and deployment controls against common attack paths.' },
])

export const PROCESS_PHASES = Object.freeze([
  { id: '01', title: 'Align', description: 'We define the business problem, success criteria, constraints, and the smallest valuable path forward.', outcome: 'Shared scope' },
  { id: '02', title: 'Architect', description: 'We turn requirements into a technical plan with clear scope, milestones, and risk decisions.', outcome: 'Technical blueprint' },
  { id: '03', title: 'Build', description: 'Senior engineers ship in focused cycles with frequent demos and direct, transparent communication.', outcome: 'Working releases' },
  { id: '04', title: 'Evolve', description: 'After launch, we measure, refine, and strengthen the product as your priorities change.', outcome: 'Measured improvement' },
])
