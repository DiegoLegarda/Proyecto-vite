import { describe, expect, test } from 'vitest';
import { getAllByPlaceholderText, render, screen,fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ManejoFormulario from '../componentes/manejoFormulario';
import axios from 'axios';



describe("Pruebas manejo Formulario", () => {
    beforeEach(() => {
        render(<ManejoFormulario />);
      });
    test("Prueba de renderizado", () => {
        
        const inputcorreo = screen.getAllByPlaceholderText("Ingrese su correo");
        expect(inputcorreo).toBeInTheDocument;

        const enviarButton = screen.getByRole('button', { name: "Enviar" });
        expect(enviarButton).toBeInTheDocument();
        expect(enviarButton).toBeEnabled();
    });
    test("Pruebas de ingreso de datos", async () => {
       
        const nombreInput = screen.getByPlaceholderText('Ingrese el nombre');
        await userEvent.type(nombreInput, 'Juan Pérez');
        expect(nombreInput.value).toBe('Juan Pérez');
    });

    test("Prueba de hook's para el componente", () => {        
        const nombreInput = screen.getByPlaceholderText('Ingrese el nombre');
        fireEvent.change(nombreInput, { target: { value: 'Juan' } });
        expect(nombreInput.value).toBe('Juan');
    });
    
    test("prueba de mensaje de botón enviando...", () => {
        const boton = screen.getByRole('button', { name: /Enviar/i });
        fireEvent.click(boton);       
        expect(boton).toHaveTextContent(/Enviando.../i);       
    });   

})