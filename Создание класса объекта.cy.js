import { faker } from '@faker-js/faker/locale/ru'

var login = "admin"
var pass = "123456"

describe("Авторизация + Создание политики", () => {
    it("Авторизация + Создание политики", () => {
        cy.viewport(1920, 1080)
        cy.visit('/')
        cy.get('[placeholder="Имя пользователя"]').type(login)
        cy.get('[placeholder="Пароль"]').type(pass)
        cy.get('[type="submit"]').click()
        cy.wait(7000)
        cy.get('[class="v-app-bar__nav-icon white--text v-btn v-btn--icon v-btn--round theme--light v-size--default"]').click()
        cy.get('.pt-2 > .v-navigation-drawer__content > .v-list > :nth-child(1) > :nth-child(3)').click()
        cy.get('.v-navigation-drawer__content > .v-list > :nth-child(2)').click()
        cy.get('.dh-workspace-area-actions > :nth-child(1) > .dh-button > .v-btn').click()
        cy.get(':nth-child(1) > :nth-child(1) > .v-input > .v-input__control > .v-input__slot > .v-text-field__slot').type(faker.helpers.replaceSymbols('************'))
        cy.get(':nth-child(2) > .v-input > .v-input__control > .v-input__slot > .v-text-field__slot').type(faker.helpers.replaceSymbols('************'))
        cy.get(':nth-child(2) > :nth-child(1) > .v-input > .v-input__control > .v-input__slot > .v-text-field__slot').type(faker.lorem.paragraph())
        cy.get('.v-select__selections').click()
        cy.get('#list-item-241-1').click() //слетает выбор из дропа
        cy.get('.mr-2 > .dh-button > .v-btn > .v-btn__content').click()
        cy.get('.v-expansion-panel-header').click()
        cy.get('.v-expansion-panel-content__wrap > .dh-workspace-area-actions > :nth-child(1) > .dh-button').click()
        cy.get('tbody > :nth-child(1) > :nth-child(1) > .v-data-table__checkbox').click()
        cy.get(':nth-child(2) > :nth-child(1) > .v-data-table__checkbox').click()
        cy.get(':nth-child(3) > :nth-child(1) > .v-data-table__checkbox').click()
        cy.get('.v-card__actions > :nth-child(3) > .v-btn').click()







                
    }) 

})  