export const profile = {
  name: 'Kester Atuanya',
  shortName: 'Kester Atuanya',
  title: 'Senior ServiceNow Developer',
  location: 'Houston, TX area',
  tagline:
    '8+ years building ITSM, SAM and CMDB solutions that keep enterprise IT accurate and audit-ready.',
  email: 'Kester.acllc@gmail.com',
  linkedin: 'https://www.linkedin.com/in/kester-atuanya-a5b795308',
  github: 'https://github.com/KesterAtuanya',
}

export const skillGroups = [
  { label: 'Platform', items: ['ITSM', 'CSM', 'CMDB', 'SAM Pro', 'HAM Pro'] },
  {
    label: 'Development',
    items: ['JavaScript', 'Glide API', 'Python', 'Flow Designer', 'IntegrationHub'],
  },
  { label: 'Integrations', items: ['REST and SOAP APIs', 'MECM/SCCM'] },
]

export const experience = [
  {
    role: 'Sr. ServiceNow Developer/Engineer',
    company: 'Mazda',
    location: 'Houston, TX',
    type: 'Contract',
    period: 'Feb 2021 – Present',
    current: true,
  },
  {
    role: 'ServiceNow Developer/Administrator',
    company: 'Big Lots',
    location: 'Houston, TX',
    type: null,
    period: 'May 2017 – Jan 2021',
    current: false,
  },
]

export const projects = [
  {
    name: 'CMDB Health Scorecard',
    description:
      'A Python tool that scans a ServiceNow CMDB, grades its health from 0 to 100, and lists exactly what to fix: duplicates, stale servers, missing owners, orphaned apps.',
    tags: ['Python', 'ServiceNow Table API', 'CMDB'],
    url: 'https://github.com/KesterAtuanya/cmdb-health-scorecard',
  },
  {
    name: 'SAM License Reconciler',
    description:
      'Calculates software license position and true-up exposure in dollars, finds unused installs to reclaim, and recommends what to buy, cut or renew. Supports per-device, per-user and per-core licensing.',
    tags: ['Python', 'SAM Pro', 'Software Asset Management'],
    url: 'https://github.com/KesterAtuanya/sam-license-reconciler',
  },
]

export type Certification = {
  name: string
  short: string
  issued: string
  number: string
  image: string
}

export const certifications: Certification[] = [
  {
    name: 'ServiceNow Certified System Administrator',
    short: 'CSA',
    issued: 'Sep 1, 2025',
    number: '27415811',
    image: '/certificates/1-csa.png',
  },
  {
    name: 'Certified Implementation Specialist, IT Service Management',
    short: 'CIS-ITSM',
    issued: 'Sep 30, 2025',
    number: '27466147',
    image: '/certificates/2-cis-itsm.png',
  },
  {
    name: 'Certified Application Developer',
    short: 'CAD',
    issued: 'Sep 16, 2025',
    number: '27440075',
    image: '/certificates/3-cis-cad.png',
  },
  {
    name: 'Certified Implementation Specialist, Software Asset Management',
    short: 'CIS-SAM',
    issued: 'Sep 8, 2025',
    number: '27425620',
    image: '/certificates/4-cis-sam.png',
  },
]

export const education = {
  degree: 'B.S. Computer Science',
  school: 'Imo State University',
}

export const navLinks = [
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#certifications', label: 'Certifications' },
  { href: '#contact', label: 'Contact' },
]
