import React from "react";
import classes from "../OrderPage.module.css";
function CategoriesPC() {
  return (
    <ul className={classes.OrderCategories} id="OrderCategories">
      <li
        id="recommended"
        onClick={() =>
          document
            .getElementById("recommended")
            .scrollIntoView({ behavior: "smooth", block: "center" })
        }
      >
        Szef Kuchni Poleca
      </li>
      <li
        id="soups"
        onClick={() =>
          document
            .getElementById("soup")
            .scrollIntoView({ behavior: "smooth", block: "center" })
        }
      >
        Zupy
      </li>
      <li
        id="mainmeals"
        onClick={() =>
          document
            .getElementById("main")
            .scrollIntoView({ behavior: "smooth", block: "center" })
        }
      >
        Dania Główne
      </li>
      <li
        id="kidss"
        onClick={() =>
          document
            .getElementById("kids")
            .scrollIntoView({ behavior: "smooth", block: "center" })
        }
      >
        Dla dzieci
      </li>
      <li
        id="deserts"
        onClick={() =>
          document
            .getElementById("sweet")
            .scrollIntoView({ behavior: "smooth", block: "center" })
        }
      >
        Desery
      </li>
      <li
        id="alcohol"
        onClick={() =>
          document
            .getElementById("alco")
            .scrollIntoView({ behavior: "smooth", block: "center" })
        }
      >
        Alkohole
      </li>
      <li
        id="drink"
        onClick={() =>
          document
            .getElementById("drinks")
            .scrollIntoView({ behavior: "smooth", block: "center" })
        }
      >
        Napoje
      </li>
    </ul>
  );
}
export default CategoriesPC;
