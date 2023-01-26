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