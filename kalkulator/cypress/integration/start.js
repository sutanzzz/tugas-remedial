describe(' Kalkulator ', function() {
    it('successfully loads', function() {
      cy.visit('http://localhost:3000') // change URL to match your dev URL
    })

    it('greetings', () =>{
        cy.contains('h3', 'Aplikasi Kalkulator Redux')
    })

    it('Screen', () => {
        cy.contains('div', 0 )
    })

    it('click', () => {
        cy.get('button').contains('1').click()
        cy.get('button').contains('2').click()
        cy.get('button').contains('3').click()
        cy.get('button').contains('4').click()
        cy.get('button').contains('5').click()
        cy.get('button').contains('6').click()
        cy.get('button').contains('7').click()
        cy.get('button').contains('8').click()
        cy.get('button').contains('9').click()
        cy.get('button').contains('0').click()

        cy.get('button').contains('C').click()
    })

    it('operator +', () => {
        cy.get('button').contains('1').click()
        cy.get('button').contains('+').click()
        cy.get('button').contains('5').click()
        cy.get('button').contains('=').click()

        cy.get('button').contains('C').click()
    })

    it('operator -', () => {
        cy.get('button').contains('8').click()
        cy.get('button').contains('-').click()
        cy.get('button').contains('3').click()
        cy.get('button').contains('=').click()

        cy.get('button').contains('C').click()
    })

    it('decimal', () => {
        cy.get('button').contains('1').click()
        cy.get('button').contains('.').click()
        cy.get('button').contains('5').click()
        cy.get('button').contains('+').click()
        cy.get('button').contains('2').click()
        cy.get('button').contains('.').click()
        cy.get('button').contains('5').click()
        cy.get('button').contains('=').click()

        cy.get('button').contains('C').click()
    })
  })