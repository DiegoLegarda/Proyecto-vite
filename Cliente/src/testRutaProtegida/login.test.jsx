import { render, screen, waitFor } from '@testing-library/react';
import { describe, it, vi, expect, beforeEach } from 'vitest';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { AuthProvider, AuthContext } from '../contexto';
import VistaProtegida from '../paginas/basedatos';
import ProtectorRuta from '../componentes/protectorRutas';
import FormLogin from '../componentes/FormLogin';
import axios from 'axios';

vi.mock('axios');

describe('Formulario de Login', () => {
    beforeEach(() => {
        localStorage.clear();
        vi.resetAllMocks();
    });

    it('Autenticación efectuada', async () => {
        axios.post.mockResolvedValueOnce({
            data: { token: 'test-token', rol: 'admin' },
        });

        render(
            <MemoryRouter>
                <AuthProvider>
                    <FormLogin />
                </AuthProvider>
            </MemoryRouter>
        );


        screen.getByPlaceholderText(/nombre de usuario/i).value = 'usuario';
        screen.getByPlaceholderText(/contraseña/i).value = 'password';

        screen.getByText(/iniciar sesión/i).click();

        await waitFor(() => {
            expect(localStorage.getItem('token')).toBe('test-token');
            expect(localStorage.getItem('rol')).toBe('admin');
        });
    });
});

describe('Acceso a vista protegida', () => {
    beforeEach(() => {
        localStorage.clear();
        vi.resetAllMocks();
    });

    it('Redireccion al formulario de Login', () => {
        const authContextValue = { auth: { token: null } };

        render(
            <MemoryRouter initialEntries={['/BaseDatos']}>
                <AuthContext.Provider value={authContextValue}>
                    <Routes>
                        <Route
                            path="/BaseDatos"
                            element={
                                <ProtectorRuta>
                                    <VistaProtegida />
                                </ProtectorRuta>
                            }
                        />
                        <Route path="/Ingreso" element={<FormLogin />} />
                    </Routes>
                </AuthContext.Provider>
            </MemoryRouter>
        );


        expect(screen.getByText(/iniciar sesión/i)).toBeInTheDocument();
    });
});


vi.mock('../componentes/listaImagenes', () => ({
    default: ({ setImagenSeleccionada }) => (
        <div>
            <img alt="image1" src="http://localhost/images/image1.jpg" onClick={() => setImagenSeleccionada('imagen1')} />
            <img alt="image2" src="http://localhost/images/image2.jpg" onClick={() => setImagenSeleccionada('imagen2')} />
        </div>
    )
}));


describe('Test de protector de rutas', () => {
    beforeEach(() => {
        localStorage.setItem('token', 'test-token');
        vi.resetAllMocks();
    });

    it('Acceso efectuado para mostrar las URL de las imagenes', async () => {

        axios.get.mockResolvedValueOnce({
            data: [
                { id: 1, url: 'http://localhost/images/image1.jpg' },
                { id: 2, url: 'http://localhost/images/image2.jpg' },
            ],
        });

        render(
            <MemoryRouter>
                <AuthProvider>
                    <VistaProtegida />
                </AuthProvider>
            </MemoryRouter>
        );

        await waitFor(() => {
            expect(axios.get).toHaveBeenCalledWith('/api/images', {
                headers: { Authorization: 'Bearer test-token' },
            });
        });

        await waitFor(() => {
            expect(screen.getByAltText(/image1/i)).toHaveAttribute('src', 'http://localhost/images/image1.jpg');
            expect(screen.getByAltText(/image2/i)).toHaveAttribute('src', 'http://localhost/images/image2.jpg');
        });
    });


    it('Acesso concedido para renderizar', () => {
        const authContextValue = { auth: { token: 'test-token' } }; 
        const ChildComponent = () => <div>Contenido protegido</div>; 

        render(
            <MemoryRouter>
                <AuthContext.Provider value={authContextValue}>
                    <ProtectorRuta>
                        <ChildComponent />
                    </ProtectorRuta>
                </AuthContext.Provider>
            </MemoryRouter>
        );


        expect(screen.getByText(/contenido protegido/i)).toBeInTheDocument();
    });

    

});