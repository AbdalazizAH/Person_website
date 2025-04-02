import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Github, Linkedin, Mail, Phone, MapPin, FileText, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section with animated gradient background */}
      <section className="relative flex flex-col items-center justify-center py-24 md:py-36 text-center px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10 z-0"></div>

        {/* Animated circles in background */}
        <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-primary/5 blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 right-20 w-80 h-80 rounded-full bg-secondary/5 blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>

        <div className="relative z-10 max-w-5xl mx-auto">
          <div className="relative w-32 h-32 md:w-40 md:h-40 mb-8 rounded-full overflow-hidden border-4 border-primary/20 shadow-xl mx-auto group transition-all duration-300 hover:scale-105">
            <Image
              src="/6D2A1901.JPG?height=160&width=160"
              alt="Abdalaziz Shita"
              fill
              className="object-cover group-hover:scale-110 transition-all duration-500"
              priority
            />
          </div>

          <div className="space-y-4 mb-8">
            <h1 className="text-4xl md:text-6xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
              Abdalaziz  Shita
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground">Petroleum Engineer* & Programmer</p>
            <div className="flex flex-wrap justify-center gap-2 mt-4">
              <Badge
                variant="secondary"
                className="text-sm py-1.5 px-3 rounded-full animate-fade-in"
                style={{ animationDelay: "0.1s" }}
              >
                Early Production Facility (EPF)*
              </Badge>
              <Badge
                variant="secondary"
                className="text-sm py-1.5 px-3 rounded-full animate-fade-in"
                style={{ animationDelay: "0.2s" }}
              >
                Well Testing Analysis
              </Badge>
              <Badge
                variant="secondary"
                className="text-sm py-1.5 px-3 rounded-full animate-fade-in"
                style={{ animationDelay: "0.3s" }}
              >
                Programming & Research
              </Badge>
              <Badge
                variant="secondary"
                className="text-sm py-1.5 px-3 rounded-full animate-fade-in"
                style={{ animationDelay: "0.4s" }}
              >
                Artfchalintelligence Ai
              </Badge>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="group rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
            >
              <Link href="/projects">
                View My Projects
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-full transition-all duration-300 hover:shadow-lg"
            >
              <Link href="/contact">Contact Me</Link>
            </Button>
          </div>

          <div className="mt-16 animate-bounce">
            <Link href="#about" className="text-muted-foreground hover:text-primary transition-colors">
              <ChevronDown className="h-8 w-8 mx-auto" />
              <span className="sr-only">Scroll down</span>
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section id="about" className="py-20 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center mb-12">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary mb-4">About Me</div>
            <h2 className="text-3xl md:text-4xl font-bold text-center">Who I Am</h2>
          </div>

          <div className="max-w-3xl mx-auto bg-card rounded-xl shadow-lg p-8 border border-border/50 hover:shadow-xl transition-all duration-300">
            <p className="text-lg leading-relaxed mb-6">
              I currently work as a Production Engineer at an EPF station and aspire to join an innovative team where I can further develop my expertise in the oil and gas sector. I am passionate about contributing to impactful projects and driving success in the industry.
            </p>
            <div className="flex justify-center">
              <Button asChild variant="ghost" className="group text-primary">
                <Link href="/about">
                  Learn More About Me
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section with interactive cards */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center mb-12">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary mb-4">Expertise</div>
            <h2 className="text-3xl md:text-4xl font-bold text-center">Key Skills</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                title: "Technical Skills",
                icon: "💻",
                items: [
                  "PIPESIM (Practical experience)",
                  "KAPPA Saphir (Practical experience)",
                  "PROSPER (Training in Mellita company)",
                  "Python & C++ Programming",
                  "Microsoft Office Suite",
                ],
              },
              {
                title: "Engineering Skills",
                icon: "🔧",
                items: [
                  "Well Test Analysis",
                  "Reservoir Engineering",
                  "Production Engineering",
                  "Analytical Skills",
                  "Research & Problem Solving",
                ],
              },
              {
                title: "Soft Skills",
                icon: "🤝",
                items: [
                  "Team Leadership",
                  "Project Management",
                  "Excellent Communication",
                  "Teamwork",
                  "AI Tools & Research Methods",
                ],
              },
            ].map((skillGroup, index) => (
              <Card
                key={index}
                className="group overflow-hidden border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
              >
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">{skillGroup.icon}</div>
                  <h3 className="text-xl font-semibold mb-4 group-hover:text-primary transition-colors">
                    {skillGroup.title}
                  </h3>
                  <ul className="space-y-2">
                    {skillGroup.items.map((skill, idx) => (
                      <li key={idx} className="flex items-center group/item">
                        <div className="w-2 h-2 bg-primary rounded-full mr-2 group-hover/item:scale-125 transition-transform"></div>
                        <span className="group-hover/item:translate-x-1 transition-transform">{skill}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects with hover effects */}
      <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center mb-12">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary mb-4">Portfolio</div>
            <h2 className="text-3xl md:text-4xl font-bold text-center">Featured Projects</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                id: "well-test-analysis",
                title: "Well Test Analysis Tool",
                description:
                  "This tool performs well test analysis using Horner plots and Derivative plots to help petroleum engineers analyze pressure buildup tests.",
                image: "/horner_plot.png?height=200&width=400&text=Well+Test+Analysis+Tool",
                tech: ["Python", "NumPy", "Matplotlib"],
              },
              {
                id: "oil-fvf-calculator",
                title: "Oil Formation Volume Factor Calculator",
                description:
                  "A GUI application to calculate the Oil Formation Volume Factor (FVF) based on various equations and input parameters.",
                image: "/result_plot.png?height=200&width=400&text=Oil+FVF+Calculator",
                tech: ["Python", "Tkinter", "NumPy"],
              },
            ].map((project, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl border border-border/50 bg-card hover:shadow-xl transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>

                <div className="relative h-56 w-full overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                <div className="p-6 relative z-20">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 line-clamp-2">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, idx) => (
                      <Badge key={idx} variant="outline" className="bg-background/80 backdrop-blur-sm">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="rounded-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                  >
                    <Link href={`/projects/${project.id}`}>View Details</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-10">
            <Button asChild variant="ghost" className="group text-primary">
              <Link href="/projects">
                View All Projects
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Research Section with animated cards */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center mb-12">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary mb-4">
              Academic Work
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-center">Research</h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="relative overflow-hidden rounded-xl border border-border/50 bg-card p-6 hover:shadow-xl transition-all duration-300 group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"></div>

              <h3 className="text-xl font-semibold mb-4 relative z-10">Publication Research Paper</h3>
              <p className="text-lg mb-6 relative z-10">
                "Estimate the productivity index for some of Libyan wells using Prosper and kappa Saphir software"
              </p>

              <div className="flex justify-center relative z-10">
                <Button asChild className="rounded-full group/btn">
                  <Link href="/research">
                    View Research Details
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA with gradient background */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-primary to-primary/90"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.2)_0%,transparent_50%)]"></div>
          <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.2)_0%,transparent_50%)]"></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary-foreground">Let's Connect</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-primary-foreground/90">
            I'm currently looking for opportunities in the oil and gas sector. Feel free to reach out if you'd like to
            discuss potential collaborations or opportunities.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="rounded-full hover:shadow-lg hover:shadow-background/20 transition-all"
            >
              <Link href="/contact">Contact Me</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full bg-transparent border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 hover:shadow-lg transition-all"
            >
              <a href="/cv.pdf" target="_blank" rel="noopener noreferrer">
                <FileText className="mr-2 h-5 w-5" />
                Download CV
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Social proof section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-center space-x-8 md:space-x-16">
            <a
              href="https://github.com/AbdalazizAH"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="h-8 w-8" />
            </a>
            <a
              href="https://www.linkedin.com/in/abdalaziz-ah-a714b42a0/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="h-8 w-8" />
            </a>
            <a
              href="mailto:abdalazizly97@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="h-8 w-8" />
            </a>
            <a href="tel:+218928382999" className="text-muted-foreground hover:text-primary transition-colors">
              <Phone className="h-8 w-8" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground mb-4 md:mb-0">
              © {new Date().getFullYear()} Abdalaziz Shita. All rights reserved.
            </p>
            <div className="flex items-center space-x-2">
              <MapPin className="h-4 w-4 text-muted-foreground" />
              <span className="text-muted-foreground">Libya, Tripoli</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

