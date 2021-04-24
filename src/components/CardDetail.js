import React from "react";
import { Bandera } from "./Bandera";
export const CardDetail = (pais) => {
  return (
      <>
      
    <div className="row">
      <div className="col-sm-12 col-md-6">
        <Bandera name={pais.name} ban={pais.flag} />
      </div>
      <div className="  col-sm-12 col-md-6">
          <div className="row">
          <div className=" col-6">
          <p>Nombre Pais: {pais.name}</p>
          <p>
            Area: <span>{pais.area}</span>
          </p>
          <p>
            Region: <span>{pais.region}</span>
          </p>
          <div>
            Tiempo de Zona: {pais.timezones}
          </div>
        </div>
        <div className="col-6">
          <p>Code: {pais.alpha3Code}</p>
          <p>codigo de Llamadas: +{pais.callingCodes} </p>
          <p>
            Sub Region: <span>{pais.subregion}</span>
          </p>
          <p>
            Colindaciones con Paises:
            <br />
            {Array.isArray(pais.borders) && pais.borders.length>0
              ? pais.borders.map((b) => (
                  <span key={b} className="badge rounded-pill bg-danger m-1">
                    {b}
                  </span>
                ))
              : (<span className="badge rounded-pill bg-danger">Ninguno</span>)}
          </p>
        </div>
      
          </div>
       </div>
    </div>
    </>
  );
};
