"use client";

import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import "@styles/styles.css";
import { useState, useEffect } from "react"; // ✅ Ensures JavaScript runs only on the client
import { usePathname } from "next/navigation";

import Script from "next/script";

export default function Legacy() {
  const pathname = usePathname(); // ✅ This replaces useRouter()
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  useEffect(() => {
    const initializeFunctions = () => {
      if (typeof window !== "undefined") {
        window.toggleMobileMenu =
          window.toggleMobileMenu ||
          function () {
            const navLinks = document.querySelector(".mobile-nav-links");
            navLinks.classList.toggle("show");
          };

        window.toggleContent =
          window.toggleContent ||
          function (index) {
            if (window.innerWidth > 768) return;
            const contents = document.querySelectorAll(".column-content");
            const selectedContent = contents[index];

            if (selectedContent.classList.contains("active")) {
              selectedContent.style.maxHeight = null;
              selectedContent.classList.remove("active");
            } else {
              contents.forEach((content) => {
                content.style.maxHeight = null;
                content.classList.remove("active");
              });
              selectedContent.style.maxHeight =
                selectedContent.scrollHeight + "px";
              selectedContent.classList.add("active");
            }
          };

        window.toggleLightsaber =
          window.toggleLightsaber ||
          function () {
            console.log("Lightsaber toggled");
          };

        window.changeBladeColor =
          window.changeBladeColor ||
          function (color) {
            console.log("Blade color changed to", color);
          };
      }
    };

    initializeFunctions(); // ✅ Run on page load
  }, [pathname]); // ✅ Re-run whenever the pathname (URL) changes

  return (
    <>
      <Head>
        <title>Anakin&apos;s Legacy</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </Head>

      <body id="mainbody">
        {/* Header */}
        <div className="Homepage_header header-legacy">
          <h2 className="legacy-header-text">Legacy</h2>
        </div>

        {/* Desktop Navbar */}
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
                  Wookieepedia
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
          <button
            className="hamburger"
            onClick={() => window.toggleMobileMenu()}
          >
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
        {/* Content Section */}
        <div className="container">
          {/* Column 1 */}
          <div className="column">
            <h2 onClick={() => window.toggleContent(0)}>
              Anakin Skywalker - Background
            </h2>

            <div className="column-content">
              <table className="second">
                <thead>
                  <tr>
                    <th>Category</th>
                    <th>Information</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Name</td>
                    <td>Anakin Skywalker</td>
                  </tr>
                  <tr>
                    <td>Alias</td>
                    <td>Darth Vader</td>
                  </tr>
                  <tr>
                    <td>Birthplace</td>
                    <td>Tatooine</td>
                  </tr>
                  <tr>
                    <td>Lightsaber Color(s)</td>
                    <td>Blue (Jedi), Red (Sith)</td>
                  </tr>
                  <tr>
                    <td>Occupation</td>
                    <td>Jedi Knight, Sith Lord</td>
                  </tr>
                  <tr>
                    <td>Master</td>
                    <td>Obi-Wan Kenobi, Darth Sidious</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="column column2">
            <Image
              src="/images/Duel.jpg"
              alt="Anakin's Journey"
              width={400}
              height={300}
              className="responsive-img"
            />
          </div>

          {/* Column 3 */}
          <div className="column column3">
            <h2 onClick={() => window.toggleContent(1)}>Legacy in Star Wars</h2>

            <div className="column-content">
              <p>
                Anakin Skywalker remains one of the most iconic characters in
                the Star Wars saga. His transformation into Darth Vader, his
                redemption, and his enduring legacy continue to captivate
                audiences worldwide.
              </p>
              <Image
                src="/images/Legacy_Footer_Picture.png"
                alt="Legacy"
                width={400}
                height={300}
                className="responsive-img"
              />
              <Image
                src="/images/Redlightsaber.jpg"
                alt="Lightsaber"
                width={400}
                height={300}
                className="responsive-img"
              />
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="footer">
          <p>Every legend has a beginning.</p>
        </footer>
        <Script src="/script.js" strategy="lazyOnload" />
      </body>
    </>
  );
}
