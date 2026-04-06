import { Link } from 'react-router-dom';

const features = [
  {
    id: 1,
    title: "Reach a Global Audience",
    description: "Direct distribution to over 270 million Epic users across 187 countries with 16 languages supported.",
    image: "https://storage.googleapis.com/a1aa/image/a897de5d-d462-4698-9213-6f6e6424526f.jpg"
  },
  {
    id: 2,
    title: "88%/12% Revenue Split",
    description: "Keep 88% of the revenue and monitor product performance with integrated analytics dashboards.",
    image: "https://storage.googleapis.com/a1aa/image/fa235f78-7da8-4d77-9f31-3b14768558fe.jpg"
  },
  {
    id: 3,
    title: "Drive Player Engagement",
    description: "Tap into store features like wishlists, achievements, store-wide promotions and more!",
    image: "https://storage.googleapis.com/a1aa/image/6cbc3582-5bd7-4a65-bc64-bd94d5c6e037.jpg"
  }
];

const additionalFeatures = [
  {
    id: 1,
    title: "Worldwide E-Commerce",
    description: "Epic's payment service supports 100+ payment methods with 43 regional currencies and more on the way.",
    image: "https://storage.googleapis.com/a1aa/image/ba0053c4-f3e8-4de6-1b43-52671f2c6730.jpg"
  },
  {
    id: 2,
    title: "Epic Wallet",
    description: "Users can load up their Wallet with funds to spend on products and services in the store, now available in more than 180 countries.",
    image: "https://storage.googleapis.com/a1aa/image/0f368443-feb6-49e4-44b6-22a723347be8.jpg"
  },
  {
    id: 3,
    title: "Additional Benefits",
    description: "Easy IARC ratings in Epic Developer Portal, request no-cost localization for store pages and activate our Support-A-Creator affiliate network.",
    image: "https://storage.googleapis.com/a1aa/image/1772931d-4f24-479f-de80-b47a5d213745.jpg"
  }
];

const faqs = [
  {
    id: 1,
    question: "Why should I distribute my game on the Epic Games Store?",
    answer: "The Epic Games Store has a global audience of over 230M+ users, a 88%/12% revenue split and additional no-cost services to help bring your game to market. For games built on Unreal Engine, engine royalty fees are waived for in-store purchases using Epic's payment processor. In-app purchases and products using their own payment processor are not exempt from engine royalties.",
    isOpen: true
  },
  {
    id: 2,
    question: "My game is built with Unity or another engine, can I bring it to the Epic Games store?",
    answer: "",
    isOpen: false
  },
  {
    id: 3,
    question: "What are the Epic Games Store self-service publishing tools?",
    answer: "",
    isOpen: false
  },
  {
    id: 4,
    question: "What is the Epic Developer Portal?",
    answer: "",
    isOpen: false
  },
  {
    id: 5,
    question: "What other developer tools does Epic offer?",
    answer: "",
    isOpen: false
  },
  {
    id: 6,
    question: "How do I distribute games on the Epic Games Store?",
    answer: "",
    isOpen: false
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
          <button className="btn-back-to-top"><i className="fa fa-chevron-up"></i><a href="#"> UP</a></button>
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
            © 2025, Epic Games, Inc. All rights reserved. Epic, Epic Games, the Epic Games logo, Fortnite, the
            Fortnite logo, Unreal, Unreal Engine, the Unreal Engine logo, Unreal Tournament, and the Unreal
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

function Distribute() {
  return (
    <>
      <div className="header-container">
        <div className="header-left">
          <Link to="/">
            <div className="logo">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Epic_Games_logo.svg/1034px-Epic_Games_logo.svg.png" alt="Epic Games Logo" />
            </div>
          </Link>
          <nav className="main-nav">
            <ul>
              <li className="nav-item active"><p>STORE</p></li>
              <Link to="/support" className="nav-item">Support</Link>
              <Link to="/distribute" className="nav-item">Distribute</Link>
            </ul>
          </nav>
        </div>
        <div className="header-right">
          <ul>
            <li className="language-selector">
              <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4MHB4IiBoZWlnaHQ9IjgwcHgiIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZmlsbD0iI2ZmZiIgZD0iTTEyIDIycS0yLjA1IDAtMy44NzUtLjc4OHQtMy4xODctMi4xNXQtMi4xNS0zLjE4N1QyIDEycTAtMi4wNzUuNzg4LTMuODg3dDIuMTUtMy4xNzV0My4xODctMi4xNVQxMiAycTIuMDc1IDAgMy44ODguNzg4dDMuMTc0IDIuMTV0Mi4xNSAzLjE3NVQyMiAxMnEwIDIuMDUtLjc4OCAzLjg3NXQtMi4xNSAzLjE4OHQtMy4xNzUgMi4xNVQxMiAyMm0wLTIuMDVxLjY1LS45IDEuMTI1LTEuODc1VDEzLjkgMTZoLTMuOHEuMyAxLjEuNzc1IDIuMDc1VDEyIDE5Ljk1bS0yLjYtLjRxLS40NS0uODI1LS43ODctMS43MTNUOC4wNSAxNkg1LjFxLjcyNSAxLjI1IDEuODEzIDIuMTc1VDkuNCAxOS41NW01LjIgMHExLjQtLjQ1IDIuNDg4LTEuMzc1VDE4LjkgMTZoLTIuOTVxLS4yMjUuOTUtLjU2MiAxLjgzOFQxNC42IDE5LjU1TTQuMjUgMTRoMy40cS0uMDc1LS41LS4xMTItLjk4N1Q3LjUgMTJ0LjAzOC0xLjAxMlQ3LjY1IDEwaC0zLjRxLS4xMjUuNS0uMTg3Ljk4OFQ0IDEydC4wNjMgMS4wMTN0LjE4Ny45ODdtNS40IDBoNC43cS4wNzUtLjUuMTEzLS45ODdUMTQuNSAxMnQtLjAzOC0xLjAxMlQxNC4zNSAxMGgtNC43cS0uMDc1LjUtLjExMi45ODhUOS41IDEydC4wMzggMS4wMTN0LjExMi45ODdtNi43IDBoMy40cS4xMjUtLjUuMTg4LS45ODdUMjAgMTJ0LS4wNjItMS4wMTJUMTkuNzUgMTBoLTMuNHEuMDc1LjUuMTEzLjk4OFQxNi41IDEydC0uMDM4IDEuMDEzdC0uMTEyLjk4N20tLjQtNmgyLjk1cS0uNzI1LTEuMjUtMS44MTItMi4xNzVUMTQuNiA0LjQ1cS40NS44MjUuNzg4IDEuNzEzVDE1Ljk1IDhNMTAuMSA4aDMuOHEtLjMtMS4xLS43NzUtMi4wNzVUMTIgNC4wNXEtLjY1LjktMS4xMjUgMS44NzVUMTAuMSA4bS01IDBoMi45NXEuMjI1LS45NS41NjMtMS44MzhUOS40IDQuNDVROCA0LjkgNi45MTIgNS44MjVUNS4xIDgiLz48L3N2Zz4=" alt="language selector" />
            </li>
            <li className="sign-in"><Link to="/signin">SIGN IN</Link></li>
            <li className="download-button">DOWNLOAD</li>
          </ul>
        </div>
      </div>

      <nav className="main-nav store-nav">
        <form className="search-form">
          <input placeholder="Search store" type="text" />
          <i className="fas fa-search search-icon"></i>
        </form>
        
        <Link to="/">Discover</Link>
        <Link to="/">Browse</Link>
        <Link to="/">News</Link>
      </nav>

      <main>
        <section className="hero">
          <img className="hero-image" alt="Illustration of computer screen with mouse and colorful blocks floating around"
            src="https://cdn2.unrealengine.com/epic-games-store-self-service-publishing-tools-4554ceb470ed.webp" />
          <div className="hero-content">
            <img className="epic-logo" alt="Epic Games Store logo in white"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Epic_Games_logo.svg/1034px-Epic_Games_logo.svg.png" />
            <h1>Open to all PC developers and publishers.</h1>
            <button className="cta-button">Sign up today</button>
            <p className="hero-description">Start distributing PC games on the Epic Games Store with our new
              self-service publishing tools.</p>
          </div>
        </section>

        <section className="features">
          {features.map(feature => (
            <div key={feature.id} className="feature-card">
              <img alt={feature.title} src={feature.image} />
              <h2>{feature.title}</h2>
              <p>{feature.description}</p>
            </div>
          ))}
        </section>

        <section className="additional-features">
          {additionalFeatures.map(feature => (
            <article key={feature.id} className="feature-card">
              <img alt={feature.title} src={feature.image} />
              <h2>{feature.title}</h2>
              <p>{feature.description}</p>
            </article>
          ))}
        </section>

        <section className="faq-section">
          <h1>Frequently Asked Questions</h1>

          <div className="faq-list">
            {faqs.map(faq => (
              <article key={faq.id} className={`faq-item ${faq.isOpen ? 'faq-open' : ''}`}>
                <div className="faq-question">
                  <h2>{faq.question}</h2>
                  <span className="faq-toggle">{faq.isOpen ? '—' : '+'}</span>
                </div>
                {faq.answer && <p className="faq-answer">{faq.answer}</p>}
              </article>
            ))}
          </div>
        </section>
      </main>

      <Footer />

      <style>{`
        @import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap");

        :root {
          --epic-dark: #121212;
          --epic-dark-gray: #202020;
          --epic-mid-gray: #2a2a2a;
          --epic-light-gray: #cdcdcd;
          --epic-blue: #0074e4;
          --epic-hover-blue: #0060bb;
          --epic-sale-blue: #5656fd;
          --epic-text: #ffffff;
          --epic-section-gray: rgba(81, 81, 81, 0.5);
          --epic-divider: rgba(91, 91, 91, 0.5);
          --border-radius-sm: 4px;
          --border-radius-md: 8px;
          --border-radius-lg: 12px;
          --transition-speed: 0.2s;
        }

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: "Inter", sans-serif;
          background-color: #121217;
          color: #e6e6e6;
          min-height: 100vh;
          overflow-y: auto;
        }

        ul {
          list-style-type: none;
        }

        a {
          text-decoration: none;
          color: inherit;
          transition: color var(--transition-speed) ease;
        }

        a:hover {
          color: var(--epic-text);
        }

        button {
          cursor: pointer;
          font-family: inherit;
          border: none;
          outline: none;
          font-weight: 600;
          transition: all var(--transition-speed) ease;
        }

        img {
          max-width: 100%;
          height: auto;
          display: block;
        }

        .header-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 20px;
          height: 60px;
        }

        .header-left, .header-right {
          display: flex;
          align-items: center;
          height: 100%;
        }

        .logo {
          padding: 0 20px 0 0;
          display: flex;
          align-items: center;
        }

        .logo img {
          height: 36px;
          width: auto;
        }

        .main-nav ul {
          display: flex;
          align-items: center;
          height: 100%;
        }

        .nav-item {
          padding: 0 20px;
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--epic-light-gray);
          cursor: pointer;
          transition: color var(--transition-speed) ease;
          display: flex;
          align-items: center;
          height: 100%;
          letter-spacing: 0.5px;
        }

        .nav-item p {
          font-size: 1.2rem;
        }

        .nav-item:hover, .nav-item.active {
          color: var(--epic-text);
        }

        .header-right ul {
          display: flex;
          align-items: center;
          height: 100%;
        }

        .language-selector {
          padding: 0 15px;
          cursor: pointer;
          display: flex;
          align-items: center;
        }

        .language-selector img {
          width: 20px;
          height: 20px;
        }

        .sign-in {
          padding: 5px 10px;
          margin-right: 15px;
          border-radius: 5px;
          font-size: 0.75rem;
          background-color: #3f3f3f;
          font-weight: 700;
          color: var(--epic-light-gray);
          cursor: pointer;
          transition: color var(--transition-speed) ease;
          display: flex;
          align-items: center;
          letter-spacing: 0.5px;
        }

        .sign-in:hover {
          color: var(--epic-text);
        }

        .download-button {
          background-color: var(--epic-blue);
          color: var(--epic-text);
          font-size: 0.75rem;
          font-weight: 700;
          padding: 5px 10px;
          border-radius: 5px;
          cursor: pointer;
          transition: background-color var(--transition-speed) ease;
          display: flex;
          align-items: center;
          letter-spacing: 0.5px;
        }

        .download-button:hover {
          background-color: var(--epic-hover-blue);
        }

        .store-nav {
          display: flex;
          position: sticky;
          top: 0.001vw;
          margin-bottom: 50px;
          background-color: #121212;
          align-items: center;
          width: 100%;
          padding: 20px 0;
          z-index: 20;
        }

        .search-form {
          display: flex;
          align-items: center;
          flex: 1;
          margin-left: 10vw;
          max-width: 20rem;
          position: relative;
        }

        .search-form input {
          width: 100%;
          border-radius: 9999px;
          background-color: #1B1B22;
          padding: 0.5rem 1rem 0.5rem 2.5rem;
          font-size: 0.875rem;
          color: #e6e6e6;
          border: none;
        }

        .search-form input::placeholder {
          color: #A3A3A3;
        }

        .search-form input:focus {
          outline: none;
        }

        .search-icon {
          margin-left: 10vw;
          position: absolute;
          left: 0.75rem;
          color: #A3A3A3;
        }

        .main-nav {
          display: flex;
          gap: 2rem;
          font-size: 0.875rem;
          font-weight: normal;
          margin-left: auto;
          margin-right: 10vw;
        }

        .main-nav a {
          color: #e6e6e6;
          text-decoration: none;
        }

        .main-nav a:hover {
          text-decoration: underline;
        }

        main {
          padding: 0 6rem 6rem;
        }

        section {
          margin-bottom: 2rem;
        }

        .hero {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
          border-radius: 0.5rem;
          overflow: hidden;
          background: linear-gradient(90deg, #00003B 0%, #1B0E4B 100%);
          padding: 2rem;
          min-height: 400px;
        }

        .hero-image {
          width: 50%;
          object-fit: contain;
          max-height: 100%;
        }

        .hero-content {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: 2rem;
          gap: 1.5rem;
          width: 50%;
          justify-content: center;
        }

        .epic-logo {
          margin-bottom: 1rem;
          height: 6rem;
          width: 6rem;
        }

        .hero h1 {
          font-size: 2.5rem;
          font-weight: 800;
          line-height: 1.2;
          max-width: 30rem;
          margin-bottom: 1rem;
        }

        .cta-button {
          background-color: white;
          color: black;
          font-weight: bold;
          font-size: 1rem;
          text-transform: uppercase;
          border-radius: 0.375rem;
          padding: 0.75rem 2.5rem;
          letter-spacing: 0.1em;
          border: none;
          cursor: pointer;
          transition: background-color 0.2s;
          margin: 1rem 0;
        }

        .cta-button:hover {
          background-color: #e6e6e6;
        }

        .hero-description {
          font-size: 1rem;
          max-width: 30rem;
          margin-top: 0.5rem;
        }

        .features, .additional-features {
          display: grid;
          grid-template-columns: repeat(1, 1fr);
          gap: 1.5rem;
          margin-top: 2rem;
        }

        .feature-card {
          border: 1px solid #2A2A33;
          border-radius: 0.75rem;
          padding: 2rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .feature-card img {
          margin-bottom: 2rem;
          height: 6.25rem;
          width: 6.25rem;
        }

        .feature-card h2 {
          color: white;
          font-size: 1.25rem;
          line-height: 1.3;
          margin-bottom: 1.5rem;
          font-weight: normal;
        }

        .feature-card p {
          color: #B9B9B9;
          font-weight: 600;
          line-height: 1.5;
          max-width: 20rem;
        }

        .faq-section {
          max-width: 64rem;
          margin: 3rem auto;
          padding: 0 1.5rem;
        }

        .faq-section h1 {
          color: white;
          text-align: center;
          font-size: 1.5rem;
          font-weight: normal;
          margin-bottom: 4rem;
        }

        .faq-list {
          border-top: 1px solid #222227;
        }

        .faq-item {
          border-bottom: 1px solid #222227;
          padding: 1.5rem 0;
        }

        .faq-question {
          display: flex;
          justify-content: space-between;
          align-items: center;
          cursor: pointer;
        }

        .faq-question h2 {
          font-weight: 600;
          font-size: 1rem;
          color: white;
          max-width: 90%;
        }

        .faq-toggle {
          color: white;
          font-size: 1.25rem;
          user-select: none;
        }

        .faq-answer {
          margin-top: 1rem;
          color: #a1a1a1;
          font-size: 0.875rem;
          max-width: 90%;
          line-height: 1.6;
          display: none;
        }

        .faq-open .faq-answer {
          display: block;
        }

        @media (min-width: 768px) {
          .hero {
            flex-direction: row;
          }
          
          .hero-image {
            width: 50%;
          }
          
          .hero-content {
            align-items: flex-start;
            text-align: left;
            width: 50%;
          }
          
          .features, .additional-features {
            grid-template-columns: repeat(3, 1fr);
          }
          
          .faq-question h2 {
            font-size: 1.125rem;
          }
          
          .faq-answer {
            font-size: 1rem;
          }
        }

        .main-footer {
          background-color: var(--epic-dark-gray);
          padding: 50px 0;
          margin-top: 50px;
        }

        .footer-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .footer-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 40px;
        }

        .social-links {
          display: flex;
          gap: 20px;
        }

        .social-link {
          color: var(--epic-light-gray);
          font-size: 0.9rem;
          display: flex;
          align-items: center;
          gap: 8px;
          transition: color var(--transition-speed) ease;
          text-decoration: none;
        }

        .social-link:hover {
          color: #CCCCCC;
        }

        .social-link i {
          font-size: 1.2rem;
        }

        .btn-back-to-top {
          background-color: transparent;
          color: var(--epic-light-gray);
          font-size: 0.9rem;
          display: flex;
          align-items: center;
          gap: 8px;
          transition: color var(--transition-speed) ease;
          border: none;
          cursor: pointer;
        }

        .btn-back-to-top:hover {
          color: #CCCCCC;
        }

        .footer-content {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 40px;
          margin-bottom: 40px;
        }

        .footer-section h4 {
          font-size: 1rem;
          font-weight: 700;
          margin-bottom: 20px;
          color: var(--epic-text);
        }

        .footer-section ul {
          display: flex;
          flex-direction: column;
          gap: 10px;
          list-style: none;
          padding: 0;
        }

        .footer-section ul li a {
          color: var(--epic-light-gray);
          font-size: 0.85rem;
          transition: color var(--transition-speed) ease;
          text-decoration: none;
        }

        .footer-section ul li a:hover {
          color: #CCCCCC;
        }

        .horizontal-divider {
          height: 1px;
          background-color: var(--epic-light-gray);
          opacity: 0.2;
          margin: 20px 0;
        }

        .copyright {
          margin-bottom: 30px;
        }

        .copyright p {
          color: var(--epic-light-gray);
          font-size: 0.75rem;
          line-height: 1.6;
        }

        .footer-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .footer-links {
          display: flex;
          gap: 20px;
        }

        .footer-links a {
          color: var(--epic-light-gray);
          font-size: 0.85rem;
          transition: color var(--transition-speed) ease;
          text-decoration: none;
        }

        .footer-links a:hover {
          color: #CCCCCC;
        }
      `}</style>
    </>
  );
}

export default Distribute;
