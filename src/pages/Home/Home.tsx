function Home() {
  return (
    <main id="main-content" tabIndex={-1}>
      <section className="hero" aria-labelledby="hero-title">
        <div className="container">
          <h1 id="hero-title">Cristian Arandia — Junior Front End Developer</h1>
        </div>
      </section>

      <section id="progetti" className="projects" aria-labelledby="projects-title">
        <div className="container">
          <h2 id="projects-title">Progetti</h2>
        </div>
      </section>

      <section id="chi-sono" className="about" aria-labelledby="about-title">
        <div className="container">
          <h2 id="about-title">Chi sono</h2>
        </div>
      </section>

      <section id="contatti" className="contact" aria-labelledby="contact-title">
        <div className="container">
          <h2 id="contact-title">Contatti</h2>
        </div>
      </section>
    </main>
  );
}

export default Home;
