"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { Github, Linkedin, Mail, MapPin, Phone, FileText, Send, CheckCircle, AlertCircle } from "lucide-react"
import { motion } from "framer-motion"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitError("")

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // Reset form and show success message
      setFormData({ name: "", email: "", subject: "", message: "" })
      setSubmitSuccess(true)

      // Hide success message after 5 seconds
      setTimeout(() => setSubmitSuccess(false), 5000)
    } catch (error) {
      setSubmitError("An error occurred while sending your message. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
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
      <motion.h1
        className="text-4xl font-bold mb-2 text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Contact Me
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
        I'm currently looking for opportunities in the oil and gas sector. Feel free to reach out if you'd like to
        discuss potential collaborations.
      </motion.p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Contact Information */}
        <motion.div className="lg:col-span-1" variants={itemVariants} initial="hidden" animate="visible">
          <Card className="h-full border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-xl overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary/5 rounded-full -ml-16 -mb-16"></div>

            <CardContent className="p-6 relative z-10">
              <h2 className="text-2xl font-semibold mb-6 text-primary">Contact Information</h2>
              <div className="space-y-6">
                <motion.div
                  className="flex items-start group"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4 group-hover:bg-primary/20 transition-colors">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <a
                      href="mailto:abdalazizly97@gmail.com"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      abdalazizly97@gmail.com
                    </a>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-start group"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4 group-hover:bg-primary/20 transition-colors">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">Phone</h3>
                    <a href="tel:+218928382999" className="text-muted-foreground hover:text-primary transition-colors">
                      +(218) 928382999
                    </a>
                    <p className="text-muted-foreground">
                      WhatsApp:{" "}
                      <a href="https://wa.me/218910362309" className="hover:text-primary transition-colors">
                        +(218) 910362309
                      </a>
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-start group"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4 group-hover:bg-primary/20 transition-colors">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">Location</h3>
                    <p className="text-muted-foreground">Libya, Tripoli</p>
                  </div>
                </motion.div>

                <div className="pt-6 border-t mt-8">
                  <h3 className="font-medium mb-4">Connect with me:</h3>
                  <div className="flex space-x-3">
                    <motion.div whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                      <Button
                        asChild
                        variant="outline"
                        size="icon"
                        className="rounded-full w-10 h-10 hover:bg-primary/10 hover:text-primary transition-all"
                      >
                        <a href="https://github.com/AbdalazizAH" target="_blank" rel="noopener noreferrer">
                          <Github className="h-5 w-5" />
                          <span className="sr-only">GitHub</span>
                        </a>
                      </Button>
                    </motion.div>

                    <motion.div whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                      <Button
                        asChild
                        variant="outline"
                        size="icon"
                        className="rounded-full w-10 h-10 hover:bg-primary/10 hover:text-primary transition-all"
                      >
                        <a
                          href="https://www.linkedin.com/in/abdalaziz-ah-a714b42a0/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Linkedin className="h-5 w-5" />
                          <span className="sr-only">LinkedIn</span>
                        </a>
                      </Button>
                    </motion.div>

                    <motion.div whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                      <Button
                        asChild
                        variant="outline"
                        size="icon"
                        className="rounded-full w-10 h-10 hover:bg-primary/10 hover:text-primary transition-all"
                      >
                        <a href="/cv.pdf" target="_blank" rel="noopener noreferrer">
                          <FileText className="h-5 w-5" />
                          <span className="sr-only">CV</span>
                        </a>
                      </Button>
                    </motion.div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          className="lg:col-span-2"
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2 }}
        >
          <Card className="border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-xl overflow-hidden">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-2 text-primary">Send Me a Message</h2>
              <p className="text-muted-foreground mb-6">
                Fill out the form below and I'll get back to you as soon as possible.
              </p>

              {submitSuccess && (
                <motion.div
                  className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 p-4 rounded-lg mb-6 flex items-center"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <CheckCircle className="h-5 w-5 mr-2 flex-shrink-0" />
                  <p>Your message has been sent successfully! I'll get back to you soon.</p>
                </motion.div>
              )}

              {submitError && (
                <motion.div
                  className="bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300 p-4 rounded-lg mb-6 flex items-center"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <AlertCircle className="h-5 w-5 mr-2 flex-shrink-0" />
                  <p>{submitError}</p>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-sm font-medium">
                      Name
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Enter your name"
                      className="rounded-lg border-border/50 focus:border-primary/50 transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-medium">
                      Email
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="Enter your email"
                      className="rounded-lg border-border/50 focus:border-primary/50 transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-sm font-medium">
                    Subject
                  </Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="Subject of your message"
                    className="rounded-lg border-border/50 focus:border-primary/50 transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-sm font-medium">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Write your message here..."
                    rows={6}
                    className="rounded-lg border-border/50 focus:border-primary/50 transition-all resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full rounded-full group hover:shadow-lg transition-all duration-300"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <div className="flex items-center">
                      <svg
                        className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Sending...
                    </div>
                  ) : (
                    <div className="flex items-center">
                      <Send className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      Send Message
                    </div>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Map or additional info section */}
      <motion.div
        className="mt-16 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <h2 className="text-2xl font-semibold mb-6">Looking Forward to Hearing from You</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Whether you have a question about my projects, research, or want to discuss potential opportunities in the
          petroleum engineering field, I'm here to help. I'll get back to you as soon as possible.
        </p>
      </motion.div>
    </div>
  )
}

