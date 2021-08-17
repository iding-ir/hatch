import { useState, useEffect } from "react";

import { ICities } from "../types";

export const useDataset = () => {
  const [cities, setCities] = useState<ICities>([]);

  useEffect(() => {
    fetch("/nl.json")
      .then((response) => response.json())
      .then((cities) => {
        setCities(cities);
      });
  }, []);

  return { cities };
};
