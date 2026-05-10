import { useState } from 'react'
import './App.css';
import Navbar from './components/NavBar/Navbar';
import Profile from './components/Profile/Profile';
import Experience from './components/Experience';
import SkillSection from './components/Skill/SkillSection';
import ProjectSection from './components/Projects/ProjectSection.jsx';
import { useViewer } from './context/ViewerContext.jsx';

function App() {
  const { ready } = useViewer();

  if (!ready) {
    return <div className="min-h-screen" style={{ background: 'var(--bg)' }} />;
  }

  return (
    <>
      <div className='min-h-screen bg-gradient-to-b from gray-900 to-gray-950 text-white' style={{ background: 'var(--bg)' }}>
        <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent">
          <Navbar />
          <main>
            <Profile />
            <Experience />
            <section id='skills'>
              <SkillSection />
            </section>
            <section id="projects" className="pb-24">
              <ProjectSection />
            </section>
          </main>
        </div>
      </div>
    </>
  )
}

export default App;
