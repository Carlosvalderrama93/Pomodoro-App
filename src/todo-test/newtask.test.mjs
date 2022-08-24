import { assert } from "chai"
import DOM from "@testing-library/dom"

import newTaskEl from "../templates/new-task.js"

describe("New Task", () => {
  it("should render a h3 title with value equal to Add Task", function(){
    const newTaskHeader = newTaskEl.querySelector(".new-task-header");

    assert.isNotNull(newTaskHeader);
    assert.equal(newTaskHeader.textContent, "To Do App");
  })

  it("should disabled create task button when app starts", function(){
    //Verificar que el botón esté desabilitado
    const newTaskCreateEl = newTaskEl.querySelector(".new-task-button");
    assert.isTrue(newTaskCreateEl.disabled)
  })
  it("should enable create task button when input have a text", function(){
    /*1. entrar al Input, 2. introducir texto, 3. habilitar el botón. 4. test*/
    const newTaskTitle = newTaskEl.querySelector(".new-task-input");
    const newTaskCreate = newTaskEl.querySelector(".new-task-button");


    DOM.fireEvent.keyUp(newTaskTitle, {
      target:{
        value:"A"
      }
    });

    assert.isFalse(newTaskCreate.disabled);
  })

  it("should disable create task button when input is empty", function (){
    /*1. entrar al input, 2. escribo un texto, 3. borro el texto, 4. test*/
    const newTaskTitle = newTaskEl.querySelector(".new-task-input");
    const newTaskCreate = newTaskEl.querySelector(".new-task-button");

    DOM.fireEvent.keyUp(newTaskTitle, {
      target:{
        value:"A"
      }
    });

    DOM.fireEvent.keyUp(newTaskTitle, {
      target:{
        value:""
      }
    });

    assert.isTrue(newTaskCreate.disabled);

  })

 it("should check if the input is empty once the button is clicked", function(){
    const newTaskInput = newTaskEl.querySelector(".new-task-input");
    const newTaskCreate = newTaskEl.querySelector(".new-task-button");
    // 1) Ingresar al input
    // 2) ingresar texto
    // 3) clickear el botón
    // 4) Verificar que el input esté vacio

    newTaskInput.value = "Algo";

    DOM.fireEvent.click(newTaskCreate);

    assert.equal(newTaskInput.value, "")
  })

  it ("should disable the create task button when this was clicked", function (){
    /*1. seleccionar el input, 2. ingresar texto, 3. clickear botón, 4. desabilitar el botón*/
    const newTaskInput = newTaskEl.querySelector(".new-task-input");
    const newTaskCreate = newTaskEl.querySelector(".new-task-button");

    DOM.fireEvent.keyUp(newTaskInput, {
      target:{
        value:"a"
      }
    });

    DOM.fireEvent.click(newTaskCreate);

    assert.isTrue(newTaskCreate.disabled);

  })
})
