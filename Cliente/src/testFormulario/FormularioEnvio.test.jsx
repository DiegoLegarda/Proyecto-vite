import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import axios from 'axios';
import ManejoFormulario from '../componentes/manejoFormulario';


vi.mock('axios');

describe('Pruebas de ManejoFormulario', () => {
    beforeEach(() => {
        vi.clearAllMocks();
        render(<ManejoFormulario />);
    });
    
    
   

    test('Mostrar mensaje de registro exitoso', async () => {

        const mockRespuesta = {
            data: {
                nombre: 'Juan',
                correo: 'juan@example.com',
                fechaRegistro: new Date().toISOString(),
            }
        };
        axios.post.mockResolvedValueOnce(mockRespuesta);        

        fireEvent.change(screen.getByPlaceholderText('Ingrese el nombre'), { target: { value: 'Juan' } });
        fireEvent.change(screen.getByPlaceholderText('Ingrese su correo'), { target: { value: 'juan@example.com' } });
        fireEvent.change(screen.getByPlaceholderText('Ingrese contraseña'), { target: { value: 'contraseña123' } });

        fireEvent.click(screen.getByRole('button', { name: /Enviar/i }));


        await waitFor(() => {
            expect(screen.getByText(/Usuario registrado exitosamente:/i)).toBeInTheDocument();
            expect(screen.getByText(/Nombre: Juan/i)).toBeInTheDocument();
            expect(screen.getByText(/Correo: juan@example.com/i)).toBeInTheDocument();
            expect(screen.getByText(/Fecha de Registro:/i)).toBeInTheDocument();
        });
    });

    test("Mostrar el mensaje de error en base de datos", async () => {
        const mockRespuesta = {
            response: {
                data: {
                    mensaje: 'Error al registrar el usuario',
                }
            }
        };
        axios.post.mockRejectedValueOnce(mockRespuesta);
        
        fireEvent.change(screen.getByPlaceholderText('Ingrese el nombre'), { target: { value: 'Juan' } });
        fireEvent.change(screen.getByPlaceholderText('Ingrese su correo'), { target: { value: 'juan@example.com' } });
        fireEvent.change(screen.getByPlaceholderText('Ingrese contraseña'), { target: { value: 'contraseña123' } });


        fireEvent.click(screen.getByRole('button', { name: /Enviar/i }));

        await waitFor(() => {
            expect(screen.getByText(/Error: Error al registrar el usuario/i)).toBeInTheDocument();

        });
    });

    test("Mostrar error de conexion",async()=>{
        const mockError = new Error('Error de conexión');
        axios.post.mockRejectedValueOnce(mockError);

        fireEvent.change(screen.getByPlaceholderText('Ingrese el nombre'), { target: { value: 'Juan' } });
        fireEvent.change(screen.getByPlaceholderText('Ingrese su correo'), { target: { value: 'juan@example.com' } });
        fireEvent.change(screen.getByPlaceholderText('Ingrese contraseña'), { target: { value: 'contraseña123' } });


        fireEvent.click(screen.getByRole('button', { name: /Enviar/i }));

        await waitFor(() => {
            expect(screen.getByText(/Error: Error de conexión/i)).toBeInTheDocument();

        });
    })
});