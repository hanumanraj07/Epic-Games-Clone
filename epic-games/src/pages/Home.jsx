import { Link } from 'react-router-dom';

const heroGames = [
  {
    id: 1,
    title: "The Last Of Us Part 1",
    image: "https://cdn1.epicgames.com/offer/0c40923dd1174a768f732a3b013dcff2/EGS_UpgradetoDigitalDeluxeEdition_NaughtyDogLLC_AddOn_S1_2560x1440-d0195796f9b15e41ee69393bb95c4edc?resize=1&w=480&h=270&quality=medium"
  },
  {
    id: 2,
    title: "Tchia",
    image: "https://cdn1.epicgames.com/offer/2e09c1d223094f3798f63873548c9454/EGS_Tchia_Awaceb_S1_2560x1440-c501d53b85613739cf655a1b5bc22a64?resize=1&w=480&h=270&quality=medium"
  },
  {
    id: 3,
    title: "GTA V",
    image: "https://cdn1.epicgames.com/offer/b0cd075465c44f87be3b505ac04a2e46/EGS_GrandTheftAutoVEnhanced_RockstarNorth_S1_2560x1440-906d8ae76a91aafc60b1a54c23fab496?resize=1&w=480&h=270&quality=medium"
  },
  {
    id: 4,
    title: "Assassin's Creed Shadows",
    image: "https://cdn1.epicgames.com/offer/14a28903e3d14bd5aa3e6dbf10868126/EN_EGST_StoreLandscape_2560x1440_2560x1440-35f77ef342bb2d3a3efac25f4fa4d4e0?resize=1&w=480&h=270&quality=medium"
  },
  {
    id: 5,
    title: "Spiderman 2",
    image: "https://cdn1.epicgames.com/offer/b2818b59c0bb420e9647983dfd254931/EGS_Octopus_InsomniacGamesNixxesSoftware_S1_2560x1440-f27da78f484626718d1e22e7d6950ca5?resize=1&w=480&h=270&quality=medium"
  },
  {
    id: 6,
    title: "Red Dead Redemption 2",
    image: "https://cdn1.epicgames.com/b30b6d1b4dfd4dcc93b5490be5e094e5/offer/RDR2476298253_Epic_Games_Wishlist_RDR2_2560x1440_V01-2560x1440-2a9ebe1f7ee202102555be202d5632ec.jpg?resize=1&w=480&h=270&quality=medium"
  }
];

const saleGames = [
  {
    id: 1,
    title: "Tchia",
    image: "https://cdn1.epicgames.com/offer/2e09c1d223094f3798f63873548c9454/EGS_Tchia_Awaceb_S2_1200x1600-30ac6c45fa9f00724591b1ca567d8655?resize=1&w=360&h=480&quality=medium",
    originalPrice: "IDR 360,000",
    salePrice: "IDR 162,000"
  },
  {
    id: 2,
    title: "Spiderman 2",
    image: "https://cdn1.epicgames.com/offer/b2818b59c0bb420e9647983dfd254931/EGS_MarvelsSpiderManDigitalDeluxeEdition_InsomniacGamesNixxesSoftware_Editions_S2_1200x1600-148e0014e79aa7c2cb23ae2414b11a16?resize=1&w=360&h=480&quality=medium",
    originalPrice: "IDR 360,000",
    salePrice: "IDR 162,000"
  },
  {
    id: 3,
    title: "Red Dead Redemption 2",
    image: "https://cdn1.epicgames.com/epic/offer/RDR2PC1227_Epic%20Games_860x1148-860x1148-b4c2210ee0c3c3b843a8de399bfe7f5c.jpg?resize=1&w=360&h=480&quality=medium",
    originalPrice: "IDR 360,000",
    salePrice: "IDR 162,000"
  },
  {
    id: 4,
    title: "GTA V",
    image: "https://cdn1.epicgames.com/offer/b0cd075465c44f87be3b505ac04a2e46/GTAV_CHARM_Epic_FirstParty_PortraitFOB_1200x1600_R02_1200x1600-a5528b33df876e64f5dee728830c80a3?resize=1&w=360&h=480&quality=medium",
    originalPrice: "IDR 360,000",
    salePrice: "IDR 162,000"
  },
  {
    id: 5,
    title: "Assassin's Creed Shadows",
    image: "https://cdn1.epicgames.com/offer/14a28903e3d14bd5aa3e6dbf10868126/EN_EGST_StorePortrait_1200x1600_1200x1600-a010fb65414cbbc48e055d1f6eac41b8?resize=1&w=360&h=480&quality=medium",
    originalPrice: "IDR 360,000",
    salePrice: "IDR 162,000"
  },
  {
    id: 6,
    title: "Forza Horizon 5",
    image: "https://wallpaper.forfun.com/fetch/da/dae7a1aae0c282cc7111b0a2ba32ced2.jpeg",
    originalPrice: "IDR 360,000",
    salePrice: "IDR 162,000"
  },
  {
    id: 7,
    title: "MotoGP 25",
    image: "https://cdn1.epicgames.com/spt-assets/4b065b74ac694e6fae7150feac1fcb06/motogp25-85kp2.jpg?resize=1&w=360&h=480&quality=medium",
    originalPrice: "IDR 360,000",
    salePrice: "IDR 162,000"
  }
];

const featuredGames = [
  {
    id: 1,
    title: "MotoGP 25",
    image: "https://cdn1.epicgames.com/spt-assets/4b065b74ac694e6fae7150feac1fcb06/motogp25-video-64tp0.jpg",
    description: "Challenge your abilities in MotoGP™, Moto2™ and Moto3™ categories, and immerse yourself in the exhilarating journey of the 2024 campaign!",
    link: "#"
  },
  {
    id: 2,
    title: "PUBG: BATTLEGROUNDS",
    image: "https://cdn1.epicgames.com/spt-assets/53ec4985296b4facbe3a8d8d019afba9/pubg-battlegrounds-16v1j.jpg",
    description: "Land, loot, and outwit your opponents to become the last player left standing in the thrilling battle royale experience that took the world by storm.",
    link: "#"
  },
  {
    id: 3,
    title: "Valorant",
    image: "https://cdn1.epicgames.com/offer/cbd5b3d310a54b12bf3fe8c41994174f/EGS_VALORANT_RiotGames_S1_2560x1440-892482f9cbec5827c7c4989d7feb2bf1?resize=1&w=480&h=270&quality=medium",
    description: "Blend your style and experience on a global, competitive stage. Tactical shooter meets hypernatural powers with precise gunplay and abilities.",
    link: "#"
  }
];

const freeGames = [
  {
    id: 1,
    title: "Cities Skylines",
    image: "https://cdn1.epicgames.com/6009be9994c2409099588cde6f3a5ed0/offer/EGS_CitiesSkylines_ColossalOrder_S2-1200x1600-753257537706de74735d2bc3eb656b67.jpg?resize=1&w=360&h=480&quality=medium",
    expiry: "Free Now - Apr 28 at 10:00 PM"
  },
  {
    id: 2,
    title: "Grand Theft Auto V",
    image: "https://cdn1.epicgames.com/offer/b0cd075465c44f87be3b505ac04a2e46/GTAV_CHARM_Epic_FirstParty_PortraitFOB_1200x1600_R02_1200x1600-a5528b33df876e64f5dee728830c80a3?resize=1&w=360&h=480&quality=medium",
    expiry: "Free Now - Apr 28 at 10:00 PM"
  },
  {
    id: 3,
    title: "Far Cry 3",
    image: "https://cdn1.epicgames.com/offer/hellebore/FC3_StorePortrait_1200x1600_1200x1600-98fcc6ac579301df097646fd622401f9?resize=1&w=360&h=480&quality=medium",
    expiry: "Free Now - Apr 28 at 10:00 PM"
  },
  {
    id: 4,
    title: "Forza Horizon 5",
    image: "https://wallpaper.forfun.com/fetch/da/dae7a1aae0c282cc7111b0a2ba32ced2.jpeg",
    expiry: "Free Now - Apr 28 at 10:00 PM"
  }
];

const listSections = [
  {
    id: 1,
    image: "https://cdn2.unrealengine.com/egs-sales-specials-breaker-1280x721-8d81919a48e5.jpg?resize=1&w=854&h=480&quality=medium",
    title: "Epic Games Store Mobile",
    description: "More games, new look, and free game giveaways! Store app available globally on Android, and on iPhone and iPad in the EU.",
    linkText: "Install Mobile"
  },
  {
    id: 2,
    image: "https://cdn2.unrealengine.com/egs-free-games-breaker-jan-2024-1920x1080-028e40df3111.jpg?resize=1&w=854&h=480&quality=medium",
    title: "Free Giveaway",
    description: "Get a new free game every Thursday on Mobile and PC! App available globally on Android, and on iPhone and iPad in the EU.",
    linkText: "Install Mobile and Claim Now"
  },
  {
    id: 3,
    image: "https://cdn2.unrealengine.com/egs-non-game-apppromo-blog-1920x1080-59bd51d9d448.jpg?resize=1&w=854&h=480&quality=medium",
    title: "Free Giveaway",
    description: "Get a new free game every Thursday on Mobile and PC! App available globally on Android, and on iPhone and iPad in the EU.",
    linkText: "Install Mobile and Claim Now"
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
          <button className="btn-back-to-top"><i className="fa fa-chevron-up"></i> <a href="#">UP</a></button>
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
          <div className="footer-logos"> 
          </div>
        </div>
      </div>
    </footer>
  );
}

function Home() {
  return (
    <>
      <header className="main-header">
        <div className="header-container">
          <div className="header-left">
            <div className="logo">
              <img src="https://logos-world.net/wp-content/uploads/2021/12/Epic-Games-Emblem.png" alt="Epic Games Logo" />
            </div>
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
      </header>

      <div className="content-container">
        <nav className="store-nav">
          <div className="search-container">
            <i className="fa fa-search search-icon"></i>
            <input type="text" placeholder="Search Store" />
          </div>
          <ul className="store-menu">
            <li className="active">Discover</li>
            <li>Browse</li>
            <li>News</li>
            <li>Wishlist</li>
            <li>Cart</li>
          </ul>
        </nav>

        <section className="hero-section">
          <div className="hero-main">
            <img src="https://cdn.wallpapersafari.com/15/88/UtGnie.jpg" alt="The Last of Us Part 1" />
            <div className="hero-overlay"></div>
            <div className="hero-content">
              <span className="release-info">COMING APRIL 28</span>
              <h1>The Last of Us Part 1</h1>
              <p>Experience the emotional storytelling and unforgettable characters in The Last of Us,
                winner of over 200 Game of the Year awards.</p>
              <div className="price-info">
                <span>Starting at IDR 999,999.00</span>
              </div>
              <div className="hero-buttons">
                <button className="btn-primary">PRE-PURCHASE NOW</button>
                <button className="btn-secondary"><i className="fa fa-plus"></i> ADD TO WISHLIST</button>
              </div>
            </div>
          </div>
          <div className="hero-thumbnails">
            {heroGames.map(game => (
              <div key={game.id} className="thumbnail active">
                <img src={game.image} alt={game.title} />
                <div className="thumbnail-title">{game.title}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="games-on-sale">
          <div className="section-header">
            <h2>Games On Sale</h2>
            <div className="carousel-controls">
              <button className="carousel-control prev"><i className="fa fa-chevron-left"></i></button>
              <button className="carousel-control next"><i className="fa fa-chevron-right"></i></button>
            </div>
          </div>
          <div className="game-cards-container">
            {saleGames.map(game => (
              <div key={game.id} className="game-card">
                <div className="game-image">
                  <img src={game.image} alt={game.title} />
                </div>
                <div className="game-info">
                  <span className="game-tag">BASE GAME</span>
                  <h3 className="game-title">{game.title}</h3>
                </div>
                <div className="game-price">
                  <span className="discount-badge">-55%</span>
                  <div className="price-container">
                    <span className="original-price">{game.originalPrice}</span>
                    <span className="sale-price">{game.salePrice}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="featured-games">
          <div className="featured-cards">
            {featuredGames.map(game => (
              <div key={game.id} className="featured-card">
                <div className="featured-image">
                  <img src={game.image} alt={game.title} />
                </div>
                <div className="featured-content">
                  <h3>{game.title}</h3>
                  <p>{game.description}</p>
                  <a href={game.link} className="featured-link">Wishlist Now</a>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="free-games-section">
          <div className="section-header">
            <h2>Free Games</h2>
            <button className="btn-outline">VIEW MORE</button>
          </div>
          <div className="free-games-container">
            {freeGames.map(game => (
              <div key={game.id} className="free-game-card">
                <div className="free-game-image">
                  <img src={game.image} alt={game.title} />
                  <div className="free-game-badge">FREE NOW</div>
                </div>
                <div className="free-game-info">
                  <h3>{game.title}</h3>
                  <p>{game.expiry}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="list-container">
          {listSections.map(section => (
            <section key={section.id}>
              <img src={section.image} alt={section.title} />
              <h2>{section.title}</h2>
              <p>{section.description}</p>
              <a href="#" className="button" target="_blank" rel="noopener noreferrer">
                {section.linkText} <i className="fas fa-external-link-alt"></i>
              </a>
            </section>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Home;
