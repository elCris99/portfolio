import { Link } from "react-router";
import "./Navbar.scss";
import logoMark from "../../assets/logo.svg";
import { useCallback, useEffect, useState } from "react";
import { useMediaQuery } from "../../hooks/useMediaQuery";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleDesktopChange = useCallback((matches: boolean) => {
    if (matches) {
      setIsMenuOpen(false);
    }
  }, []);
  const isDesktop = useMediaQuery("large", handleDesktopChange);
  const menuIsOpen = isMenuOpen && !isDesktop;

  useEffect(() => {
    document.body.style.overflow = menuIsOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuIsOpen]);

  return (
    <div className="navbar-shell" data-menu-open={menuIsOpen}>
      <nav className="navbar" aria-label="Navigazione principale" data-menu-open={menuIsOpen}>
        <div className="navbar__inner container">
          <Link to="/" className="navbar__brand">
            <img src={logoMark} alt="Cristian Andrey Cerruto Arandia" />
          </Link>

          <button
            type="button"
            className="navbar__menu-toggle"
            aria-expanded={menuIsOpen}
            aria-controls="navbar-content"
            aria-label={menuIsOpen ? "Chiudi il menu" : "Apri il menu"}
            onClick={() => setIsMenuOpen((current) => !current)}
          >
            {menuIsOpen ? (
              <svg aria-hidden="true" viewBox="0 0 100 100">
                <rect x="10" y="45" width="80" height="10" transform="rotate(45 50 50)" />
                <rect x="10" y="45" width="80" height="10" transform="rotate(-45 50 50)" />
              </svg>
            ) : (
              <svg aria-hidden="true" viewBox="0 0 100 80">
                <rect width="100" height="12" />
                <rect y="30" width="100" height="12" />
                <rect y="60" width="100" height="12" />
              </svg>
            )}
          </button>

          <div className="navbar__content" id="navbar-content" inert={!isDesktop && !menuIsOpen}>
            <div className="navbar__content-inner container">
              <ul className="navbar__links">
                <li>
                  <a href="#progetti" onClick={() => setIsMenuOpen(false)}>
                    Progetti
                  </a>
                </li>
                <li>
                  <a href="#chi-sono" onClick={() => setIsMenuOpen(false)}>
                    Chi sono
                  </a>
                </li>
                <li>
                  <a href="#contatti" onClick={() => setIsMenuOpen(false)}>
                    Contatti
                  </a>
                </li>
              </ul>
              <div className="navbar__actions">
                <a
                  className="navbar__cv button"
                  data-type="primary"
                  href="/cv/Cristian-Andrey-Cerruto-Arandia-CV.pdf"
                  download
                >
                  Scarica il CV ↓
                </a>

                <button type="button" className="navbar__theme-toggle">
                  Cambio tema
                  <span className="navbar__theme-switch" aria-hidden="true">
                    <span />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="navbar__overlay" aria-hidden="true" />
    </div>
  );
}

export default Navbar;
