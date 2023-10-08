/* ********** ********** ********** ********** ********** ********** ********** */
/* "BARRA DE NAVEGACIÓN FIJA" */
/* ********** ********** ********** ********** ********** ********** ********** */

import Image from "next/image";
import styles from "./fixedbar.module.css";
import { TYPES } from "./types.js";

// Genera la barra de navegación fija.
// "filterType" se definio en "page.js"
export default function FixedBar({ filterType, setFilterType }) {
  return (
    <header className={styles.navigation}>
      <nav className={styles.navBar}>
        <Image
          src="/img/pokedex.png"
          width={100}
          height={36}
          alt="Logo Pokédex"
        />
        <ListTypes filterType={filterType} setFilterType={setFilterType} />
      </nav>
    </header>
  );
}

// Utiliza el contenido de "TYPES" para generar los botones de "FixedBar".
const ListTypes = ({ filterType, setFilterType }) => {
  const listTypes = TYPES.map((type) => (
    <li key={type.id}>
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
  return <ul className={styles.navList}>{listTypes}</ul>;
};

/* ********** ********** ********** ********** ********** ********** ********** */
/* ********** ********** ********** ********** ********** ********** ********** */
