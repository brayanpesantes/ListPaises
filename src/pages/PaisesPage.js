import { useState } from "react";
import { Button } from "../components/Button";
import { ListPaises } from "../components/ListPaises";
import { Loading } from "../components/Loading";
import { usePaises } from "../hook/usePaises";

export const PaisesPage = () => {
  const { paises, isLoading } = usePaises();
  const [currentPage, setCurrentPage] = useState(0);

  const filterPaises = () => {
    return paises.slice(currentPage, currentPage + 6);
  };
  const nextPage = () => {
    setCurrentPage(currentPage + 6);
  };
  const prevPage = () => {
    if (currentPage > 0){
     setCurrentPage(currentPage - 6)
    }
  };
  return (
    <>
      {isLoading ? (
        <div className="d-flex justify-content-center align-self-center">
          <Loading />
        </div>
      ) : (
        <>
          <div className="row">
            {filterPaises().map((dato, index) => (
              <ListPaises pais={dato} key={index} />
            ))}
          </div>
          <div className="d-flex justify-content-center">
            <Button
              mystyle={{ width: "100px" }}
              onClick={() => prevPage()}
              disabled={currentPage > 1 ? false : true}
            >
              Atras
            </Button>
            <Button mystyle={{ width: "100px" }} onClick={() => nextPage()}>
              Siguiente
            </Button>
          </div>
        </>
      )}
    </>
  );
};
