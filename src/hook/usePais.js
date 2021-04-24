import { useEffect, useState } from "react";
import { fechNamePais } from "../helpers/fechNamePais";

export const usePais = (name) => {
  const [pais, setPais] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fechNamePais(name).then((pais) => {
      setPais(pais);
    });
    setIsLoading(false);
  }, [name]);
  return {
    pais,
    isLoading,
  };
};
