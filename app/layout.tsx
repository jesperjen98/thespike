import type { Metadata } from "next";

import { Box } from "@mui/material";
import { Geist, Geist_Mono } from "next/font/google";
import Nav from "./components/nav";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "THESPIKE",
  description:
    "THESPIKE.GG is the leading website for VALORANT News, VALORANT Event Coverage & VALORANT Team Rankings.",
};

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", lg: "row" },
          }}
        >
          <Nav />

          <Box
            sx={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              height: "100vh",
              overflowY: "auto",
              overflowX: "hidden",
            }}
          >
            {children}
          </Box>
        </Box>
      </body>
    </html>
  );
};

export default RootLayout;
