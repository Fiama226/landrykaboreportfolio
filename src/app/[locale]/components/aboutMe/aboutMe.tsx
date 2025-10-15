"use client";
import { motion } from "framer-motion";
import { FaUserGraduate } from "react-icons/fa6";
import { FaUniversity } from "react-icons/fa";

import Profilephoto from "./Profilephoto";
import { useLocale } from "next-intl";

const AboutSection = () => {
  const isEn = useLocale();
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="about" className="py-5 relative bg-[#020817]">
      <div className="absolute top-0 inset-x-0 h-1/2 bg-gradient-to-b from-primary/5 to-background -z-10"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="section-heading text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={itemVariants}
        >
          <div className="w-[100px] h-[100px] bg-violet-100 rounded-full absolute top-6 left-[42%] translate-x-1/2 filter blur-3xl  opacity-20"></div>

          <div className="flex justify-center -translate-y-[1px]">
            <div className="w-3/4">
              <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent  w-full" />
            </div>
          </div>

          <div className="flex justify-center my-5 lg:py-8">
            <div className="flex  items-center">
              <span className="w-24 h-[2px] bg-[#1a1443]"></span>
              <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
                {isEn === "en" ? "About me" : "A propos de moi"}
              </span>
              <span className="w-24 h-[2px] bg-[#1a1443]"></span>
            </div>
          </div>
        </motion.h2>

        <motion.div
          className="flex flex-row space-x-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="w-1/2">
            <div className="float-left mr-4 mb-4">
              <Profilephoto />
            </div>
            <p className="text-white indent-4 text-xl">
              {isEn === "en"
                ? "I am a passionate software developer with a knack for breaking down complex challenges into clean, effective, and logical solutions. To me, every line of code is written with intention, contributing to a larger, well-structured system designed for lasting impact. I am a quick and enthusiastic learner, naturally adapting to new tools and technologies to solve problems in modern ways. I am actively seeking a collaborative and supportive team where I can contribute my dedication, learn from experienced colleagues, and play a meaningful role in building software that is both powerful and purposeful."
                : "Je suis un développeur de logiciels passionné par la résolution de problèmes complexes, que je transforme en solutions logiques et bien structurées. Pour moi, chaque ligne de code est écrite avec une intention précise, contribuant à un système plus vaste, conçu pour avoir un impact durable. Doté d'une grande capacité d'adaptation, j’apprends rapidement et avec enthousiasme de nouveaux outils et technologies, que j’intègre de manière réfléchie dans mon travail. Je recherche activement une équipe collaborative et bienveillante où je pourrai apporter mon engagement, m’enrichir de l’expérience de mes collègues et participer à la création de logiciels à la fois performants et porteurs de sens."}
            </p>
          </motion.div>

          <div className="w-1/2">
            <motion.div
              variants={itemVariants}
              whileHover={{
                y: -5,
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
              }}
            >
              <div className="relative border rounded-xl p-8 transition-all duration-300 bg-gray-900/50 backdrop-blur-sm border-teal-500 scale-[1.02]">
                <div className="space-y-6">
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <span className="text-3xl">
                        <FaUserGraduate color="blue" />
                      </span>
                      <h2 className="text-3xl font-bold text-white">
                        {isEn === "en"
                          ? " B.Tech in Computer Science and Engineering"
                          : "Diplome d'Ingenieur en Informatique"}
                      </h2>
                    </div>
                    <a href="http://lpu.in/">
                      <p className="text-lg text-gray-300 flex items-center gap-2">
                        <FaUniversity className="w-5 h-5 text-primary" />
                        Lovely Professional University
                      </p>
                    </a>
                    <p className="text-gray-400 flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="lucide lucide-calendar w-4 h-4"
                      >
                        <path d="M8 2v4"></path>
                        <path d="M16 2v4"></path>
                        <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                        <path d="M3 10h18"></path>
                      </svg>
                      2020-2025
                    </p>
                  </div>
                  <p className="text-gray-300 text-sm italic border-l-2 border-teal-500 pl-3">
                    {isEn === "en"
                      ? "My BTech in Computer Science provided a deep understanding of fundamental principles, including data structures, algorithms, and computational theory. I learned to approach problems with an analytical mindset, systematically breaking them down to engineer efficient solutions. The curriculum instilled a strong foundation in software engineering best practices, focusing on writing clean, maintainable, and scalable code. This education equipped me with the rigorous logical framework essential for modern software development."
                      : "Mon diplome d'Ingenieur en Informatique m'a apporté une compréhension approfondie des principes fondamentaux, incluant les structures de données, les algorithmes et la théorie du calcul. J'ai appris à aborder les problèmes avec un état d'esprit analytique, en les décomposant systématiquement pour concevoir des solutions efficaces. Le programme a inculqué une base solide dans les bonnes pratiques du génie logiciel, en mettant l'accent sur l'écriture d'un code propre, maintenable et évolutif. Cette formation m'a doté du cadre logique et rigoureux essentiel au développement logiciel moderne."}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 text-xs rounded bg-blue-500/10 text-blue-300">
                      programming (c,c++,java,python,sql,...)
                    </span>
                    <span className="px-2 py-1 text-xs rounded bg-blue-500/10 text-blue-300">
                      Mathematics for engineer
                    </span>
                    <span className="px-2 py-1 text-xs rounded bg-blue-500/10 text-blue-300">
                      Object Oriented Programming
                    </span>
                    <span className="px-2 py-1 text-xs rounded bg-blue-500/10 text-blue-300">
                      Engineering physics
                    </span>
                    <span className="px-2 py-1 text-xs rounded bg-blue-500/10 text-blue-300">
                      Data structure and algorithms
                    </span>
                    <span className="px-2 py-1 text-xs rounded bg-blue-500/10 text-blue-300">
                      computer organization and design
                    </span>
                    <span className="px-2 py-1 text-xs rounded bg-blue-500/10 text-blue-300">
                      software engineering
                    </span>
                    <span className="px-2 py-1 text-xs rounded bg-blue-500/10 text-blue-300">
                      Python programming
                    </span>
                    <span className="px-2 py-1 text-xs rounded bg-blue-500/10 text-blue-300">
                      Database management systems
                    </span>
                    <span className="px-2 py-1 text-xs rounded bg-blue-500/10 text-blue-300">
                      Discrete Mathematics
                    </span>
                    <span className="px-2 py-1 text-xs rounded bg-blue-500/10 text-blue-300">
                      Computer Networks
                    </span>
                    <span className="px-2 py-1 text-xs rounded bg-blue-500/10 text-blue-300">
                      Design and analysis of algorithms
                    </span>
                    <span className="px-2 py-1 text-xs rounded bg-blue-500/10 text-blue-300">
                      Artificial Intelligence
                    </span>
                    <span className="px-2 py-1 text-xs rounded bg-blue-500/10 text-blue-300">
                      ....
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
