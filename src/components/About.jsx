import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import madushImage from "/src/assets/madush.jpeg";

const About = () => {
  return (
    <section className="w-full">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <motion.div
          variants={textVariant()}
          className="text-center lg:text-left"
        >
          <p className={styles.sectionSubText}>Introduction</p>
          <h2 className={styles.sectionHeadText}>Overview.</h2>
        </motion.div>

        <motion.div
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4 flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12"
        >
          <div className="flex justify-center w-full lg:w-1/3 relative">
            <div className="relative w-[350px] h-[350px] md:w-[300px] md:h-[300px] rounded-full overflow-hidden">
              <img
                src={madushImage}
                alt="Madush"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black to-transparent"></div>
            </div>
          </div>
          <p className="text-secondary text-[17px] leading-[30px] w-full lg:w-2/3 text-justify">
            Hello! I'm Madusha Bandara, an Associate Software Engineer with a
            BSc in Computer Science and Mathematics from the University of
            Kelaniya, graduated in 2023. Since November 2023, I've been gaining
            experience at Ogilvy Digital (Martech) in technologies such as Java,
            Python, C, JavaScript (ReactJS, NextJS, ExpressJS, ThreeJS,
            RapierJS, React Three Fiber), and SQL (MySQL).
            <br />
            <br />
            My notable projects include developing interactive games with 3D
            environments, creating a QR code to vCard web app using React and
            Python Flask, and building a website UI with Next.js. Passionate
            about continuous learning and innovation, I thrive in dynamic,
            collaborative environments. With strong project management skills
            using Jira and Bitbucket, I aim to contribute to cutting-edge
            projects and grow alongside a talented team. Thank you for visiting
            my portfolio—I look forward to connecting and exploring potential
            opportunities.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default SectionWrapper(About, "about");
