import { Link } from "react-router";
import "./Navbar.scss";
import { useCallback, useEffect, useState } from "react";
import { useMediaQuery } from "../../hooks/useMediaQuery";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleDesktopChange = useCallback((matches: boolean) => {
    if (matches) {
      setIsMenuOpen(false);
    }
  }, []);
  const isDesktop = useMediaQuery("medium", handleDesktopChange);
  const menuIsOpen = isMenuOpen && !isDesktop;

  useEffect(() => {
    document.body.style.overflow = menuIsOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuIsOpen]);

  return (
    <nav className="navbar" data-menu-open={menuIsOpen}>
      <div className="navbar__inner container">
        <Link to="/" className="navbar__brand">
          Frontend Starter
        </Link>

        <button
          type="button"
          className="navbar__menu-toggle"
          aria-expanded={menuIsOpen}
          aria-controls="primary-navigation"
          aria-label={menuIsOpen ? "Close menu" : "Open menu"}
          onClick={() => setIsMenuOpen((current) => !current)}
        >
          {menuIsOpen ? (
            <svg aria-hidden="true" viewBox="0 0 100 100">
              <rect x="10" y="45" width="80" height="10" transform="rotate(45 50 50)" />
              <rect x="10" y="45" width="80" height="10" transform="rotate(-45 50 50)" />
            </svg>
          ) : (
            <svg aria-hidden="true" viewBox="0 0 100 80">
              <rect width="100" height="20" />
              <rect y="30" width="100" height="20" />
              <rect y="60" width="100" height="20" />
            </svg>
          )}
        </button>

        <ul className="navbar__links" id="primary-navigation">
          <li>
            <Link onClick={() => setIsMenuOpen(false)} to="/">
              Home
            </Link>
          </li>
          <li>
            <Link onClick={() => setIsMenuOpen(false)} to="/about">
              About
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
