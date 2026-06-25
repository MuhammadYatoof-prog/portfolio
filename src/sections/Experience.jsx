import { motion } from 'framer-motion';

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4 relative z-10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Education & Journey</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            My academic background and continuous learning journey in software engineering
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="glass-card">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                  <span className="text-2xl">🎓</span>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-white">Education</h3>
                  <p className="text-gray-400">Academic Background</p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="border-l-2 border-blue-500/30 pl-6 relative">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-500 rounded-full"></div>
                  <h4 className="text-xl font-semibold text-white mb-2">
                    University of Gujrat
                  </h4>
                  <p className="text-blue-400 mb-2">Bachelor of Science in Software Engineering</p>
                  <ul className="text-gray-300 space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-1">•</span>
                      <span>Core coursework: Data Structures, Algorithms, Web Development</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-1">•</span>
                      <span>Specialized in MERN stack and modern web technologies</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-1">•</span>
                      <span>Active participation in coding competitions and hackathons</span>
                    </li>
                  </ul>
                </div>

                <div className="border-l-2 border-purple-500/30 pl-6 relative">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-purple-500 rounded-full"></div>
                  <h4 className="text-xl font-semibold text-white mb-2">
                    Online Learning & Certifications
                  </h4>
                  <p className="text-gray-400 text-sm mb-3">Continuous Professional Development</p>
                  <ul className="text-gray-300 space-y-2 text-sm">
                    
                    <li className="flex items-start gap-2">
                      <span className="text-purple-400 mt-1">•</span>
                      <span>Cloud Computing fundamentals (AWS)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-400 mt-1">•</span>
                      <span>Full-stack web development bootcamps</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="glass-card">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-600 rounded-xl flex items-center justify-center">
                  <span className="text-2xl">🚀</span>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-white">Technical Journey</h3>
                  <p className="text-gray-400">Skills Development Path</p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="border-l-2 border-green-500/30 pl-6 relative">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-green-500 rounded-full"></div>
                  <h4 className="text-xl font-semibold text-white mb-2">
                    Foundation Building
                  </h4>
                  <p className="text-gray-400 text-sm mb-3">2021 - 2022</p>
                  <ul className="text-gray-300 space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400 mt-1">•</span>
                      <span>Mastered HTML, CSS, and JavaScript fundamentals</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400 mt-1">•</span>
                      <span>Learned responsive design and UI/UX principles</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400 mt-1">•</span>
                      <span>Version control with Git and GitHub</span>
                    </li>
                  </ul>
                </div>

                <div className="border-l-2 border-orange-500/30 pl-6 relative">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-orange-500 rounded-full"></div>
                  <h4 className="text-xl font-semibold text-white mb-2">
                    Full-Stack Development
                  </h4>
                  <p className="text-gray-400 text-sm mb-3">2022 - Present</p>
                  <ul className="text-gray-300 space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-orange-400 mt-1">•</span>
                      <span>React ecosystem and modern frontend frameworks</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-400 mt-1">•</span>
                      <span>Node.js, Express, and RESTful API development</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-400 mt-1">•</span>
                      <span>MongoDB, database design, and cloud deployment</span>
                    </li>
                  </ul>
                </div>

                <div className="border-l-2 border-pink-500/30 pl-6 relative">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-pink-500 rounded-full"></div>
                  <h4 className="text-xl font-semibold text-white mb-2">
                    Advanced Technologies
                  </h4>
                  <p className="text-gray-400 text-sm mb-3">2023 - Present</p>
                  <ul className="text-gray-300 space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-pink-400 mt-1">•</span>
                      <span>Three.js and 3D web development</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-pink-400 mt-1">•</span>
                      <span>Docker containerization and CI/CD pipelines</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-pink-400 mt-1">•</span>
                      <span>AI integration and modern web technologies</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
