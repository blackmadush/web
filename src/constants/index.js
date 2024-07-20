import {
  ogilvy,
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  dashboard,
  dice_game,
  nextjsUi,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  ogcursive,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Associate Software Engineer",
    company_name: "Ogilvy Digital (Martech)",
    icon: ogcursive,
    iconBg: "#383E56",
    date: "April 2024 - Present",
    points: [
      "Developed a web app that captures contact details via a form and generates an e-card with the user's details, including a QR code containing the contact information for easy saving.",

      "QR Code to vCard Web Application: Created the frontend with React and the backend API with Python Flask.",

      "Website with Next.js: Created a website UI using Next.js and implemented OAuth for Google login.",

      "Project Management & Version Controlling:Utilized Jira for project management and issue tracking in an Agile/Scrum environment.Managed source code repositories using GitHub and Bitbucket, facilitating collaborative software development among team members.Used terminal for version control tasks, gaining proficiency in handling terminal/bash commands.",
    ],
  },
  {
    title: "Intern Software Engineer",
    company_name: "Ogilvy Digital (Martech)",
    icon: ogilvy,
    iconBg: "#383E56",
    date: "November 2023 - March 2024",
    points: [
      "Developed an interactive Sri Lankan Dice game and a Sinhala letter game using a robust tech stack that included MySQL, Sequelize, React, and Express.",

      "Sinhala Letter Game:  Implemented a 3D environment for the game using React Three Fiber and the Rapier physics engine to provide a realistic physics experience, including features like collision detection, gravity, friction, and velocity handling.  Incorporated Facebook login feature and cookie sessions for user authentication and session management.  Implemented navigation features and password hashing methods for secure user authorization.  Utilized Sequelize as an ORM to define models for structuring and passing data.  Leveraged Zustand for efficient state management across the application.",

      "Sri Lankan Dice Game:  Developed an interactive Sri Lankan Dice game using React and Three.js.  Integrated physics simulations using RapierJS for realistic game dynamics.  Implemented Facebook login for user authentication and used cookies for session management.  Added secure navigation and password hashing for user authorization.  Used Sequelize ORM to structure and manage game data.  Utilized Zustand for state management to enhance game performance.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Sri Lankan Dice Game",
    description:
      "Interactive dice game with 3D environment using React Three Fiber and Rapier. Features Facebook login, secure user authorization, and efficient state management with Zustand.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "three.js",
        color: "purple-text-gradient",
      },
      {
        name: "express",
        color: "pink-text-gradient",
      },
      {
        name: "mysql",
        color: "green-text-gradient",
      },
      {
        name: "zustand",
        color: "orange-text-gradient",
      },
    ],
    image: dice_game,
    source_code_link: "https://github.com/",
  },
  {
    name: "Website UI",
    description:
      "Website UI built with Next.js featuring Google OAuth for secure login.",
    tags: [
      {
        name: "next.js",
        color: "blue-text-gradient",
      },
      {
        name: "oauth",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: nextjsUi,
    source_code_link: "https://github.com/",
  },
  {
    name: "QR Code to vCard",
    description:
      "Web app to capture contact details and generate e-cards with QR codes. Built with React frontend and Python Flask backend.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "flask",
        color: "yellow-text-gradient",
      },
      {
        name: "materialUI",
        color: "green-text-gradient",
      },
    ],
    image: dashboard,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
