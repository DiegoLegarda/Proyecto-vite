import React from 'react';
import { Link } from 'react-router-dom';

function BarraTailwind() {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <Link to="/" className="btn btn-ghost normal-case text-xl">Inicio</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/Acerca">Acerca de</Link></li>
          <li><Link to="/Registro">Registro</Link></li>
          <li><Link to="/Ingreso">Ingreso</Link></li>
        </ul>
      </div>
    </div>
  );
}

export default BarraTailwind;
