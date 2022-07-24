import { checkComplete } from "./components/checkComplete.js";
import { deleteIcon } from "./components/deleteicon.js";

//seleccionamos dos elementos del DOM
const btn = document.querySelector('[data-form-btn]');
//creamos una variable constante, que no varia, para obtener el elemento referenciado entre parentesis
//Arrow function o funcion anonima
const createTask = (evento) =>{
    evento.preventDefault();    //metodo
    //input contiene el elemento input de HTML
    const input = document.querySelector('[data-form-input]');
    // valor contedra lo que haya en el input
    const value = input.value;
    //list contiene el elemento list de HTML
    const list = document.querySelector('[data-list]');
    //task contendra una tag "li"
    const task = document.createElement("li");
    //le agregamos una clase "card"
    task.classList.add("card");
    //el valor de input en html se vacia
    input.value = '';
    //taskContent tendra un elemento "div"
    const taskContent = document.createElement("div");
    //le asignamos un elemento hijo, para cambiar el comportamiento de el check
    taskContent.appendChild(checkComplete());
    //titleTask tendra un elemento "span"
    const titleTask = document.createElement("span");
    //le añadimos una clase "task"
    titleTask.classList.add("task");
    //alojamos el valor de la variable value
    titleTask.innerText = value;
    //introducimos el elemento titleTask en taskcontent
    taskContent.appendChild(titleTask);
    //task.innerHTML = content;
    //introducimos el elemento taskContent en task
    task.appendChild(taskContent);
    task.appendChild(deleteIcon());
    //introducimos el elemento task en list
    list.appendChild(task);
};
//cuando usemos el event "click", las instrucciones dentro de la funcion createTask; seran usadas
btn.addEventListener('click', createTask);


//encapsulamos el metodo en una variable y la pasamos como parametro para el evento btn
/*
task.innerHTML = content
este comando agrega porcion de codigo HTML desde JS a alguna tag de mi index

appendChild(valor):
comando para agregar un elemento hijo dentro de un elemento padre, en HTML desde JS.

usamos una funcion de JS dentro de la porcion de HTML
*/