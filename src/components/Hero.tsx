import { GraduationCap, Database, Server, Github, Mail, Linkedin, Menu, } from "lucide-react";
  import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
  import { useState, useCallback } from "react";
  import { motion } from "framer-motion";
  import Particles from "react-tsparticles";
  import { loadFull } from "tsparticles";
  import { Link, useNavigate } from "react-router-dom";
  import profileImg from '../../img/profile.webp';
  import websiteImg from '../img/website.webp';


  const Hero = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();

    const particlesInit = useCallback(async (engine) => {
      await loadFull(engine);
    }, []);

    return (
      <>
        {/* Navbar */}
        <nav className="w-full bg-[#1A1F2C] text-white p-4 fixed top-0 z-50 shadow-md">
          <div className="max-w-6xl mx-auto flex justify-between items-center">
            <div className="text-xl font-bold text-primary">KP</div>
            <div className="hidden md:flex space-x-6">
              <a href="#about" className="hover:text-primary transition">About</a>
              <a href="#contact" className="hover:text-primary transition">Contact</a>
              <a href="#project" className="hover:text-primary transition">Project</a>
            </div>
            <div className="md:hidden">
              <button onClick={() => setMenuOpen(!menuOpen)}>
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </div>
          {menuOpen && (
            <div className="md:hidden mt-2 space-y-2 text-center bg-[#2A2F3C] rounded-lg p-4">
              <a href="#about" className="block hover:text-primary">About</a>
              <a href="#contact" className="block hover:text-primary">Contact</a>
              <a href="#project" className="hover:text-primary transition">Project</a>
            </div>
          )}
        </nav>

        {/* Hero Section */}
        <section className="min-h-screen relative flex items-center justify-center text-white pt-24 p-4 bg-animated overflow-hidden">
          <Particles
            id="tsparticles"
            init={particlesInit}
            options={{
              fullScreen: { enable: false },
              background: { color: { value: "#1A1F2C" } },
              particles: {
                number: { value: 40 },
                color: { value: "#00bcd4" },
                links: {
                  enable: true,
                  color: "#00bcd4",
                  distance: 150,
                  opacity: 0.3,
                  width: 1,
                },
                move: {
                  enable: true,
                  speed: 0.6,
                  direction: "none",
                  outModes: "out",
                },
                size: {
                  value: { min: 1, max: 3 },
                },
                opacity: {
                  value: 0.4,
                },
              },
              interactivity: {
                events: {
                  onHover: { enable: true, mode: "repulse" },
                  resize: true,
                },
                modes: {
                  repulse: { distance: 100 },
                },
              },
              detectRetina: true,
            }}
            className="absolute inset-0 -z-10"
          />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 text-center md:text-left"
          >
            {/* Avatar on right side - Modern Portfolio Style */}
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              whileHover={{ scale: 1.03 }}
              className="relative mb-8 md:mb-0 md:order-2 group"
            >
              {/* Decorative background glow */}
              <div className="absolute -inset-1 bg-gradient-to-br from-primary/30 to-transparent rounded-full blur-lg opacity-50 group-hover:opacity-80 transition-all duration-500 z-0" />

              <div className="relative z-10 p-2 border-4 border-primary/30 rounded-full shadow-2xl hover:rotate-1 transition-all duration-300 bg-white/10 backdrop-blur-sm">
                <Avatar className="w-40 h-40 md:w-56 md:h-56 ring ring-primary/30 shadow-xl transition-transform duration-500 hover:scale-105 overflow-hidden">
                  <AvatarImage
                    src={websiteImg}
                    alt="Profile"
                    className="object-cover w-full h-full"
                  />
                  {/* Optional fallback */}
                  {/* <AvatarFallback className="bg-primary/20 text-xl font-bold">KP</AvatarFallback> */}
                </Avatar>
              </div>
            </motion.div>


            {/* Text and Buttons on left side */}
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              className="flex-1"
            >
              <motion.h1
                className="text-3xl md:text-6xl font-bold mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                Hi, I'm <span className="text-primary">Kuldeep Prajapati</span>
              </motion.h1>

              <motion.p
                className="text-lg md:text-2xl mb-8 text-gray-300 max-w-2xl px-4 md:px-0 leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                I transform <span className="text-white font-medium">complex challenges</span> into <span className="text-primary font-medium">innovative solutions</span> through{" "}
                <span className="skill-text ml-highlight relative">
                  Machine Learning
                  <span className="skill-underline ml-style"></span>
                </span>, {" "}
                <span className="skill-text devops-highlight relative">
                  DevOps
                  <span className="skill-underline devops-style"></span>
                </span>, and{" "}
                <span className="skill-text fullstack-highlight relative">
                  Full Stack Development
                  <span className="skill-underline fullstack-style"></span>
                </span>.
              </motion.p>




              <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-12 px-4 md:px-0">
                <motion.div
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col items-center gap-2 p-4 bg-gradient-to-b from-gray-800/80 to-gray-900/80 rounded-xl shadow-lg border border-primary/20 hover:border-primary/40 cursor-pointer"
                  onClick={() => navigate('/tranner')}
                >
                  <div className="p-2 rounded-full bg-primary/10">
                    <Database className="text-primary h-6 md:h-8 w-6 md:w-8" />
                  </div>
                  <span className="font-medium text-sm md:text-base ml-highlight">
                    ML Engineer
                  </span>
                  <span className="text-xs text-gray-400">AI & Algorithms</span>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col items-center gap-2 p-4 bg-gradient-to-b from-gray-800/80 to-gray-900/80 rounded-xl shadow-lg border border-primary/20 hover:border-primary/40 cursor-pointer"
                // onClick={() => navigate('/python')}
                >
                  <div className="p-2 rounded-full bg-primary/10">
                    <GraduationCap className="text-primary h-6 md:h-8 w-6 md:w-8" />
                  </div>
                  <span className="font-medium text-sm md:text-base fullstack-highlight">
                    Python
                  </span>
                  <span className="text-xs text-gray-400">DSA</span>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col items-center gap-2 p-4 bg-gradient-to-b from-gray-800/80 to-gray-900/80 rounded-xl shadow-lg border border-primary/20 hover:border-primary/40 cursor-pointer"
                  onClick={() => navigate('/devops')}
                >
                  <div className="p-2 rounded-full bg-primary/10">
                    <Server className="text-primary h-6 md:h-8 w-6 md:w-8" />
                  </div>
                  <span className="font-medium text-sm md:text-base devops-highlight">
                    DevOps
                  </span>
                  <span className="text-xs text-gray-400">CI/CD & Cloud</span>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col items-center gap-2 p-4 bg-gradient-to-b from-gray-800/80 to-gray-900/80 rounded-xl shadow-lg border border-primary/20 hover:border-primary/40 cursor-pointer"
                  onClick={() => navigate('/fullstack')}
                >
                  <div className="p-2 rounded-full bg-primary/10">
                    <GraduationCap className="text-primary h-6 md:h-8 w-6 md:w-8" />
                  </div>
                  <span className="font-medium text-sm md:text-base fullstack-highlight">
                    Full Stack
                  </span>
                  <span className="text-xs text-gray-400">Web Dev</span>
                </motion.div>
              </div>

              <div className="flex flex-wrap justify-center md:justify-start gap-4 px-4 md:px-0">
                <a href="https://github.com/kuldeep456789" target="_blank" className="gap-2 bg-gray-800/50 hover:scale-105 transition border-gray-700 hover:border-primary px-4 py-2 rounded-md flex items-center">
                  <Github size={18} /> GitHub
                </a>
                <a href="https://www.linkedin.com/in/kuldeep-prajapati-005080257/" target="_blank" className="gap-2 bg-gray-800/50 hover:scale-105 transition border-gray-700 hover:border-primary px-4 py-2 rounded-md flex items-center">
                  <Linkedin size={18} /> LinkedIn
                </a>
                <a
                  onClick={() => navigate('/contact')}
                  className="gap-2 hover:scale-105 transition shadow-lg shadow-primary/20 hover:shadow-primary/30 px-4 py-2 rounded-md flex items-center cursor-pointer"
                >
                  <Mail size={18} /> Contact Me
                </a>

              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* Animated Gradient Background and Role Color Animation */}
        <style>{`
          .bg-animated {
            background: linear-gradient(-45deg, #1a1f2c, #202430, #1f2535, #1a1f2c);
            background-size: 400% 400%;
            animation: gradientBG 15s ease infinite;
          }

          @keyframes gradientBG {
            0% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
            100% {
              background-position: 0% 50%;
            }
          }
          
          /* Unified skill text styling with consistent primary color */
          .skill-text {
            font-weight: 600;
            padding: 0 2px;
            display: inline-block;
            transition: all 0.3s ease;
            color: #00bcd4; /* Primary color */
          }
          
          .skill-text:hover {
            transform: translateY(-2px);
          }
          
          .skill-underline {
            position: absolute;
            height: 2px;
            width: 0;
            bottom: -2px;
            left: 0;
            transition: width 0.3s ease;
            background: #00bcd4; /* Primary color */
          }
          
          .skill-text:hover .skill-underline {
            width: 100%;
          }
          
          /* Individual highlighting variations while maintaining unified color */
          .ml-highlight {
            text-shadow: 0 0 10px rgba(0, 188, 212, 0.3);
            letter-spacing: 0.02em;
          }
          
          .ml-style {
            background: linear-gradient(90deg, #00bcd4, #00bcd4);
            height: 2px;
          }
          
          .devops-highlight {
            text-shadow: 0 0 8px rgba(0, 188, 212, 0.25);
            // font-style: ;
          }
          
          .devops-style {
            background: linear-gradient(90deg, transparent, #00bcd4, transparent);
            height: 1px;
          }
          
          .fullstack-highlight {
            text-shadow: 0 0 12px rgba(0, 188, 212, 0.35);
            letter-spacing: 0.01em;
          }
          
          .fullstack-style {
            background: linear-gradient(90deg, #00bcd4, transparent);
            height: 3px;
          }
        `}</style>
      </>
    );
  };

  export default Hero;