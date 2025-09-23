import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { HiHome, HiArrowLeft } from 'react-icons/hi'
import { HiExclamationTriangle } from 'react-icons/hi2'

const NotFound = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
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

  const floatingVariants = {
    float: {
      y: [-10, 10, -10],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-blue-50 dark:from-dark-900 dark:to-dark-800 section-padding">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Animated 404 */}
          <motion.div
            variants={itemVariants}
            className="relative mb-8"
          >
            <motion.h1 
              className="text-9xl sm:text-[12rem] lg:text-[16rem] font-bold text-primary-200 dark:text-primary-900/50 select-none"
              animate={{
                scale: [1, 1.02, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              404
            </motion.h1>
            
            {/* Floating Icons */}
            <motion.div
              variants={floatingVariants}
              animate="float"
              className="absolute top-1/4 left-1/4 text-primary-400 dark:text-primary-600"
            >
              <HiExclamationTriangle className="h-16 w-16 opacity-30" />
            </motion.div>
            
            <motion.div
              variants={floatingVariants}
              animate="float"
              style={{ animationDelay: '1s' }}
              className="absolute top-1/3 right-1/4 text-blue-400 dark:text-blue-600"
            >
              <div className="text-4xl opacity-20">🔍</div>
            </motion.div>
            
            <motion.div
              variants={floatingVariants}
              animate="float"
              style={{ animationDelay: '2s' }}
              className="absolute bottom-1/4 left-1/3 text-gray-400 dark:text-gray-600"
            >
              <div className="text-3xl opacity-20">❓</div>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div variants={itemVariants} className="mb-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Oops! Page Not Found
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              The page you're looking for doesn't exist. It might have been moved, 
              deleted, or you entered the wrong URL.
            </p>
          </motion.div>

          {/* Suggestions */}
          <motion.div variants={itemVariants} className="mb-12">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
              Here are some helpful links instead:
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {[
                { name: 'Home', href: '/', icon: HiHome, description: 'Back to homepage' },
                { name: 'About', href: '/about', icon: '👨‍💻', description: 'Learn about me' },
                { name: 'Projects', href: '/projects', icon: '🚀', description: 'View my work' },
                { name: 'Contact', href: '/contact', icon: '📧', description: 'Get in touch' }
              ].map((link, index) => (
                <motion.div
                  key={link.name}
                  variants={itemVariants}
                  whileHover={{ y: -5, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-white dark:bg-dark-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  <Link to={link.href} className="block">
                    <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-200">
                      {typeof link.icon === 'string' ? (
                        <span>{link.icon}</span>
                      ) : (
                        <link.icon className="h-8 w-8 text-primary-600 dark:text-primary-400 mx-auto" />
                      )}
                    </div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                      {link.name}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {link.description}
                    </p>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="group inline-flex items-center justify-center space-x-2 btn-primary text-lg"
            >
              <HiHome className="h-5 w-5" />
              <span>Go Home</span>
            </Link>
            
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => window.history.back()}
              className="group inline-flex items-center justify-center space-x-2 btn-secondary text-lg"
            >
              <HiArrowLeft className="h-5 w-5 group-hover:-translate-x-1 transition-transform" />
              <span>Go Back</span>
            </motion.button>
          </motion.div>

          {/* Fun message */}
          <motion.div
            variants={itemVariants}
            className="mt-12 text-gray-500 dark:text-gray-600"
          >
            <p className="text-sm">
              "In the middle of difficulty lies opportunity." - Albert Einstein
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default NotFound