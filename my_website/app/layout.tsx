import {
  Montserrat,
  Dancing_Script,
  Poppins,
  Orbitron,
  Great_Vibes,
} from "next/font/google";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Alexander W. - Web Developer",
  description: "Web Developer | Software Engineer",
};

// Define fonts
const orbitron = Orbitron({ subsets: ["latin"], weight: "700" });
const poppins = Poppins({ subsets: ["latin"], weight: "700" });
const montserrat = Montserrat({ subsets: ["latin"], weight: "700" });
const dancingScript = Dancing_Script({ subsets: ["latin"], weight: "500" });
const greatvibes = Great_Vibes({ subsets: ["latin"], weight: "400" });

// Export them for other pages to use
export { orbitron, poppins, montserrat, dancingScript, greatvibes };

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
        className={`${montserrat.className} ${poppins.className}${dancingScript.className}${orbitron.className}${greatvibes.className}`}
      >
        {children}
      </body>
    </html>
  );
}
