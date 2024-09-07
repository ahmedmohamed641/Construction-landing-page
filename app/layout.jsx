import "@styles/globals.css";
import Navbar from "@/components/Navbar/Navbar";
import { StyledEngineProvider } from "@mui/material";
import Footer from "@components/Footer/Footer";
import Head from "next/head";

export const metadata = {
  title: "ISTAIX - Innovative Construction Solutions",
  description:
    "ISTAIX provides modern and sustainable construction solutions for residential, commercial, and industrial projects. We offer tailored services to meet your construction needs from design to completion.",
  keywords: [
    "ISTAIX",
    "construction company",
    "construction solutions",
    "building services",
    "sustainable construction",
    "commercial construction",
    "residential construction",
    "industrial construction",
    "innovative construction",
    "building design",
    "construction management",
  ],
  author: "ISTAIX Team",
  creator: "ISTAIX Development Team",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords.join(", ")} />
        <meta name="author" content={metadata.author} />
        <meta name="creator" content={metadata.creator} />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </Head>
      <StyledEngineProvider injectFirst>
        <body className="text-white">
          <Navbar />
          <main>{children}</main>
          <Footer />
        </body>
      </StyledEngineProvider>
    </html>
  );
}
