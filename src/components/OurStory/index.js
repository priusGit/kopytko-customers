import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import {
  ContentContainer,
  StoryTitle,
  StorySubtitle,
  StoryContent,
  CityImage,
  ChefImage,
  Featured,
  QuoteContainer,
  QuoteCopy,
  QuoteHeadline,
  ScrollAnimation,
  ChefTitle,
} from "./styles";

const OurStory = () => (
  <ContentContainer>
    <CityImage />
    <StoryTitle>Nasza historia</StoryTitle>
    <StorySubtitle>Z miłości do polskiego jedzenia</StorySubtitle>
    <ScrollAnimation>
      <FontAwesomeIcon icon={faAngleDown} />
    </ScrollAnimation>
    <StoryContent>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus cursus
      sed ex sit amet porttitor. Duis in fermentum neque. Nunc pellentesque
      eleifend tristique. Vestibulum ut rhoncus nibh. Nunc pharetra dolor et
      turpis efficitur molestie. Etiam sodales mollis neque, in scelerisque
      purus molestie eu. Maecenas pretium auctor diam quis scelerisque. Praesent
      hendrerit commodo nunc, sit amet congue risus tempus nec. Nunc dapibus
      faucibus purus non rutrum
    </StoryContent>
    <StoryContent>
      Cras purus velit, lacinia id mauris aliquam, scelerisque mattis eros.
      Aenean a nunc odio. Nunc blandit ac est ornare cursus. Pellentesque sed
      dolor suscipit, rutrum orci quis, interdum elit. Nunc hendrerit pretium
      tellus quis venenatis. Morbi finibus nulla et ante semper rutrum. Maecenas
      efficitur posuere nibh. Phasellus rhoncus ante eget dignissim convallis.
    </StoryContent>
    <ChefTitle>Właściciel, założyciel i szef kuchni</ChefTitle>
    <StorySubtitle>Jak piękne tradycje, tworzą pyszne jedzenie</StorySubtitle>
    {/* <div className={classes.bar}></div> */}
    <Featured>
      <QuoteContainer>
        <QuoteHeadline>Michał Dyrda</QuoteHeadline>
        <QuoteCopy>
          "W dzieciństwie mnóstwo czasu spędzałem z prababcią, była chodzącą
          skarbnicą tradycyjnych przepisów, mnóstwo z nich pamiętam do dziś.
          Wiele się od niej nauczyłem, i już w młodym wieku zapragąłem szerzyć
          polskie tradycje kulinarne nie tylko w kraju, ale i całej Europie"
        </QuoteCopy>
      </QuoteContainer>

      <ChefImage />
    </Featured>
    <StoryContent>
      Cras purus velit, lacinia id mauris aliquam, scelerisque mattis eros.
      Aenean a nunc odio. Nunc blandit ac est ornare cursus. Pellentesque sed
      dolor suscipit, rutrum orci quis, interdum elit. Nunc hendrerit pretium
      tellus quis venenatis. Morbi finibus nulla et ante semper rutrum. Maecenas
      efficitur posuere nibh. Phasellus rhoncus ante eget dignissim convallis.
    </StoryContent>
  </ContentContainer>
);

export default OurStory;
