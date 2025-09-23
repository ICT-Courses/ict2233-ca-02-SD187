import { motion } from 'framer-motion'
import { HiDownload, HiArrowRight } from 'react-icons/hi'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import profileImage from './profile.jpg'




const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-blue-50 dark:from-dark-900 dark:to-dark-800 section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left"
          >
            <motion.div variants={itemVariants} className="mb-6">
              <span className="inline-block px-4 py-2 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-sm font-medium mb-4">
                👋 Welcome to my portfolio
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                Hi, I'm{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-blue-600">
                  Sadeepa Rathnayaka
                </span>
              </h1>
            </motion.div>

            <motion.div variants={itemVariants} className="mb-8">
              <h2 className="text-xl sm:text-2xl lg:text-3xl text-gray-600 dark:text-gray-300 font-light mb-4">
                BSc (Hons) IT Student & Full-Stack Developer
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Passionate second-year IT student at the University of Sri Jayewardenepura, 
                specializing in web development, desktop applications, and modern technologies. 
                I love creating digital solutions that make a difference.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="mb-8">
              <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                <Link
                  to="/projects"
                  className="group flex items-center space-x-2 btn-primary"
                >
                  <span>View My Work</span>
                  <HiArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center space-x-2 btn-secondary"
                >
                  <HiDownload className="h-4 w-4" />
                  <span>Download CV</span>
                </motion.button>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants}>
              <p className="text-gray-600 dark:text-gray-400 mb-4">Connect with me:</p>
              <div className="flex justify-center lg:justify-start space-x-6">
                <motion.a
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  href="https://github.com/SD187"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
                  aria-label="GitHub"
                >
                  <FaGithub className="h-6 w-6" />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  href="https://linkedin.com/in/sadeepa-rathnayaka"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin className="h-6 w-6" />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  href="sadeesd3@gmail.com"
                  className="text-gray-600 hover:text-red-600 dark:text-gray-400 dark:hover:text-red-400 transition-colors"
                  aria-label="Email"
                >
                  <FaEnvelope className="h-6 w-6" />
                </motion.a>
              </div>
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <motion.div
                animate={{
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="w-80 h-80 sm:w-96 sm:h-96 rounded-full overflow-hidden border-8 border-white dark:border-dark-200 shadow-2xl"
              >
                <img
                   src={profileImage}
                   alt="Sadeepa Rathnayaka - Professional Photo"
                   className="w-full h-full object-cover rounded-full"
                />

              </motion.div>
              
              {/* Floating elements */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 w-20 h-20 bg-primary-500 rounded-full flex items-center justify-center text-white text-2xl shadow-lg"
              >
                💻
              </motion.div>
              
              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -left-4 w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white text-xl shadow-lg"
              >
                🚀
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400 dark:text-gray-600"
      >
        <div className="flex flex-col items-center space-y-2">
          <span className="text-sm">Scroll down</span>
          <div className="w-6 h-10 border-2 border-current rounded-full flex justify-center">
            <div className="w-1 h-3 bg-current rounded-full mt-2"></div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Hero