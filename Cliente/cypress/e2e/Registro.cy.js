
describe("Formulario de registro", () => {
    beforeEach(() => {
        cy.visit("http://localhost:5173/Registro");
    });

    it("Mostrar el formulario de registro", () => {

        cy.get('input[name="nombre"]').should('be.visible');
        cy.get('input[name="username"]').should('be.visible');
        cy.get('input[name="correo"]').should('be.visible');
        cy.get('input[name="password"]').should('be.visible');
        cy.get('select[name="rol"]').should('be.visible');
        cy.contains('Enviar').should('be.visible');
    });

    it("Registrar usuario de forma correcta", () => {
        const correoAleatorio = `testuser_${Date.now()}@example.com`;
        const userNameAleatorio = `testuser_${Date.now()}`;
        cy.get('input[name="nombre"]').type("Juan");
        cy.get('input[name="username"]').type(userNameAleatorio);
        cy.get('input[name="correo"]').type(correoAleatorio);
        cy.get('input[name="password"]').type("123456");
        cy.get('select[name="rol"]').select("Administrador");
        cy.contains('Enviar').click();
        cy.contains('Usuario registrado exitosamente:').should('be.visible');
    });

    it('Prueba de usernameDuplicado', () => {
        const correoAleatorio = `testuser_${Date.now()}@example.com`;
        cy.get('input[name="nombre"]').type("Juan");
        cy.get('input[name="username"]').type("Pedrito");
        cy.get('input[name="correo"]').type(correoAleatorio);
        cy.get('input[name="password"]').type("123456");
        cy.get('select[name="rol"]').select("Administrador");
        cy.contains('Enviar').click();
        
        //Segundo envio de datos 
        cy.contains('Enviar').click();
        cy.contains('El nombre de usuario ya está en uso ').should('be.visible');
    });

    it('Prueba para correo duplicado', () => {

        const correoDuplicado = `pedrito ${Date.now()} @mail.com`;
        const userNameAleatorio = `testuser_${Date.now()}`;

        // Intento 1: Registro exitoso
        cy.get('input[name="nombre"]').type("Pedro");
        cy.get('input[name="username"]').type(userNameAleatorio);
        cy.get('input[name="correo"]').type(correoDuplicado);
        cy.get('input[name="password"]').type("123456");
        cy.get('select[name="rol"]').select("Administrador");
        cy.contains('Enviar').click();        

        cy.contains('Usuario registrado exitosamente').should('be.visible');

        cy.wait(1000); 
        cy.visit("http://localhost:5173/Registro");
        
        cy.get('input[name="nombre"]').type("Pedro");
        cy.get('input[name="username"]').type(`testuser2_${Date.now()}`);
        cy.get('input[name="correo"]').type(correoDuplicado);
        cy.get('input[name="password"]').type("123456");
        cy.get('select[name="rol"]').select("Administrador");
        cy.contains('Enviar').click();

        
        cy.contains('El correo ya está en uso').should('be.visible');


    });

    it("Prueba de envio incompleto",()=>{
        cy.get('input[name="nombre"]').type("Pedro");
        cy.get('input[name="username"]').type("Pedrito");
        cy.get('input[name="correo"]').type("pedrito@mail.com");
        cy.get('select[name="rol"]').select("Administrador");
        cy.contains('Enviar').click();
        cy.contains('Se requieren datos del usuario').should('be.visible');
    })


});    
