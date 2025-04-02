"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink, Search, Filter } from "lucide-react"
import { motion } from "framer-motion"
import { Input } from "@/components/ui/input"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuCheckboxItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function ProjectsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedTech, setSelectedTech] = useState<string[]>([])

  // All technologies used across projects
  const allTechnologies = [
    "Python",
    "NumPy",
    "Matplotlib",
    "Tkinter",
    "SciPy",
    "Pandas",
    "C++",
    "Numerical Methods",
    "Finite Difference",
  ]

  // Sample projects data
  const allProjects = [
    {
      id: "well-test-analysis",
      title: "Well Test Analysis Tool - Buildup Test",
      description:
        "This tool performs well test analysis using Horner plots and Derivative plots. It's designed to help petroleum engineers analyze pressure buildup tests and determine key reservoir parameters.",
      image: "/derivative_plot.png?height=300&width=500&text=Well+Test+Analysis+Tool",
      technologies: ["Python", "NumPy", "Matplotlib", "Tkinter"],
      githubLink: "https://github.com/AbdalazizAH/well-test-analysis",
      demoLink: "#",
      featured: true,
    },
    {
      id: "oil-fvf-calculator",
      title: "Oil Formation Volume Factor Calculator",
      description:
        "A graphical user interface (GUI) application to calculate the Oil Formation Volume Factor (FVF) based on various equations and input parameters.",
      image: "/placeholder.svg?height=300&width=500&text=Oil+FVF+Calculator",
      technologies: ["Python", "Tkinter", "NumPy", "Pandas"],
      githubLink: "https://github.com/AbdalazizAH/oil-fvf-calculator",
      demoLink: "#",
      featured: true,
    },
    // {
    //   id: "productivity-index-estimation",
    //   title: "Productivity Index Estimation",
    //   description:
    //     "A tool based on my graduation project that estimates the productivity index using various correlations for different well and reservoir conditions.",
    //   image: "/placeholder.svg?height=300&width=500&text=Productivity+Index+Estimation",
    //   technologies: ["Python", "SciPy", "Matplotlib", "Pandas"],
    //   githubLink: "https://github.com/AbdalazizAH",
    //   demoLink: "#",
    //   featured: false,
    // },
    // {
    //   id: "reservoir-simulation",
    //   title: "Reservoir Simulation Model",
    //   description:
    //     "A basic reservoir simulation model that demonstrates fluid flow in porous media using numerical methods.",
    //   image: "/placeholder.svg?height=300&width=500&text=Reservoir+Simulation",
    //   technologies: ["C++", "Numerical Methods", "Finite Difference"],
    //   githubLink: "https://github.com/AbdalazizAH",
    //   demoLink: "#",
    //   featured: false,
    // },
    // {
    //   id: "pressure-transient-analysis",
    //   title: "Pressure Transient Analysis",
    //   description:
    //     "A specialized tool for analyzing pressure transient data from well tests to determine reservoir properties and boundaries.",
    //   image: "/placeholder.svg?height=300&width=500&text=Pressure+Transient+Analysis",
    //   technologies: ["Python", "NumPy", "SciPy", "Matplotlib"],
    //   githubLink: "https://github.com/AbdalazizAH",
    //   demoLink: "#",
    //   featured: false,
    // },
    // {
    //   id: "decline-curve-analysis",
    //   title: "Decline Curve Analysis Tool",
    //   description:
    //     "A tool for performing decline curve analysis on production data to forecast future production rates and estimate reserves.",
    //   image: "/placeholder.svg?height=300&width=500&text=Decline+Curve+Analysis",
    //   technologies: ["Python", "Pandas", "Matplotlib", "SciPy"],
    //   githubLink: "https://github.com/AbdalazizAH",
    //   demoLink: "#",
    //   featured: false,
    // },
  ]

  // Filter projects based on search term and selected technologies
  const filteredProjects = allProjects.filter((project) => {
    const matchesSearch =
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesTech = selectedTech.length === 0 || selectedTech.some((tech) => project.technologies.includes(tech))

    return matchesSearch && matchesTech
  })

  // Toggle technology selection
  const toggleTech = (tech: string) => {
    setSelectedTech((prev) => (prev.includes(tech) ? prev.filter((t) => t !== tech) : [...prev, tech]))
  }

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
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-8"
      >
        <h1 className="text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
          My Projects
        </h1>
        <motion.div
          className="w-20 h-1 bg-primary mx-auto mb-6 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: 80 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        />
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          A collection of petroleum engineering and programming projects I've developed to solve industry challenges and
          improve workflows.
        </p>
      </motion.div>

      {/* Search and filter */}
      <motion.div
        className="flex flex-col md:flex-row gap-4 mb-10 max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <div className="relative flex-grow">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            placeholder="Search projects..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 rounded-full"
          />
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="gap-2 rounded-full">
              <Filter className="h-4 w-4" />
              Filter by Technology
              {selectedTech.length > 0 && (
                <Badge variant="secondary" className="ml-2 rounded-full">
                  {selectedTech.length}
                </Badge>
              )}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            {allTechnologies.map((tech) => (
              <DropdownMenuCheckboxItem
                key={tech}
                checked={selectedTech.includes(tech)}
                onCheckedChange={() => toggleTech(tech)}
              >
                {tech}
              </DropdownMenuCheckboxItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </motion.div>

      {/* Projects grid with animations */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {filteredProjects.map((project, index) => (
          <motion.div key={project.id} variants={itemVariants} className="group">
            <Card className="overflow-hidden h-full flex flex-col border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-xl">
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {project.featured && (
                  <div className="absolute top-2 right-2 bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full">
                    Featured
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <CardContent className="p-6 flex-grow flex flex-col">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 flex-grow">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="rounded-full">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex justify-between items-center">
                  <Button
                    asChild
                    variant="default"
                    size="sm"
                    className="rounded-full group-hover:bg-primary transition-colors"
                  >
                    <Link href={`/projects/${project.id}`}>View Details</Link>
                  </Button>

                  <div className="flex gap-2">
                    <Button asChild variant="outline" size="icon" className="rounded-full w-8 h-8">
                      <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4" />
                        <span className="sr-only">GitHub</span>
                      </a>
                    </Button>
                    {project.demoLink && (
                      <Button asChild variant="outline" size="icon" className="rounded-full w-8 h-8">
                        <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4" />
                          <span className="sr-only">Live Demo</span>
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      {/* Empty state */}
      {filteredProjects.length === 0 && (
        <motion.div
          className="text-center py-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-6xl mb-4">🔍</div>
          <h3 className="text-2xl font-semibold mb-2">No projects found</h3>
          <p className="text-muted-foreground mb-6">Try adjusting your search or filter criteria</p>
          <Button
            onClick={() => {
              setSearchTerm("")
              setSelectedTech([])
            }}
            variant="outline"
            className="rounded-full"
          >
            Clear Filters
          </Button>
        </motion.div>
      )}
    </div>
  )
}

