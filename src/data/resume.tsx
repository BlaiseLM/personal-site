import { Icons } from "@/components/icons";
import { House, Library } from "lucide-react";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Python } from "@/components/ui/svgs/python";
import { Golang } from "@/components/ui/svgs/golang";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Docker } from "@/components/ui/svgs/docker";
import { Java } from "@/components/ui/svgs/java";

export const DATA = {
  name: "Blaise Mahamoodally",
  initials: "BM",
  url: "https://blaiselm.github.io",
  location: "Toronto, ON",
  locationLink: "https://www.google.com/maps/place/toronto+ontario",
  description:
    "CS Student & Software Engineer based in Toronto.",
  avatarUrl: "",
  summary:
    "Over the past two years, I have built everything from [in-memory data structure stores](/#projects) and [NLP pipelines](/#projects) to [production-grade APIs](/#work). I'm technology-agnostic and always looking for the next hard problem, no matter the context.", 
  sections: {
    about: { order: 1, enabled: true, heading: "About Me" },
    work: { order: 2, enabled: true, heading: "Work Experience", presentLabel: "Present" },
    education: { order: 3, enabled: true, heading: "Education" },
    skills: { order: 4, enabled: true, heading: "Skills" },
    projects: {
      order: 5, enabled: true,
      label: "My Projects",
      heading: "Things I've built",
      text: "I like building systems that handle a lot of data or have to be really fast (or both). Check out the repos for more details!",
    },
    hackathons: {
      order: 7, enabled: false,
      label: "Hackathons",
      heading: "I like building things",
      text: "",
    },
    photos: {
      order: 6, enabled: false,
      heading: "My Recent Travels",
    },
    contact: {
      order: 8, enabled: true,
      label: "Contact",
      heading: "Get in Touch",
      text: "Best way to reach me is email or a LinkedIn message. I'll get back to you.",
    },
  },
  photos: [],
  skills: [
    { name: "Go", icon: Golang },
    { name: "Python", icon: Python },
    { name: "Node.js", icon: Nodejs },
    { name: "Java", icon: Java },
    { name: "Postgres", icon: Postgresql },
    { name: "Docker", icon: Docker },
  ],
  navbar: [
  ],
  contact: {
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/BlaiseLM",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/blaiselm",
        icon: Icons.linkedin,
        navbar: true,
      },
      email: {
        name: "Email",
        url: "mailto:blaise.mahamoodally@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Missional Digerati",
      href: "https://missionaldigerati.org",
      badges: ["Remote"],
      location: "Los Angeles, CA (Remote)",
      title: "Software Engineer",
      logoUrl: "https://www.google.com/s2/favicons?domain=missionaldigerati.org&sz=128",
      start: "May 2025",
      end: "April 2026",
      description:
        "Built out the user auth system: JWT + session hybrid, 6 REST endpoints covering the full onboarding flow. Wrote 200+ unit and integration tests to hit 95% coverage, and handled DB migrations with zero downtime.",
    },
    {
      company: "Ottawa Tourism",
      href: "https://ottawatourism.ca",
      badges: ["Remote"],
      location: "Ottawa, ON (Remote)",
      title: "Data Analyst",
      logoUrl: "https://www.google.com/s2/favicons?domain=ottawatourism.ca&sz=128",
      start: "October 2024",
      end: "February 2025",
      description:
        "Automated carbon footprinting by integrating the Climatiq API into existing Excel workflows, saving 5+ hours per report. Cut geocoding time from 15 minutes to 4 through coordinate memoization, and replaced 20+ hours of manual data entry with a Python script.",
    },
  ],
  education: [
    {
      school: "University of Ottawa",
      href: "https://uottawa.ca",
      degree: "BSc Computer Science (Honours)",
      logoUrl: "https://www.google.com/s2/favicons?domain=uottawa.ca&sz=128",
      start: "September 2024",
      end: "Present",
    },
  ],
  projects: [
    {
      title: "GoCache",
      href: "https://github.com/BlaiseLM/gocache",
      dates: "December 2025 – February 2026",
      active: true,
      description:
        "TCP cache server written from scratch in Go. LRU eviction, thread-safe with mutexes, benchmarked at 100–190 ns/op for GETs under concurrent load. Prometheus metrics + Grafana dashboards for observability.",
      technologies: [
        "Go",
        "Docker",
        "Prometheus",
        "Grafana",
        "TCP/IP",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/BlaiseLM/gocache",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Rhema",
      href: "https://github.com/BlaiseLM/rhema",
      dates: "March 2026 – March 2026",
      active: true,
      description:
        "Automated NLP pipeline that processes daily news end-to-end: RSS ingestion → keyword extraction → semantic embeddings → dimensionality reduction → LLM-powered topic naming. Runs daily via GitHub Actions with no manual intervention.",
      technologies: [
        "Python",
        "SentenceTransformers",
        "UMAP",
        "Claude API",
        "GitHub Actions",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/BlaiseLM/rhema",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
  ],
  hackathons: [],
} as const;