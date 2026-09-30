import { Outlet } from "react-router";
import Navbar from "../../components/Navbar";

function RootLayout() {
  return (
    <>
      <a className="button skip-link" data-type="outline" href="#main-content">
        Salta al contenuto
      </a>
      <header>
        <Navbar />
      </header>
      <Outlet />
    </>
  );
}

export default RootLayout;
