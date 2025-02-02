"use client";

import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import "@styles/styles.css";
import { useState, useEffect } from "react"; // ✅ Ensures JavaScript runs only on the client

const PathToTheDarkside = () => {
  useEffect(() => {
    // Ensure this function is defined in the imported script or define it here
    const toggleMobileMenu = () => {
      const menu = document.querySelector(".mobile-nav-links");
      menu?.classList.toggle("open");
    };

    document
      .querySelector(".hamburger")
      ?.addEventListener("click", toggleMobileMenu);

    return () => {
      document
        .querySelector(".hamburger")
        ?.removeEventListener("click", toggleMobileMenu);
    };
  }, []);

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
    <>
      <Head>
        <title>Path to the Darkside</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </Head>

      <body id="mainbody">
        <div className="header2">
          <h2>Darth Vader</h2>
        </div>

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
              <a className="dropbtn">Explore More</a>
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

        {/* Marquee */}
        <div className="externalLinkMarquee">
          <span className="marquee-text">
            Official Star Wars website:{" "}
            <a
              href="https://www.starwars.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Star Wars Website
            </a>
            .
          </span>
        </div>

        <h1 className="firstLetterChange">
          Anakin&apos;s Journey to Darth Vader
        </h1>

        {/* Image Gallery */}
        <div className="gallery-center-images">
          {[
            {
              src: "/images/anakinskywalker.jpg",
              alt: "With LightSaber",
              desc: "Anakin Skywalker wielding his iconic blue lightsaber, a symbol of his Jedi legacy.",
            },
            {
              src: "/images/anakin_2.jpg",
              alt: "With hood on",
              desc: "Anakin embracing the dark side, cloaked in mystery as a Sith.",
            },
            {
              src: "/images/vader.jpg",
              alt: "Darth Vader",
              desc: "Darth Vader in his full Sith armor, radiating power and darkness.",
            },
            {
              src: "/images/darthvader_lightning.jpg",
              alt: "Vader",
              desc: "A dramatic portrayal of Darth Vader amidst a storm of energy, embodying his immense strength.",
            },
          ].map((item, index) => (
            <div className="gallery" key={index}>
              <a target="_blank" href={item.src}>
                <Image src={item.src} alt={item.alt} width={600} height={400} />
              </a>
              <div className="desc">{item.desc}</div>
            </div>
          ))}
        </div>

        {/* Video Section */}
        <div
          className="videoborder"
          style={{ textAlign: "center", marginTop: "40px" }}
        >
          <p>Key Scene</p>
          <div className="video-container">
            <iframe
              src="https://www.youtube.com/embed/gWnEXsaAc_Y"
              title="Darth Vader Vs Obi-Wan Kenobi final speech..."
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* Footer */}
        <footer className="footer">
          <p>Every legend has a beginning.</p>
        </footer>
      </body>
    </>
  );
};

export default PathToTheDarkside;
