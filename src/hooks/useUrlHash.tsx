import { useState } from "react";

export const useUrlHash = () => {
  const [hash, setHash] = useState<string | undefined>(
    window.location.hash.substr(1)
  );

  const onClear = () => {
    window.location.hash = "";
    setHash(undefined);
  };

  return { hash, onClear };
};
