/* ********** ********** ********** ********** ********** ********** ********** */
/* "OBTIENE LOS DATOS DE LA API pokeapi.co" */
/* ********** ********** ********** ********** ********** ********** ********** */

// Indica que es un componente del cliente.
"use client";

import { useState, useEffect } from "react";

const useData = () => {
  // Crea un array para almacenar todos los datos obtenidos.
  const [data, setData] = useState([]);

  useEffect(() => {
    // Almacena la url de los diferentes pokemon.
    const endpoints = [];

    // Genera la url de los diferentes pokemon.
    for (let i = 1; i <= 999; i++) {
      endpoints.push("https://pokeapi.co/api/v2/pokemon/" + i);
    }

    try {
      // Obtiene los datos de cada url contenida en endpoints.
      const getData = endpoints.map((url) =>
        fetch(url).then((response) => response.json())
      );

      // Almacena el contenido de todas las url en data.
      Promise.all(getData).then((data) => setData(data));
    } catch (error) {
      console.log(error);
    }
  }, []);

  return data;
};

export default useData;

/* ********** ********** ********** ********** ********** ********** ********** */
/* ********** ********** ********** ********** ********** ********** ********** */
