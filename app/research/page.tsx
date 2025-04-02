"use client"

import Link from "next/link"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { FileText, Download, ChevronDown, ChevronUp, ExternalLink } from "lucide-react"
import { motion } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ResearchPage() {
  const [expandedPaper, setExpandedPaper] = useState<number | null>(null)

  const researchPapers = [
    {
      title: "Estimate the productivity index for some of Libyan wells using Prosper and kappa Saphir software",
      type: "Publication Research Paper",
      abstract:
        "This research paper focuses on estimating the productivity index for selected Libyan oil wells using industry-standard software tools: Prosper and Kappa Saphir. The productivity index is a critical parameter in production engineering that quantifies a well's ability to produce fluids. The study compares the results obtained from both software packages and evaluates their applicability to Libyan reservoir conditions.",
      image: "/placeholder.svg?height=300&width=500&text=Research+Paper",
      downloadLink: "#",
      fullText:
        "The productivity index (PI) is a crucial parameter in petroleum engineering that quantifies a well's ability to produce fluids. It is defined as the ratio of production rate to pressure drawdown and serves as an indicator of well performance. Accurate estimation of PI is essential for production optimization, well planning, and reservoir management.\n\nIn this study, we focused on estimating the productivity index for selected Libyan oil wells using two industry-standard software tools: Prosper and Kappa Saphir. The research involved collecting pressure transient test data from multiple wells across different Libyan oil fields, processing this data using both software packages, and comparing the results.\n\nThe analysis revealed that while both software tools provided comparable results for most wells, there were significant discrepancies in cases with complex reservoir behavior or poor-quality test data. Kappa Saphir generally provided more robust results for wells with boundary effects or heterogeneous reservoir properties, while Prosper offered simpler workflows for routine analysis.\n\nThe study also evaluated the applicability of various analytical models to Libyan reservoir conditions and proposed a workflow for selecting the most appropriate model based on reservoir and fluid properties. The findings contribute to improving the accuracy of productivity index estimation in Libyan oil fields and enhancing production optimization strategies.",
    },
    {
      title: "ESTIMATION OF PRODUCTIVITY INDEX USING CORRELATION",
      type: "Graduation Project",
      abstract:
        "This graduation project, which received an Excellence grade, investigates various correlations for estimating the productivity index of oil wells. The study evaluates the accuracy and applicability of different correlations under various reservoir and well conditions. It also proposes modifications to existing correlations to better match the characteristics of specific Libyan oil fields.",
      image: "/placeholder.svg?height=300&width=500&text=Graduation+Project",
      downloadLink: "#",
      fullText:
        "The productivity index (PI) is a fundamental parameter in petroleum engineering that quantifies the relationship between production rate and pressure drawdown. While direct measurement through well testing is the most accurate method for determining PI, it is not always feasible due to operational constraints or economic considerations. In such cases, correlations provide a practical alternative.\n\nThis graduation project conducted a comprehensive evaluation of existing PI correlations, including those developed by Vogel, Standing, Fetkovich, and others. The study assessed the accuracy of these correlations using a dataset of 25 wells from three major Libyan oil fields with varying reservoir properties and production characteristics.\n\nThe research methodology involved:\n1. Collecting and validating production and pressure data from selected wells\n2. Calculating reference PI values using well test analysis\n3. Applying various correlations to estimate PI values\n4. Comparing estimated values with reference values\n5. Analyzing error patterns and identifying factors affecting correlation accuracy\n\nThe results showed that no single correlation provided accurate estimates across all conditions. The Fetkovich correlation performed best for wells in consolidated sandstone reservoirs, while the modified Vogel correlation was more suitable for wells operating below bubble point pressure.\n\nBased on the analysis, the project proposed a new correlation that incorporates specific parameters relevant to Libyan reservoirs, including formation damage indicators and fluid property adjustments. The proposed correlation reduced the average estimation error by 18% compared to the best-performing existing correlation.\n\nThe findings of this project contribute to improving production forecasting and reservoir management in Libyan oil fields by providing more accurate PI estimation methods tailored to local conditions.",
    },
  ]

  const methodologySteps = [
    {
      title: "Data Collection",
      description:
        "Gathering pressure transient test data, production history, and reservoir properties from Libyan oil fields.",
      icon: "📊",
    },
    {
      title: "Software Analysis",
      description:
        "Processing data using industry-standard software (PROSPER, KAPPA Saphir) to calculate reference values.",
      icon: "💻",
    },
    {
      title: "Correlation Evaluation",
      description:
        "Applying various correlations to estimate productivity index values and comparing with reference values.",
      icon: "📈",
    },
    {
      title: "Statistical Analysis",
      description:
        "Performing error analysis and identifying patterns in correlation performance across different reservoir conditions.",
      icon: "📉",
    },
    {
      title: "Model Development",
      description:
        "Creating computational tools to implement and test correlations, with modifications for Libyan reservoir conditions.",
      icon: "🔧",
    },
  ]

  const publications = [
    {
      title: "Journal of Petroleum Engineering",
      description:
        "Research paper on productivity index estimation published in the International Journal of Petroleum Engineering.",
      link: "#",
    },
    {
      title: "SPE Conference Proceedings",
      description:
        "Presentation at the Society of Petroleum Engineers Regional Conference on Well Testing and Analysis.",
      link: "#",
    },
    {
      title: "University Repository",
      description:
        "Graduation project available in the University of Tripoli digital repository for academic reference.",
      link: "#",
    },
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
        Research
      </motion.h1>
      <motion.div
        className="w-20 h-1 bg-primary mx-auto mb-6 rounded-full"
        initial={{ width: 0 }}
        animate={{ width: 80 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      />
      <motion.p
        className="text-xl text-muted-foreground mb-12 text-center max-w-3xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        My academic and professional research in petroleum engineering, focusing on well productivity and reservoir
        characterization.
      </motion.p>

      <motion.div
        className="grid grid-cols-1 gap-8 max-w-4xl mx-auto mb-16"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {researchPapers.map((paper, index) => (
          <motion.div key={index} variants={itemVariants}>
            <Card className="overflow-hidden border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-xl">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="relative h-48 md:h-full">
                  <Image src={paper.image || "/placeholder.svg"} alt={paper.title} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="md:col-span-2 p-6">
                  <div className="mb-2">
                    <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm mb-2">
                      {paper.type}
                    </span>
                    <h2 className="text-xl font-semibold">{paper.title}</h2>
                  </div>
                  <p className="text-muted-foreground mb-4">{paper.abstract}</p>

                  <div className="flex flex-col sm:flex-row gap-3 mt-4">
                    <Button asChild className="gap-2 rounded-full">
                      <a href={paper.downloadLink}>
                        <Download className="h-4 w-4" />
                        Download Paper
                      </a>
                    </Button>
                    <Button
                      variant="outline"
                      className="gap-2 rounded-full"
                      onClick={() => setExpandedPaper(expandedPaper === index ? null : index)}
                    >
                      {expandedPaper === index ? (
                        <>
                          <ChevronUp className="h-4 w-4" />
                          Hide Details
                        </>
                      ) : (
                        <>
                          <ChevronDown className="h-4 w-4" />
                          Read More
                        </>
                      )}
                    </Button>
                  </div>

                  {expandedPaper === index && (
                    <motion.div
                      className="mt-6 pt-6 border-t"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className="whitespace-pre-line">{paper.fullText}</p>
                    </motion.div>
                  )}
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      <Tabs defaultValue="methodology" className="max-w-4xl mx-auto mb-16">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="methodology">Research Methodology</TabsTrigger>
          <TabsTrigger value="publications">Publications</TabsTrigger>
        </TabsList>

        <TabsContent value="methodology" className="mt-6">
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-6 text-center">My Research Approach</h2>
              <p className="mb-8 text-center">
                My research methodology combines theoretical analysis with practical application, focusing on real-world
                petroleum engineering challenges.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {methodologySteps.map((step, index) => (
                  <motion.div
                    key={index}
                    className="bg-card rounded-xl p-6 border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="text-4xl mb-4">{step.icon}</div>
                    <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 text-center">
                <p>
                  This methodology ensures that my research findings are both academically rigorous and practically
                  applicable to real-world petroleum engineering challenges.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="publications" className="mt-6">
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-6 text-center">Publication Venues</h2>
              <div className="space-y-6">
                {publications.map((pub, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start p-4 rounded-xl border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                      <FileText className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-lg font-semibold">{pub.title}</h3>
                      <p className="text-muted-foreground mb-2">{pub.description}</p>
                      <Button asChild variant="link" className="p-0 h-auto gap-1 text-primary">
                        <a href={pub.link} target="_blank" rel="noopener noreferrer">
                          View Publication <ExternalLink className="h-3 w-3" />
                        </a>
                      </Button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <motion.div
        className="max-w-3xl mx-auto text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <div className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 rounded-2xl p-10">
          <h2 className="text-2xl font-bold mb-4">Interested in my research?</h2>
          <p className="text-lg mb-6">
            Feel free to reach out if you'd like to discuss my research or potential collaborations.
          </p>
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
      </motion.div>
    </div>
  )
}

