import { Link } from "react-router-dom";
import { Bandera } from "./Bandera";
export const Card = ({ pais }) => {
  return (
    <div className="card m-3 border-0" style={{ width: "18rem" }}>
      <Bandera ban={pais.flag} name={pais.name}/>
      <div className="card-body">
        <h5 className="card-title">{pais.name}</h5>
        <p className="card-text">
          población : <span className="badge bg-success">{pais.population}</span>
        </p>
        <div className="d-flex justify-content-center mt-4">
        <Link to={`/details/${pais.alpha3Code}`} className="btn btn-primary">
            Mas información
          </Link>
        </div>
          
      </div>
    </div>
  );
};
