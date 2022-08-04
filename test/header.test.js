const DOM = require("@testing-library/dom") // -> {}
const assert = require("chai").assert

function createHeader() {
  const header = document.createElement('header') // <header></header>

  header.innerHTML = `
    <a id="logo" href="/">Logo</a>
    <ul class="nav-list">
        <li><a href="#">¿Qué es pomodoro?</a></li>
        <li><a href="#">Sobre nosotros</a></li>
        <li><a href="#">Contacto</a></li>
    </ul>
  `

  return header
}

describe("Header", function() {
  it("should have a logo", function() {
    const header = createHeader()
    const logo = DOM.getByText(header, "Logo")

    const menuItemOne = DOM.getByText(header, "¿Qué es pomodoro?")
    const menuItemTwo = DOM.getByText(header, "Sobre nosotros")
    const menuItemThree = DOM.getByText(header, "Contacto")

    assert.isOk(logo)
    assert.isOk(menuItemOne)
    assert.isOk(menuItemTwo)
    assert.isOk(menuItemThree)
  })
})
