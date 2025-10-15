"use client";
import { FaWhatsapp, FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa6";
import ButttonDownloadCv from "./butttondownloadcv";
import { motion } from "framer-motion";
import { Links } from "./links";

import { useLocale } from "next-intl";

export default function HeroSection() {
  const isEn = useLocale();
  return (
    <section
      id="home"
      className="bg-[#020817] min-h-screen w-screen flex items-center pt-16 relative overflow-hidden text-white justify-center"
    >
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-50 via-white to-indigo-50 opacity-70"></div>

      {/* Animated background elements */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.5, 0.7, 0.5],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />

      <motion.div
        className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-blue-400/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse",
          delay: 1,
        }}
      />

      <div className="section-container flex flex-col lg:flex-row items-center justify-between gap-10">
        <div className="flex flex-col max-w-xl space-y-6 text-center lg:text-left">
          <motion.span
            className="text-sm md:text-base font-medium text-[#3b82f6] opacity-90"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {isEn === "en" ? "Hello! I'm" : "Bonjour , je m'appelle"}
          </motion.span>

          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {"Landry "}
            <motion.span
              className="text-[#3b82f6]"
              initial={{ backgroundSize: "0% 3px" }}
              animate={{ backgroundSize: "100% 3px" }}
              transition={{ duration: 1, delay: 1.2 }}
            >
              KABORE
            </motion.span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-muted-foreground font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            {isEn === "en" ? "Software Engineer" : "Ingénieur logiciel"}
          </motion.p>

          <motion.p
            className="text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            {isEn === "en"
              ? "Engineering digital solutions that solve real-world problems through clean code and thoughtful architecture. Bridging technical requirements with business objectives."
              : "Développement de solutions numériques concrètes alliant code de qualité et architecture solide. Synthèse parfaite entre besoins techniques et stratégie d'entreprise."}
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 relative z-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            {/* Social Links */}
            <div className="flex items-center gap-4 ml-0 lg:ml-4 mt-4 lg:mt-0">
              {[
                { icon: FaGithub, link: Links.github, label: "GitHub" },
                { icon: FaLinkedin, link: Links.linkedin, label: "LinkedIn" },
                { icon: FaEnvelope, link: Links.email, label: "Email" },
                { icon: FaWhatsapp, link: Links.whatsapp, label: "whatsapp" },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-primary transition-colors p-2"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={social.label}
                >
                  <social.icon size={24} />
                </motion.a>
              ))}
            </div>
            <motion.div className="flex flex-row items-center gap-4">
              {/* Contact Button */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="touch-target"
              >
                <a href="#contact" aria-label="Go to contact section">
                  <ButttonDownloadCv />
                </a>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          className="w-full max-w-md"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.8,
            delay: 1.2,
            type: "spring",
            stiffness: 100,
          }}
        >
          <div className="relative">
            <motion.div
              className="absolute inset-0 bg-slate-800 rounded-2xl"
              animate={{ rotate: [0, 6, 0] }}
              transition={{
                duration: 6,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
            />

            <motion.div
              className="relative bg-codebg border border-gray-200 p-6 rounded-2xl shadow-sm"
              whileHover={{
                y: -5,
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
              }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex justify-between items-center mb-6">
                <div className="flex space-x-2">
                  <motion.div
                    className="w-3 h-3 rounded-full bg-red-500"
                    whileHover={{ scale: 1.2 }}
                  />
                  <motion.div
                    className="w-3 h-3 rounded-full bg-yellow-500"
                    whileHover={{ scale: 1.2 }}
                  />
                  <motion.div
                    className="w-3 h-3 rounded-full bg-green-500"
                    whileHover={{ scale: 1.2 }}
                  />
                </div>
                <div className="text-xs text-gray-500">developer.js</div>
              </div>

              <div className="space-y-2 font-mono text-sm">
                <div className="text-gray-500">{"// Software Engineer"}</div>
                <div>
                  <span className="text-pink-600">const</span>{" "}
                  <span className="text-blue-600">developer</span>{" "}
                  <span className="text-gray-500">=</span>{" "}
                  <span className="text-orange-500">{"{"}</span>
                </div>
                <motion.div
                  className="pl-6"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.4, duration: 0.3 }}
                >
                  <span className="text-purple-600">
                    {isEn == "en" ? "Name " : "Nom "}
                  </span>
                  <span className="text-gray-500">:</span>
                  <span className="text-green-600">
                    {" KABORE Pawendtaore landry "}
                  </span>
                  <span className="text-gray-500">,</span>
                </motion.div>

                <motion.div
                  className="pl-6"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.6, duration: 0.3 }}
                >
                  <span className="text-purple-600">
                    {isEn == "en" ? "Skills " : " Compétences "}
                  </span>
                  <span className="text-gray-500">:</span>{" "}
                  <span className="text-orange-500">[</span>
                  <span className="text-green-600">'JavaScript'</span>
                  <span className="text-gray-500">,</span>{" "}
                  <span className="text-green-600">'React'</span>
                  <span className="text-gray-500">,</span>{" "}
                  <span className="text-green-600">'Node.js'</span>
                  <span className="text-orange-500">]</span>
                  <span className="text-gray-500">,...</span>
                </motion.div>

                <motion.div
                  className="pl-6"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.8, duration: 0.3 }}
                >
                  <span className="text-purple-600">
                    {" "}
                    {isEn == "en" ? "Languages " : " Langues "}
                  </span>
                  <span className="text-gray-500">:</span>{" "}
                  <span className="text-orange-500">[</span>
                  <span className="text-green-600">
                    {isEn == "en"
                      ? "French (native) "
                      : " Français (langue maternelle) "}
                  </span>
                  <span className="text-gray-500">,</span>{" "}
                  <span className="text-green-600">
                    {isEn == "en"
                      ? "English (proficient) "
                      : " Anglais (maîtrise)"}
                    '
                  </span>
                  <span className="text-orange-500">]</span>
                  <span className="text-gray-500">,</span>
                </motion.div>

                <motion.div
                  className="pl-6"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 2.0, duration: 0.3 }}
                >
                  <span className="text-purple-600">
                    {" "}
                    {isEn == "en" ? "Qualities " : " Qualités "}
                  </span>
                  <span className="text-gray-500">:</span>{" "}
                  <span className="text-orange-500">[</span>
                  <span className="text-green-600">
                    {isEn == "en" ? "Adaptable " : "Adaptable"}
                  </span>
                  <span className="text-gray-500">,</span>{" "}
                  <span className="text-green-600">
                    {isEn == "en" ? "Proactive" : "Proactif"}'
                  </span>
                  <span className="text-gray-500">,</span>
                  <span className="text-green-600">
                    {isEn == "en" ? "Creative " : "Créatif"}
                  </span>
                  <span className="text-gray-500">,</span>{" "}
                  <span className="text-green-600">
                    {isEn == "en" ? "Reliable" : "Fiable"}'
                  </span>
                  <span className="text-orange-500">]</span>
                  <span className="text-gray-500">,</span>
                </motion.div>

                <div>
                  <span className="text-orange-500">{"}"}</span>
                  <span className="text-gray-500">;</span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
