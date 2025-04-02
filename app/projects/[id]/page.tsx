"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { notFound, useRouter } from "next/navigation"
import { ArrowLeft, ExternalLink, Github, ChevronRight, Code, Lightbulb, Layers, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { motion } from "framer-motion"

// This would typically come from a database or API
const getProjectData = (id: string) => {
  const projects = [
    {
      id: "well-test-analysis",
      title: "Well Test Analysis Tool",
      description:
        "This tool performs well test analysis using Horner plots and Derivative plots. It's designed to help petroleum engineers analyze pressure buildup tests and determine key reservoir parameters.",
      longDescription:
        "The Well Test Analysis Tool is a comprehensive software solution for petroleum engineers to analyze pressure buildup tests. It implements the Horner plot method and pressure derivative analysis to determine key reservoir parameters such as permeability, skin factor, and reservoir boundaries.\n\n" +
        "The tool takes pressure and time data as input, performs the necessary calculations, and generates visual plots to aid in interpretation. It also provides automated parameter estimation based on the analysis results.",
      image: "/placeholder.svg?height=500&width=800&text=Well+Test+Analysis+Tool",
      technologies: ["Python", "NumPy", "Matplotlib", "Tkinter", "SciPy"],
      features: [
        "Horner plot analysis for pressure buildup tests",
        "Pressure derivative analysis for reservoir characterization",
        "Automatic calculation of permeability, skin factor, and other parameters",
        "Visual representation of results with customizable plots",
        "Data import/export capabilities",
        "User-friendly interface designed for petroleum engineers",
      ],
      challenges:
        "One of the main challenges was implementing accurate numerical methods for derivative calculation, which is sensitive to noise in the pressure data. This was addressed by implementing smoothing algorithms and careful data preprocessing. Another challenge was creating an intuitive user interface that would be accessible to engineers without extensive programming knowledge.",
      codeSnippet: `import numpy as np
import matplotlib.pyplot as plt
from scipy.optimize import curve_fit

def horner_analysis(dt, p, tp):
    """
    Perform Horner analysis on pressure buildup data
    
    Parameters:
    dt - Shut-in time (hours)
    p - Pressure data (psi)
    tp - Production time before shut-in (hours)
    
    Returns:
    k - Permeability (md)
    s - Skin factor
    pi - Initial pressure (psi)
    """
    # Calculate Horner time
    horner_time = (tp + dt) / dt
    
    # Linear regression on semi-log plot
    slope, intercept = np.polyfit(np.log(horner_time), p, 1)
    
    # Calculate reservoir parameters
    q = 100  # Oil rate (STB/D)
    Bo = 1.2  # Oil formation volume factor (rb/STB)
    mu = 0.8  # Oil viscosity (cp)
    h = 50  # Formation thickness (ft)
    phi = 0.15  # Porosity
    ct = 1.5e-5  # Total compressibility (psi^-1)
    rw = 0.3  # Wellbore radius (ft)
    
    # Calculate permeability
    k = -162.6 * q * Bo * mu / (slope * h)
    
    # Calculate skin factor
    p1hr = slope * np.log(tp/1 + 1) + intercept
    pi = intercept
    s = 1.151 * ((pi - p1hr) / slope - np.log(k / (phi * mu * ct * rw**2)) + 3.23)
    
    return k, s, pi`,
      screenshots: [
        "/placeholder.svg?height=300&width=500&text=Screenshot+1",
        "/placeholder.svg?height=300&width=500&text=Screenshot+2",
        "/placeholder.svg?height=300&width=500&text=Screenshot+3",
      ],
      githubLink: "https://github.com/AbdalazizAH/well-test-analysis",
      demoLink: "#",
    },
    {
      id: "oil-fvf-calculator",
      title: "Oil Formation Volume Factor Calculator",
      description:
        "A graphical user interface (GUI) application to calculate the Oil Formation Volume Factor (FVF) based on various equations and input parameters.",
      longDescription:
        "The Oil Formation Volume Factor (FVF) Calculator is a specialized tool for petroleum engineers to estimate the FVF using various industry-standard correlations. The FVF is a critical parameter in reservoir engineering that relates the volume of oil at reservoir conditions to its volume at standard conditions.\n\n" +
        "This application implements multiple correlations including Standing, Vasquez-Beggs, Glaso, and others. Users can input parameters such as pressure, temperature, gas-oil ratio, and oil gravity, and the tool calculates the FVF using the selected correlation method.",
      image: "/placeholder.svg?height=500&width=800&text=Oil+FVF+Calculator",
      technologies: ["Python", "Tkinter", "NumPy", "Pandas", "Matplotlib"],
      features: [
        "Multiple correlation methods for FVF calculation",
        "Input validation and error handling",
        "Graphical visualization of results",
        "Comparison between different correlation methods",
        "Export results to CSV or Excel format",
        "Comprehensive documentation of each correlation method",
      ],
      challenges:
        "The main challenge was implementing the various correlation methods accurately, as each has its own range of applicability and limitations. This required careful validation against published results and industry standards. Another challenge was designing a user interface that would be intuitive for petroleum engineers while providing all the necessary functionality.",
      codeSnippet: `import numpy as np
import tkinter as tk
from tkinter import ttk
import matplotlib.pyplot as plt
from matplotlib.backends.backend_tkagg import FigureCanvasTkAgg

def standing_correlation(Rs, gamma_g, gamma_o, T):
    """
    Calculate oil FVF using Standing's correlation
    
    Parameters:
    Rs - Solution gas-oil ratio (scf/STB)
    gamma_g - Gas specific gravity (air = 1)
    gamma_o - Oil specific gravity (water = 1)
    T - Temperature (°F)
    
    Returns:
    Bo - Oil formation volume factor (rb/STB)
    """
    # Convert oil specific gravity to API
    API = 141.5 / gamma_o - 131.5
    
    # Calculate FVF
    Bo = 0.9759 + 0.00012 * (Rs * (gamma_g / gamma_o)**0.5 + 1.25 * T)**1.2
    
    return Bo

def vasquez_beggs(Rs, gamma_g, API, T, p):
    """
    Calculate oil FVF using Vasquez-Beggs correlation
    
    Parameters:
    Rs - Solution gas-oil ratio (scf/STB)
    gamma_g - Gas specific gravity (air = 1)
    API - Oil API gravity
    T - Temperature (°F)
    p - Pressure (psia)
    
    Returns:
    Bo - Oil formation volume factor (rb/STB)
    """
    # Constants based on API gravity
    if API <= 30:
        C1 = 4.677e-4
        C2 = 1.751e-5
        C3 = -1.811e-8
    else:
        C1 = 4.67e-4
        C2 = 1.1e-5
        C3 = 1.337e-9
    
    # Corrected gas gravity
    gamma_gc = gamma_g * (1 + 5.912e-5 * API * T * np.log10(p/114.7))
    
    # Calculate FVF
    Bo = 1.0 + C1*Rs + C2*(T-60)*(API/gamma_gc) + C3*Rs*(T-60)*(API/gamma_gc)
    
    return Bo`,
      screenshots: [
        "/placeholder.svg?height=300&width=500&text=Screenshot+1",
        "/placeholder.svg?height=300&width=500&text=Screenshot+2",
      ],
      githubLink: "https://github.com/AbdalazizAH/oil-fvf-calculator",
      demoLink: "#",
    },
    //     {
    //       id: "productivity-index-estimation",
    //       title: "Productivity Index Estimation",
    //       description:
    //         "A tool based on my graduation project that estimates the productivity index using various correlations for different well and reservoir conditions.",
    //       longDescription:
    //         'The Productivity Index Estimation tool is based on my graduation project titled "ESTIMATION OF PRODUCTIVITY INDEX USING CORRELATION". It provides a systematic approach to estimating the productivity index of oil wells using various correlations.\n\n' +
    //         "The productivity index is a crucial parameter in production engineering that quantifies a well's ability to produce fluids. This tool implements multiple correlations and allows engineers to compare results across different methods, helping them make informed decisions about well performance.",
    //       image: "/placeholder.svg?height=500&width=800&text=Productivity+Index+Estimation",
    //       technologies: ["Python", "SciPy", "Matplotlib", "Pandas", "NumPy"],
    //       features: [
    //         "Implementation of multiple productivity index correlations",
    //         "Support for vertical, horizontal, and deviated wells",
    //         "Consideration of reservoir and fluid properties",
    //         "Sensitivity analysis for key parameters",
    //         "Graphical representation of results",
    //         "Comparison with actual field data",
    //       ],
    //       challenges:
    //         "The primary challenge was validating the correlations against real field data from Libyan wells. This required extensive data collection and processing. Another challenge was accounting for the unique characteristics of different reservoir types and well configurations in the correlations.",
    //       codeSnippet: `import numpy as np
    // import matplotlib.pyplot as plt

    // def vogel_correlation(pr, pwf, pb):
    //     """
    //     Calculate productivity index using Vogel's correlation for two-phase flow

    //     Parameters:
    //     pr - Reservoir pressure (psia)
    //     pwf - Flowing bottomhole pressure (psia)
    //     pb - Bubble point pressure (psia)

    //     Returns:
    //     J - Productivity index (STB/day/psi)
    //     """
    //     if pwf >= pb:
    //         # Single-phase flow
    //         J = q_max / (pr - pwf)
    //     else:
    //         # Two-phase flow
    //         q_max = q_test / (1 - 0.2 * (pwf/pr) - 0.8 * (pwf/pr)**2)
    //         J = q_max / pr

    //     return J

    // def fetkovich_correlation(k, h, mu, Bo, re, rw, s):
    //     """
    //     Calculate productivity index using Fetkovich correlation

    //     Parameters:
    //     k - Permeability (md)
    //     h - Formation thickness (ft)
    //     mu - Oil viscosity (cp)
    //     Bo - Oil formation volume factor (rb/STB)
    //     re - Drainage radius (ft)
    //     rw - Wellbore radius (ft)
    //     s - Skin factor

    //     Returns:
    //     J - Productivity index (STB/day/psi)
    //     """
    //     J = 0.00708 * k * h / (mu * Bo * (np.log(re/rw) + s))

    //     return J`,
    //       screenshots: ["/placeholder.svg?height=300&width=500&text=Screenshot+1"],
    //       githubLink: "https://github.com/AbdalazizAH",
    //       demoLink: "#",
    //     },
    //     {
    //       id: "reservoir-simulation",
    //       title: "Reservoir Simulation Model",
    //       description:
    //         "A basic reservoir simulation model that demonstrates fluid flow in porous media using numerical methods.",
    //       longDescription:
    //         "The Reservoir Simulation Model is a computational tool that simulates fluid flow in porous media using numerical methods. It provides a simplified but effective approach to understanding reservoir behavior under various production scenarios.\n\n" +
    //         "The model implements finite difference methods to solve the partial differential equations governing fluid flow in the reservoir. It can handle single-phase and simplified multi-phase flow scenarios, making it a valuable educational and preliminary analysis tool.",
    //       image: "/placeholder.svg?height=500&width=800&text=Reservoir+Simulation",
    //       technologies: ["C++", "Numerical Methods", "Finite Difference", "Linear Algebra"],
    //       features: [
    //         "Single-phase flow simulation in 1D and 2D reservoirs",
    //         "Simplified multi-phase flow capabilities",
    //         "Various boundary condition options",
    //         "Visualization of pressure and saturation profiles",
    //         "Time-step control for numerical stability",
    //         "Performance optimization for larger models",
    //       ],
    //       challenges:
    //         "The main challenge was implementing efficient numerical solvers that could handle the large systems of equations resulting from the discretization of the flow equations. This required careful algorithm selection and optimization. Another challenge was ensuring numerical stability across a wide range of input parameters and time steps.",
    //       codeSnippet: `#include <iostream>
    // #include <vector>
    // #include <cmath>

    // // 1D Single-phase flow simulator using finite difference method
    // class Simulator1D {
    // private:
    //     int nx;                     // Number of grid blocks
    //     double dx;                  // Grid block size (ft)
    //     double dt;                  // Time step (days)
    //     double k;                   // Permeability (md)
    //     double phi;                 // Porosity
    //     double mu;                  // Viscosity (cp)
    //     double ct;                  // Total compressibility (1/psi)
    //     std::vector<double> p;      // Pressure array (psi)

    // public:
    //     Simulator1D(int nx, double dx, double dt, double k, double phi, double mu, double ct) 
    //         : nx(nx), dx(dx), dt(dt), k(k), phi(phi), mu(mu), ct(ct) {
    //         p.resize(nx, 0.0);
    //     }

    //     void setInitialCondition(double p0) {
    //         for (int i = 0; i < nx; i++) {
    //             p[i] = p0;
    //         }
    //     }

    //     void setBoundaryCondition(double pLeft, double pRight) {
    //         p[0] = pLeft;
    //         p[nx-1] = pRight;
    //     }

    //     void solve(int nSteps) {
    //         std::vector<double> pNew(nx);
    //         double alpha = k / (phi * mu * ct);
    //         double beta = alpha * dt / (dx * dx);

    //         for (int step = 0; step < nSteps; step++) {
    //             // Copy current pressure to new array
    //             for (int i = 0; i < nx; i++) {
    //                 pNew[i] = p[i];
    //             }

    //             // Update interior points
    //             for (int i = 1; i < nx-1; i++) {
    //                 pNew[i] = p[i] + beta * (p[i+1] - 2*p[i] + p[i-1]);
    //             }

    //             // Update pressure array
    //             for (int i = 0; i < nx; i++) {
    //                 p[i] = pNew[i];
    //             }
    //         }
    //     }

    //     void printResults() {
    //         for (int i = 0; i < nx; i++) {
    //             std::cout << "Block " << i << ": " << p[i] << " psi" << std::endl;
    //         }
    //     }
    // };`,
    //       screenshots: [
    //         "/placeholder.svg?height=300&width=500&text=Screenshot+1",
    //         "/placeholder.svg?height=300&width=500&text=Screenshot+2",
    //       ],
    //       githubLink: "https://github.com/AbdalazizAH",
    //       demoLink: "#",
    //     },
  ]

  const project = projects.find((p) => p.id === id)
  return project
}

export default function ProjectPage({ params }: { params: { id: string } }) {
  const project = getProjectData(params.id)
  const [activeScreenshot, setActiveScreenshot] = useState(0)
  const router = useRouter()

  if (!project) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <Button
        asChild
        variant="ghost"
        className="mb-8 group hover:bg-primary/10 transition-colors rounded-full"
        onClick={() => router.back()}
      >
        <div>
          <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
          Back to Projects
        </div>
      </Button>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <div className="relative w-full h-64 md:h-96 mb-8 rounded-xl overflow-hidden shadow-lg">
          <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-6 w-full">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">{project.title}</h1>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <Badge key={tech} variant="secondary" className="bg-white/20 backdrop-blur-sm text-white">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2">
            <p className="text-xl mb-6">{project.description}</p>
            <div className="prose max-w-none dark:prose-invert">
              <p className="whitespace-pre-line">{project.longDescription}</p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-card rounded-xl p-6 border border-border/50 shadow-sm">
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <Code className="mr-2 h-5 w-5 text-primary" />
                Technologies
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <Badge key={tech} variant="outline" className="bg-background">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="bg-card rounded-xl p-6 border border-border/50 shadow-sm">
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <Lightbulb className="mr-2 h-5 w-5 text-primary" />
                Project Links
              </h3>
              <div className="space-y-3">
                <Button asChild variant="outline" className="w-full justify-start gap-2">
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4" />
                    View Source Code
                  </a>
                </Button>
                {project.demoLink && (
                  <Button asChild className="w-full justify-start gap-2">
                    <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4" />
                      View Live Demo
                    </a>
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>

        <Tabs defaultValue="features" className="mb-12">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="features" className="text-sm md:text-base">
              Features
            </TabsTrigger>
            <TabsTrigger value="challenges" className="text-sm md:text-base">
              Challenges & Solutions
            </TabsTrigger>
            <TabsTrigger value="code" className="text-sm md:text-base">
              Code Snippets
            </TabsTrigger>
          </TabsList>

          <TabsContent value="features" className="mt-6">
            <div className="bg-card rounded-xl p-6 border border-border/50">
              <h2 className="text-2xl font-semibold mb-6 flex items-center">
                <Layers className="mr-2 h-6 w-6 text-primary" />
                Key Features
              </h2>
              <ul className="space-y-4">
                {project.features.map((feature, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5 mr-3">
                      <ChevronRight className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-lg">{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </TabsContent>

          <TabsContent value="challenges" className="mt-6">
            <div className="bg-card rounded-xl p-6 border border-border/50">
              <h2 className="text-2xl font-semibold mb-6">Challenges and Solutions</h2>
              <p className="text-lg whitespace-pre-line">{project.challenges}</p>
            </div>
          </TabsContent>

          <TabsContent value="code" className="mt-6">
            <div className="bg-card rounded-xl p-6 border border-border/50">
              <h2 className="text-2xl font-semibold mb-6">Code Implementation</h2>
              <div className="bg-black text-white p-4 rounded-lg overflow-x-auto">
                <pre className="text-sm">
                  <code>{project.codeSnippet}</code>
                </pre>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        {project.screenshots && project.screenshots.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">Screenshots</h2>
            <div className="relative rounded-xl overflow-hidden">
              <div className="relative h-64 md:h-96 w-full">
                <Image
                  src={project.screenshots[activeScreenshot] || "/placeholder.svg"}
                  alt={`${project.title} screenshot ${activeScreenshot + 1}`}
                  fill
                  className="object-contain"
                />
              </div>

              {project.screenshots.length > 1 && (
                <div className="flex justify-center mt-4 gap-2">
                  {project.screenshots.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveScreenshot(index)}
                      className={`w-3 h-3 rounded-full transition-all ${activeScreenshot === index ? "bg-primary scale-125" : "bg-muted-foreground/30"
                        }`}
                      aria-label={`View screenshot ${index + 1}`}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
          <Button asChild size="lg" className="rounded-full group">
            <Link href="/contact">
              Contact Me About This Project
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="rounded-full">
            <Link href="/projects">View Other Projects</Link>
          </Button>
        </div>
      </motion.div>
    </div>
  )
}

