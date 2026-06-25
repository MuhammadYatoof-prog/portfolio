import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 px-4 relative z-10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">About Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="glass-card">
              <h3 className="text-2xl font-semibold mb-4 text-white">Professional Summary</h3>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Results-driven Software Engineer with expertise in the MERN stack, dedicated to developing scalable and efficient web applications. Skilled in creating seamless user experiences, optimizing application performance, and building robust backend services. Committed to clean code practices, modern development standards, and continuous learning to deliver high-quality software solutions.
              </p>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Experienced in developing full-stack applications from concept to deployment, with expertise
                in React, Node.js, and modern web technologies. Committed to continuous learning and
                staying current with industry best practices and emerging technologies.
              </p>

              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="text-blue-400">🎓</span>
                  <span className="text-gray-300">University of Gujrat - Software Engineering</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-green-400">💻</span>
                  <span className="text-gray-300">MERN Stack Specialist</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-purple-400">🚀</span>
                  <span className="text-gray-300">Full-Stack Development</span>
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
              <h3 className="text-2xl font-semibold mb-6 text-white">Key Skills & Expertise</h3>

              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-medium text-blue-400 mb-3">Frontend Development</h4>
                  <div className="flex flex-wrap gap-2">
                    {['React','NEXT.js', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS'].map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-blue-500/20 border border-blue-500/30 rounded-full text-sm text-blue-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-medium text-green-400 mb-3">Backend Development</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Node.js', 'Express.js', 'REST APIs'].map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-green-500/20 border border-green-500/30 rounded-full text-sm text-green-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-medium text-purple-400 mb-3">Database & Tools</h4>
                  <div className="flex flex-wrap gap-2">
                    {['MongoDB', 'SQL', 'Git', 'Docker'].map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-purple-500/20 border border-purple-500/30 rounded-full text-sm text-purple-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary mt-6 inline-block"
              >
                Get In Touch
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
