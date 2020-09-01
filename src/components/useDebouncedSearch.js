import { useState } from "react";
import AwesomeDebouncePromise from "awesome-debounce-promise";
import useConstant from "use-constant";
import { useAsync } from "react-async-hook";

const useDebouncedSearch = (searchFunction) => {
  const [inputText, setInputText] = useState("");

  // Debounce the original search async function
  const debouncedSearchFunction = useConstant(() =>
    AwesomeDebouncePromise(searchFunction, 500)
  );

  const searchResults = useAsync(async () => {
    if (inputText.length === 0) {
      return [];
    } else {
      return debouncedSearchFunction(inputText);
    }
  }, [debouncedSearchFunction, inputText]);

  // Return everything needed for the hook consumer
  return {
    inputText,
    setInputText,
    searchResults,
  };
};

export default useDebouncedSearch;