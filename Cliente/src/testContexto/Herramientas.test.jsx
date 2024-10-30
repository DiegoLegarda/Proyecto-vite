//archivo de test para contexto 
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import axios from 'axios';
import Herramientas from '../paginas/herramientas';
import FormLogin from '../componentes/FormLogin';
import { MemoryRouter } from 'react-router-dom';

vi.mock('axios');

describe("Pruebas para la vista herramientas", () => {

    const envioDatos = () => {
        fireEvent.change(screen.getByPlaceholderText("Nombre de usuario"), { target: { value: 'testUser' } });
        fireEvent.change(screen.getByPlaceholderText("Contraseña"), { target: { value: 'password123' } });
        fireEvent.click(screen.getByRole('button', { type: "submit"}));
    }
    const configRespMock=()=>{
        const mockToken = {
            data: {
                token: 'fake-jwt-token',
                rol: 'admin',
                message: 'Login exitoso'
            }
        };
        axios.post.mockResolvedValueOnce(mockToken);
    }
    beforeEach(() => {
        vi.clearAllMocks();
        vi.spyOn(console, 'error').mockImplementation(() => {});
        render(<MemoryRouter><Herramientas /></MemoryRouter>);
    });
    it('renderiza correctamente formulario Login', () => {

        const username = screen.getByPlaceholderText("Nombre de usuario");
        expect(username).toBeInTheDocument();
        const formLogin = screen.getByPlaceholderText("Contraseña");
        expect(formLogin).toBeInTheDocument();
        const boton = screen.getByRole('button', { type: "submit" });
        expect(boton).toBeInTheDocument();
    });

    it("Prueba de envio para login", async () => {
        configRespMock();
        
        envioDatos();
        await waitFor(() => {
            expect(axios.post).toHaveBeenCalledWith(
                'http://localhost:3000/api/login/token',
                { username: 'testUser', password: 'password123' },
                { withCredentials: true } 
            );
        });
        
    })

    it("Prueba de retorno exitoso de respuesta", async () => {
        configRespMock();
        envioDatos();
        await waitFor(() => {
            expect(screen.getByText(/Usuario logeado exitosamente/i)).toBeInTheDocument();
        });

    });

    it("Prueba para login rechazado",async()=>{
        axios.post.mockRejectedValueOnce({
            response: {
                status: 401                
            }
        });
        envioDatos();
        await waitFor(() => {
            expect(axios.post).toHaveBeenCalled();
            expect(screen.queryByText(/Usuario logeado exitosamente/i)).not.toBeInTheDocument();            
            expect(console.error).toHaveBeenCalledWith(
                'Error de autenticación: Credenciales inválidas o no autorizadas.'
            );
        });
    });

    it('maneja un error de red al enviar la solicitud', async () => {
        axios.post.mockRejectedValueOnce(new Error('Error de red'));

        envioDatos();

        await waitFor(() => {
            expect(axios.post).toHaveBeenCalled();
            expect(screen.queryByText(/Usuario logeado exitosamente/i)).not.toBeInTheDocument();
            expect(console.error).toHaveBeenCalledWith(
                'Error al enviar la solicitud:', 'Error de red'
            );
        });
    });

});