import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import classes from "./OurStory.module.css";

const OurStory = () => (
  <section className={classes.OurStory}>
    <div className={classes.image1}></div>
    <h2>Nasza historia</h2>
    <h3>Z miłości do polskiego jedzenia</h3>
    <p className={classes.animateScroller}>
      <FontAwesomeIcon icon={faAngleDown} />
    </p>
    <p className={classes.OurStoryText}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus cursus
      sed ex sit amet porttitor. Duis in fermentum neque. Nunc pellentesque
      eleifend tristique. Vestibulum ut rhoncus nibh. Nunc pharetra dolor et
      turpis efficitur molestie. Etiam sodales mollis neque, in scelerisque
      purus molestie eu. Maecenas pretium auctor diam quis scelerisque. Praesent
      hendrerit commodo nunc, sit amet congue risus tempus nec. Nunc dapibus
      faucibus purus non rutrum
    </p>
    <p className={classes.OurStoryText}>
      Cras purus velit, lacinia id mauris aliquam, scelerisque mattis eros.
      Aenean a nunc odio. Nunc blandit ac est ornare cursus. Pellentesque sed
      dolor suscipit, rutrum orci quis, interdum elit. Nunc hendrerit pretium
      tellus quis venenatis. Morbi finibus nulla et ante semper rutrum. Maecenas
      efficitur posuere nibh. Phasellus rhoncus ante eget dignissim convallis.
    </p>
    <h2 className={classes.owner}>Właściciel, założyciel i szef kuchni</h2>
    <h3>Jak piękne tradycje, tworzą pyszne jedzenie</h3>
    <div className={classes.bar}></div>
    <div className={classes.wideBar}>
      <div className={classes.quote}>
        <h2>Michał Dyrda</h2>
        <p className={classes.quoteChef}>
          `&quot`W dzieciństwie mnóstwo czasu spędzałem z prababcią, była
          chodzącą skarbnicą tradycyjnych przepisów, mnóstwo z nich pamiętam do
          dziś. Wiele się od niej nauczyłem, i już w młodym wieku zapragąłem
          szerzyć polskie tradycje kulinarne nie tylko w kraju, ale i całej
          Europie`&quot`
        </p>
      </div>

      <div className={classes.image2}></div>
    </div>
    <p className={classes.OurStoryText}>
      Cras purus velit, lacinia id mauris aliquam, scelerisque mattis eros.
      Aenean a nunc odio. Nunc blandit ac est ornare cursus. Pellentesque sed
      dolor suscipit, rutrum orci quis, interdum elit. Nunc hendrerit pretium
      tellus quis venenatis. Morbi finibus nulla et ante semper rutrum. Maecenas
      efficitur posuere nibh. Phasellus rhoncus ante eget dignissim convallis.
    </p>
  </section>
);

export default OurStory;
