import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import ManejoFormulario from '../componentes/manejoFormulario';

test('Prueba de renderizado de formulario', () => {
    render(<ManejoFormulario />);    
    const nombreInput = screen.getByPlaceholderText('Ingrese el nombre');
    expect(nombreInput).toBeInTheDocument();

    const correoInput = screen.getByPlaceholderText('Ingrese el nombre');
    expect(correoInput).toBeInTheDocument();

    const passwordInput = screen.getByPlaceholderText('Ingrese el nombre');
    expect(passwordInput).toBeInTheDocument();

        
    
});