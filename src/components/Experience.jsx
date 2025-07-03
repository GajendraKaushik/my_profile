import React from 'react'
import { motion } from "framer-motion";

const Experience = () => {
    const experiences = [
        {
            role: "Software Engineer",
            company: "Humanetics India.",
            url: "https://www.humaneticsgroup.com/",
            location: "Bengaluru, India",
            type: "Full-time",
            skills: ["Python", "Tyepscript", "CI/CD", "AWS", "PostgreSQL", "Terraform", "AI"],
            current: true,
        },
        {
            role: "Graduate Engineer",
            company: "Cisco Systems.",
            url: "https://www.cisco.com/",
            location: "Bengaluru, India",
            type: "Full-time",
            skills: ["Python", "Javascript", "CI/CD", "AWS", "Terraform", "Git"]
        }
    ]
    return (
        <section className="py-8 md:py-16 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-gray-950">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent" />
            </div>
            <div className="container mx-auto px-4 max-w-6xl relative">
            <motion.div
            initial={{opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-20"
            >
            <div className='inline-flex items-center justify-center p-1 rounded-full bg-purple-500/10 mb-4 md:mb-6'>
            <span className="px-3 md:px-4 py-1 text-sm font-medium text-purple-400 rounded-full">
             Career Journey
            </span>   
            </div>
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                Professional Timeline
            </h2>
            </motion.div>

            <div className='relative'>
               <div className='absolute left-6 md:left-1/2 top-0 h-full w-px bg-gradient-to-b from-purple-500/50 via-purple-400/30 to-transparent'>

               </div>
            </div>
            </div>

        </section>
    )
}

export default Experience 
