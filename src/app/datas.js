
const projects = [
  {
    title: "Touch-Me-Not 2D RPG",
    description:
      "A Filipino 2D RPG game developed using Unity, inspired by the novel Noli Me Tangere.",
    image:
      "https://github.com/jamescasipong/Touch-Me-Not-2D-RPG/raw/main/Screenshot1.jpg", // Update with actual image if available
    details:
      "Dive into a rich, narrative-driven adventure where you complete quests and interact with intriguing characters.",
    source: "https://github.com/jamescasipong/Touch-Me-Not-2D-RPG",
    website: "https://example.com/touch-me-not-2d-rpg", // Update with actual website if available
  },
  {
    title: "HRConnect",
    description:
      "A website for employees to clock in/out, check payroll, attendances, performances, and file leaves.",
    image: "/hrconnect.png", // Update with actual image if available
    details:
      "HRConnect simplifies employee management with features like payroll tracking, performance reviews, leave requests, and attendance monitoring.",
    source: "https://github.com/jamescasipong/hr-management-system",
    website: "https://hrconnect.vercel.app/",
  },
  {
    title: "Task Tracker",
    description:
      "A web application built with the MERN stack for managing employee data.",
    image: "/monitor-task.png", // Update with actual image if available
    details:
      "Allows users to convert Excel files to JSON, view and edit data, and update the database.",
    source: "https://github.com/jamescasipong/task-tracker",
    website: "https://monitoring-task.vercel.app/", // Update with actual website if available
  },
  {
    title: "React Bank Websites",
    description: "A modern banking platform built using React.",
    image: "/react-bank.png", // Update with actual image if available
    details:
      "Includes banking functionalities like account management, transaction history, and secure login.",
    source: "https://github.com/jamescasipong/react-bank-websites",
    website: "https://react-bank-websites.vercel.app/", // Update with actual website if available
  },
  {
    title: "ISP Services",
    website: "https://hrconnect.vercel.app/",
    source: "https://github.com/jamescasipong/hr-management-system/",
    description:
      "A website for managing Internet Service Provider (ISP) services.",
    image: "/optinet.png", // Update with actual image if available
    details:
      "Designed to provide a modern and efficient platform for customers to explore and manage ISP services.",
  },
  {
    title: "Sample Portfolio",
    description:
      "A portfolio showcasing educational background, experiences, skills, and projects built with VanillaJS.",
    image: "/portfolio.png", // Update with actual image if available
    details:
      "This temporary portfolio highlights personal achievements and serves as a resume.",
    source: "https://github.com/jamescasipong/sample-portfolio",
    website: "https://jcasipong-dev.vercel.app/", // Update with actual website if available
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

const skills = {
  languages: [
    { name: "JavaScript", Proficiency: 8, mobile: 6.5 },
    { name: "TypeScript", Proficiency: 6.5, mobile: 6 },
    { name: "Python", Proficiency: 5.5, mobile: 5 },
    { name: "Java", Proficiency: 8, mobile: 5.5 },
    { name: "C#", Proficiency: 8, mobile: 6 },
    { name: "SQL", Proficiency: 6, mobile: 5.5 },
    { name: "NoSQL", Proficiency: 5.5, mobile: 5 },
  ],
  frameworks: [
    { name: "React", Proficiency: 7, mobile: 6.5 },
    { name: "Next.js", Proficiency: 6.5, mobile: 6 },
    { name: "Node.js", Proficiency: 6, mobile: 5.5 },
    { name: "Express", Proficiency: 5.5, mobile: 5 },
    { name: "ASP.NET", Proficiency: 5, mobile: 4.5 },
    { name: "Spring Boot", Proficiency: 5, mobile: 4.5 },
    { name: "Tailwind", Proficiency: 6.5, mobile: 6 },
  ],
  tools: [
    { name: "Git", Proficiency: 7, mobile: 6.5 },
    { name: "Docker", Proficiency: 6, mobile: 5.5 },
    { name: "Azure", Proficiency: 5, mobile: 4.5 },
    { name: "Visual Studio", Proficiency: 5, mobile: 4.5 },
    { name: "MongoDB", Proficiency: 6, mobile: 5.5 },
    { name: "MySQL", Proficiency: 6.5, mobile: 6 },
    { name: "Visual Studio Code", Proficiency: 7, mobile: 6.5 },
  ],
};

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
}

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
    title: "IT Admin & System Developer",
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

export { blogPosts, chartConfig, education, experiences, projects, skills };

