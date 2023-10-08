/* ********** ********** ********** ********** ********** ********** ********** */
/* ESTRUCTURA GENERAL DE LA APLICACIÓN */
/* ********** ********** ********** ********** ********** ********** ********** */

import "./globals.css";
import { Rubik } from "next/font/google";
import styles from "./page.module.css";

const rubik = Rubik({
  weight: "variable",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Pokédex",
  description: "Pokédex utilizando pokeapi.co",
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es-MX">
      <body className={`${styles.page} ${rubik.className}`}>{children}</body>
    </html>
  );
}

/* ********** ********** ********** ********** ********** ********** ********** */
/* ********** ********** ********** ********** ********** ********** ********** */
