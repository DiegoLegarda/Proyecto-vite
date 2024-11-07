import { render, screen, waitFor, fireEvent, act } from '@testing-library/react';
import { AuthProvider, AuthContext } from '../contexto';
import { useContext } from 'react';



const ComponentePruebas = () => {
    const { auth, login, logout } = useContext(AuthContext);
    return (
        <div>
            <p>Token: {auth.token !== null ? auth.token : "null"}</p>
            <p>Rol: {auth.rol !== null ? auth.rol : "null"}</p>
            <button onClick={() => login('test-token', 'admin')}>Login</button>
            <button onClick={logout}>Logout</button>
        </div>
    );
};

describe('Pruebas de Contexto', () => {
    beforeEach(() => {
        localStorage.clear();

    });
    it('almacenar token y rol en localStorage al hacer login', async () => {
        render(
            <AuthProvider>
                <ComponentePruebas />
            </AuthProvider>
        );
        await act(async () => {
            fireEvent.click(screen.getByText(/Login/i));
        });
        expect(localStorage.getItem('token')).toBe('test-token');
        expect(localStorage.getItem('rol')).toBe('admin');
        expect(screen.getByText(/Token: test-token/i)).toBeInTheDocument();
        expect(screen.getByText(/Rol: admin/i)).toBeInTheDocument();
    });
    it('eliminar token y rol de localStorage al hacer logout', async () => {

        localStorage.setItem('token', 'test-token');
        localStorage.setItem('rol', 'admin');
        render(
            <AuthProvider>
                <ComponentePruebas />
            </AuthProvider>
        );

        expect(screen.getByText(/token: test-token/i)).toBeInTheDocument();
        expect(screen.getByText(/rol: admin/i)).toBeInTheDocument();

        await act(async () => {
            screen.getByText(/Logout/i).click();
        });
        await waitFor(() => {
            expect(localStorage.getItem('token')).toBeNull();
            expect(localStorage.getItem('rol')).toBeNull();
        });

    });



});

