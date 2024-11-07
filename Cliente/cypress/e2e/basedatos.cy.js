describe('Componente BaseDatos', () => {
    beforeEach(() => {
        cy.login(); 
        cy.visit('http://localhost:5173/BaseDatos');
    });

    it('cargar y mostrar las imágenes correctamente', () => {
   
       
        cy.contains('Lista de Imágenes').should('be.visible');
        
    });

    it('permitir cambiar el nombre de una imagen seleccionada', () => {
       
        cy.get(':nth-child(1) > img').click();
      
        cy.contains('Cambiar nombre para').should('be.visible');
    });
    
    it('obtener respuesta de cambio de nombre',()=>{
       
        cy.get(':nth-child(1) > img').click();
        cy.get('label > input').type("nuevoNombre")
        cy.get('button').contains('Cambiar nombre').click();

        cy.on('window:alert', (alertText) => {            
            expect(alertText).to.equal('Nombre cambiado con éxito');
          });
        
      
    });
});