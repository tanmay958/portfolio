import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Tanmay Mandal",
  initials: "DV",
  url: "https://dillion.io",
  location: "Odisha, INDIA",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "Aspiring Software Engineer with an entrepreneurial edge, driven by a love for building impactful solutions and helping others. Passionate about tech, always leveling up skills, and active on X—let's connect and talk innovation!",
  summary:
    "Graduating in 2025 with a strong foundation in computer science, I’ve spent the past years immersing myself in hackathons, real-world projects, and building my own SaaS solutions. My focus on backend development, cloud, and DevOps, paired with leadership experience, has shaped my passion for creating impactful tech. Driven by a builder’s mindset, I’m excited to bring fresh ideas and innovation to what’s next!",
  avatarUrl: "/tanmay.png",
  skills: [
    "React",
    "Next.js",
    "Node.js",
    "Typescript",
    "Javascript",
    "Java(Novice)",
    "C++",
    "Python",
    "Kafka",
    "Redis",
    "Postgres",
    "Docker",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "tanmaymandal958@gmail.com",
    tel: "+917609047982",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/tanmay958",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/tanmay-mandal-47286b190/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/Tanmaym54308239",
        icon: Icons.x,

        navbar: true,
      },

      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Codeforces",
      href: "https://codeforces.com/profile/zeus_099",
      badges: ["Specialist", "1500+ rated"],
      location: "",
      title: "Comptetive programming",
      logoUrl:
        "https://cdn.iconscout.com/icon/free/png-256/free-code-forces-logo-icon-download-in-svg-png-gif-file-formats--technology-social-media-vol-2-pack-logos-icons-2944796.png?f=webp&w=256",
      start: "Januaray  2023",
      end: "Present",
      description:
        "Skilled in Data Structures and Algorithms, with strong problem-solving abilities honed through consistent practice and competition. (1500+ rated)",
    },
    {
      company: "Leetcode",
      badges: ["Guardian", "2170+ rating", "Top 1% coder"],
      href: "https://leetcode.com/u/Easton_01",
      location: "",
      title: "Comptetive programming",
      logoUrl:
        "https://cdn.iconscout.com/icon/free/png-256/free-leetcode-logo-icon-download-in-svg-png-gif-file-formats--technology-social-media-vol-4-pack-logos-icons-2944960.png?f=webp",
      start: "January 2023",
      end: "Present",
      description:
        "Ranked in the top 1% globally on LeetCode (2170+  rated coder) ",
    },
  ],
  education: [
    {
      school: "National Institute of Techonology, Trichy - 8.93 cgpa",
      href: "https://nitt.edu/",
      degree: "MCA (Masters of Computer Application) ",
      logoUrl: "/National_Institute_of_Technology_Trichy_Logo.png",
      start: "2022",
      end: "2025",
    },
    {
      school: "Vikash School of Bussiness Management - 9.57 gpa",
      href: "#",
      degree: "BCA (Bachelors of Computer Application)",
      logoUrl: "/vsbmlogo.png",
      start: "2019",
      end: "2022",
    },
  ],
  projects: [
    {
      title: "VideoFlux",
      href: "",
      dates: "Oct 2024 - Oct 2024",
      active: true,
      description:
        " A video transcoding platform that leverages Node.js, React, FFmpeg, and AWS to convert and manage video resolutions efficiently, with real-time status tracking for each processing step.",
      technologies: ["React.js", "Javascript", "Docker", "AWS", "TailwindCSS"],
      links: [
        {
          type: "Source",
          href: "https://github.com/tanmay958/VIDEO-FLUX",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/project1.png",
      video: "",
    },
    {
      title: "Social",
      href: "",
      dates: "June 2023 - July 2023",
      active: true,
      description:
        " A scalable social media application where users can post content, including images and text, follow and unfollow others, and engage with a dynamic feed. Built with a microservices architecture, providing a seamless experience.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "NextAuth",
        "AWS",
        "Redis",
        "shadcnUI",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/tanmay958/Social",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/project2.png",
      video: "",
    },
    {
      title: "Realtime Weather Analysis Aggregator ",
      href: "",
      dates: "October 2024 - October 2024",
      active: true,
      description:
        "A real-time weather analysis app that leverages Spring Boot and Kafka to gather and stream live weather data for cities like Delhi, Kolkata, and Mumbai, delivering timely updates on temperature, humidity, and more.",
      technologies: ["Java", "Spring Boot", "Kafka", "Kafka Stream API"],
      links: [
        {
          type: "Source",
          href: "https://github.com/tanmay958/application2",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/project3.png",
      video: "",
    },
    {
      title: "LinguaConnect",
      href: "",
      dates: "Feb 2024 - Feb 2024",
      active: true,
      description:
        "A scalable language-learning platform where learners connect with tutors through peer-to-peer and group video calls. With features like a concurrent class booking system, real-time messaging, and a microservices architecture, LinguConnect offers an engaging, interactive learning experience.",
      technologies: [
        "ReactJs",
        "Javascript",
        "MongoDB",
        "RabbitMQ",
        "WebRTC",
        "PeerJS",
        "Payment API",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/tanmay958/TRINIT_seggeteriusA_DEV",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/project4.png",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "TriNitt Hackathon (visa sponsored) ",
      dates: "November 23rd - 25th, 2018",
      location: "Trichy, India",
      description:
        "Built a  scalable language-learning platform with live video sessions and real-time booking, designed for seamless tutor-learner connections. Reached the semifinals in this hackathon.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOK-ExH64w4vaz6r2HY7kpEc0SEZKmpq7CKg&s",
      mlh: "",
      links: [],
    },
  ],
} as const;
