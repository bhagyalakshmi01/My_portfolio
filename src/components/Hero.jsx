import "./Hero.css";
import profileImg from "../assets/profile.png";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">

        {/* IMAGE ON LEFT */}
        <div className="hero-image">
          <img src={profileImg} alt="Bhagyalakshmi profile" />
        </div>

        {/* TEXT ON RIGHT */}
        <div className="hero-content">
          <h1 className="hero-name">
            <span>Bhagyalakshmi L N</span>
          </h1>

          <h6 className="hero-role">
            REACT DEVELOPER • FRONTEND DEVELOPER • DATA SCIENCE ENTHUSIAST • PROBLEM SOLVER
          </h6>

          <p className="hero-desc">
            I build clean, responsive, and real-world web applications using React,
            focusing on performance, usability, and maintainable code.
          </p>

          <div className="hero-buttons">
            <a
              href="/Bhagyalakshmi_LN_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn primary"
            >
              View Resume
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;
