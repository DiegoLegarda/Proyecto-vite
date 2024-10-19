import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../contexto';

const ProtectedRoute = ({ children }) => {
  const { auth } = useContext(AuthContext);

  if (!auth.token) {
    // Si no está autenticado, redirigir al login
    return <Navigate to="/Herramientas" />;
  }

  return children;
};

export default ProtectedRoute;
