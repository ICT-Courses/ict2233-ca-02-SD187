import { motion } from 'framer-motion'
import { HiAcademicCap, HiCode, HiLightBulb, HiHeart } from 'react-icons/hi'
import { FaReact, FaPython, FaGitAlt, FaDatabase } from 'react-icons/fa'
import { SiJavascript, SiTailwindcss, SiMongodb, SiCsharp } from 'react-icons/si'

const About = () => {
  const skills = {
    frontend: [
      { name: 'React.js', icon: FaReact, level: 85, color: 'text-blue-500' },
      { name: 'JavaScript', icon: SiJavascript, level: 90, color: 'text-yellow-500' },
      { name: 'HTML5 & CSS3', icon: HiCode, level: 95, color: 'text-orange-500' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, level: 80, color: 'text-cyan-500' }
    ],
    backend: [
      { name: 'Python', icon: FaPython, level: 85, color: 'text-blue-600' },
      { name: 'C#', icon: SiCsharp, level: 80, color: 'text-purple-600' },
      { name: 'Flask', icon: FaPython, level: 75, color: 'text-green-600' },
      { name: '.NET', icon: SiCsharp, level: 75, color: 'text-indigo-600' }
    ],
    database: [
      { name: 'MongoDB', icon: SiMongodb, level: 80, color: 'text-green-500' },
      { name: 'SQL Server', icon: FaDatabase, level: 75, color: 'text-blue-700' },
      { name: 'SQLite', icon: FaDatabase, level: 85, color: 'text-gray-600' }
    ],
    tools: [
      { name: 'Git & GitHub', icon: FaGitAlt, level: 90, color: 'text-orange-600' },
      { name: 'VS Code', icon: HiCode, level: 95, color: 'text-blue-500' },
      { name: 'Visual Studio', icon: HiCode, level: 80, color: 'text-purple-500' }
    ]
  }

  const timeline = [
    {
      year: '2023 - Present',
      title: 'BSc (Hons) IT Student',
      institution: 'University of Sri Jayewardenepura',
      description: 'Currently pursuing my degree in Information Technology with a focus on software development and web technologies.',
      highlight: 'Second Year Student'
    },
    {
      year: '2024',
      title: 'Web Development Journey',
      institution: 'Self-Learning & Projects',
      description: 'Started building full-stack applications using React, Python, and modern web technologies.',
      highlight: '3+ Major Projects'
    },
    {
      year: '2024',
      title: 'Desktop Application Development',
      institution: 'Academic Projects',
      description: 'Developed CampusLink using C# and .NET, featuring real-time chat and event management.',
      highlight: 'Windows Forms Expert'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
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
    <div className="min-h-screen bg-gray-50 dark:bg-dark-900 section-padding">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            About Me
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Get to know more about my background, education, skills, and passion for technology.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-2 gap-12 mb-16"
        >
          {/* Personal Story */}
          <motion.div variants={itemVariants}>
            <div className="bg-white dark:bg-dark-800 rounded-2xl shadow-xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <HiHeart className="h-6 w-6 text-red-500 mr-2" />
                My Story
              </h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <p>
                  Hi! I'm <strong className="text-primary-600 dark:text-primary-400">Sadeepa Rathnayaka</strong>, 
                  a passionate second-year IT student at the University of Sri Jayewardenepura in Sri Lanka. 
                  My journey into technology began with curiosity about how digital solutions can solve real-world problems.
                </p>
                <p>
                  What started as fascination with websites and applications has evolved into a deep passion for 
                  full-stack development, desktop applications, and modern web technologies. I love the challenge 
                  of turning ideas into functional, beautiful software that makes a difference.
                </p>
                <p>
                  Currently, I'm focusing on mastering modern frameworks like React.js, exploring backend 
                  technologies like Python and C#, and building projects that showcase both technical skills 
                  and creative problem-solving.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Education & Stats */}
          <motion.div variants={itemVariants}>
            <div className="bg-white dark:bg-dark-800 rounded-2xl shadow-xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <HiAcademicCap className="h-6 w-6 text-blue-500 mr-2" />
                Education & Stats
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">BSc (Hons) Information Technology</h3>
                  <p className="text-primary-600 dark:text-primary-400">University of Sri Jayewardenepura</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">2023 - 2027 (Expected)</p>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="text-center p-4 bg-gray-50 dark:bg-dark-200 rounded-lg">
                    <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">3+</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Projects Completed</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 dark:bg-dark-200 rounded-lg">
                    <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">10+</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Technologies</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 dark:bg-dark-200 rounded-lg">
                    <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">2nd</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Year Student</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 dark:bg-dark-200 rounded-lg">
                    <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">100%</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Passionate</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
            Technical Skills
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(skills).map(([category, skillList], categoryIndex) => (
              <motion.div
                key={category}
                variants={itemVariants}
                className="bg-white dark:bg-dark-800 rounded-2xl shadow-xl p-6"
              >
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 capitalize flex items-center">
                  <HiCode className="h-5 w-5 text-primary-600 dark:text-primary-400 mr-2" />
                  {category}
                </h3>
                <div className="space-y-4">
                  {skillList.map((skill, index) => {
                    const IconComponent = skill.icon
                    return (
                      <div key={index} className="space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <IconComponent className={`h-4 w-4 ${skill.color}`} />
                            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                              {skill.name}
                            </span>
                          </div>
                          <span className="text-xs text-gray-500 dark:text-gray-400">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-dark-200 rounded-full h-2">
                          <motion.div
                            className="bg-primary-600 h-2 rounded-full"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: index * 0.1 }}
                          />
                        </div>
                      </div>
                    )
                  })}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
            My Journey
          </h2>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gray-300 dark:bg-dark-200"></div>
            
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary-600 rounded-full border-4 border-white dark:border-dark-900"></div>
                  
                  {/* Content */}
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                    <div className="bg-white dark:bg-dark-800 rounded-2xl shadow-lg p-6">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-primary-600 dark:text-primary-400 font-semibold text-sm">
                          {item.year}
                        </span>
                        <span className="bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 px-2 py-1 rounded-full text-xs font-medium">
                          {item.highlight}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                        {item.title}
                      </h3>
                      <p className="text-primary-600 dark:text-primary-400 font-medium mb-2">
                        {item.institution}
                      </p>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center bg-gradient-to-r from-primary-600 to-blue-600 rounded-2xl p-8 text-white"
        >
          <h2 className="text-2xl font-bold mb-4">Let's Connect!</h2>
          <p className="text-lg text-blue-100 mb-6 max-w-2xl mx-auto">
            I'm always excited to connect with fellow developers, potential collaborators, 
            or anyone interested in technology and innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center space-x-2 bg-white text-primary-600 hover:bg-gray-100 font-medium py-3 px-6 rounded-lg transition-colors duration-200"
            >
              <span>Get In Touch</span>
            </a>
            <a
              href="https://github.com/SD187"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center space-x-2 border-2 border-white text-white hover:bg-white hover:text-primary-600 font-medium py-3 px-6 rounded-lg transition-all duration-200"
            >
              <span>View My Work</span>
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default About