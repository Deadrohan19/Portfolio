'use client'

import { motion } from "framer-motion"
import { GraduationCap, School, Calendar, Award } from 'lucide-react'

const educationData = [
  {
    institution: "Chandigarh University",
    degree: "Bachelor of Engineering",
    specialization: "Computer Science",
    period: "2021 - Present",
    grade: "CGPA: 8.09",
    icon: GraduationCap
  },
  {
    institution: "Modern Public School",
    degree: "Senior Secondary",
    specialization: "XIIth",
    period: "2019 - 2021",
    grade: "85.6%",
    icon: School
  },
  {
    institution: "Modern Public School",
    degree: "Matriculation",
    specialization: "Xth",
    period: "2018 - 2019",
    grade: "92.8%",
    icon: School
  }
]

export default function Education() {
  return (
    <section id="education" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Education</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My academic journey and achievements
          </p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">

          {/* Connection Lines */}
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-primary/20 via-primary to-primary/20" />

          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8">
            {educationData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative"
              >
                <div className="bg-card rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-border relative z-10">
                  {/* Icon Circle */}
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2">
                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shadow-lg">
                      <item.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                  </div>

                  <div className="mt-6 text-center">
                    <h3 className="font-bold text-lg mb-2">{item.institution}</h3>
                    <p className="text-primary font-medium">{item.degree}</p>
                    <p className="text-sm text-muted-foreground">{item.specialization}</p>
                    
                    <div className="mt-4 pt-4 border-t border-border">
                      <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-2">
                        <Calendar className="w-4 h-4" />
                        <span>{item.period}</span>
                      </div>
                      <div className="flex items-center justify-center gap-2 text-sm font-medium">
                        <Award className="w-4 h-4 text-primary" />
                        <span>{item.grade}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

