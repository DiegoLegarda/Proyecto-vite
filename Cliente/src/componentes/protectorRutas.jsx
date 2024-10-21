import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../contexto';

const ProtectorRuta= ({ children }) => {
  const { auth } = useContext(AuthContext);

  if (!auth.token) {
    return <Navigate to="/Ingreso" />;
  }

  return children;
};

export default ProtectorRuta;
