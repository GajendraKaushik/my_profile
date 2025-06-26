import { motion } from "framer-motion";
import React from 'react'


const Profile = () => {
  const socialLink = [
    {
      icon: 'Github',
      link: 'https://github.com/GajendraKaushik',
      title: 'Github'
    },
    {
      icon: 'Linkdin',
      link: 'https://www.linkedin.com/in/gaj3/',
      title: 'Linkdin'
    },
    {
      icon: 'Mail',
      link: 'mailto:gajendrakaushik128@gmail.com',
      title: 'Mail'
    },
    {
      icon: 'TUF',
      link: '/',
      title: 'TUF'
    },
  ];
  return (
    <div>
      <div className='absolute inset-0 bg-gradient-to-b from-gray-900 to gray-950'>
        <div className='absolute inset-0 bg-[radial-gradient(ellipse_at_center, _var(--tw-gradient-stop))] from-purple-900/20 via-transparent to-transparent' />
        <section
          id='about'
          className='min-h-screen flex items-center relative overflow-hidden'
        >
          <div className='container mx-auto px-6 py-16'>
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

              </motion.div>

            </div>
          </div>

        </section>
      </div>
    </div>
  )
}

export default Profile;