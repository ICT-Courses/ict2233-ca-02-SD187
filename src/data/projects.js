import downloadImg from '../data/download.jpg';
import imagesImg from '../data/images.png';
import download1Img from '../data/download (1).jpg'; 



export const projects = [
    {
      id: 1,
      title: "CampusLink",
      description: "A comprehensive Windows Forms application developed with C# and .NET 9.0, designed to enhance campus life by providing seamless event management, group communication, interactive campus mapping, and personalized planning features.",
      longDescription: "CampusLink is a feature-rich desktop application that serves as a central hub for campus activities. Built with modern C# and .NET 9.0, it incorporates user authentication, real-time chat functionality, interactive mapping, and comprehensive event management to create a seamless campus experience.",
      image: "/api/placeholder/600/400",
      image: downloadImg,
      technologies: ["C#", ".NET 9.0", "Windows Forms", "SQL Server", "SQLite"],
      features: [
        "User and Admin Authentication",
        "Event Management System",
        "Personal Planner",
        "Group Creation & Real-time Chat",
        "Interactive Campus Map",
        "News Feed",
        "Robust Database Integration",
        "Input Validation & Error Handling"
      ],
      githubUrl: "https://github.com/ICT-Courses/application-development-ca1-SD187.git",
      liveUrl: null,
      category: "Desktop Application",
      status: "Completed",
      startDate: "2024-08",
      endDate: "2024-11"
    },
    {
      id: 2,
      title: "EduNova Academy",
      description: "An integrated web application with professional, scalable directory structure that combines frontend and backend components. Built with Python Flask for backend, MongoDB for database, and modern HTML/CSS/JS for frontend.",
      longDescription: "EduNova Academy represents a student registration system with a full-stack architecture. The application demonstrates modern web development practices with a clean separation of concerns, RESTful API design, and responsive user interface.",
      image: "/api/placeholder/600/400",
      image: imagesImg, 
      technologies: ["Python", "Flask", "MongoDB", "HTML5", "CSS3", "JavaScript"],
      features: [
        "Student Registration System",
        "RESTful API Architecture",
        "MongoDB Database Integration",
        "Responsive Web Design",
        "Professional Directory Structure",
        "Backend API with Python Flask",
        "Modern Frontend Interface"
      ],
      githubUrl: "https://github.com/SD187/EduNova-Student-Registration-System.git",
      liveUrl: null,
      category: "Full-Stack Web Application",
      status: "Completed",
      startDate: "2024-06",
      endDate: "2024-08"
    },
    {
      id: 3,
      title: "Brew Haven Café",
      description: "A modern, responsive React Single Page Application showcasing a coffee shop's menu and services. Built for ICT 2233 Web Application Development, demonstrating advanced React concepts and modern web development practices.",
      longDescription: "Brew Haven Café is a sophisticated SPA that simulates a coffee shop's online presence. The application showcases mastery of React Router, state management, asynchronous data handling, and responsive design principles with an elegant, user-friendly interface.",
      image: "/api/placeholder/600/400",
      image: download1Img, 
      technologies: ["React", "React Router", "Bootstrap", "JavaScript", "CSS3", "HTML5"],
      features: [
        "Dynamic Routing with React Router",
        "Parameterized Routes",
        "Asynchronous Data Loading",
        "Responsive Design with Bootstrap",
        "Interactive Navigation",
        "Loading States & Error Handling",
        "Custom Hooks Implementation",
        "Controlled Forms with Validation"
      ],
      githubUrl: "https://github.com/SD187/brew-haven-cafe",
      liveUrl: "http://localhost:3000",
      category: "React SPA",
      status: "Completed",
      startDate: "2024-09",
      endDate: "2024-09"
    }
  ]
  
  export const projectCategories = [
    "All",
    "Desktop Application",
    "Full-Stack Web Application",
    "React SPA",
    "Mobile App"
  ]
  
  export const technologies = [
    "React",
    "JavaScript",
    "TypeScript",
    "Node.js",
    "Python",
    "C#",
    ".NET",
    "Flask",
    "MongoDB",
    "SQL Server",
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "Bootstrap",
    "Git",
    "GitHub"
  ]