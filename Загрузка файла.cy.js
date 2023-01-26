import 'cypress-file-upload'

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
        cy.get('.pt-2 > .v-navigation-drawer__content > .v-list > :nth-child(1) > :nth-child(2)').click()
        cy.get('.dh-workspace-area-actions > :nth-child(1) > .dh-button > .v-btn > .v-btn__content').click()
        cy.get('#file-item-requisites-dropzone').attachFile('testCSV.csv', {subjectType: 'drag-n-drop'})
        cy.get('.mr-2 > .dh-button > .v-btn > .v-btn__content').click()
        





    })

})  