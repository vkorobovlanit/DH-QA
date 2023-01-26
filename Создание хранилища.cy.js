import { faker } from '@faker-js/faker/locale/ru'

var Mongo = "mongodb://172.19.91.151:27017/test-storage"
var Filestore = "/u01/docshouse/nfs/"
var login = "admin"
var pass = "123456"

describe("Авторизация + Создание хранилища", () => {
    it("Авторизация + Создание хранилища", () => {
        cy.viewport(1920, 1080)
        cy.visit('/')
        cy.get('[placeholder="Имя пользователя"]').type(login)
        cy.get('[placeholder="Пароль"]').type(pass)
        cy.get('[type="submit"]').click()
        cy.wait(7000)
        cy.get('[class="v-app-bar__nav-icon white--text v-btn v-btn--icon v-btn--round theme--light v-size--default"]').click()
        cy.get('.pt-2 > .v-navigation-drawer__content > .v-list > :nth-child(1) > :nth-child(1)').click()
        cy.get(':nth-child(1) > .dh-button > .v-btn > .v-btn__content').click()
        cy.get(':nth-child(1) > :nth-child(1) > .v-input > .v-input__control > .v-input__slot').type(faker.company.companyName())
        cy.get(':nth-child(1) > :nth-child(2) > .v-input > .v-input__control > .v-input__slot').type(faker.helpers.replaceSymbols('************'))
        cy.get(':nth-child(2) > .col > .v-input > .v-input__control > .v-input__slot').type(faker.lorem.paragraphs(2))
        //cy.get(':nth-child(3) > :nth-child(2) > .v-input > .v-input__control > .v-input__slot').click()
        //cy.get('id="list-item-1804-2"').click()
        cy.get(':nth-child(4) > :nth-child(1) > .v-input > .v-input__control > .v-input__slot > .v-text-field__slot').type(10000000)
        cy.get(':nth-child(4) > :nth-child(2) > .v-input > .v-input__control > .v-input__slot > .v-text-field__slot').type(20000000)
        cy.get(':nth-child(4) > :nth-child(3) > .v-input > .v-input__control > .v-input__slot > .v-text-field__slot').type(9000000)
        cy.get(':nth-child(4) > .v-input > .v-input__control > .v-input__slot > .v-text-field__slot').clear()
        cy.get(':nth-child(4) > .v-input > .v-input__control > .v-input__slot > .v-text-field__slot').type(98)
        cy.get(':nth-child(8) > .col > .v-input > .v-input__control > .v-input__slot > .v-text-field__slot').type(Mongo)
        cy.get('.mr-2 > .dh-button > .v-btn').click()
        //cy.get('.dh-back-button__activator').click()
        //cy.get('.v-navigation-drawer__content > .v-list > :nth-child(2)').click()
        //cy.get('.dh-workspace-area-actions > :nth-child(1) > .dh-button > .v-btn').click()
    })

})  