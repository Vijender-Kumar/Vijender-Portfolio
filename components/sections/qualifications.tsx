"use client"

import { motion } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { GraduationCap, Award } from "lucide-react"

const education = [
  {
    degree: "Master of Computer Applications (Dual Degree)",
    institution: "Guru Gobind Singh Indraprastha University(GGSIPU), Dwarka",
    period: "2015-2020",
    description: "Completed Master of Computer Applications (Dual Degree).",
  },
]

const achievements = [
  {
    title: "AZ-303: Microsoft Azure Architect Technologies ",
    organization: "Microsoft",
    year: "Mar 2021",
    description:
      "Completed AZ-303: Microsoft Azure Architect Technologies Certification",
  },
  {
    title: "Microsoft Certified: Azure Fundamentals ",
    organization: "Microsoft",
    year: "Oct 2020",
    description: "Completed AZ-900: Microsoft Certified: Azure Fundamentals Certification",
  },
];

export default function Qualifications() {
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
    <section id="qualifications" ref={sectionRef} className="py-20 bg-muted/30">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">Qualifications</h2>
          <p className="section-subtitle">My educational background and notable achievements</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12"
        >
          <Card>
            <CardContent className="pt-6">
              <Tabs defaultValue="education" className="w-full">
                <TabsList className="grid grid-cols-2 mb-8">
                  <TabsTrigger value="education" className="flex items-center gap-2">
                    <GraduationCap className="h-4 w-4" />
                    Education
                  </TabsTrigger>
                  <TabsTrigger value="achievements" className="flex items-center gap-2">
                    <Award className="h-4 w-4" />
                    Achievements
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="education">
                  <div className="space-y-8">
                    {education.map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ duration: 0.5, delay: 0.1 * index }}
                        className="relative pl-8 before:absolute before:left-0 before:top-0 before:h-full before:w-0.5 before:bg-primary"
                      >
                        <div className="absolute left-0 top-0 h-4 w-4 -translate-x-1.5 rounded-full bg-primary" />
                        <h3 className="text-xl font-semibold">{item.degree}</h3>
                        <p className="text-muted-foreground">{item.institution}</p>
                        <p className="text-sm text-muted-foreground mt-1">{item.period}</p>
                        <p className="mt-2">{item.description}</p>
                      </motion.div>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="achievements">
                  <div className="space-y-8">
                    {achievements.map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ duration: 0.5, delay: 0.1 * index }}
                        className="relative pl-8 before:absolute before:left-0 before:top-0 before:h-full before:w-0.5 before:bg-primary"
                      >
                        <div className="absolute left-0 top-0 h-4 w-4 -translate-x-1.5 rounded-full bg-primary" />
                        <h3 className="text-xl font-semibold">{item.title}</h3>
                        <p className="text-muted-foreground">{item.organization}</p>
                        <p className="text-sm text-muted-foreground mt-1">{item.year}</p>
                        <p className="mt-2">{item.description}</p>
                      </motion.div>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
