
describe('Pruebas de Autenticación', () => {
    beforeEach(() => {
        cy.visit('http://localhost:5173/Ingreso');

    });
    it('iniciar sesión exitosamente con credenciales válidas', () => {

        cy.get('input[placeholder="Nombre de usuario"]').type('Bbanano');
        cy.get('input[placeholder="Contraseña"]').type('123456789');
        cy.get('button').contains('Iniciar sesión').click();
        
        cy.get('body').then((body) => {
            console.log(body);
        });

        cy.contains('Usuario logeado exitosamente con rol Editor').should('be.visible');
    });

    it('mostrar un mensaje de error con credenciales incorrectas', () => {
       

        cy.get('input[placeholder="Nombre de usuario"]').type('uuva');
        cy.get('input[placeholder="Contraseña"]').type('456878');
        cy.get('button').contains('Iniciar sesión').click();
       
        cy.contains('Credenciales inválidas').should('be.visible');
    });
});