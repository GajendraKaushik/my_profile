import { motion } from "framer-motion";
import { FileDown } from "lucide-react";
import { LuGithub, LuLinkedin, LuMail, LuCode } from "react-icons/lu";
import React from 'react'

const IconMap = {
  github: LuGithub,
  linkedin: LuLinkedin,
  mail: LuMail,
  code: LuCode
}

const Profile = () => {
  const socialLink = [
    {
      icon: 'github',
      link: 'https://github.com/GajendraKaushik',
      title: 'Github'
    },
    {
      icon: 'linkedin',
      link: 'https://www.linkedin.com/in/gaj3/',
      title: 'Linkdin'
    },
    {
      icon: 'mail',
      link: 'mailto:gajendrakaushik128@gmail.com',
      title: 'Mail'
    },
    {
      icon: 'code',
      link: '/',
      title: 'TUF'
    },
  ];
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-gray-950">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent" />
        <section
          id='about'
          className='min-h-screen flex items-center relative overflow-hidden'
        >
          <div className='container mx-auto px-6 py-16 mt-20'>
            <div className='flex flex-col md:flex-row items-center gap-16'>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex-1 space-y-8"
              >
                <div className='space-y-4'>
                  <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="inline-block px-4 py-2 bg-purple-500/10 text-purple-400 rounded-full text-sm font-medium"
                  >
                    Hi, I&apos;m
                  </motion.span>
                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-7xl font-bold"
                  >
                    <span className="block">Gajendra</span>
                    <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
                      Kumar Kaushik
                    </span>
                  </motion.h1>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-xl text-gray-400 leading-relaxed"
                  >
                    Software Engineer with 2 of experience building
                    scalable, high-performance systems. Passionate about blending
                    intuitive front-end design with robust back-end functionality.
                  </motion.p>
                </div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex gap-6"
                >
                  <a
                    href="/"
                    download
                    className="flex items-center gap-2 px-6 py-3 bg-purple-500 rounded-lg hover:bg-purple-600 transition-colors"
                  >
                    <FileDown size={20} />
                    Resume
                  </a>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex gap-6"
                >
                  {socialLink.map((Social, index) => {

                    const IconComponent = IconMap[Social.icon];
                    return (
                      <motion.a
                        key={index}
                        href={Social.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-full bg-white/5 hover:bg-white/10 transition-all hover:scal-110"
                        whileHover={{ y: -2 }}
                        title={Social.title}
                      >
                        <IconComponent size={24} />
                      </motion.a>
                    )
                  })}
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                className="relative w-96 h-96 hidden md:block"
              >
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 blur-3xl opacity-100 filter-none">
                  <img
                    src="https://github.com/GajendraKaushik/certificates_and_achievements/raw/main/Images/black.jpeg"
                    alt="Profile"
                    className="rounded-full object-cover border-4 border-purple-500/20"
                    draggable='false'
                  />
                </div>

              </motion.div>
            </div>
          </div>

        </section>
      </div>
    </div>
  )
}

export default Profile;