// src/components/Systems.jsx

import { motion } from "framer-motion";

const systems = [
  {
    id: "01",

    title: "CRM Automation System",

    description:
      "Integrated Freshsales CRM with IVR systems and automated lead workflows using scalable Node.js and Express APIs.",

    stack: [
      "Node.js",
      "Express",
      "Freshsales API",
      "MySQL",
      "Webhooks",
    ],

    impact:
      "Reduced support response workflows by 25% through automated CRM synchronization.",
  },

  {
    id: "02",

    title: "Restaurant Management Dashboard",

    description:
      "Developed a full-stack restaurant operations dashboard with realtime monitoring, order management and API-driven workflows.",

    stack: [
      "React",
      "Node.js",
      "Express",
      "MySQL",
      "REST APIs",
    ],

    impact:
      "Streamlined restaurant operations with centralized realtime management systems.",
  },

  {
    id: "03",

    title: "POS & CRM Synchronization",

    description:
      "Built backend APIs to synchronize POS billing systems with Freshsales CRM for automated invoice and customer data management.",

    stack: [
      "Node.js",
      "Express",
      "Freshsales",
      "Automation",
      "REST APIs",
    ],

    impact:
      "Improved operational efficiency and eliminated manual invoice syncing workflows.",
  },

  {
    id: "04",

    title: "IVR Integration Platform",

    description:
      "Integrated IVR telephony systems into CRM workflows to provide instant customer data access for support teams.",

    stack: [
      "Express.js",
      "Node.js",
      "IVR Systems",
      "CRM",
      "Automation",
    ],

    impact:
      "Enabled faster customer handling and realtime call workflow automation.",
  },
];

function Systems() {
  return (
    <section id="systems" className="systems-section section-padding">

      <div className="container">

        <div className="section-header">

          <p className="section-subtitle">
            SYSTEMS & INTEGRATIONS
          </p>

          <h2 className="section-title">
            Backend
            <span> Engineering</span>
          </h2>

        </div>

        <div className="systems-wrapper">

          {systems.map((system, index) => (

            <motion.div
              key={index}
              className="system-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >

              {/* LEFT */}
              <div className="system-left">

                <span className="system-number">
                  {system.id}
                </span>

                <h3>
                  {system.title}
                </h3>

              </div>

              {/* RIGHT */}
              <div className="system-right">

                <p className="system-description">
                  {system.description}
                </p>

                <div className="system-tags">

                  {system.stack.map((item, i) => (
                    <span key={i}>
                      {item}
                    </span>
                  ))}

                </div>

                <div className="system-impact">

                  <small>
                    IMPACT
                  </small>

                  <p>
                    {system.impact}
                  </p>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Systems;