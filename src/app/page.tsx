"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Moon,
  Sun,
  Github,
  Linkedin,
  Mail,
  ChevronDown,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function CompactAnimatedPortfolio() {
  const [darkMode, setDarkMode] = useState(() => {
    // Get initial darkMode state from localStorage
    if (typeof window !== "undefined") {
      const savedMode = localStorage.getItem("darkMode");
      return savedMode === "true"; // Convert string to boolean
    }
  });
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const timer = setTimeout(() => {
      document.body.style.overflow = "visible";
    }, 0);
    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "visible";
    };
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  const sections = ["home", "about", "projects", "skills-experience", "blog"];

  const handleScroll = () => {
    const currentSection = sections.find((section) => {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        return rect.top >= 0 && rect.top <= window.innerHeight / 2;
      }
      return false;
    });
    if (currentSection) setActiveSection(currentSection);
  };

  useEffect(() => {
    // Apply dark mode class based on state
    document.documentElement.classList.toggle("dark", darkMode);
    // Save the current mode to localStorage
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  const projects = [
    {
      title: "Touch-Me-Not 2D RPG",
      description:
        "A Filipino 2D RPG game developed using Unity, inspired by the novel Noli Me Tangere.",
      image:
        "https://github.com/jamescasipong/Touch-Me-Not-2D-RPG/raw/main/Screenshot1.jpg", // Update with actual image if available
      details:
        "Dive into a rich, narrative-driven adventure where you complete quests and interact with intriguing characters.",
    },
    {
      title: "HRConnect",
      description:
        "A website for employees to clock in/out, check payroll, attendances, performances, and file leaves.",
      image: "/hrconnect.png", // Update with actual image if available
      details:
        "HRConnect simplifies employee management with features like payroll tracking, performance reviews, leave requests, and attendance monitoring.",
    },
    {
      title: "Task Tracker",
      description:
        "A web application built with the MERN stack for managing employee data.",
      image: "/monitor-task.png", // Update with actual image if available
      details:
        "Allows users to convert Excel files to JSON, view and edit data, and update the database.",
    },
    {
      title: "React Bank Websites",
      description: "A modern banking platform built using React.",
      image: "/react-bank.png", // Update with actual image if available
      details:
        "Includes banking functionalities like account management, transaction history, and secure login.",
    },
    {
      title: "ISP Services",
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

  return (
    <div className={`justify-center mx-auto w-full ${darkMode ? "dark" : ""}`}>
      <div className="bg-background text-foreground w-full overflow-hidden">
        {/* Header */}
        <header className="fixed top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container mx-auto px-4">
            <div className="flex h-20 items-center justify-between">
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                {menuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <ChevronDown className="h-6 w-6" />
                )}
              </Button>
              <nav
                className={`${
                  menuOpen ? "flex" : "hidden"
                } md:flex absolute md:relative top-20 md:top-0 left-0 right-0 bg-background md:bg-transparent flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 space-x-0 md:space-x-6 p-4 md:p-0 w-full`}
              >
                {sections.map((section) => (
                  <motion.a
                    key={section}
                    href={`#${section}`}
                    className={`text-lg font-medium transition-colors hover:text-primary ${
                      activeSection === section
                        ? "text-primary"
                        : "text-muted-foreground"
                    }`}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(section);
                    }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <p className="text-center w-full">
                      {section === "skills-experience"
                        ? "Skills & Experience"
                        : section.charAt(0).toUpperCase() + section.slice(1)}
                    </p>
                  </motion.a>
                ))}
              </nav>
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button variant="ghost" size="icon" onClick={toggleDarkMode}>
                  {darkMode ? (
                    <Sun className="h-5 w-5" />
                  ) : (
                    <Moon className="h-5 w-5" />
                  )}
                </Button>
              </motion.div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="container mx-auto px-4 pt-14">
          {/* Hero Section */}
          <motion.section
            id="hero"
            className="flex min-h-screen items-center justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="text-center ">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Avatar className="h-[300px] w-[300px] mx-auto mb-4">
                  <AvatarImage
                    src="https://scontent.fmnl17-5.fna.fbcdn.net/v/t39.30808-6/447772630_2787488948073950_480088435303528636_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=244rMvgN63oQ7kNvgFH8WH0&_nc_ht=scontent.fmnl17-5.fna&_nc_gid=ANPXIHIINOjYqcYPkx5bfru&oh=00_AYBEmXhpRykeJxcMh6WivjFazNX6hljpUtcnmx-r4DXRvA&oe=670C7D8B"
                    alt="James Casipong"
                  />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
              </motion.div>
              <motion.h1
                className="text-4xl font-bold mb-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                James Casipong
              </motion.h1>
              <motion.p
                className="text-xl text-muted-foreground mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                Full-Stack Developer | Software Engineer
              </motion.p>

              {/* Contact Section */}
              <motion.section
                id="contact"
                className="mb-5 w-full justify-center flex"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <div className="flex space-x-4">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Button variant="outline">
                      <Mail className="sm:mr-2 mr-0 h-4 w-4" />{" "}
                      <p className="sm:block hidden">Email</p>
                    </Button>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Button variant="outline">
                      <Linkedin className="sm:mr-2 mr-0 h-4 w-4" />{" "}
                      <p className="sm:block hidden">Linkedin</p>
                    </Button>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Button variant="outline">
                      <Github className="sm:mr-2 mr-0 h-4 w-4" />{" "}
                      <p className="sm:block hidden">GitHub</p>
                    </Button>
                  </motion.div>
                </div>
              </motion.section>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <ChevronDown className="mx-auto animate-bounce" />
              </motion.div>
            </div>
          </motion.section>

          {/* About Section */}
          <motion.section
            id="about"
            className="py-16"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">About Me</h2>
            <p className="text-lg text-muted-foreground">
              I'm a passionate full-stack developer with a keen interest in
              building scalable web applications and contributing to open-source
              projects. With a strong foundation in computer science and years
              of hands-on experience, I strive to create efficient,
              user-friendly solutions to complex problems.
            </p>
          </motion.section>

          {/* Projects Section */}
          <motion.section
            id="projects"
            className="py-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">Projects</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card>
                    <CardHeader>
                      <CardTitle>{project.title}</CardTitle>
                      <CardDescription>{project.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full border h-48 object-cover rounded-md mb-4"
                      />
                    </CardContent>
                    <CardFooter>
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button>View Project</Button>
                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader className="">
                            <DialogTitle>{project.title}</DialogTitle>
                            <DialogDescription>
                              {project.description}
                            </DialogDescription>
                          </DialogHeader>
                          <div className="mt-4">
                            <img
                              src={project.image}
                              alt={project.title}
                              className="w-full h-64 object-cover rounded-md mb-4"
                            />
                            <p>{project.details}</p>
                          </div>
                        </DialogContent>
                      </Dialog>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Skills and Experience Section */}
          <motion.section
            id="skills-experience"
            className="py-16"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">Skills & Experience</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <h3 className="text-2xl font-semibold mb-4">Skills</h3>
                <Tabs defaultValue="languages">
                  <TabsList>
                    <TabsTrigger value="languages">Languages</TabsTrigger>
                    <TabsTrigger value="frameworks">Frameworks</TabsTrigger>
                    <TabsTrigger value="tools">Tools</TabsTrigger>
                  </TabsList>
                  <TabsContent value="languages" className="mt-4">
                    <div className="flex flex-wrap gap-2">
                      {[
                        "JavaScript",
                        "TypeScript",
                        "Python",
                        "Java",
                        "C++",
                        "SQL",
                      ].map((lang, index) => (
                        <motion.div
                          key={lang}
                          whileHover={{ scale: 1.1 }}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                          <Badge variant="secondary">{lang}</Badge>
                        </motion.div>
                      ))}
                    </div>
                  </TabsContent>
                  <TabsContent value="frameworks" className="mt-4">
                    <div className="flex flex-wrap gap-2">
                      {[
                        "React",
                        "Next.js",
                        "Node.js",
                        "Express",
                        "Django",
                        "Spring Boot",
                      ].map((framework, index) => (
                        <motion.div
                          key={framework}
                          whileHover={{ scale: 1.1 }}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                          <Badge variant="secondary">{framework}</Badge>
                        </motion.div>
                      ))}
                    </div>
                  </TabsContent>
                  <TabsContent value="tools" className="mt-4">
                    <div className="flex flex-wrap gap-2">
                      {[
                        "Git",
                        "Docker",
                        "Kubernetes",
                        "AWS",
                        "Jenkins",
                        "Jira",
                      ].map((tool, index) => (
                        <motion.div
                          key={tool}
                          whileHover={{ scale: 1.1 }}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                          <Badge variant="secondary">{tool}</Badge>
                        </motion.div>
                      ))}
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4">Experience</h3>
                <div className="space-y-4">
                  {[
                    {
                      title: "Web Developer - Internship",
                      company: "SYSU International",
                      period: "March 2024 - June 2024",
                      responsibilities:
                        "Developed web applications using PHP and Bootstrap; collaborated with the team to enhance user interfaces and improve website functionality.",
                    },
                    {
                      title: "Customer Service Representative",
                      company: "Concentrix",
                      period: "August 2022 - June 2024",
                      responsibilities:
                        "Provided exceptional customer support through various channels; resolved customer inquiries and issues in a timely manner; maintained accurate records of interactions.",
                    },
                    {
                      title: "IT Admin & System Developer",
                      company: "Army Navy Burger",
                      period: "August 2024 - Present",
                      responsibilities:
                        "Developing and maintaining web applications using Azure, React, Next.js, Tailwind, MongoDB, Laravel, and MySQL; managing system administration tasks and ensuring optimal performance of IT infrastructure.",
                    },
                  ].map((job, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ x: 10 }}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <Card>
                        <CardHeader>
                          <CardTitle>{job.title}</CardTitle>
                          <CardDescription>
                            {job.company} | {job.period}
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <p>{job.responsibilities}</p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.section>

          {/* Blog Section */}
          <motion.section
            id="blog"
            className="py-16"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">Latest Blog Posts</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {blogPosts.map((post, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card>
                    <CardHeader>
                      <CardTitle>{post.title}</CardTitle>
                      <CardDescription>Posted on {post.date}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p>{post.excerpt}</p>
                    </CardContent>
                    <CardFooter>
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="outline">Read More</Button>
                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle>{post.title}</DialogTitle>
                            <DialogDescription>
                              Posted on {post.date}
                            </DialogDescription>
                          </DialogHeader>
                          <div className="mt-4">
                            <p>{post.content}</p>
                          </div>
                        </DialogContent>
                      </Dialog>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.section>
        </main>

        {/* Footer */}
        <footer className="border-t flex justify-center py-6 md:py-0">
          <div className="container flex flex-col items-center justify-center gap-4 md:h-24 md:flex-row">
            <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
              <p className="text-center text-sm leading-loose md:text-left">
                Built by James Casipong with Next.JS & Tailwind. The source code
                is available on GitHub.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
