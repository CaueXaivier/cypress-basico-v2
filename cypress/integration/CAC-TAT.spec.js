// <referente types="Cypress" />

describe ('Central de Atendimento ao Cliente TAT', function(){
    beforeEach(function(){
        cy.visit('./src/index.html')

    })
    /*
    it('verificar o título da aplicação', function(){
   
            cy.title().should('be.equal','Central de Atendimento ao Cliente TAT')
          
    })

            cy.get('.success')
              .should('be.visible')

    })

    it('Exibe mensagem de erro ao submeter o formulário com um email com formatação inválida',function(){
        cy.visit('./src/index.html')
    it('Preenche os campos obrigatórios e envia o formulário',function(){
            cy.visit('./src/index.html')
            cy.get('input[id= "firstName"]')
            .type('Caue')
            cy.get('input[id="lastName"]')
            .type('Xavier')
            cy.get('input[id="email"]')
            .type('teste@teste.com')
            cy.get('textarea[id="open-text-area"]',{delay:0})
            .type('Texto é uma produção, verbal ou não verbal, que se constitui com algum código, no intuito de comunicar algo a alguém, em determinado tempo e espaço. Sua definição ampla se deve ao fato de também abranger diversos formatos.')
            cy.contains('button', 'Enviar').click()
        cy.get('input[id= "firstName"]')
        .type('Caue')
        cy.get('input[id="lastName"]')
        .type('Xavier')
        cy.get('input[id="email"]')
        .type('teste@teste')
        cy.get('textarea[id="open-text-area"]',{delay:0})
        .type('Texto é uma produção, verbal ou não verbal, que se constitui com algum código, no intuito de comunicar algo a alguém, em determinado tempo e espaço. Sua definição ampla se deve ao fato de também abranger diversos formatos.')
        cy.contains('button', 'Enviar').click()
        cy.get('.error')
          .should('be.visible')

    })

    it('Campo número somente com caracter numérico',function(){
        cy.visit('./src/index.html')
        cy.get('input[id= "firstName"]')
        .type('Caue')
        cy.get('input[id="lastName"]')
        .type('Xavier')
        cy.get('input[id="email"]')
        .type('teste@teste.com')
        cy.get('input[id="phone"]')
        .type('ABC')
        .should('have.value','')
    })

    
    it('preenche e limpa os campos nome, sobrenome, email e telefone',function(){
        cy.visit('./src/index.html')
        cy.get('input[id= "firstName"]')
        .type('Caue')
        .should('have.value','Caue')
        .clear()
        .should('have.value','')
        cy.get('input[id="lastName"]')
        .type('Xavier')
        .should('have.value','Xavier')
        .clear()
        .should('have.value','')
        cy.get('input[id="email"]')
        .type('teste@teste.com')
        .should('have.value','teste@teste.com')
        .clear()
        .should('have.value','')
        cy.get('input[id="phone"]')
        .type('51984665556')
        .should('have.value','51984665556')
        .clear()
        .should('have.value','')

    })

    it('Exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário',function(){
        cy.visit('./src/index.html')
        cy.get('input[id= "firstName"]')
        .type('Caue')
        cy.get('input[id="lastName"]')
        .type('Xavier')
        cy.get('input[id="email"]')
        .type('teste@teste.com')
        cy.get('input[id="phone-checkbox"]').check()
        cy.get('textarea[id="open-text-area"]',{delay:0})
        .type('Texto formatos.')
        cy.contains('button', 'Enviar').click()
        cy.get('.error')
          .should('be.visible')

    })

    it('envia formulário com sucesso usando comando customizado', function(){
        cy.fillMandatoryFieldsAndSubmit()
        cy.get('.success').should('be.visible')
    })
        
    it('seleciona um produto (YouTube) por seu texto',function(){
        cy.get('select').select('YouTube')
        .should('have.value','youtube')
    }) 

    it('seleciona um produto (Mentoria) por seu valor',function(){
        cy.get('select').select('mentoria')
        .should('have.value','mentoria')
    }) 

    it('seleciona um produto (Blog) por seu indice',function(){
        cy.get('select').select(1)
        .should('have.value','blog')
    }) 



    it('marca o tipo de atendimento Feedback', function(){
        cy.get('input[type="radio"]').check('feedback')
        .should('have.value','feedback')
    })

    
    it('marca cada tipo de atendimento', function(){
        cy.get('input[type="radio"]').check('ajuda')
        .should('be.checked')
        cy.get('input[type="radio"]').check('elogio')
        .should('be.checked')
        cy.get('input[type="radio"]').check('feedback')
        .should('be.checked')
    })


    it('marca ambos checkboxes, depois desmarca o último', function(){
        cy.get('input[type="checkbox"]').check()
        .should('be.checked')
        .last().uncheck()
        .should('not.be.checked')

    })
    
    it('seleciona um arquivo da pasta fixtures', function(){
        cy.get('input[type="file"]').selectFile('cypress/fixtures/example.json')
        .then(input => {
            expect(input[0].files[0].name).to.equal('example.json')
        } )

    })

    it('seleciona um arquivo simulando um drag-and-drop', function(){
        cy.get('input[type="file"]').selectFile('cypress/fixtures/example.json', {action:'drag-drop'})
        .then(input => {
            expect(input[0].files[0].name).to.equal('example.json')
        } )

    })

    it('seleciona um arquivo utilizando uma fixture para a qual foi dada um alias', function(){
        cy.fixture('example.json',{enconding: null}).as('exampleFile')
        cy.get('input[type="file"]').selectFile({contents:'@exampleFile'})
        .then(input => {
            expect(input[0].files[0].name).to.equal('example.json')
        } )

    })
    */

    it('verifica que a política de privacidade abre em outra aba sem a necessidade de um clique', function(){
        cy.get('a[href="privacy.html"]').should('have.attr', 'target', '_blank')

    })

    it('acessa a página da política de privacidade removendo o target e então clicando no link', function(){
        cy.get('a[href="privacy.html"]').invoke('removeAttr', 'target')
        .click()

    })
})