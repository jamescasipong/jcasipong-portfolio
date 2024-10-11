"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ChartContainer, ChartTooltipContent } from "@/components/ui/chart";
import { CarouselApi } from "@/components/ui/customBuiltUIs";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AnimatePresence, motion } from "framer-motion";
import {
  ChevronDown,
  Code,
  Github,
  Globe,
  Linkedin,
  FileUser,
  Mail,
  Moon,
  Sun,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  LabelList,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import {
  blogPosts,
  chartConfig,
  education,
  experiences,
  projects,
  skills,
} from "./datas";

export default function EnhancedLightModePortfolio() {
  const [darkMode, setDarkMode] = useState(false);

  const [activeSection, setActiveSection] = useState("home");
  const [isLoading, setIsLoading] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [sortOrder, setSortOrder] = useState("latest");

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const timer = setTimeout(() => {
      setIsLoading(false);
      document.body.style.overflow = "visible";
    }, 0);
    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "visible";
    };
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedDarkMode = localStorage.getItem("darkMode");
      if (savedDarkMode) {
        setDarkMode(JSON.parse(savedDarkMode));
      }
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode((prev) => {
      const newDarkMode = !prev;
      if (typeof window !== "undefined") {
        localStorage.setItem("darkMode", JSON.stringify(newDarkMode));
      }
      return newDarkMode;
    });
  };

  const sections = [
    "home",
    "about",
    "projects",
    "skills",
    "experience-education",
    "blog",
  ];

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

  return (
    <div className={`min-h-screen ${darkMode ? "dark" : ""}`}>
      <div className="bg-white text-gray-900 dark:bg-[#18191A] dark:text-[#E4E6EB] w-full overflow-hidden">
        {/* Header */}
        <header className="fixed top-0 z-40 w-full border-b border-gray-200 bg-white/95 backdrop-blur dark:border-[#3E4042] dark:bg-[#242526]/95">
          <div className="container mx-auto px-4">
            <div className="flex h-16 items-center justify-between">
              <div className="flex items-center space-x-4">
                <Code className="h-8 w-8 text-blue-600 dark:text-[#2374E1]" />
                <span className="text-xl font-bold text-blue-600 dark:text-[#2374E1]">
                  JC
                </span>
              </div>
              <nav className="hidden md:flex items-center space-x-6">
                {sections.map((section) => (
                  <motion.a
                    key={section}
                    href={`#${section}`}
                    className={`text-sm font-medium transition-colors hover:text-blue-600 dark:hover:text-[#2374E1] ${
                      activeSection === section
                        ? "text-blue-600 dark:text-[#2374E1]"
                        : "text-gray-600 dark:text-[#B0B3B8]"
                    }`}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(section);
                    }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {section === "experience-education"
                      ? "Experience & Education"
                      : section.charAt(0).toUpperCase() + section.slice(1)}
                  </motion.a>
                ))}
              </nav>
              <div className="flex items-center space-x-4">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={toggleDarkMode}
                    className="text-gray-600 dark:text-[#B0B3B8]"
                  >
                    {darkMode ? (
                      <Sun className="h-5 w-5" />
                    ) : (
                      <Moon className="h-5 w-5" />
                    )}
                  </Button>
                </motion.div>
                <Button
                  variant="ghost"
                  size="icon"
                  className="md:hidden text-gray-600 dark:text-[#B0B3B8]"
                  onClick={() => setMenuOpen(!menuOpen)}
                >
                  {menuOpen ? (
                    <X className="h-6 w-6" />
                  ) : (
                    <ChevronDown className="h-6 w-6" />
                  )}
                </Button>
              </div>
            </div>
          </div>
        </header>

        {/* Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              className="fixed inset-0 z-30 bg-white dark:bg-[#242526] md:hidden"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex flex-col items-center justify-center h-full space-y-6">
                {sections.map((section) => (
                  <motion.a
                    key={section}
                    href={`#${section}`}
                    className={`text-lg font-medium transition-colors hover:text-blue-600 dark:hover:text-[#2374E1] ${
                      activeSection === section
                        ? "text-blue-600 dark:text-[#2374E1]"
                        : "text-gray-600 dark:text-[#B0B3B8]"
                    }`}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(section);
                    }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {section === "experience-education"
                      ? "Experience & Education"
                      : section.charAt(0).toUpperCase() + section.slice(1)}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main Content */}
        <main className="container mx-auto px-4 sm:pt-16 pt-18">
          {/* Home Section */}
          <motion.section
            id="home"
            className="flex min-h-screen items-center justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Avatar className="md:h-[400px] md:w-[400px] h-[300px] w-[300px] mx-auto mb-4">
                  <AvatarImage
                    src="https://scontent.fmnl17-5.fna.fbcdn.net/v/t39.30808-6/447772630_2787488948073950_480088435303528636_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=244rMvgN63oQ7kNvgFH8WH0&_nc_ht=scontent.fmnl17-5.fna&_nc_gid=ANPXIHIINOjYqcYPkx5bfru&oh=00_AYBEmXhpRykeJxcMh6WivjFazNX6hljpUtcnmx-r4DXRvA&oe=670C7D8B"
                    alt="James Casipong"
                  />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
              </motion.div>
              <motion.h1
                className="sm:text-[36px] text-[28px] font-bold mb-2 text-blue-600 dark:text-[#2374E1]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                James Casipong
              </motion.h1>
              <motion.p
                className="sm:text-[16px] text-[15px] text-gray-600 dark:text-[#B0B3B8] mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                Full Stack Developer | Software Engineer
              </motion.p>

              {/* Contact Section */}
              <motion.section
                className=""
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <div className="flex gap-2 justify-center mb-3">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Button
                      onClick={() => {
                        window.location.href =
                          "mailto:jamesxcasipong@gmail.com";
                      }}
                      variant="outline"
                      className="border-gray-200 text-blue-600 hover:bg-blue-50 dark:border-[#3E4042] dark:hover:bg-[#3A3B3C] dark:bg-[#2374E1] dark:text-white"
                    >
                      <Mail className="sm:mr-2 h-4 w-4" />{" "}
                      <p className="sm:block hidden">Email</p>
                    </Button>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Button
                      onClick={() => {
                        window.open(
                          "https://www.linkedin.com/in/jamescasipong/, _blank"
                        );
                      }}
                      variant="outline"
                      className="border-gray-200 text-blue-600 hover:bg-blue-50 dark:border-[#3E4042] dark:hover:bg-[#3A3B3C] dark:bg-[#2374E1] dark:text-white"
                    >
                      <Linkedin className="sm:mr-2 h-4 w-4" />{" "}
                      <p className="sm:block hidden">Linkedin</p>
                    </Button>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Button
                      onClick={() => {
                        window.open("/JamesCasipong_Portfolio.pdf", "_blank");
                      }}
                      variant="outline"
                      className="border-gray-200 text-blue-600 hover:bg-blue-50 dark:border-[#3E4042] dark:hover:bg-[#3A3B3C] dark:bg-[#2374E1] dark:text-white"
                    >
                      <FileUser className="sm:mr-2 h-4 w-4" />{" "}
                      <p className="sm:block hidden">Resume</p>
                    </Button>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Button
                      onClick={() => {
                        window.open(
                          "https://github.com/jamescasipong",
                          "_blank"
                        );
                      }}
                      variant="outline"
                      className="border-gray-200 text-blue-600 hover:bg-blue-50 dark:border-[#3E4042] dark:hover:bg-[#3A3B3C] dark:bg-[#2374E1] dark:text-white"
                    >
                      <Github className="sm:mr-2 h-4 w-4" />{" "}
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
                <ChevronDown className="mx-auto animate-bounce text-gray-400 dark:text-[#B0B3B8]" />
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
            <h2 className="text-3xl text-center font-bold mb-4 text-blue-600 dark:text-[#2374E1]">
              About Me
            </h2>
            <p className="sm:text-lg text-sm text-gray-600  dark:text-[#B0B3B8] text-justify md:text-center mx-auto md:w-[70%] w-full">
              I'm a passionate full-stack developer and software engineer with a
              keen interest in building scalable applications and contributing
              to open-source projects. With a strong foundation in computer
              science and years of hands-on experience, I strive to create
              efficient, user-friendly solutions to complex problems.
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
            <h2 className="text-3xl text-center font-bold mb-4 text-blue-600 dark:text-[#2374E1]">
              Projects
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {projects.map((project, index) => (
                <Dialog key={index}>
                  <DialogTrigger asChild>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Card className="bg-white shadow-lg h-full relative dark:bg-[#242526] hover:bg-gray-100 transition dark:hover:bg-gray-800 duration-150 border-gray-200 dark:border-[#3E4042] cursor-pointer">
                        <CardHeader>
                          <CardTitle className="text-blue-600 dark:text-[#2374E1]">
                            {project.title}
                          </CardTitle>

                          <div className="flex flex-wrap gap-2">
                            {project.stack.map((lang, index) => (
                              <motion.div
                                key={lang}
                                whileHover={{ scale: 1.1 }}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                  duration: 0.5,
                                  delay: index * 0.1,
                                }}
                              >
                                <Badge
                                  className="border-gray-200 border dark:border-gray-700 dark:bg-gray-700"
                                  variant="secondary"
                                >
                                  {lang}
                                </Badge>
                              </motion.div>
                            ))}
                          </div>
                          <CardDescription className="dark:text-[#B0B3B8] sm:text-[14px] text-[13px]">
                            {project.description}
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <img
                            src={project.images[0]}
                            alt={project.title}
                            className="w-full h-48 object-cover rounded-md mb-4"
                          />
                        </CardContent>
                      </Card>
                    </motion.div>
                  </DialogTrigger>
                  <DialogContent
                    className={`sm:w-full w-[90%] rounded-lg max-w-7xl ${
                      darkMode ? "bg-[#3E4042] text-white border-0" : ""
                    } overflow-y-auto`}
                  >
                    <DialogHeader>
                      <DialogTitle className=" mb-1">
                        {project.title}
                      </DialogTitle>
                      <div className="flex sm:justify-start justify-center mt-2 gap-4 text-xs">
                        <a
                          href={project.source}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`${
                            darkMode ? "text-blue-400" : "text-blue-600"
                          } hover:underline`}
                        >
                          <Github className="inline-block mr-1 h-4 w-4" />{" "}
                          GitHub
                        </a>
                        <a
                          href={project.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`${
                            darkMode ? "text-blue-400" : "text-blue-600"
                          } dark:text-[#2374E1] hover:underline mb-2`}
                        >
                          <Globe className="inline-block mr-1 h-4 w-4" />{" "}
                          {index == 0 ? "Download" : "Website"}
                        </a>
                      </div>
                      <DialogDescription
                        className={`sm:text-[14px] text-[12px] text-justify ${
                          darkMode ? "bg-[#3E4042] text-white" : ""
                        }`}
                      >
                        {project.description}
                      </DialogDescription>
                    </DialogHeader>
                    <CarouselApi images={project.images} />
                  </DialogContent>
                </Dialog>
              ))}
            </div>
          </motion.section>

          {/* Skills Section */}
          <motion.section
            id="skills"
            className="py-16"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-8 text-center  text-blue-600 dark:text-[#2374E1]">
              Skills & Technology Stack
            </h2>
            <Card className="bg-white shadow-lg dark:bg-[#242526] md:w-[65%] border-gray-200 dark:border-[#3E4042] mx-auto">
              <CardContent className="pt-6 ">
                <Tabs defaultValue="languages" className="w-full text-center ">
                  <TabsList className="bg-gray-100 dark:bg-[#3A3B3C] mb-4 border py-5">
                    <TabsTrigger
                      value="languages"
                      className="data-[state=active]:bg-white sm:text-[15px] text-[12px] dark:data-[state=active]:bg-[#242526]"
                    >
                      Languages
                    </TabsTrigger>
                    <TabsTrigger
                      value="frameworks"
                      className="data-[state=active]:bg-white sm:text-[15px] text-[12px] dark:data-[state=active]:bg-[#242526]"
                    >
                      Frameworks
                    </TabsTrigger>
                    <TabsTrigger
                      value="tools"
                      className="data-[state=active]:bg-white sm:text-[15px] text-[12px] dark:data-[state=active]:bg-[#242526]"
                    >
                      Tools
                    </TabsTrigger>
                  </TabsList>
                  {Object.entries(skills).map(([category, items]) => (
                    <TabsContent
                      className="border-0"
                      key={category}
                      value={category}
                    >
                      <div className="">
                        <ChartContainer className="" config={chartConfig}>
                          <BarChart
                            data={skills[category as keyof typeof skills]}
                            layout="vertical"
                            barCategoryGap="10%"
                          >
                            <CartesianGrid horizontal={false} />
                            <YAxis
                              dataKey="name"
                              type="category"
                              tickLine={false}
                              axisLine={false}
                              tickFormatter={(value) => value.slice(0, 3)}
                              hide
                            />
                            <XAxis
                              dataKey="Proficiency"
                              type="number"
                              domain={[0, 11]}
                              hide
                            />
                            <Tooltip
                              cursor={false}
                              content={<ChartTooltipContent indicator="line" />}
                            />
                            <Bar
                              dataKey="Proficiency"
                              layout="vertical"
                              className="fill-blue-600"
                              radius={10}
                            >
                              <LabelList
                                dataKey="name"
                                position="insideLeft"
                                offset={8}
                                className="fill-white"
                                fontSize={12}
                              />
                              <LabelList
                                dataKey="Proficiency"
                                position="right"
                                offset={8}
                                className="text-white"
                                fontSize={12}
                              />
                            </Bar>
                          </BarChart>
                        </ChartContainer>
                      </div>
                    </TabsContent>
                  ))}
                </Tabs>
              </CardContent>
            </Card>
          </motion.section>

          {/* Experience and Education Section */}
          <motion.section
            id="experience-education"
            className="py-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl text-center font-bold mb-8 text-blue-600 dark:text-[#2374E1]">
              Experience & Education
            </h2>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
              <div className="">
                <h3 className="text-2xl font-semibold mb-4 text-center text-blue-600 dark:text-[#2374E1]">
                  Work Experience
                </h3>
                {experiences.map((job, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Card className="bg-white shadow-lg dark:bg-[#242526] border-gray-200 dark:border-[#3E4042] mt-4">
                      <CardHeader>
                        <CardTitle className="text-xl font-semibold text-blue-600 dark:text-[#2374E1]">
                          {job.title}
                        </CardTitle>
                        <CardDescription className="text-gray-600 dark:text-[#B0B3B8]">
                          {job.company} | {job.period}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <ul className="list-disc pl-5 space-y-2">
                          {job.responsibilities.map((responsibility, idx) => (
                            <li
                              key={idx}
                              className="text-gray-600 sm:text-[16px] text-[13px] dark:text-[#B0B3B8]"
                            >
                              {responsibility}
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-center text-blue-600 dark:text-[#2374E1]">
                  Education
                </h3>
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="bg-white shadow-lg dark:bg-[#242526] border-gray-200 dark:border-[#3E4042] mt-4">
                      <CardHeader>
                        <CardTitle className="text-xl font-semibold text-blue-600 dark:text-[#2374E1]">
                          {edu.degree}
                        </CardTitle>
                        <CardDescription className="text-gray-600 dark:text-[#B0B3B8]">
                          {edu.institution} | {edu.period}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <ul className="list-disc pl-5 space-y-2">
                          {edu.details.map((detail, idx) => (
                            <li
                              key={idx}
                              className="sm:text-[16px] text-[13px] text-gray-600 dark:text-[#B0B3B8]"
                            >
                              {detail}
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>

          {/* Blog Section */}
          <motion.section
            id="blog"
            className="py-16 "
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4 text-blue-600 dark:text-[#2374E1]">
              Latest Blog Posts
            </h2>
            <div className="flex justify-start mb-3">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button className="bg-white border rounded-lg border-gray-200 text-blue-600 hover:bg-blue-50 dark:border-[#3E4042]  dark:hover:bg-[#3A3B3C] dark:bg-[#2374E1] dark:text-white mx-2 p-2 ">
                    Sort by: {sortOrder === "latest" ? "Latest" : "Oldest"}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem onClick={() => setSortOrder("latest")}>
                    Latest
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setSortOrder("oldest")}>
                    Oldest
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {blogPosts
                .sort((a, b) =>
                  sortOrder === "latest"
                    ? new Date(b.date).getTime() - new Date(a.date).getTime()
                    : new Date(a.date).getTime() - new Date(b.date).getTime()
                )
                .map((post, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="bg-white shadow-lg dark:bg-[#242526] border-gray-200 dark:border-[#3E4042]">
                      <CardHeader>
                        <CardTitle className="text-blue-600 dark:text-[#2374E1]">
                          {post.title}
                        </CardTitle>
                        <CardDescription className="dark:text-[#B0B3B8]">
                          Posted on {post.date}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600 sm:text-[16px] text-[13px] dark:text-[#B0B3B8]">
                          {post.excerpt}
                        </p>
                      </CardContent>
                      <CardFooter>
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button
                              variant="outline"
                              className="border-gray-200 text-blue-600 hover:bg-blue-50 dark:border-[#3E4042]  dark:hover:bg-[#3A3B3C] dark:bg-[#2374E1] dark:text-white"
                            >
                              Read More
                            </Button>
                          </DialogTrigger>
                          <DialogContent
                            className={`max-w-3xl sm:w-full w-[90%] rounded-lg ${
                              darkMode ? "bg-[#3E4042] border-0 text-white" : ""
                            }`}
                          >
                            <DialogHeader>
                              <DialogTitle className="text-blue-600 dark:text-[#2374E1]">
                                {post.title}
                              </DialogTitle>
                              <DialogDescription
                                className={`${
                                  darkMode ? "bg-[#3E4042] text-[#fafcff]" : ""
                                }`}
                              >
                                Posted on {post.date}
                              </DialogDescription>
                            </DialogHeader>
                            <div className="mt-4 ">
                              <p
                                className={`sm:text-[16px] text-[13px] ${
                                  darkMode ? "bg-[#3E4042] text-white" : ""
                                } `}
                              >
                                {post.content}
                              </p>
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
        <footer className="border-t flex justify-center border-gray-200 dark:border-[#3E4042] py-6 md:py-0">
          <div className="container w-full flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
            <div className="flex flex-col justify-center w-full items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
              <p className="text-center text-sm leading-loose text-gray-600 dark:text-[#B0B3B8] md:text-left">
                Built by James Casipong with Next.js and Tailwind. © 2023
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
