describe('Funcionalidade: Contato', () => {         // descrição do conjunto de testes, blocos começam com {}
  
  beforeEach(() => {
    cy.visit('index.html') //centralizando site de acesso // index é uma funcionalidade e o site vai para cyprress.config.js
  });

  it('Deve preencher o formulário de contato com sucesso', () => {
    // criação de cada função / quando usa it.only, só é possivel executar apenas o teste marcado
    cy.get('[name="name"]').type('Mayara Munis')
    cy.get('[name="email"]').type('mayara@mailinator.com')
    cy.get('[name="subject"]').select('Sugestões')
    cy.get('[name="message"]').type('Mensagem de teste')
    cy.get('#btn-submit').click()
    // Resultado esperado - sempre tem que ter em todo teste
    cy.contains('Contato enviado com sucesso!').should('exist')
  }); 

  it('Deve validar os campos obrigatórios - nome', () => { 
    cy.get('[name="name"]').clear()
    cy.get('[name="email"]').type('mayara@mailinator.com')
    cy.get('[name="subject"]').select('Sugestões')
    cy.get('[name="message"]').type('Mensagem de teste')
    cy.get('#btn-submit').click()
    // Resultado esperado - sempre tem que ter em todo teste
    cy.get('#alert-container').should('contain','Por favor, preencha o campo Nome')

  });

  it('Deve validar os campos obrigatórios - email', () => {
    cy.get('[name="name"]').type('Mayara Munis')
    cy.get('[name="email"]').clear()
    cy.get('[name="subject"]').select('Sugestões')
    cy.get('[name="message"]').type('Mensagem de teste')
    cy.get('#btn-submit').click()
    // Resultado esperado - sempre tem que ter em todo teste 
    cy.get('#alert-container').should('contain','campo E-mail') //contain valida parte da mensagem
  });


  it('Deve validar os campos obrigatórios - assunto', () => {
    cy.get('[name="name"]').type('Mayara Munis')
    cy.get('[name="email"]').type('mayara@mailinator.com')
    //cy.get('[name="subject"]') - assim não faz ação
    cy.get('[name="message"]').type('Mensagem de teste')
    cy.get('#btn-submit').click()
    // Resultado esperado - sempre tem que ter em todo teste
    cy.get('#alert-container').should('contain','Por favor, selecione o Assunto')
  });

  it('Deve validar os campos obrigatórios - mensagem', () => {
    cy.get('[name="name"]').type('Mayara Munis')
    cy.get('[name="email"]').type('mayara@mailinator.com')
    cy.get('[name="subject"]').select('Sugestões')
    cy.get('[name="message"]').clear()
    cy.get('#btn-submit').click()
    // Resultado esperado - sempre tem que ter em todo teste
    cy.get('#alert-container').should('contain','Por favor, escreva sua Mensagem')
  });


















})