import {
  FaShopify,
  FaReact,
  FaNodeJs,
} from 'react-icons/fa'

function Skills() {
  return (
    <section id="skills" className="section-padding">
      <div className="container">
        <div className="text-center mb-5">
          <p className="section-label">
            EXPERTISE
          </p>

          <h2 className="section-title">
            Shopify Focused Engineering
          </h2>
        </div>

        <div className="row g-4">
          <div className="col-lg-4">
            <div className="skill-card">
              <FaShopify className="skill-icon" />

              <h3>Shopify Development</h3>

              <p>
                Custom themes, storefront customization,
                performance optimization and luxury ecommerce experiences.
              </p>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="skill-card">
              <FaReact className="skill-icon" />

              <h3>Frontend Engineering</h3>

              <p>
                React.js, responsive UI systems,
                conversion-focused design and modern interactions.
              </p>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="skill-card">
              <FaNodeJs className="skill-icon" />

              <h3>Backend Systems</h3>
                <p>
                Node.js APIs, integrations, automations,
                ecommerce workflows and scalable architecture.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills