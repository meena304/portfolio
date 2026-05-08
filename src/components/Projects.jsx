




// export default projects;
import { useState } from "react";

const projects = [
  {
    id: 1,

    title: "BentDecor",

    category: "Luxury Home Decor",

    image: "/images/decor.png",

    live: "https://bentdecor.com/",

    year: "2026",

    description:
      "Premium Shopify ecommerce experience crafted for a luxury home decor brand with elegant storefront customization, modern collection layouts, and high-end shopping flows.",

    tech: ["Shopify", "Liquid", "JavaScript", "Responsive UI", "Ecommerce","Payment Integration"],

    points: [
      "Customized premium Shopify theme architecture.",
      "Built responsive luxury storefront experience.",
      "Optimized collection and product presentation.",
      "Integrated payment and shipping workflows.",
      "Improved storefront performance and UX.",
    ],
  },

  {
    id: 2,

    title: "BentRugs",

    category: "Luxury Rugs Store",

    image: "/images/rugs.png",

    live: "https://bentrugs.com/",

    year: "2025",

    description:
      "Elegant handcrafted rugs ecommerce platform designed with premium aesthetics, seamless shopping experience, and scalable Shopify storefront customization.",

    tech: ["Shopify", "Lovable", "Liquid", "JavaScript", "Storefront API" , "Payment Integration"],

    points: [
      "Built custom Shopify storefront UI.",
      "Managed product and collection systems.",
      "Created responsive product experiences.",
      "Designed modern ecommerce interactions.",
      "Handled deployment and optimization.",
    ],
  },

  {
    id: 3,

    title: "Kinaray",

    category: "Dinnerware Ecommerce",

    image: "/images/kinaray.png",

    live: "https://kinaray.in/",

    year: "2025",

    description:
      "Luxury dinnerware and lifestyle ecommerce website focused on refined product presentation, responsive layouts, and premium customer experience.",

    tech: ["Shopify", "Liquid", "Responsive Design", "Ecommerce","Payment Integration"],

    points: [
      "Designed custom product layouts.",
      "Built responsive storefront pages.",
      "Enhanced collection browsing experience.",
      "Configured ecommerce workflows.",
      "Optimized mobile shopping experience.",
    ],
  },

  {
    id: 4,

    title: "Bhumika Grover Couture",

    category: "Fashion Ecommerce",

    image: "/images/bhumika.png",

    live: "https://bhumikagrovercouture.com/",

    year: "2024",

    description:
      "Fashion-focused Shopify storefront developed with premium UI styling, responsive product experiences, and elegant collection management.",

    tech: ["Shopify", "Liquid", "Fashion Store", "Responsive UI","Payment Integration"],

    points: [
      "Customized premium fashion storefront.",
      "Implemented collection filtering systems.",
      "Created responsive product pages.",
      "Enhanced mobile shopping experience.",
      "Integrated product customization features.",
    ],
  },

  {
    id: 5,

    title: "Label Ankush Jain",

    category: "Designer Fashion Store",

    image: "/images/ankush.png",

    live: "https://labelankushjain.com/",

    year: "2024",

    description:
      "Modern Shopify fashion ecommerce experience designed for luxury product presentation and seamless customer interaction.",

    tech: ["Shopify", "Fashion Ecommerce", "Responsive UI","Payment Integration"],

    points: [
      "Customized Shopify storefront experience.",
      "Built responsive ecommerce layouts.",
      "Enhanced customer shopping journey.",
      "Optimized mobile responsiveness.",
      "Managed premium UI updates.",
    ],
  },

  {
    id: 6,

    title: "Angry Owl",

    category: "Lifestyle Clothing Brand",

    image: "/images/angryowl.png",

    live: "https://angryowl.in/",

    year: "2024",

    description:
      "Shopify ecommerce storefront customized for a modern clothing and lifestyle brand with responsive UI and optimized shopping workflows.",

    tech: ["Shopify", "Frontend Development", "Responsive Design"],

    points: [
      "Implemented custom frontend enhancements.",
      "Designed responsive storefront UI.",
      "Improved ecommerce shopping workflows.",
      "Optimized mobile user experience.",
      "Managed Shopify theme customization.",
    ],
  },
];

function Projects() {

  const [activeProject, setActiveProject] = useState(null);

  return (
    <section id="projects" className="section-padding dark-section">

      <div className="container">

        <div className="section-header">
          <p className="section-subtitle">
            SELECTED WORK
          </p>

          <h2 className="section-title">
            Featured
            <span> Projects</span>
          </h2>
        </div>

        {/* PROJECT GRID */}
        <div className="row g-4 mt-4">

          {projects.map((project) => (

            <div className="col-lg-6 mb-4" key={project.id}>

              <div
                className="modern-project-card"
                onClick={() => setActiveProject(project)}
              >

                <div className="modern-project-image">

                  <img
                    src={project.image}
                    alt={project.title}
                  />

                  <div className="project-overlay">

                    <span>
                      View Project
                    </span>

                  </div>

                </div>

                <div className="modern-project-content">

                  <div className="modern-project-top">
                    <span>{project.category}</span>
                    <small>{project.year}</small>
                  </div>

                  <h3>{project.title}</h3>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

      {/* POPUP */}
      {activeProject && (

        <div
          className="project-modal"
          onClick={() => setActiveProject(null)}
        >

          <div
            className="project-modal-content"
            onClick={(e) => e.stopPropagation()}
          >

            <button
              className="close-modal"
              onClick={() => setActiveProject(null)}
            >
              ×
            </button>

            <img
              src={activeProject.image}
              alt={activeProject.title}
              className="modal-image"
            />

            <div className="modal-body">

              <div className="modal-top">
                <span>{activeProject.category}</span>
                <small>{activeProject.year}</small>
              </div>

              <h2>{activeProject.title}</h2>

              <p>
                {activeProject.description}
              </p>

              <div className="tech-stack">

                {activeProject.tech.map((item, i) => (
                  <span key={i}>{item}</span>
                ))}

              </div>

              <a
                href={activeProject.live}
                target="_blank"
                className="luxury-btn"
              >
                Visit Website
              </a>

            </div>

          </div>

        </div>

      )}

    </section>
  );
}

export default Projects;