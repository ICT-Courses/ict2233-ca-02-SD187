import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Hero from '../components/home/Hero'
import ProjectCard from '../components/projects/ProjectCard'
import { projects } from '../data/projects'
import { HiArrowRight, HiCode, HiAcademicCap, HiLightBulb } from 'react-icons/hi'

const Home = () => {
  const featuredProjects = projects.slice(0, 3) // Show first 3 projects

  const stats = [
    {
      icon: HiCode,
      value: "3+",
      label: "Projects Completed",
      description: "Full-stack applications and desktop software"
    },
    {
      icon: HiAcademicCap,
      value: "2nd Year",
      label: "IT Student",
      description: "BSc (Hons) IT at University of Sri Jayewardenepura"
    },
    {
      icon: HiLightBulb,
      value: "10+",
      label: "Technologies",
      description: "Modern web and desktop development stack"
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* Stats Section */}
      <section className="py-20 bg-white dark:bg-dark-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center group"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-full mb-4 group-hover:bg-primary-200 dark:group-hover:bg-primary-900/50 transition-colors">
                    <IconComponent className="h-8 w-8 text-primary-600 dark:text-primary-400" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                    {stat.value}
                  </h3>
                  <p className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-1">
                    {stat.label}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {stat.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20 bg-gray-50 dark:bg-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Featured Projects
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Here are some of my recent projects that showcase my skills in web development, 
              desktop applications, and modern technologies.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Link
              to="/projects"
              className="group inline-flex items-center space-x-2 btn-primary text-lg"
            >
              <span>View All Projects</span>
              <HiArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 bg-white dark:bg-dark-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                About Me
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                I'm a passionate second-year IT student at the University of Sri Jayewardenepura, 
                specializing in modern web development and software engineering. My journey in 
                technology is driven by curiosity and the desire to create meaningful digital solutions.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
                With experience in full-stack development, desktop applications, and modern frameworks, 
                I'm constantly learning and exploring new technologies to stay at the forefront of 
                software development.
              </p>
              <Link
                to="/about"
                className="group inline-flex items-center space-x-2 btn-secondary"
              >
                <span>Learn More About Me</span>
                <HiArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="bg-primary-50 dark:bg-primary-900/20 p-6 rounded-xl">
                    <h4 className="font-semibold text-primary-700 dark:text-primary-300 mb-2">Frontend</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">React, JavaScript, HTML5, CSS3, Tailwind</p>
                  </div>
                  <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl">
                    <h4 className="font-semibold text-green-700 dark:text-green-300 mb-2">Backend</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Python, Flask, Node.js, C#, .NET</p>
                  </div>
                </div>
                <div className="space-y-4 mt-8">
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl">
                    <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">Database</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">MongoDB, SQL Server, SQLite</p>
                  </div>
                  <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl">
                    <h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-2">Tools</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Git, GitHub, VS Code, Visual Studio</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Let's Work Together
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              I'm always open to discussing new opportunities, collaborating on interesting projects, 
              or simply connecting with fellow developers and tech enthusiasts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center space-x-2 bg-white text-primary-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-lg transition-colors duration-200"
              >
                <span>Get In Touch</span>
                <HiArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="https://github.com/SD187"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center space-x-2 border-2 border-white text-white hover:bg-white hover:text-primary-600 font-medium py-3 px-8 rounded-lg transition-all duration-200"
              >
                <span>View GitHub</span>
                <HiArrowRight className="h-4 w-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Home