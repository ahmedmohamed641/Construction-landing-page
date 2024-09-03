import "@styles/globals.css";
import Navbar from "@/components/Navbar/Navbar";

// FIX:
// todo: remove unused components for performance
// todo: add metadata for SEO
// todo: replace regular img with next/image
// todo: `get started` button nd see our `work button` should be interactive
// todo: you should create pages for products, jobs, pricing, and about to make the site complete if not remove the links

// remove unused components for performance
import { keyframes, StyledEngineProvider } from "@mui/material";
import Footer from "@components/Footer/Footer";

export const metadata = {
  title: "ISTAIX",
  description: "Simple Construction website",
  // need to fill in metadata for SEO
  keywords: [],
  author: "",
  creator: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
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
