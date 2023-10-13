/// <reference types="cypress" />
import { faker } from '@faker-js/faker'
import 'cypress-real-events'

describe('landing page', () => {
  beforeEach(() => {
    cy.clearAllCookies()
    cy.setCookies()
    cy.visit('https://amcef.com/')
  })

  it('header menu has logo and visible links', () => {
    cy.get('[href="https://amcef.com"] > img')
      .should('be.visible')

    const headerItems = ['Domov', 'O nás', 'Služby', 'Referencie', 'Blog', 'Kariéra', 'Kontakt']

    headerItems.forEach((el) => {
      cy.get('a.elementor-item')
        .should('contain.text', el)
        .should('be.visible')
    })
  })

  it('language can be changed', () => {
    cy.setCookie('wp-wpml_current_language', 'sk')

    const languages = ['EN', 'DE', 'CZ']

    languages.forEach((el) => {
      cy.get(`a[title="${el}"]`)
        .should('not.be.visible')
    })

    cy.get('a[title="SK"]')
      .should('be.visible')
      .first()
      .realHover({ position: "center" })
      .click()

    languages.forEach((el) => {
      cy.get(`a[title="${el}"]`)
        .should('be.visible')
        .then((el) => {
        })
    })

    cy.get('a[title="EN"]')
      .first()
      .click()

    cy.url().should('contain', 'amcef.com/en')
  })

  it('acordions are usable and contain text', () => {
    cy.get('div.referencie-analyza')
      .within(() => {
        cy.get('i.fas.fa-chevron-up')
          .click()
      })

    // See if all 3 elements roll up and down according to the chevron direction

  })

  it('carousel with articles works', () => {

    // See if an element is visible, then click on the chevron and see if the element is no longer visible

  })


  it('messaging form is usable', () => {
    const name = faker.person.fullName()
    const email = faker.internet.email()
    const project = faker.company.catchPhrase()
    const companyName = faker.company.name()
    const phoneNo = faker.phone.number()

    cy.get('#content form')
      .scrollIntoView()
      .within(() => {
        cy.contains('button', 'Odoslať správu')
        cy.contains('label', 'Súhlasím so spracovaním osobných údajov za účelom kontaktovania.')
          .should('be.visible')
          .parent()
          .find('input.elementor-acceptance-field')
          .first()
          .check()

        cy.contains('label', 'Súhlasím so spracovaním osobných údajov na marketingové účely.')
          .should('be.visible')
          .parent()
          .find('input.elementor-acceptance-field')
          .first()
          .check()

        cy.get('#form-field-name')
          .type(name)

        // should be email, not a company name
        cy.get('#form-field-email')
          .type(companyName)

        cy.get('#form-field-field_762772a')
          .type(email)

        cy.get('#form-field-field_bab2985')
          .type(phoneNo)

        cy.get('#form-field-message')
          .type(project)

        // See if uploading an attachment works
      })

      it('contact information is present and visible', () => {

      // TODO
      
      })  

  })
})








