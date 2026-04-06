import { Link } from 'react-router-dom';

const topics = [
  {
    id: 1,
    title: "Accounts",
    description: "Manage sign-in issues, authentication, and account details.",
    image: "https://storage.googleapis.com/a1aa/image/a0e3c57c-da4e-4a4b-ae57-ef6b6455353d.jpg"
  },
  {
    id: 2,
    title: "Epic Games Store",
    description: "Resolve store issues and improve functionality.",
    image: "https://storage.googleapis.com/a1aa/image/eee07866-7104-4a7e-5a95-010477e16f95.jpg"
  },
  {
    id: 3,
    title: "Payments and purchases",
    description: "Manage payment methods and solve purchase issues.",
    image: "https://storage.googleapis.com/a1aa/image/e074d2f1-3058-45cc-910e-26c155936932.jpg"
  }
];

function Footer() {
  return (
    <footer className="main-footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="social-links">
            <a href="#" className="social-link"><i className="fab fa-facebook"></i> Facebook</a>
            <a href="#" className="social-link"><i className="fab fa-twitter"></i> Twitter</a>
            <a href="#" className="social-link"><i className="fab fa-youtube"></i> YouTube</a>
          </div>
          <button className="btn-back-to-top"><i className="fa fa-chevron-up"></i><a style={{textDecoration: 'none', color: 'white'}} href="#"> UP</a></button>
        </div>

        <div className="footer-content">
          <div className="footer-section">
            <h4>Marketplaces</h4>
            <ul>
              <li><a href="#">Epic Games Store</a></li>
              <li><a href="#">Fab</a></li>
              <li><a href="#">Sketchfab</a></li>
              <li><a href="#">ArtStation</a></li>
              <li><a href="#">Store Refund Policy</a></li>
              <li><a href="#">Store EULA</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Tools</h4>
            <ul>
              <li><a href="#">Unreal Engine</a></li>
              <li><a href="#">UEFN</a></li>
              <li><a href="#">MetaHuman</a></li>
              <li><a href="#">Twinmotion</a></li>
              <li><a href="#">Megascans</a></li>
              <li><a href="#">RealityScan</a></li>
              <li><a href="#">Rad Game Tools</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Online Services</h4>
            <ul>
              <li><a href="#">Epic Online Services</a></li>
              <li><a href="#">Kids Web Service</a></li>
              <li><a href="#">Services Agreement</a></li>
              <li><a href="#">Acceptable Use Policy</a></li>
              <li><a href="#">Trust Statement</a></li>
              <li><a href="#">Subprocessor List</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Company</h4>
            <ul>
              <li><a href="#">About</a></li>
              <li><a href="#">Newsroom</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Students</a></li>
              <li><a href="#">UX Research</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Resources</h4>
            <ul>
              <li><a href="#">Dev Community</a></li>
              <li><a href="#">MegaGrants</a></li>
              <li><a href="#">Support-A-Creator</a></li>
              <li><a href="#">Creator Agreement</a></li>
              <li><a href="#">Distribute on Epic Games</a></li>
              <li><a href="#">Unreal Engine Branding Guide</a></li>
              <li><a href="#">Fan Art Policy</a></li>
              <li><a href="#">Community Rules</a></li>
              <li><a href="#">EU Digital Services Act</a></li>
              <li><a href="#">Epic Pro Support</a></li>
            </ul>
          </div>
        </div>

        <div className="horizontal-divider"></div>

        <div className="copyright">
          <p>
            © 2025, Epic Games, Inc. All rights reserved. Epic, Epic Games, the Epic Games logo, Fortnite,
            the Fortnite logo, Unreal, Unreal Engine, the Unreal Engine logo, Unreal Tournament, and the Unreal
            Tournament logo are trademarks or registered trademarks of Epic Games, Inc. in the United States of
            America and elsewhere. Other brands or product names are the trademarks of their respective owners.
            Our websites may contain links to other sites and resources provided by third parties. These links
            are provided for your convenience only. Epic Games has no control over the contents of those sites
            or resources, and accepts no responsibility for them or for any loss or damage that may arise from
            your use of them.
          </p>
        </div>

        <div className="footer-bottom">
          <div className="footer-links">
            <a href="#">Terms of Service</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Store Refund Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function Support() {
  return (
    <>
      <nav className="navbar">
        <div className="nav-left">
          <div className="nav-logo">
            <Link to="/">
              <img alt="Epic Games logo" className="logo-img" height="32"
                src="https://storage.googleapis.com/a1aa/image/0d3ac8d2-8702-4a4d-a95b-bf132c0e198f.jpg"
                width="32" />
            </Link>
            <i className="fas fa-chevron-down chevron-icon"></i>
          </div>
          <a className="nav-link" href="#">Support</a>
          
          <div className="dropdown">
            <button aria-expanded="false" aria-haspopup="true" className="dropdown-button">
              <span>Explore topics</span>
              <i className="fas fa-chevron-down chevron-icon"></i>
            </button>
          </div>
          <div className="dropdown">
            <button aria-expanded="false" aria-haspopup="true" className="dropdown-button">
              <span>Games</span>
              <i className="fas fa-chevron-down chevron-icon"></i>
            </button>
          </div>
          <a className="nav-link" href="#">Server status</a>
        </div>
        <div className="nav-right">
          <button aria-label="Select language" className="language-button">
            <i className="fas fa-globe"></i>
          </button>
          <button className="sign-in-button"><Link style={{textDecoration: 'none', color: 'rgb(187, 187, 187)'}} to="/signin">Sign in</Link></button>
          <button className="download-button">Download</button>
        </div>
      </nav>

      <div className="hero-wrapper">
        <main className="main-hero">
          <div className="server-status">
            <span>Server status:</span>
            <span className="status-indicator">
              <i className="fas fa-check-circle"></i>
              <span>All systems operational</span>
            </span>
          </div>

          <div className="hero-heading">
            <p className="subtitle">Epic Games Support</p>
            <h1 className="title">How can we help?</h1>
          </div>

          <form aria-label="Search support" className="search-form" role="search">
            <label className="sr-only" for="search">Search support</label>
            <div className="search-container">
              <div className="search-icon">
                <i className="fas fa-search"></i>
              </div>
              <input className="search-input" id="search" name="search" placeholder="Search support..."
                type="search" />
            </div>
            <div className="terms">
              <p>By continuing, you agree to our Terms and acknowledge our Privacy Policy.</p>
            </div>
          </form>
        </main>
      </div>

      <h2 className="section-title">Explore topics</h2>
      <section aria-label="Explore topics" className="topics-grid">
        {topics.map(topic => (
          <article key={topic.id} aria-label={`${topic.title}: ${topic.description}`}
            className="topic-card" role="link" tabIndex="0">
            <img alt={topic.title} className="topic-img" height="400" loading="lazy"
              src={topic.image}
              width="600" />
            <div className="topic-content">
              <h3 className="topic-title">{topic.title}</h3>
              <p className="topic-description">{topic.description}</p>
            </div>
          </article>
        ))}
      </section>

      <Footer />

      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
          line-height: 1.5;
          color: white;
          background-color: #0c0c0f;
        }

        .sr-only {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          white-space: nowrap;
          border-width: 0;
        }

        .navbar {
          background: linear-gradient(to right, #1a1330, #2a1a4a);
          padding: 0.75rem 1.5rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          position: fixed;
          z-index: 1;
        }

        .nav-left {
          display: flex;
          align-items: center;
          gap: 2rem;
        }

        .nav-logo {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          cursor: pointer;
        }

        .logo-img {
          width: 2rem;
          height: 2rem;
        }

        .chevron-icon {
          color: white;
          font-size: 0.75rem;
        }

        .nav-link {
          color: white;
          text-decoration: none;
          font-size: 0.875rem;
          font-weight: normal;
          transition: color 0.2s ease;
        }

        .nav-link:hover {
          color: #00b8ff;
        }

        .dropdown {
          position: relative;
        }

        .dropdown-button {
          color: white;
          font-size: 0.875rem;
          font-weight: normal;
          background: none;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 0.25rem;
          transition: color 0.2s ease;
        }

        .dropdown-button:hover {
          color: #00b8ff;
        }

        .nav-right {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .language-button {
          color: white;
          font-size: 1.125rem;
          background: none;
          border: none;
          cursor: pointer;
          transition: color 0.2s ease;
        }

        .language-button:hover {
          color: #00b8ff;
        }

        .sign-in-button {
          background-color: #3a3a4a;
          color: white;
          font-size: 0.875rem;
          font-weight: 600;
          border-radius: 0.375rem;
          padding: 0.5rem 1rem;
          border: none;
          cursor: pointer;
          transition: background-color 0.2s ease;
        }

        .sign-in-button:hover {
          background-color: #4a4a5a;
        }

        .download-button {
          background-color: #00b8ff;
          color: black;
          font-size: 0.875rem;
          font-weight: 600;
          border-radius: 0.375rem;
          padding: 0.5rem 1rem;
          border: none;
          cursor: pointer;
          transition: background-color 0.2s ease;
        }

        .download-button:hover {
          background-color: #00a0e6;
        }

        .hero-wrapper {
          background-image: url(https://cdn2.unrealengine.com/header-bg-default-1920x1140-eeabcf66d1d5.jpg);
          width: 100%;
          height: 54vw;
        }

        .main-hero {
          position: relative;
          padding: 1.5rem 1.5rem 2.5rem;
          max-width: 1280px;
          margin: 0 auto;
        }

        @media (min-width: 768px) {
          .main-hero {
            padding: 4rem 1.5rem;
          }
        }

        @media (min-width: 1024px) {
          .main-hero {
            padding: 5rem 1.5rem;
          }
        }

        .server-status {
          position: absolute;
          top: 5rem;
          right: 1.5rem;
          background-color: #1a1330;
          border-radius: 0.375rem;
          padding: 0.5rem 1rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.875rem;
          min-width: 280px;
        }

        .status-indicator {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          font-weight: 600;
          color: #10b981;
        }

        .hero-heading {
          text-align: center;
          max-width: 64rem;
          margin: 0 auto;
          margin-top: 12vw;
          margin-bottom: 2rem;
        }

        .subtitle {
          color: white;
          font-size: 1.125rem;
          margin-bottom: 0.5rem;
        }

        .title {
          color: white;
          font-weight: 800;
          font-size: 3rem;
          line-height: 1.2;
        }

        @media (min-width: 768px) {
          .title {
            font-size: 3.75rem;
          }
        }

        .search-form {
          max-width: 64rem;
          margin: 0 auto;
          margin-bottom: 4rem;
        }

        .search-container {
          position: relative;
          color: #9ca3af;
        }

        .search-container:focus-within {
          color: #4b5563;
        }

        .search-icon {
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          padding-left: 0.75rem;
          display: flex;
          align-items: center;
          pointer-events: none;
        }

        .search-input {
          display: block;
          width: 100%;
          border-radius: 9999px;
          border: 1px solid #d1d5db;
          background-color: transparent;
          padding: 0.75rem;
          padding-left: 2.5rem;
          padding-right: 1rem;
          color: white;
          font-size: 0.875rem;
          outline: 2px solid white;
        }

        .terms {
          margin-left: 15vw;
          margin-top: 1vw;
        }

        .search-input::placeholder {
          color: #9ca3af;
        }

        .search-input:focus {
          outline: none;
          box-shadow: 0 0 0 2px #00b8ff;
          border-color: transparent;
        }

        .section-title {
          color: white;
          font-weight: 800;
          font-size: 1.5rem;
          margin-bottom: 1.5rem;
          max-width: 1280px;
          margin-left: auto;
          margin-right: auto;
          padding: 0 1.5rem;
        }

        .topics-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
          margin-bottom: 3rem;
          max-width: 1280px;
          margin-left: auto;
          margin-right: auto;
          padding: 0 1.5rem;
        }

        @media (min-width: 640px) {
          .topics-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 1024px) {
          .topics-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        .topic-card {
          position: relative;
          border-radius: 0.75rem;
          overflow: hidden;
          cursor: pointer;
        }

        .topic-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 0.75rem;
          transition: transform 0.3s;
        }

        .topic-card:hover .topic-img {
          transform: scale(1.05);
        }

        .topic-content {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.8), transparent);
          padding: 1.5rem;
        }

        .topic-title {
          color: white;
          font-weight: 700;
          font-size: 1.125rem;
          margin-bottom: 0.25rem;
        }

        .topic-description {
          color: white;
          font-size: 0.875rem;
          line-height: 1.5;
        }
      `}</style>
    </>
  );
}

export default Support;
