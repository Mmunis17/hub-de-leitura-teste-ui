/// <reference types="cypress"/>
import { faker } from '@faker-js/faker';
//// massa de dados fiquiticios

describe('Funcionalidade: Cadastro no Hub de Leitura', () => {

    beforeEach(() => {
        cy.visit('register.html')
});

    it('Deve fazer cadastro com sucesso, usando função e variavel', () => {
        let email = `teste${Date.now()}@teste.com` // variavel para gerar email como strig aleatório, com date que gerar numeros unicos de data
        cy.get('#name').type('Mayara Munis')
        cy.get('#email').type(email)
        cy.get('#phone').type('11999999990')
        cy.get('#password').type('Teste@123')
        cy.get('#confirm-password').type('Teste@123')
        cy.get('#terms-agreement').check()
        cy.get('#register-btn').click()
        // Resultado esperado
        cy.url().should('include', 'dashboard')
    });
    
    //faker é uma biblioteca para dados dinamicos, para pegar é em https://www.npmjs.com/ - @faker-js/faker - npm i @faker-js/faker - sempre recorrer a documentação
    it('Deve fazer cadastro com sucesso, usando Faker', () => {
        let nome = faker.person.fullName() // função do faker para gerar nome aleatório
        let email = faker.internet.email() // função do faker para gerar email aleatório
        cy.get('#name').type(nome)
        cy.get('#email').type(email)
        cy.get('#phone').type('11999999990')
        cy.get('#password').type('Teste@123')
        cy.get('#confirm-password').type('Teste@123')
        cy.get('#terms-agreement').check()
        cy.get('#register-btn').click()
        // Resultado esperado
        cy.url().should('include', 'dashboard')
        cy.get('#user-name').should('contain', nome) // validando se a variavel gerada no nome é a mesma do dashboard
        });

});