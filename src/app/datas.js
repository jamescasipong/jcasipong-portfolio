const projects = [
  {
    title: "Touch-Me-Not 2D RPG",
    description:
      "A Filipino 2D RPG game developed using Unity, inspired by the novel Noli Me Tangere. Dive into a rich, narrative-driven adventure where you complete quests and interact with intriguing characters.",
    images: [
      "https://github.com/jamescasipong/Touch-Me-Not-2D-RPG/raw/main/Screenshot1.jpg",
      "https://github.com/jamescasipong/Touch-Me-Not-2D-RPG/raw/main/Screenshot2.jpg",
      "https://github.com/jamescasipong/Touch-Me-Not-2D-RPG/raw/main/Screenshot3.jpg",
      "https://github.com/jamescasipong/Touch-Me-Not-2D-RPG/raw/main/Screenshot4.jpg",
    ], // Update with actual images if available
    source: "https://github.com/jamescasipong/Touch-Me-Not-2D-RPG",
    website: "https://example.com/touch-me-not-2d-rpg", // Update with actual website if available
    stack: ["Unity", "C#", "Ink Scripting", "LibreSprite"],
  },
  {
    title: "HRConnect",
    description:
      "A website for employees to clock in/out, check payroll, attendances, performances, and file leaves. HRConnect simplifies employee management with features like payroll tracking, performance reviews, leave requests, and attendance monitoring.",
    images: [
      "/hrconnect-1.png",
      "/hrconnect-2.png",
      "/hrconnect-3.png",
      "/hrconnect-4.png",
      "/hrconnect-5.png",
      "/hrconnect-6.png",
    ], // Update with actual images if available
    source: "https://github.com/jamescasipong/hr-management-system",
    website: "https://hrconnect.vercel.app/",
    stack: [
      "Next.js",
      "Node.js",
      "ASP.NET",
      "MySQL",
      "Tailwind",
      "Azure",
      "TypeScript",
      "REST API",
    ],
  },
  {
    title: "Monitor360",
    description:
      "A web application built with the ASP & React stack for managing employee data. It allows users to convert Excel files to JSON, view and edit data, and update the database.",
    images: ["/monitor-task.png"], // Update with actual images if available
    source: "https://github.com/jamescasipong/task-tracker",
    website: "https://monitor360.vercel.app/", // Update with actual website if available
    stack: [
      "MongoDB",
      "ASP.NET",
      "React",
      "Node.js",
      "Tailwind",
      "Azure",
      "JavaScript",
      "REST API",
    ],
  },
  {
    title: "React Bank Websites",
    description:
      "A modern banking platform built using React. It includes banking functionalities like account management, transaction history, and secure login.",
    images: ["/react-bank.png"], // Update with actual images if available
    source: "https://github.com/jamescasipong/react-bank-websites",
    website: "https://react-bank-websites.vercel.app/", // Update with actual website if available
    stack: ["React", "Tailwind"],
  },
  {
    title: "SocMediaHub",
    website: "https://socmediahub.vercel.app/",
    source: "https://github.com/jamescasipong/social-media-app",
    description:
      "A social media platform where users can create posts, like, comment, and follow other users. SocMediaHub is designed to provide a seamless and engaging social media experience.",
    images: ["/social-media-app.png", "/social-media-app1.png"], // Update with actual images if available
    stack: [
      "Next.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind",
      "REST API",
    ],
  },
];

const blogPosts = [
  {
    title: "The Future of Web Development",
    date: "May 1, 2023",
    excerpt:
      "Exploring upcoming trends in web development and how they'll shape the industry...",
    content:
      "In this post, we dive deep into emerging technologies like WebAssembly, Edge Computing, and AI-driven development. We'll explore how these innovations are set to revolutionize the way we build and interact with web applications...",
  },
  {
    title: "Mastering React Hooks",
    date: "May 15, 2023",
    excerpt:
      "A comprehensive guide to using React Hooks effectively in your projects...",
    content:
      "React Hooks have transformed the way we write React components. This article provides an in-depth look at useState, useEffect, useContext, and custom hooks. We'll cover best practices, common pitfalls, and advanced techniques...",
  },
  {
    title: "Building Scalable Backend Systems",
    date: "June 1, 2023",
    excerpt:
      "Learn how to design and implement backend systems that can handle millions of users...",
    content:
      "Scalability is crucial for modern web applications. In this post, we'll explore architectural patterns like microservices, database sharding, and caching strategies. We'll also discuss how to use cloud services effectively to ensure your backend can grow with your user base...",
  },
];

const chartConfig = {
  Proficiency: {
    label: "Proficiency",
    color: "hsl(var(--chart-1))",
  },
  mobile: {
    label: "Mobile",
    color: "hsl(var(--chart-2))",
  },
  label: {
    color: "hsl(var(--background))",
  },
};

const experiences = [
  {
    title: "Web Developer - Internship",
    company: "SYSU International",
    period: "March 2024 - June 2024",
    responsibilities: [
      "Developed web applications using PHP and Bootstrap",
      "Collaborated with the team to enhance user interfaces",
      "Improved website functionality",
    ],
  },
  {
    title: "Customer Service Representative",
    company: "Concentrix",
    period: "August 2022 - June 2024",
    responsibilities: [
      "Provided exceptional customer support through various channels",
      "Resolved customer inquiries and issues in a timely manner",
      "Maintained accurate records of interactions",
    ],
  },
  {
    title: "IT Admin & Full Stack Developer",
    company: "Army Navy Burger",
    period: "August 2024 - Present",
    responsibilities: [
      "Developing and maintaining web applications using Azure, React, Next.js, Tailwind, MongoDB, Laravel, and MySQL",
      "Managing system administration tasks",
      "Ensuring optimal performance of IT infrastructure",
    ],
  },
];

const education = [
  {
    degree: "Information Communication and Technology",
    institution: "STI College",
    period: "2018 - 2020",
    details: [
      "Specialized in Software Development",
      "Acquired skills in web development and database management",
      "Expertise in HTML, CSS, JavaScript, PHP, Java, and MySQL",
    ],
  },
  {
    degree: "Bachelor of Science in Information Technology",
    institution: "STI College",
    period: "2020-2024",
    details: [
      "Expertise in C# and Java",
      "Capstone Project: 'Developing a 2D RPG Game using Unity'",
      "GWA: 1.5",
    ],
  },
];

export { blogPosts, chartConfig, education, experiences, projects };
