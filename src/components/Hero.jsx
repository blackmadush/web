import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import QRCode from "react-qr-code"; // Import the new QR code library

// Import icons for social media
import { FaLinkedin, FaGithub, FaInstagram, FaFacebook } from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";

const Hero = () => {
  const [playAnimation, setPlayAnimation] = useState(false);

  useEffect(() => {
    console.log("Hero component mounted");
    setPlayAnimation(true);
  }, []);

  const vCard = `
BEGIN:VCARD
VERSION:3.0
FN:Madusha Bandara
EMAIL:dlmlbandara@gmail.com
TEL:+94718839996
ORG:Your Organization
TITLE:Full Stack Developer
URL:https://www.linkedin.com/in/madushabandara
URL:https://www.facebook.com/dlmlbandara
URL:https://instagram.com/blackmadush
END:VCARD
`;

  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-col md:flex-row items-start gap-5`}
      >
        <div className="md:w-1/2 flex flex-col justify-center">
          <h1 className={`${styles.heroHeadText} text-white whitespace-nowrap`}>
            Hi, I'm <br></br>
            <span className="text-[#23c55e]">Madush</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I'm a full stack Developer <br className="sm:block hidden" />
            who is interested in Computational Sciences!
          </p>

          {/* QR Code with padding and white background, hidden on mobile and tablet */}
          <div className="flex flex-col lg:flex-row items-start lg:items-center lg:gap-10 mt-5">
            <div className="bg-black mt-5 p-2 hidden lg:block">
              <QRCode
                value={vCard}
                size={128}
                bgColor={"#000000"}
                fgColor={"#ffffff"}
                level="H" // High error correction level
              />
              <span className="text-white mt-2 block text-center">Scan me</span>
            </div>

            {/* Contact Info */}
            <div className="text-white flex flex-col gap-2">
              <p className="flex items-center">
                <MdEmail className="mr-2" /> dlmlbandara@gmail.com
              </p>
              <p className="flex items-center">
                <MdPhone className="mr-2" /> +94718839996
              </p>
              {/* Social Media Links */}
              <div className="flex gap-4 mt-5 lg:mt-0">
                <a
                  href="https://www.linkedin.com/in/madushabandara"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#23c55e]"
                >
                  <FaLinkedin size={30} />
                </a>
                <a
                  href="https://github.com/blackmadush"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#23c55e]"
                >
                  <FaGithub size={30} />
                </a>
                <a
                  href="https://www.facebook.com/dlmlbandara"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#23c55e]"
                >
                  <FaFacebook size={30} />
                </a>
                <a
                  href="https://instagram.com/blackmadush"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#23c55e]"
                >
                  <FaInstagram size={30} />
                </a>
              </div>
              <div className="mt-2" />
              <div className="mt-5 lg:mt-0">
                <a
                  href="src/assets/Resume/Madusha-Bandara-ASE-Professional-resume.pdf"
                  download
                  className="bg-[#23c55e] text-white py-2 px-4 rounded-lg hover:bg-[#1da551] transition-colors"
                >
                  Download CV
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="md:w-1/2 order-2 md:order-1">
          <ComputersCanvas playAnimation={playAnimation} />
        </div>
      </div>

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
