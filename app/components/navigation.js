/* ********** ********** ********** ********** ********** ********** ********** */
/* "NAVEGACIÓN GENERAL" */
/* ********** ********** ********** ********** ********** ********** ********** */

import FloatBar from "./floatbar.js";
import FixedBar from "./fixedbar.js";

// Genera el encabezado y los componentes de navegación.
// "filterType" se definio en "page.js".
export default function Navigation({ filterType, setFilterType }) {
  return (
    <>
      <FloatBar filterType={filterType} setFilterType={setFilterType} />
      <FixedBar filterType={filterType} setFilterType={setFilterType} />
    </>
  );
}

/* ********** ********** ********** ********** ********** ********** ********** */
/* ********** ********** ********** ********** ********** ********** ********** */
