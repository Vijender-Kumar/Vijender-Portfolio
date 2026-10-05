"use client"

import { motion } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Briefcase, Code } from "lucide-react"

export default function About() {
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

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.5,
      },
    }),
  }

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-muted/30">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            Software Development Engineer III with 6+ years of experience 
            specializing in Java, Spring Boot, Microservices, and scalable 
            backend systems. I focus on designing distributed and cloud-native 
            architectures, developing high-performance APIs, optimizing batch 
            processing workflows, and building reliable production systems on AWS.
            <br/>  <br />
            I have hands-on experience with AWS ECS Fargate, EC2, S3, Lambda, 
            Spring Batch, MongoDB, MySQL, PostgreSQL, and REST APIs. I have also 
            worked on financial technology systems including co-lending, 
            LOS/LMS platforms, payment integrations, and automated processing workflows.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <motion.div
            custom={0}
            variants={cardVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
          >
            <Card className="h-full">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="p-3 bg-primary/10 rounded-full mb-4">
                    <GraduationCap className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Education</h3>
                  <p className="text-muted-foreground">
                    Master of Computer Applications (Dual Degree)<br />
                    Gitarattan International Business School, Delhi (affiliated with
                    Guru Gobind Singh Indraprastha University (GGSIPU))
                    Aug 2015 - Sep 2020<br />
                    86.9%
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            custom={1}
            variants={cardVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
          >
            <Card className="h-full">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="p-3 bg-primary/10 rounded-full mb-4">
                    <Briefcase className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Experience</h3>
                  <p className="text-muted-foreground">
                    Software Development Engineer III with 6+ years of experience 
                    specializing in Java, Spring Boot, Microservices, and scalable 
                    backend systems. I focus on designing distributed and cloud-native 
                    architectures, developing high-performance APIs, optimizing batch 
                    processing workflows, and building reliable production systems on AWS.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            custom={2}
            variants={cardVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
          >
            <Card className="h-full">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="p-3 bg-primary/10 rounded-full mb-4">
                    <Code className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Skills</h3>
                  <p className="text-muted-foreground">
                    Java, JavaScript, Node.js, Spring Boot, Spring Batch,
                    Microservices, REST APIs, MySQL, MongoDB, PostgreSQL, 
                    AWS ECS Fargate, EC2, S3, Lambda, Git, Maven, and Postman.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-12 bg-card p-6 rounded-lg shadow-sm"
        >
          <p className="text-lg leading-relaxed">
            I'm a Software Development Engineer III with 6+ years of experience 
            in Java and Spring Boot, focused on building scalable backend systems, 
            microservices, and distributed architectures. I have hands-on experience 
            designing cloud-native and event-driven solutions using AWS services 
            such as ECS Fargate, EC2, S3, and Lambda.
            <br /><br /> I specialize in REST API development, Spring Batch processing, 
            database optimization, third-party integrations, and production reliability. 
            I focus on building efficient, scalable, secure, and maintainable 
            backend systems.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
