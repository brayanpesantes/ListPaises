import React from "react";
import { useParams } from "react-router";
import { usePais } from "../hook/usePais";
import { Loading } from "../components/Loading";
import { CardDetail } from "../components/CardDetail";
import { Link } from "react-router-dom";

export const DetailsPaisesPage = () => {
  const { name } = useParams();
  const { pais, isLoading } = usePais(name);

  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Link to="/" className="btn btn-outline-danger mb-2 fw-bold">
            <i className="bi bi-arrow-left-circle"></i> Atras
          </Link>
          <CardDetail {...pais} />
        </>
      )}
    </div>
  );
};
