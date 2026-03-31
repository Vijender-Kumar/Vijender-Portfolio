"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    title: "TMTC Travel Itinerary",
    description:
      "TMTC Travel Itinerary is a RESTful backend service built with Node.js, Express, and MongoDB that enables users to create, manage, and share travel itineraries. It provides APIs for handling trip details, destinations, schedules, and user-specific plans, with Docker support for easy deployment and scalability.",
    image: "./tmtc-travel-itinerary.png?height=300&width=600",
    technologies: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "RESTful APIs",
      "Docker",
      "JWT Authentication",
    ],
    github: "https://github.com/Vijender-Kumar/tmtc-travel-itinerary",
    period: "November 2025 - January 2026",
  },
  {
    title: "Travex AI Java",
    description:
      "Travex AI is a Java-based application that leverages AI capabilities to process and generate intelligent outputs from travel-related data or documents. It integrates tools like MongoDB for data storage and Aspose Java API for document handling, enabling features such as automated document parsing, data extraction, and smart content generation. The project demonstrates how AI can be used to streamline travel workflows and enhance data-driven decision-making in backend systems.",
    image: "./travex-ai-java.png?height=250&width=500",
    technologies: [
      "Java",
      "Spring Boot",
      "MongoDB",
      "REST APIs",
      "Aspose Java API",
    ],
    github: "https://github.com/Vijender-Kumar/Travex-ai-java",
    period: "Jun 2025 - August 2025",
  },
  {
    title: "Travex AI",
    description:
      "Travex AI is a backend-focused application that utilizes AI-driven logic to process and analyze travel-related data. It integrates MongoDB for efficient data storage and supports document processing capabilities, enabling automated extraction, transformation, and intelligent handling of travel information to streamline itinerary and travel data workflows.",
    image: "./travex-ai-midjourney.png?height=300&width=600",
    technologies: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "RESTful APIs",
      "AI Integration",
      "MidJourney AI",
    ],
    github: "https://github.com/Vijender-Kumar/Travex-ai",
    period: "Jun 2025 - August 2025",
  },
  {
    title: "Login Registration Java",
    description:
      "Login & Registration System is a Java-based backend application that provides secure user authentication and authorization features. It supports user registration, login, and basic validation workflows, demonstrating core concepts like REST APIs, data persistence, and structured user management for scalable applications with proper Exception Handling.",
    image: "./login-registration-java.png?height=300&width=600",
    technologies: [
      "Java",
      "Spring Boot",
      "Spring Security",
      "RESTful APIs",
      "Hibernate / JPA",
      "MySQL",
      "JWT Authentication",
      "Exception Handling",
      "Validation",
    ],
    github: "https://github.com/Vijender-Kumar/LoginRegistrationJava",
    period: "November 2024 - December 2024",
  },
];

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="py-20 bg-muted/30">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">Projects</h2>
          <p className="section-subtitle">
            A showcase of my technical skills and creative problem-solving
          </p>
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
                  <CardDescription className="line-clamp-2">
                    {project.description}
                  </CardDescription>
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
                    <Button
                      variant="outline"
                      size="sm"
                      className="gap-1"
                      asChild
                    >
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
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
  );
}
