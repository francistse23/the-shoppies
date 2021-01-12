import {
  NominationsContainer,
  SectionDiv,
  SectionTitle,
} from "../styled-components";

import Movie from "./Movie";
import React from "react";
import { colors } from "../constants";

export default function Nominations({
  nominations,
  setNominations,
  reference,
}) {
  return (
    <SectionDiv
      backgroundColor={colors.mainColor}
      id="nominations"
      ref={reference}
    >
      <SectionTitle>
        Your Nominations{" "}
        <span aria-label="trophy" role="img">
          🏆
        </span>
      </SectionTitle>

      {nominations.size === 0 ? (
        <>
          <p key="no-nominations">
            You don't have any nominations for The Shoppies yet.
          </p>
          <p key="max-nominations">You can add at most 5 nominations</p>
        </>
      ) : (
        <NominationsContainer>
          {[...nominations.values()].map(({ Title, Year, Poster, imdbID }) => (
            <Movie
              key={imdbID}
              Title={Title}
              Year={Year}
              Poster={Poster}
              imdbID={imdbID}
              nominations={nominations}
              setNominations={setNominations}
              isNominations={true}
            />
          ))}
        </NominationsContainer>
      )}
    </SectionDiv>
  );
}
