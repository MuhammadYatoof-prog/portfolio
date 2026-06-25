import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar.jsx';
import ScrollProgress from './components/ScrollProgress.jsx';
import LoadingScreen from './components/LoadingScreen.jsx';
import AnimatedCursor from './components/AnimatedCursor.jsx';
import Hero from './sections/Hero.jsx';
import About from './sections/About.jsx';
import Skills from './sections/Skills.jsx';
import Projects from './sections/Projects.jsx';
import Experience from './sections/Experience.jsx';
import Contact from './sections/Contact.jsx';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {isLoading && <LoadingScreen />}
      </AnimatePresence>
      
      <div className="relative min-h-screen bg-black text-white overflow-x-hidden">
        <AnimatedCursor />
        <ScrollProgress />
        <Navbar />
        
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </main>

        <footer className="py-8 px-4 border-t border-white/10 relative z-10">
          <div className="max-w-6xl mx-auto text-center">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="text-gray-400"
            >
              © 2024 Muhammad Yatoof. All rights reserved. Built with React and 3JS
            </motion.p>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
