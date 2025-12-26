import { IconType } from 'react-icons'
import { SiJavascript, SiReact, SiNodedotjs, SiPython, SiGit, SiTypescript, SiC, SiCplusplus, SiPostgresql, SiNestjs, SiExpo, SiPostman, SiDocker } from 'react-icons/si'

export interface Skill {
  name: string
  icon: IconType
  color: string
}

export interface Experience {
  title: string
  company: string
  period: string
  logo: string
}

export interface Project {
  title: string
  description: string
  image: string
  type: 'web' | 'mobile' | 'desktop'
  technologies: string[]
  githubLink?: string
  liveLink?: string
}

export interface Paper {
  id: string
  type: string
  title: string
  link?: string
  description?: string
  status: 'published' | 'upcoming'
}

export interface Hackathon {
  name: string
  description: string
  year: string
}

export interface SocialLink {
  name: string
  url: string
}
export interface Education {
  name: string
  course: string
  year: string
}

export const personalInfo = {
  name: 'Asrith Tanniru',
  introname: 'Asrith',
  title: 'Pre-Final Year UG Computer Science Student',
  bio: 'Works on app development.',
  resumeLink: 'https://drive.google.com/file/d/15B4Prkto38MbDTMSDc9cSOj5f3GhZN4h/view?usp=sharing',
}

export const skills: Skill[] = [
  { name: 'C', icon: SiC, color: '#000000' },
  { name: 'C++', icon: SiCplusplus, color: '#000000' },
  { name: 'JavaScript', icon: SiJavascript, color: '#000000' },
  { name: 'TypeScript', icon: SiTypescript, color: '#000000' },
  { name: 'React Native', icon: SiReact, color: '#000000' },
  { name: 'Expo', icon: SiExpo, color: '#000000' },
  { name: 'Node.js', icon: SiNodedotjs, color: '#000000' },
  { name: 'Nest.js', icon: SiNestjs, color: '#000000' },
  { name: 'Python', icon: SiPython, color: '#000000' },
  { name: 'PostgreSQL', icon: SiPostgresql, color: '#000000' },
  { name: 'Docker', icon: SiDocker, color: '#000000' },
  { name: 'Git', icon: SiGit, color: '#000000' },
  { name: 'Postman', icon: SiPostman, color: '#000000' },
]

export const experiences: Experience[] = [
  { title: 'React Native Developer', company: 'MyMomment', period: 'Oct 2025 - Present', logo: '/images/mymomment.png' },
  { title: 'React Native Developer', company: 'HelioWeb', period: 'Jun 2025 - Aug 2025', logo: '/images/helioweb.png' },
  { title: 'Board Member- Syndicate of Norman Lab', company: 'Next Tech Lab', period: 'Oct 2024 - Present', logo: '/images/ntl.png' },
  { title: 'Research Intern', company: 'SRM University', period: 'Jun 2025 - Jul 2025', logo: '/images/srm-logo.png' },
  { title: 'Junior Interactive Developer', company: 'Educational Initiatives', period: 'Dec 2024 - May 2025', logo: '/images/ei-logo.png' },
  // { title: 'App Developer', company: 'Koastec', period: 'Oct 2024 - Present', logo: '/images/koastec.png' },
]

export const projects: Project[] = [
  {
    title: 'Cortex ERP',
    description: 'An ERP system for Next Tech Lab that streamlines member management and lab operations.',
    image: '/images/cortex-project.png',
    type: 'web',
    technologies: ['Next.js', 'NestJS', 'PostgreSQL', 'Prisma'],
    liveLink: 'https://cortex-ntl.koastec.com',
  },
  {
    title: 'WireGuy',
    description:
      'WireGuy is a mobile app for electricians to manage partnerships, track earnings, update job status, and interact with customers. Built with React Native (Expo) for the frontend and SvelteKit APIs for backend.',
    image: '/images/wireguy.png',
    type: 'mobile',
    technologies: ['React Native', 'Expo', 'SvelteKit'],
    liveLink: 'https://koastec.com/wireguy/app',
  },
  {
    title: 'SkillSync',
    description: 'A collaborative platform that matches users for skill-swapping, with Google login, chat, scheduling, video calls via ZegoCloud, and token-based rewards on Ethereum (Sepolia).',
    image: '/images/skillsync-project.png',
    type: 'web',
    technologies: ['Next.js', 'TypeScript', 'ZegoCloud SDK', 'Sepolia', 'Prisma', 'TailwindCSS', 'Shadcn UI'],
    githubLink: 'https://github.com/asrithtanniru/SkillSync',
  },
  {
    title: 'Apptit',
    description:
      'A centralized job aggregation platform scraping LinkedIn, Glassdoor, and Internshala, built with Next.js, FastAPI, and PostgreSQL for unified search and faster performance via multithreading.',
    image: '/images/apptit-project.png',
    type: 'web',
    technologies: ['Next.js', 'FastAPI', 'PostgreSQL', 'Selenium', 'TailwindCSS'],
    githubLink: 'https://github.com/asrithtanniru/apptit',
  },
  {
    title: 'Sri Vasudha Developers',
    description:
      'Sri Vasudha Developers is a mobile application built with React Native (Expo) that enables executives to track earnings, book site visits, and manage customer interactions. It integrates Flask REST APIs for real-time data sync and uses Async Storage for secure local data management.',
    image: '/images/svd-project.png',
    type: 'mobile',
    technologies: ['React Native', 'Expo', 'Flask'],
    liveLink: 'https://koastec.com/svd/app',
  },
]
export const education = [{ name: 'SRM University AP', course: 'B Tech in Computer Science Engineering', year: '2023-2027', logo: '/images/srm-logo.png' }]

// export const papers: Paper[] = [
//   {
//     id: "P1",
//     type: "Survey",
//     title: "A Comprehensive Survey of Data Poisoning Attacks and their Detection Techniques",
//     link: "#",
//     status: "published"
//   },
//   {
//     id: "P2",
//     type: "Workshop",
//     title: "to be updated soon",
//     description: "Hopefully Conference",
//     status: "upcoming"
//   }
// ];

export const hackathons: Hackathon[] = [
  { name: "9 Hacks'25", description: 'QR based reward management System.', year: 'Apr 2025' },
  { name: 'Hack SRM 6.0', description: 'A decentralized KYC platform that simplifies identity verification for both businesses and customers.', year: 'Feb 2025' },
  { name: "9 Hacks'24", description: 'NTL-App for Next Tech Lab AP.', year: 'Oct 2024' },
  { name: "SIH'24", description: 'Shore alert App that alerts the user if there are any potential threats near the sea based on the data provided by ICNOIS.', year: 'Sep 2024' },
]

export const socialLinks: SocialLink[] = [
  { name: 'Github', url: 'https://github.com/asrithtanniru' },
  { name: 'Twitter', url: 'https://twitter.com/asrithtwt' },
  { name: 'Linkedin', url: 'https://linkedin.com/in/asrithtanniru' },
  { name: 'Blog', url: '/blog' },
]
