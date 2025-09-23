import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from 'react-icons/fa'
import { HiLocationMarker, HiMail, HiPhone } from 'react-icons/hi'

const Footer = () => {
  const navigation = {
    main: [
      { name: 'Home', href: '/' },
      { name: 'About', href: '/about' },
      { name: 'Projects', href: '/projects' },
      { name: 'Contact', href: '/contact' },
    ],
    social: [
      {
        name: 'GitHub',
        href: 'https://github.com/SD187',
        icon: FaGithub,
      },
      {
        name: 'LinkedIn',
        href: 'https://linkedin.com/in/sadeepa-rathnayaka',
        icon: FaLinkedin,
      },
      {
        name: 'Email',
        href: 'mailto:sadeepa.rathnayaka@example.com',
        icon: FaEnvelope,
      },
    ],
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-white dark:bg-dark-800 border-t border-gray-200 dark:border-dark-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="md:col-span-2">
              <Link to="/" className="flex items-center space-x-2 mb-4">
                <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">
                  SR
                </div>
                <span className="text-lg font-medium text-gray-900 dark:text-white">
                  Sadeepa Rathnayaka
                </span>
              </Link>
              <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-md">
                BSc (Hons) IT Student & Full-Stack Developer passionate about creating 
                innovative digital solutions and exploring new technologies.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-2 text-sm">
                <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
                  <HiLocationMarker className="h-4 w-4 text-primary-600 dark:text-primary-400" />
                  <span>University of Sri Jayewardenepura, Sri Lanka</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
                  <HiMail className="h-4 w-4 text-primary-600 dark:text-primary-400" />
                  <span>sadeesd3@gmail.com</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-sm font-semibold text-gray-900 dark:text-white tracking-wider uppercase mb-4">
                Quick Links
              </h3>
              <ul className="space-y-2">
                {navigation.main.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.href}
                      className="text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors duration-200"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Connect Section */}
            <div>
              <h3 className="text-sm font-semibold text-gray-900 dark:text-white tracking-wider uppercase mb-4">
                Connect
              </h3>
              <div className="flex space-x-4">
                {navigation.social.map((item) => {
                  const IconComponent = item.icon
                  return (
                    <motion.a
                      key={item.name}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
                      aria-label={item.name}
                    >
                      <IconComponent className="h-6 w-6" />
                    </motion.a>
                  )
                })}
              </div>
              
              {/* Newsletter Signup */}
              <div className="mt-6">
                <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-2">
                  Stay Updated
                </h4>
                <p className="text-xs text-gray-600 dark:text-gray-400 mb-3">
                  Get notified about new projects and blog posts.
                </p>
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-3 py-2 text-sm border border-gray-300 dark:border-dark-200 rounded-l-lg bg-white dark:bg-dark-900 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                  <button className="px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white text-sm font-medium rounded-r-lg transition-colors duration-200">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200 dark:border-dark-200 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-1 text-sm text-gray-600 dark:text-gray-400">
              <span>© {currentYear} Sadeepa Rathnayaka. Made with</span>
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <FaHeart className="h-4 w-4 text-red-500" />
              </motion.div>
              <span>and lots of ☕</span>
            </div>
            
            <div className="flex items-center space-x-6 text-xs text-gray-500 dark:text-gray-500">
              <span>Built with React & Tailwind CSS</span>
              <span>•</span>
              <span>Deployed on GitHub Pages</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer