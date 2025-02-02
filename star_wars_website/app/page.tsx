"use client";

import { useState, useEffect } from "react"; // ✅ Ensures JavaScript runs only on the client
import Image from "next/image";
import Link from "next/link";
import "./styles/styles.css"; // Import the homepage styles
import Script from "next/script";

export default function HomePage() {
  const [dropdownOpen, setDropdownOpen] = useState(false); // ✅ NEW state for "Explore More"

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.toggleLightsaber = window.toggleLightsaber || function () {};
      window.toggleContent = window.toggleContent || function () {};
      window.toggleMobileMenu = window.toggleMobileMenu || function () {};
      window.changeBladeColor = window.changeBladeColor || function () {};
    }
  }, []);

  return (
    <main>
      {/* Header */}
      <header className="Homepage_header header-homepage">
        <h2>Anakin SkyWalker</h2>
      </header>

      {/* Desktop Navigation */}
      <nav className="desktop-navbar">
        <ul className="desktop-nav-links">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/pathtothedarkside">Path to the Darkside</Link>
          </li>
          <li>
            <Link href="/legacy">Legacy</Link>
          </li>
          <li className="dropdown">
            <span className="dropbtn">Explore More</span>
            <div className="dropdown-content">
              <a
                href="https://www.starwars.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Official Star Wars Website
              </a>
              <a
                href="https://starwars.fandom.com/wiki/Main_Page"
                target="_blank"
                rel="noopener noreferrer"
              >
                Wookiepedia
              </a>
              <a
                href="https://www.reddit.com/r/StarWars/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Star Wars Reddit
              </a>
            </div>
          </li>
        </ul>
      </nav>

      {/* Mobile Navigation */}
      <nav className="mobile-navbar">
        <button className="hamburger" onClick={() => window.toggleMobileMenu()}>
          ☰
        </button>
        <ul className="mobile-nav-links">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/pathtothedarkside">Path to the Darkside</Link>
          </li>
          <li>
            <Link href="/legacy">Legacy</Link>
          </li>
          <li className="mobile-dropdown">
            <span className="mobile-dropbtn" onClick={toggleDropdown}>
              Explore More
            </span>
            <div
              className={`mobile-dropdown-content ${
                dropdownOpen ? "show" : ""
              }`}
            >
              <a
                href="https://www.starwars.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Official Star Wars Website
              </a>
              <a
                href="https://starwars.fandom.com/wiki/Main_Page"
                target="_blank"
                rel="noopener noreferrer"
              >
                Wookiepedia
              </a>
              <a
                href="https://www.reddit.com/r/StarWars/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Star Wars Reddit
              </a>
            </div>
          </li>
        </ul>
      </nav>

      {/* Content Sections */}
      <div className="container">
        <div className="column">
          <h2 onClick={() => window.toggleContent(0)}>
            Anakin Skywalker: Origins and Backstory
          </h2>
          <div className="column-content">
            <p>
              Anakin Skywalker, one of the most powerful Jedi, rose from slavery
              on Tatooine to Jedi training under Obi-Wan Kenobi. Consumed by
              fear and pride, he fell to the dark side, becoming Darth Vader and
              leading the purge of the Jedi.
            </p>
            <Image
              src="/images/Homepage_Lightsaber_Picture.png"
              alt="Lightsaber"
              width={400}
              height={300}
              className="responsive-img"
            />
            <Image
              src="/images/Saber_1.jpg"
              alt="Saber"
              width={400}
              height={300}
              className="responsive-img"
            />
          </div>
        </div>

        <div className="column column2">
          <h2 onClick={() => window.toggleContent(1)}>
            Discover More About Anakin Skywalker
          </h2>
          <div className="column-content">
            <a
              href="https://www.youtube.com/watch?v=Xe7Uwm0QsYk"
              target="_blank"
              className="video-button"
            >
              Dive into the Legacy
            </a>
            <Image
              src="/images/Duel.jpg"
              alt="Anakin's Journey"
              width={400}
              height={300}
              className="responsive-img"
            />
            <div className="lightsaber-container">
              <h3>Activate a Lightsaber!</h3>
              <div className="lightsaber">
                <div className="hilt"></div>
                <div className="blade"></div>
              </div>
              <button onClick={() => window.toggleLightsaber()}>
                Activate
              </button>

              <div className="color-buttons">
                <button onClick={() => window.changeBladeColor("#E74C3C")}>
                  Red
                </button>
                <button onClick={() => window.changeBladeColor("#2874A6")}>
                  Blue
                </button>
                <button onClick={() => window.changeBladeColor("#2ECC71")}>
                  Green
                </button>
                <button onClick={() => window.changeBladeColor("#F1C40F")}>
                  Yellow
                </button>
                <button onClick={() => window.changeBladeColor("#AF7AC5")}>
                  Purple
                </button>
              </div>
              <div id="notification" className="notification"></div>
            </div>
          </div>
        </div>

        <div className="column column3">
          <h2 onClick={() => window.toggleContent(2)}>
            Interesting Facts About Anakin Skywalker:
          </h2>
          <div className="column-content">
            <ul className="interestingFacts">
              <li>
                He was a Jedi who turned to the dark side after losing his wife.
              </li>
              <li>
                Anakin first met the Jedi when Qui-Gon Jinn came to Watto’s
                shop.
              </li>
              <li>Anakin was born without a father.</li>
              <li>
                Despite his evil nature, he killed Palpatine to save his son.
              </li>
              <li>There is a statue of Darth Vader in Washington DC.</li>
            </ul>
            <Image
              src="/images/Duel_2.jpg"
              alt="Duel"
              width={400}
              height={300}
              className="responsive-img"
            />
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="footer-img-container">
        <a href="https://www.youtube.com/watch?v=Hpz9gA_1oLM" target="_blank">
          <Image
            src="/images/anakin_2.jpg"
            alt="Anakin"
            width={400}
            height={300}
            className="footer-img"
          />
          <div className="click-me-overlay">Click me!</div>
        </a>
      </div>
      <footer className="footer">
        <p>Every legend has a beginning.</p>
      </footer>

      {/* Import JavaScript */}
      <Script src="/script.js" strategy="lazyOnload" />
    </main>
  );
}
