import { getLocale } from "next-intl/server";

const locale = getLocale();
export const projectsData = [
  {
    id: 1,
    name: locale == "en" ? "Portfolio Website" : "Site web portfolio",
    description:
      locale == "en"
        ? "A dynamic bilingual portfolio (French/English) built with Next.js, showcasing a fusion of clean design and interactive animations. It demonstrates technical expertise through a seamless, engaging user experience that transcends language barriers"
        : "Un portfolio bilingue dynamique (Français/Anglais) construit avec Next.js, alliant un design épuré à des animations interactives. Il démontre une expertise technique à travers une expérience utilisateur fluide et engageante, transcendant les barrières linguistiques.",
    tools: [
      "Next Js",
      "next-intl",
      "react",
      "react-fast-marquee",
      "react-icons",
      "styled-components",
      "tailwindcss",
    ],
    code: "",
    demo: "",
  },
  {
    id: 2,
    name: "en" ? "Digitalstation website" : "Site web de Digitalstation",
    description: "en"
      ? "A modern, multilingual corporate website for Digital Station, a startup specializing in web and mobile app development. Built with Next.js and featuring dynamic animations, it showcases their services with a professional online presence, complete with a custom domain (digitlstation.it.com) and professional email."
      : "Un site corporate moderne et multilingue pour Digital Station, une startup spécialisée dans le développement d'applications web et mobiles. Construit avec Next.js et animé de manière dynamique, il présente leurs services avec une présence en ligne professionnelle, incluant un nom de domaine personnalisé (digitlstation.it.com) et un email professionnel.",
    tools: ["NestJS", "TypeScript", "tailwindcss", "three js", "motion"],
    code: "",
    demo: "",
  },
  {
    id: 3,
    name: "en"
      ? "Website of the Embassy of Burkina Faso in India"
      : "Site web de l'ambassade du Burkina Faso en Inde",
    description: "en"
      ? "Redesigned and developed the official website for the Embassy of Burkina Faso in India using a modern full-stack architecture. The Next.js frontend delivers a superior, fully responsive user experience, while the Strapi headless CMS empowers embassy staff to autonomously manage and publish news content through an intuitive admin panel, eliminating dependency on developers for content updates."
      : "Refonte et développement du site officiel de l'Ambassade du Burkina Faso en Inde avec une architecture full-stack moderne. Le frontend Next.js offre une expérience utilisateur responsive et optimisée, tandis que le CMS headless Strapi permet au personnel diplomatique de gérer et publier autonomement le contenu actualités via un panneau d'administration intuitif, éliminant toute dépendance aux développeurs.",
    tools: [
      "Next Js",
      "Strapi",
      "tailwind css",
      "react-icons",
      "formik",
      "mantine",
      "primereact",
      "react-type-animation",
    ],
    code: "",
    role: "",
    demo: "",
  },
];
