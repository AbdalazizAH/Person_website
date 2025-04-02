"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { FileText, ChevronDown, ChevronUp } from "lucide-react"
import { motion } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export default function AboutPage() {
  const [expandedExperience, setExpandedExperience] = useState<number | null>(null)

  // Education data
  const education = [
    {
      degree: "Bachelor's Degree in Petroleum Engineering",
      institution: "University of Tripoli",
      location: "Libya",
      year: "2024",
      details: [
        'Graduation Project: "ESTIMATION OF PRODUCTIVITY INDEX USING CORRELATION"',
        "Received Excellence grade for Graduation Project",
      ],
    },
  ]

  // Experience data
  const experiences = [
    {
      title: "Freelance Programmer",
      company: "Remote",
      period: "2023 - Present",
      description:
        "Working as a freelance programmer via the internet, executing diverse programming projects for various clients.",
      responsibilities: [
        "Developing custom software solutions for clients in various industries",
        "Creating data analysis tools for petroleum engineering applications",
        "Building user interfaces for technical applications",
        "Implementing algorithms for engineering calculations",
      ],
    },
    {
      title: "Freelance Writer and Research Analyst",
      company: "Remote",
      period: "2022 - 2023",
      description:
        "Prepared and wrote reports and research papers in various fields. Assisted in preparing and writing graduation projects for students.",
      responsibilities: [
        "Conducting in-depth research on petroleum engineering topics",
        "Writing technical reports and academic papers",
        "Analyzing data and presenting findings in a clear, concise manner",
        "Assisting students with their research methodology and project structure",
      ],
    },
  ]

  // Skills data with proficiency levels
  const skillCategories = [
    {
      name: "Industry Software",
      skills: [
        { name: "PIPESIM", proficiency: 85 },
        { name: "KAPPA Saphir", proficiency: 80 },
        { name: "PROSPER", proficiency: 75 },
      ],
    },
    {
      name: "Programming",
      skills: [
        { name: "Python", proficiency: 90 },
        { name: "C++", proficiency: 75 },
        { name: "Data Analysis", proficiency: 85 },
        { name: "AI Tools", proficiency: 80 },
      ],
    },
    {
      name: "Professional Skills",
      skills: [
        { name: "Project Management", proficiency: 85 },
        { name: "Technical Writing", proficiency: 90 },
        { name: "Problem Solving", proficiency: 95 },
        { name: "Research", proficiency: 90 },
      ],
    },
  ]

  // Languages data
  const languages = [
    { language: "Arabic", proficiency: 100, level: "Native" },
    { language: "English", proficiency: 85, level: "Professional working proficiency" },
  ]

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.h1
        className="text-4xl font-bold mb-2 text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        About Me
      </motion.h1>
      <motion.div
        className="w-20 h-1 bg-primary mx-auto mb-12 rounded-full"
        initial={{ width: 0 }}
        animate={{ width: 80 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      />

      {/* Bio Section with animation */}
      <motion.section
        className="mb-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/3">
            <div className="relative w-64 h-64 mx-auto rounded-2xl overflow-hidden shadow-xl border-4 border-primary/20 group hover:shadow-primary/20 transition-all duration-500">
              <Image
                src="/6D2A1901.JPG?height=300&width=300"
                alt="Abdalaziz Shita"
                fill
                className="object-cover group-hover:scale-110 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>
          <div className="md:w-2/3">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Abdalaziz Ahmed Ail Shita</h2>
            <p className="text-lg mb-4 leading-relaxed">
              A graduate of the University of Tripoli with a specialization in Petroleum Engineering, passionate and
              motivated to begin my career in the oil and gas sector. I have strong analytical, research, and
              problem-solving skills.
            </p>
            <p className="text-lg mb-4 leading-relaxed">
              I am eager to join an innovative team where I can apply my academic knowledge and contribute to achieving
              the company's goals. My background combines petroleum engineering expertise with programming skills,
              allowing me to develop technical solutions for industry challenges.
            </p>
            <p className="text-lg mb-6 leading-relaxed">
              I've published research on estimating productivity index for Libyan wells and developed software tools to
              assist in well test analysis and petroleum engineering calculations.
            </p>
            <Button asChild className="gap-2 rounded-full hover:shadow-lg transition-all duration-300">
              <a href="/cv.pdf" target="_blank" rel="noopener noreferrer">
                <FileText className="h-4 w-4" /> Download CV
              </a>
            </Button>
          </div>
        </div>
      </motion.section>

      {/* Tabbed content for skills, education, experience */}
      <motion.section
        className="mb-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <Tabs defaultValue="skills" className="max-w-4xl mx-auto">
          <TabsList className="grid grid-cols-3 mb-8">
            <TabsTrigger value="skills" className="text-lg">
              Skills
            </TabsTrigger>
            <TabsTrigger value="education" className="text-lg">
              Education
            </TabsTrigger>
            <TabsTrigger value="experience" className="text-lg">
              Experience
            </TabsTrigger>
          </TabsList>

          {/* Skills Tab */}
          <TabsContent value="skills" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {skillCategories.map((category, index) => (
                <Card
                  key={index}
                  className="overflow-hidden border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg"
                >
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-6 text-primary">{category.name}</h3>
                    <div className="space-y-4">
                      {category.skills.map((skill, idx) => (
                        <div key={idx}>
                          <div className="flex justify-between mb-1">
                            <span>{skill.name}</span>
                            <span className="text-muted-foreground">{skill.proficiency}%</span>
                          </div>
                          <Progress value={skill.proficiency} className="h-2" />
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-10">
              <h3 className="text-xl font-semibold mb-6 text-center">Languages</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
                {languages.map((lang, index) => (
                  <Card
                    key={index}
                    className="overflow-hidden border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg"
                  >
                    <CardContent className="p-6">
                      <div className="flex justify-between mb-1">
                        <h4 className="text-lg font-medium">{lang.language}</h4>
                        <span className="text-muted-foreground">{lang.level}</span>
                      </div>
                      <Progress value={lang.proficiency} className="h-2 mt-2" />
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          {/* Education Tab */}
          <TabsContent value="education">
            <motion.div className="space-y-6" variants={containerVariants} initial="hidden" animate="visible">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-card rounded-xl p-8 border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg"
                >
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                    <h3 className="text-xl font-semibold text-primary">{edu.degree}</h3>
                    <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                      {edu.year}
                    </span>
                  </div>
                  <p className="text-lg mb-4">
                    {edu.institution}, {edu.location}
                  </p>
                  <ul className="space-y-2 mt-4 border-t pt-4">
                    {edu.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-2"></div>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>

          {/* Experience Tab */}
          <TabsContent value="experience">
            <motion.div className="space-y-6" variants={containerVariants} initial="hidden" animate="visible">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-card rounded-xl p-6 border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg"
                >
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                    <h3 className="text-xl font-semibold text-primary">{exp.title}</h3>
                    <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-lg font-medium mb-2">{exp.company}</p>
                  <p className="text-muted-foreground mb-4">{exp.description}</p>

                  <div className="flex items-center justify-between border-t pt-4 mt-4">
                    <span className="text-sm font-medium">Responsibilities</span>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setExpandedExperience(expandedExperience === index ? null : index)}
                      className="p-0 h-auto"
                    >
                      {expandedExperience === index ? (
                        <ChevronUp className="h-5 w-5 text-primary" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-primary" />
                      )}
                    </Button>
                  </div>

                  {expandedExperience === index && (
                    <motion.ul
                      className="space-y-2 mt-4"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      transition={{ duration: 0.3 }}
                    >
                      {exp.responsibilities.map((resp, idx) => (
                        <li key={idx} className="flex items-start">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-2"></div>
                          <span>{resp}</span>
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>
        </Tabs>
      </motion.section>

      {/* Timeline section */}
      <motion.section
        className="mb-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <div className="flex flex-col items-center mb-12">
          <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary mb-4">Journey</div>
          <h2 className="text-3xl md:text-4xl font-bold text-center">My Timeline</h2>
        </div>

        <div className="max-w-3xl mx-auto relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:transform md:-translate-x-1/2"></div>

          {[
            {
              year: "2024",
              title: "Bachelor's Degree",
              description: "Graduated from University of Tripoli with a degree in Petroleum Engineering",
            },
            {
              year: "2023",
              title: "Freelance Programming",
              description: "Started working as a freelance programmer, developing tools for petroleum engineering",
            },
            {
              year: "2022",
              title: "Research Work",
              description: "Began working as a freelance writer and research analyst",
            },
            {
              year: "2020",
              title: "University Projects",
              description: "Started working on petroleum engineering projects and research",
            },
          ].map((item, index) => (
            <div
              key={index}
              className={`relative mb-12 ${index % 2 === 0 ? "md:pr-12 md:text-right md:ml-auto md:mr-0" : "md:pl-12 md:ml-0 md:mr-auto"} ml-6 md:ml-0 md:w-1/2`}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-auto md:right-0 top-0 w-4 h-4 rounded-full bg-primary -ml-2 md:ml-0 md:-mr-2"></div>

              {/* Content */}
              <div className="bg-card rounded-xl p-6 border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg">
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm mb-2">
                  {item.year}
                </span>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        <div className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 rounded-2xl p-10 max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">Interested in working together?</h2>
          <p className="text-lg mb-6">I'm currently looking for opportunities in the oil and gas sector.</p>
          <Button asChild size="lg" className="rounded-full group hover:shadow-lg transition-all duration-300">
            <Link href="/contact">
              Contact Me
              <svg
                className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </Button>
        </div>
      </motion.section>
    </div>
  )
}

