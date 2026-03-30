"use client"

import { motion } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const skillCategories = [
  {
    id: "programming",
    name: "Programming",
    skills: [
      { name: "Java (8+)", level: 90 },
      { name: "C/C++", level: 60 },
      { name: "JavaScript", level: 75 },
      { name: "TypeScript", level: 65 },
    ],
  },
  {
    id: "web",
    name: "Web Technologies",
    skills: [
      { name: "REST APIs", level: 90 },
      { name: "Node.js", level: 85 },
      { name: "HTML", level: 90 },
      { name: "CSS", level: 90 },
      { name: "React.js", level: 80 },
    ],
  },
  {
    id: "tools",
    name: "Tools, Frameworks & Cloud",
    skills: [
      { name: "Spring Boot", level: 90 },
      { name: "Spring Batch", level: 90 },
      { name: "Microservices", level: 85 },
      { name: "AWS (S3, EC2, ECS Fargate, Lambda)", level: 75 },
      { name: "Git/GitHub", level: 90 },
      { name: "Maven", level: 65 },
      { name: "Postman", level: 90 },
    ],
  },
  {
    id: "database",
    name: "Databases",
    skills: [
      { name: "MongoDB", level: 90 },
      { name: "MySQL", level: 80 },
      { name: "PostgreSQL", level: 70 },
    ],
  },
  {
    id: "other",
    name: "Other Skills",
    skills: [
      { name: "Multithreading", level: 85 },
      { name: "Object-Oriented Programming (OOP)", level: 90 },
      { name: "Data Structures", level: 90 },
      { name: "Algorithms", level: 90 },
      { name: "Computer Networks", level: 85 },
      { name: "Operating Systems", level: 90 },
      { name: "Database Management", level: 85 },
    ],
  },
];

export default function Skills() {
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
    <section id="skills" ref={sectionRef} className="py-20">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">Skills</h2>
          <p className="section-subtitle">My technical expertise and proficiency in various technologies</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12"
        >
          <Card>
            <CardContent className="pt-6">
              <Tabs defaultValue="programming" className="w-full">
                <TabsList className="grid grid-cols-2 md:grid-cols-5 mb-8">
                  {skillCategories.map((category) => (
                    <TabsTrigger key={category.id} value={category.id}>
                      {category.name}
                    </TabsTrigger>
                  ))}
                </TabsList>

                {skillCategories.map((category) => (
                  <TabsContent key={category.id} value={category.id}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {category.skills.map((skill, index) => (
                        <div key={index} className="space-y-2">
                          <div className="flex justify-between">
                            <span className="font-medium">{skill.name}</span>
                            <span className="text-muted-foreground">{skill.level}%</span>
                          </div>
                          <div className="h-2 bg-muted rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={isVisible ? { width: `${skill.level}%` } : { width: 0 }}
                              transition={{ duration: 1, delay: 0.1 * index }}
                              className="h-full bg-primary"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </TabsContent>
                ))}
              </Tabs>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
