import { Link } from "react-router";
import "./Navbar.scss";
import logoMark from "../../assets/logo.svg";
import { useCallback, useEffect, useState } from "react";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import { useTheme } from "../../hooks/useTheme";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMenuClosing, setIsMenuClosing] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();

  const handleDesktopChange = useCallback((matches: boolean) => {
    if (matches) {
      setIsMenuOpen(false);
      setIsMenuClosing(false);
    }
  }, []);

  const isDesktop = useMediaQuery("large", handleDesktopChange);
  const menuIsOpen = isMenuOpen && !isDesktop;

  const handleCloseMenu = () => {
    if (!menuIsOpen) return;

    setIsMenuOpen(false);
    setIsMenuClosing(true);
  };

  const handleMenuToggle = () => {
    if (menuIsOpen) {
      handleCloseMenu();
    } else {
      setIsMenuClosing(false);
      setIsMenuOpen(true);
    }
  };

  useEffect(() => {
    document.body.style.overflow = menuIsOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuIsOpen]);

  return (
    <div className="navbar-shell" data-menu-open={menuIsOpen}>
      <nav
        className="navbar"
        aria-label="Navigazione principale"
        data-menu-open={menuIsOpen}
        data-menu-closing={isMenuClosing}
      >
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
            onClick={handleMenuToggle}
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

          <div className="navbar__content-viewport">
            <div
              className="navbar__content"
              id="navbar-content"
              inert={!isDesktop && !menuIsOpen}
              onTransitionEnd={(event) => {
                if (isMenuClosing && event.propertyName === "transform") {
                  setIsMenuClosing(false);
                }
              }}
            >
              <div className="navbar__content-inner container">
                <ul className="navbar__links">
                  <li>
                    <a href="#progetti" onClick={handleCloseMenu}>
                      Progetti
                    </a>
                  </li>
                  <li>
                    <a href="#chi-sono" onClick={handleCloseMenu}>
                      Chi sono
                    </a>
                  </li>
                  <li>
                    <a href="#contatti" onClick={handleCloseMenu}>
                      Contatti
                    </a>
                  </li>
                </ul>
                <div className="navbar__actions">
                  <a
                    className={`navbar__cv ${menuIsOpen || isMenuClosing ? "button" : "download-cv"}`}
                    data-type="primary"
                    href="/cv/Cristian-Andrey-Cerruto-Arandia-CV.pdf"
                    download
                  >
                    Scarica il CV ↓
                  </a>

                  <button
                    type="button"
                    className="navbar__theme-toggle"
                    role="switch"
                    aria-checked={isDarkMode}
                    aria-label="Tema scuro"
                    onClick={toggleTheme}
                  >
                    <span className="navbar__theme-track" aria-hidden="true">
                      <span className="navbar__theme-thumb" />
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="navbar__overlay" aria-hidden="true" onClick={handleCloseMenu} />
    </div>
  );
}

export default Navbar;
