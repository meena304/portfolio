import { motion } from "framer-motion";
import profileImg from "../../public/images/pro.png";

function Hero() {
  return (
    <section className="hero-section">

      <div className="container">

        <div className="hero-wrapper">

          {/* LEFT CONTENT */}
          <div className="hero-left">

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="hero-subtitle"
            >
              SHOPIFY & FULL STACK DEVELOPER
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="hero-title"
            >
              Crafting Premium
              <br />
              <span>Ecommerce</span> Experiences
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="hero-text"
            >
              Shopify-focused developer creating luxury storefronts,
              scalable React applications and modern ecommerce systems.
            </motion.p>

            <div className="hero-buttons">
              <a href="#projects" className="luxury-btn">
                View Projects
              </a>

              <a href="#contact" className="luxury-outline-btn">
                Contact Me
              </a>
            </div>

          </div>

          {/* RIGHT IMAGE */}
          <div className="hero-right">

            {/* <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="hero-image-box"
            >
              <img
                src={profileImg}
                alt="Meena Kumari"
                className="hero-image"
              />
            </motion.div> */}

          </div>

        </div>

      </div>

      {/* <div className="hero-circle"></div>
      <div className="hero-circle-2"></div> */}


    </section>
  );
}

export default Hero;