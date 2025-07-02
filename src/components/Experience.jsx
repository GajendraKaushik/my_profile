import React from 'react'

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

        </section>
    )
}

export default Experience 
