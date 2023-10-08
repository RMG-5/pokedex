/* ********** ********** ********** ********** ********** ********** ********** */
/* "BARRA DE NAVEGACIÓN FLOTANTE" */
/* ********** ********** ********** ********** ********** ********** ********** */

// Indica que es un componente del cliente.
"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./floatbar.module.css";
import { TYPES } from "./types.js";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";

// Genera la barra de navegación flotante.
// "filterType" se definio en "page.js"
export default function FloatBar({ filterType, setFilterType }) {
  // Se crea una variable de estado para mostrar y ocultar los botones.
  const [isOpen, setIsOpen] = useState(false);
  // Alterna el estado en cada clic.
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className={styles.navigation}>
      <nav className={styles.navBar}>
        <Image
          src="/img/pokedex.png"
          width={100}
          height={36}
          alt="Logo Pokédex"
        />
        <Burger isOpen={isOpen} toggle={toggle} />
        <ListTypes
          filterType={filterType}
          setFilterType={setFilterType}
          isOpen={isOpen}
          toggle={toggle}
        />
      </nav>
    </header>
  );
}

// Utiliza el contenido de TYPES para generar los botones de "Navigation".
const ListTypes = ({ filterType, setFilterType, isOpen, toggle }) => {
  const listTypes = TYPES.map((type) => (
    <li key={type.id} onClick={toggle}>
      <button
        className={styles.btnHeader}
        id={type.id}
        style={type.style}
        onClick={(e) => setFilterType(e.target.id)}
      >
        {type.value}
      </button>
    </li>
  ));
  return (
    <ul
      className={styles.navList}
      style={{
        display: `${isOpen ? "flex" : "none"}`,
      }}
    >
      {listTypes}
    </ul>
  );
};

// Genera el boton para el menu de hamburguesa.
const Burger = ({ isOpen, toggle }) => {
  return (
    <button className={styles.burger} onClick={toggle}>
      {isOpen ? <RxCross1 /> : <RxHamburgerMenu />}
    </button>
  );
};

/* ********** ********** ********** ********** ********** ********** ********** */
/* ********** ********** ********** ********** ********** ********** ********** */
