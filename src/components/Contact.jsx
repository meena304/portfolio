function Contact() {
  return (
    <section id="contact" className="contact-section">

      <div className="container">

        <div className="contact-wrapper">

          {/* LEFT */}
          <div className="contact-left">

            <h2 className="contact-heading">
              Contact
            </h2>

            <p className="contact-description">
              I would love to hear about your project and how I could help.
              Please fill in the form, and I’ll get back to you as soon as possible.
            </p>

          </div>

          {/* RIGHT */}
          <div className="contact-right">

            <form
              action="https://formsubmit.co/mku304@gmail.com"
              method="POST"
              className="contact-form"
            >

              {/* disable captcha */}
              <input type="hidden" name="_captcha" value="false" />

              {/* redirect after submit */}
              <input
                type="hidden"
                name="_next"
                value="https://portfolio-jet-theta-74.vercel.app/"
              />

              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="NAME"
                />
              </div>

              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="EMAIL"
                />
              </div>

              <div className="form-group">
                <textarea
                  name="message"
                  rows="5"
                  required
                  placeholder="MESSAGE"
                ></textarea>
              </div>

              <button type="submit" className="send-btn">
                SEND MESSAGE
              </button>

            </form>

          </div>

        </div>

        {/* FOOTER */}
        {/* <div className="contact-footer">

          <h3 className="footer-logo">
            meena<span>kumari</span>
          </h3>

          <div className="footer-socials">

            <a
              href="https://github.com/"
              target="_blank"
            >
              <i className="bi bi-github"></i>
            </a>

            <a
              href="https://linkedin.com/"
              target="_blank"
            >
              <i className="bi bi-linkedin"></i>
            </a>

            <a
              href="https://twitter.com/"
              target="_blank"
            >
              <i className="bi bi-twitter"></i>
            </a>

          </div>

        </div> */}

      </div>

    </section>
  );
}

export default Contact;