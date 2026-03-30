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
            Software Engineer with 5+ years of experience building scalable
            backend systems using Java, Spring Boot, and Microservices. I
            specialize in designing cloud-native solutions on AWS, optimizing
            performance, and developing efficient APIs and batch processing
            systems.
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
                    Master of Computer Applications (Dual Degree), Gitarattan
                    International Business School, Delhi (affiliated with
                    GGSIPU), 2015-2020.
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
                    SDE-II at Omnifi AI Technology, previously worked at
                    Arthmate Technology and Tata Consultancy Services, with
                    experience in building scalable backend systems,
                    microservices, and AWS-based cloud solutions.
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
                    Skilled in Java, Spring Boot, and Microservices, with
                    experience in JavaScript, Node.js, and databases like MySQL,
                    MongoDB, and PostgreSQL, along with hands-on experience in
                    AWS services including S3, EC2, ECS Fargate, and Lambda.
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
            I'm a Software Engineer with 5+ years of experience in Java and
            Spring Boot, focused on building scalable backend systems and
            microservices. I have hands-on experience with AWS services like S3,
            EC2, ECS Fargate, and Lambda for developing cloud-native and
            event-driven applications.
            <br /> I specialize in REST API development, Spring Batch for
            large-scale data processing, and database optimization using MongoDB
            and MySQL. I also work with tools like Git, Maven, and Postman to
            build efficient, reliable, and production-ready systems.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
