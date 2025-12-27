/// <reference types="cypress" />
import produtosPage from "../support/page_objects/produtos.page";

context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
  /*  Como cliente 
      Quero acessar a Loja EBAC 
      Para fazer um pedido de 4 produtos 
      Fazendo a escolha dos produtos
      Adicionando ao carrinho
      Preenchendo todas opções no checkout
      E validando minha compra ao final */

  beforeEach(() => {
    produtosPage.visitarUrl()
  });

  it('Deve fazer um pedido na loja Ebac Shop de ponta a ponta', () => {
       let qtd = 4
              produtosPage.buscarProduto('Autumn Pullie')
              produtosPage.addProdutoCarrinho('M', 'Red', qtd)
              cy.get('.woocommerce-message > .button').click()
              cy.get('.checkout-button').click()
              cy.get('#billing_first_name').type('Gabriel')
              cy.get('#billing_last_name').type('Henrique')
              cy.get('#billing_address_1').type('Rua teste, 1234')
              cy.get('#billing_city').type('Lindoia')
              cy.get('#billing_postcode').type('13950100')
              cy.get('#billing_phone').type('40028922')
              cy.get('#billing_email').type('gabrieltest@123.com')
              cy.get('#terms').click()
              cy.get('#place_order').click()
             cy.get('.woocommerce-notice').should('contain' , 'Obrigado. Seu pedido foi recebido.')
  });


})