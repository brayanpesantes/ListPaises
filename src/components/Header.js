import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <nav className="navbar navbar-light bg-primary mb-5">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Paises del Mundo
        </Link>
        <form className="d-flex">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-outline-success" type="submit">
            Search
          </button>
        </form>
      </div>
    </nav>
  );
};
