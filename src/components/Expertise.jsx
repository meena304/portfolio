const expertise = [
  {
    title: "Shopify Development",
    text: "Custom themes, Liquid architecture, premium storefront experiences.",
  },
  {
    title: "Full Stack Apps",
    text: "React dashboards, scalable Node APIs, real-time systems.",
  },
  {
    title: "API Integrations",
    text: "Freshsales, POS, IVR, payments and workflow automation.",
  },
  {
    title: "Luxury UI/UX",
    text: "Elegant ecommerce focused interfaces with premium aesthetics.",
  },
];

function Expertise() {
  return (
    <section id="expertise" className="section-padding">
      <div className="container">
        <div className="section-header">
          <p className="section-subtitle">EXPERTISE</p>
          <h2 className="section-title">
            Premium Ecommerce
            <span> Solutions</span>
          </h2>
        </div>

        <div className="row g-4 mt-4">
          {expertise.map((item, index) => (
            <div className="col-lg-6" key={index}>
              <div className="expertise-card">
                <div className="expertise-number">
                  0{index + 1}
                </div>

                <h3>{item.title}</h3>

                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Expertise;