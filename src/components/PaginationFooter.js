import React from "react";
import { PageButton, PaginationButton } from "../styled-components";
import { dimensions } from "../constants";

export default function PaginationFooter({ page, setPage, searchResults }) {
  return (
    <footer
      style={{
        display: "flex",
        flex: 1,
        justifyContent: "space-between",
        margin: `${dimensions.spacing * 4}px auto`,
        minHeight: "100%",
        border: "1px solid red",
      }}
    >
      {page > 1 ? (
        <PaginationButton
          aria-label="previous page"
          onClick={() => setPage((page) => page - 1)}
        >{`<`}</PaginationButton>
      ) : (
        <button
          disabled
          style={{ backgroundColor: "transparent", border: "none", flex: 1 }}
        />
      )}
      <div
        style={{
          alignItems: "center",
          justifyContent: "space-around",
          flex: 6,
          width: "100%",
        }}
      >
        {page * 10 > searchResults?.result?.totalResults
          ? Array.from(Array(5), (_, i) => page - 4 + i).map((element) => (
              <PageButton
                page={page}
                element={element}
                aria-label={`navigate to page ${element}`}
                onClick={() => setPage(element)}
              >
                {element}
              </PageButton>
            ))
          : Array.from(Array(5), (_, i) =>
              page > 1 ? page + i - 1 : page + i
            ).map((element) => (
              <PageButton
                page={page}
                element={element}
                aria-label={`navigate to page ${element}`}
                onClick={() => setPage(element)}
              >
                {element}
              </PageButton>
            ))}
      </div>
      {10 * page < searchResults?.result?.totalResults ? (
        <PaginationButton
          aria-label="next page"
          onClick={() => setPage((page) => page + 1)}
        >{`>`}</PaginationButton>
      ) : (
        <button
          disabled
          style={{ backgroundColor: "transparent", border: "none", flex: 1 }}
        />
      )}
    </footer>
  );
}
