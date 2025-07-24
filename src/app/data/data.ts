import {
  LucideCode,
  LucideCodepen,
  LucideGithub,
  LucideDatabase,
  LucideNetwork,
  LucideAtom,
  LucideIcon
} from "lucide-react";

export interface Skill {
  name: string;
  icon: LucideIcon;
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  logo: string
}

export interface Project {
  title: string;
  description: string;
  link: string;
}

export interface Paper {
  id: string;
  type: string;
  title: string;
  link?: string;
  description?: string;
  status: "published" | "upcoming";
}

export interface Hackathon {
  name: string;
  description: string;
  year: string;
}

export interface SocialLink {
  name: string;
  url: string;
}
export interface Education {
  name: string,
  course: string,
  year: string,
}


export const personalInfo = {
  name: "Asrith Tanniru",
  title: "2nd Year UG Computer Science Student",
  bio: "Works on app development.",
  resumeLink: "https://drive.google.com/file/d/1qYeVHrqhtUK42ZNR0tEk3omsXyYSQXAp/view?usp=sharing"
};

export const skills: Skill[] = [
  { name: "JavaScript", icon: LucideCode },
  { name: "React Native", icon: LucideAtom },
  { name: "Node.js", icon: LucideNetwork },
  { name: "Python", icon: LucideCodepen },
  // { name: "Machine Learning", icon: LucideBrain },
  { name: "Git", icon: LucideGithub },
  { name: "SQL", icon: LucideDatabase },
];

export const experiences: Experience[] = [
  { title: "Junior Interactive Developer", company: "Educational Initiatives", period: "Dec 2024 - May 2025", logo: '/images/ei-logo.png' },
  { title: "App Developer", company: "Koastec", period: "Oct 2024 - Present", logo: '/images/koastec.png' },
];

export const projects = [
  { title: "Apptit", description: "A Job Aggregator platform that gets the jobs from websites like Linkedin, Glassdoor, Internshala", link: "/projects/apptit" },
  { title: "Fast KYC", description: " Decentralized KYC Platform", link: "/projects/fast-kyc" },
];
export const education = [
  { name: "SRM University AP", course: "B Tech in Computer Science Engineering", year: "[2023-2027]", logo: '/images/srm-logo.png' }
];

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
  { name: "9 Hacks'25", description: "QR based reward management System.", year: "Apr 2025" },
  { name: "Hack SRM 6.0", description: "A decentralized KYC platform that simplifies identity verification for both businesses and customers.", year: "Feb 2025" },
  { name: "9 Hacks'24", description: "NTL-App for Next Tech Lab AP.", year: "Oct 2024" },
  { name: "SIH'24", description: "Shore alert App that alerts the user if there are any potential threats near the sea based on the data provided by ICNOIS.", year: "Sep 2024" }
];

export const socialLinks: SocialLink[] = [
  { name: "Github", url: "https://github.com/asrithtanniru" },
  { name: "Twitter", url: "https://twitter.com/asrithtanniru" },
  { name: "Linkedin", url: "https://linkedin.com/in/asrithtanniru" }
];
