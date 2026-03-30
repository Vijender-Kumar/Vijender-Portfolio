"use client"

import { motion } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const experiences = [
  {
    title: "Software Development Engineer II",
    company: "Omnifi AI Technology Private Limited",
    location: "Gurugram, IN",
    period: "Aug 2023 - Present",
    description: [
      "Led migration from EC2-based cron jobs to AWS ECS Fargate, redesigning to an event-driven, on-demand architecture, reducing infrastructure costs by 35% and improving scalability and fault isolation.",
      "Enhanced co-lending and LOS/LMS systems using Spring Boot & Spring Batch for clients like SaveIn, ShopKirana, Cashfree, Finsall & PayNearby.",
      "Optimized Spring Batch workflows for bulk document processing, achieving a 40% increase in processing speed.",
      "Built automated email workflows using AWS Lambda, S3 & EC2, reducing missed payments by 30% and boosting user engagement by 20%.",
      "Developed scalable backend services and improved deployment efficiency by 40% using AWS CodeCommit.",
      "Improved system reliability and observability by enhancing logging, error handling, and retry mechanisms, reducing production incidents and recovery time.",
    ],
    skills: [
      "Java",
      "Spring Boot",
      "Spring Batch",
      "Microservices",
      "AWS (EC2, ECS Fargate, Lambda, S3)",
      "MySQL",
      "MongoDB",
      "PostgreSQL",
      "REST APIs",
      "Git",
    ],
  },
  {
    title: "Software Development Engineer I",
    company: "Arthmatetech Private Limited",
    location: "Gurugram, IN",
    period: "May 2022 - Jul 2023",
    description: [
      "Integrated third-party APIs, improving data exchange efficiency by 30% and increasing data accuracy by 40%.",
      "Optimized MongoDB queries and indexing, improving performance by 25% and reducing latency.",
      "Implemented API security best practices, reducing vulnerabilities by 50% across services.",
      "Created and maintained API documentation, reducing onboarding time and support queries by 25%.",
      "Built and maintained detailed API documentation, improving onboarding efficiency and cutting support requests by 25%.",
    ],
    skills: [
      "Java",
      "Spring Boot",
      "MongoDB",
      "MySQL",
      "REST APIs",
      "API Security",
      "Postman",
    ],
  },
  {
    title: "Assistant System Engineer",
    company: "Tata Consultancy Services",
    location: "Gurugram, IN",
    period: "Aug 2020 - May 2022",
    description: [
      "Led Gradle migration, improving build efficiency and standardization across applications.",
      "Managed secure file transfers via SAG WebMethods portal, ensuring high data integrity and compliance.",
      "Enforced secure coding practices and data confidentiality, minimizing risk exposure.",
    ],
    skills: [
      "Java",
      "Gradle",
      "Secure File Transfer",
      "WebMethods",
      "Software Development",
    ],
  },
];

export default function Experience() {
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
    <section id="experience" ref={sectionRef} className="py-20">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">Work Experience</h2>
          <p className="section-subtitle">My professional journey and the companies I&apos;ve worked with</p>
        </motion.div>

        <div className="mt-12 space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <Card>
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
                    <div>
                      <CardTitle>{exp.title}</CardTitle>
                      <CardDescription className="mt-1">
                        {exp.company} | {exp.location}
                      </CardDescription>
                    </div>
                    <Badge variant="outline" className="w-fit">
                      {exp.period}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-4">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <span className="mr-2 text-primary">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {exp.skills.map((skill, i) => (
                      <Badge key={i} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
