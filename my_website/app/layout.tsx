import "./globals.css";
import type { Metadata } from "next";
import {
  montserrat,
  poppins,
  dancingScript,
  orbitron,
  greatVibes,
} from "./fonts"; // Import fonts here

export const metadata: Metadata = {
  title: "Alexander W. - Web Developer",
  description: "Web Developer | Software Engineer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="/favicon_1.png" />
      </head>
      <body
        className={`${montserrat.className} ${poppins.className} ${dancingScript.className} ${orbitron.className} ${greatVibes.className}`}
      >
        {children}
      </body>
    </html>
  );
}
