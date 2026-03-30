"use client"

import { motion } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink } from "lucide-react"
import Image from "next/image"

const projects = [
  {
    title: "Workflow Model",
    description:
      "Developed a UI for workflow creation, user sign-up, sign-in, and management with dropdowns and conditions. Visualized JSON data and implemented a dynamic workflow tree with color-coded nodes based on data accuracy.",
    image: "./workflowModel.png?height=300&width=600",
    technologies: ["SQL", "Spring Boot", "Java", "React.js", "CSS"],
    github: "https://github.com/meghna-kaushik/Workflow-systems",
    period: "July 2024 - August 2024",
  },
  {
    title: "Chat Application",
    description:
      "Developed a mobile app facilitating user registration, sign-in, and participation in real-time chat functionalities. This application ensures secure storage of data and messages featuring timestamps to signify their sending times.",
    image: "./chatApplication.jpeg?height=300&width=600",
    technologies: ["Dart", "Flutter", "Firebase Authentication", "Firebase Firestore"],
    github: "https://github.com/meghna-kaushik/chat_application",
    period: "Jan 2023 - Feb 2023",
  },
  {
    title: "Face Recognition",
    description:
      "Developed a robust attendance tracking system that accurately detects and identifies individuals from video feeds.",
    image: "./FaceRecognization.jpeg?height=300&width=600",
    technologies: ["Python", "OpenCV"],
    github: "https://github.com/meghna-kaushik/Microsoft_face_reco_project",
    period: "May 2022 - June 2022",
  },
]

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <section id="projects" ref={sectionRef} className="py-20 bg-muted/30">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">Projects</h2>
          <p className="section-subtitle">A showcase of my technical skills and creative problem-solving</p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <Card className="h-full flex flex-col overflow-hidden group">
                <div className="relative overflow-hidden h-48">
                  <Image
                    src={project.image || "./placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle>{project.title}</CardTitle>
                    <Badge variant="outline">{project.period}</Badge>
                  </div>
                  <CardDescription className="line-clamp-2">{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <Badge key={i} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="border-t pt-4">
                  <div className="flex justify-between w-full">
                    <Button variant="outline" size="sm" className="gap-1" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github size={16} />
                        Code
                      </a>
                    </Button>
                    {/* <Button variant="outline" size="sm" className="gap-1" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <ExternalLink size={16} />
                        Demo
                      </a>
                    </Button> */}
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
