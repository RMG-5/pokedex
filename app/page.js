/* ********** ********** ********** ********** ********** ********** ********** */
/* PAGINA DE INICIO */
/* ********** ********** ********** ********** ********** ********** ********** */

// Indica que es un componente del cliente.
"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./page.module.css";
import useData from "./components/getdata.js";
import Navigation from "./components/navigation.js";

// Genera el contenido de la página.
const Container = () => {
  const [filterType, setFilterType] = useState("viewAll");
  return (
    <>
      <Navigation filterType={filterType} setFilterType={setFilterType} />
      <MainSection filterType={filterType} setFilterType={setFilterType} />
    </>
  );
};

// Genera el cuerpo de la página.
const MainSection = ({ filterType, setFilterType }) => {
  // Se crea una variable "pokeAPI" que guarde todo el contenido de "pokeapi.co".
  const pokeAPI = useData();
  // Se crea una variable "pokemonList" que guarde los pokemon que se mostraran.
  let pokemonList = [];
  // Si la variable de estado "filterType" es igual a "viewAll".
  if (filterType === "viewAll") {
    // La variable "pokemonList" sera igual a la variable "pokeAPI".
    pokemonList = [...pokeAPI];
    // Si la variable de estado "filterType" es diferente a "viewAll".
  } else if (filterType !== "viewAll") {
    // Se crea una variable "pokemonFilter" para recopilar los pokemon que pasen el filtro.
    let pokemonFilter = [];
    // Se crea un map para revisar los "types" de cada pokemon.
    const pokemonType = pokeAPI.map((pokemon) => {
      // Se crea una variable "types" para almacenar los tipos de cada pokemon.
      const types = pokemon.types.map((type) => type.type.name);
      // Si por lo menos un "type" del pokemon analizado es igual a "filterType".
      if (types.some((type) => type === filterType)) {
        // Se agrega el pokemon a la variable "pokemonFilter".
        pokemonFilter.push(pokemon);
      }
    });
    // Cuando el map termine la variable "pokemonList" sera igual a la variable "pokemonFilter"
    pokemonList = [...pokemonFilter];
  }

  return (
    <main className={styles.mainSection}>
      <div className={styles.allPokemon}>
        <Pokemon pokemonList={pokemonList} />
      </div>
    </main>
  );
};

// Utiliza el contenido de "pokemonList" para generar la tarjeta de cada pokemon.
const Pokemon = ({ pokemonList }) => {
  const loaderProp = ({ src }) => {
    return src;
  };

  return (
    <>
      {pokemonList.map((pokemon) => (
        <div key={pokemon.id} className={styles.pokemon}>
          <p className={styles.pokemonIdBack}>
            #
            {pokemon.id.toString().length === 1
              ? "00" + pokemon.id
              : pokemon.id.toString().length === 2
              ? "0" + pokemon.id
              : pokemon.id}
          </p>
          <div className={styles.pokemonImage}>
            <Image
              src={pokemon.sprites.other["official-artwork"].front_default}
              width={475}
              height={475}
              alt={pokemon.name}
              loader={loaderProp}
            />
          </div>
          <div className={styles.pokemonInfo}>
            <div className={styles.nameContainer}>
              <p className={styles.pokemonId}>
                #
                {pokemon.id.toString().length === 1
                  ? "00" + pokemon.id
                  : pokemon.id.toString().length === 2
                  ? "0" + pokemon.id
                  : pokemon.id}
              </p>
              <h2 className={styles.pokemonName}>{pokemon.name}</h2>
            </div>
            <div className={styles.pokemonTypes}>
              {pokemon.types.map((type) => (
                <p
                  key={type}
                  className={`${styles.type} ${styles[type.type.name]}`}
                >
                  {type.type.name}
                </p>
              ))}
            </div>
            <div className={styles.pokemonStats}>
              <p className={styles.stat}>{pokemon.height / 10} m</p>
              <p className={styles.stat}>{pokemon.weight / 10} kg</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

// Se encarga de exportar el componente "Container".
export default function Page() {
  return <Container />;
}

/* ********** ********** ********** ********** ********** ********** ********** */
/* ********** ********** ********** ********** ********** ********** ********** */
