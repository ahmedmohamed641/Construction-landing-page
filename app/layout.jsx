import "@styles/globals.css";
import Navbar from "@/components/Navbar/Navbar";

import { StyledEngineProvider } from "@mui/material";
import Footer from "@components/Footer/Footer";

export const metadata = {
  title: "ISTAIX",
  description: "Simple Construction website",
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
