import { useState } from 'react'
import './App.css';
import Navbar from './components/NavBar/Navbar';
import Profile from './components/Profile/Profile';
import Experience from './components/Experience';
import SkillSection from './components/Skill/SkillSection';

function App() {

  return (
    <>
      <div className='min-h-screen bg-gradient-to-b from gray-900 to-gray-950 text-white'>
        <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent">
          <Navbar />
          <main>
            <Profile />
            <Experience />
            <section id='skills'>
              <SkillSection />
            </section>
          </main>
        </div>
      </div>
    </>
  )
}

export default App;
