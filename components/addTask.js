import { checkComplete } from "./checkComplete.js";
import { deleteIcon } from "./deleteicon.js";

export const addTask = (evento) =>{
    //list contiene el elemento list de HTML
    const list = document.querySelector('[data-list]');
    const task = createTask(evento);
    //introducimos el elemento task en list
    list.appendChild(task);
}

//Arrow function o funcion anonima
const createTask = (evento) =>{
    evento.preventDefault();    //metodo
    //variable tipo array para almacenar datos en localStorage. Con funciones para parsear a objeto el string.
    const taskList = JSON.parse(localStorage.getItem('tasks')) || [];
    //tambien se le da un array como inicio, en caso de dar null
    console.log(taskList);
    //input contiene el elemento input de HTML
    const input = document.querySelector('[data-form-input]');
    //clase 06: creamos una variable que captara el elemento date
    const calendar = document.querySelector('[data-form-date]');
    //obtengo el valor de calendar en date
    const date = calendar.value;
    //dando formato a la fecha en la variable date
    const dateFormat = moment(date).format('DD/MM/YYYY');
    console.log(dateFormat);
    // valor contedra lo que haya en el input
    const value = input.value;
    //task contendra una tag "li"
    const task = document.createElement("li");
    //le agregamos una clase "card"
    task.classList.add("card");
    //el valor de input en html se vacia
    input.value = '';
    //taskContent tendra un elemento "div"
    const taskContent = document.createElement("div");
    console.log(value,dateFormat);
    //variable (objeto) para almacenar datos
    const taskObj = {value, dateFormat};
    //usando el array para almacenar los datos
    taskList.push(taskObj);
    //llamada para almacenar los datos
    localStorage.setItem('tasks',JSON.stringify(taskList));
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
    //creamos una etiqueta que contendra la fecha formateada
    const dateElement = document.createElement('span');
    //agregamos el contenido de dateFormat
    dateElement.innerHTML = dateFormat;
    //introducimos el elemento taskContent en task
    task.appendChild(taskContent);
    task.appendChild(dateElement);
    task.appendChild(deleteIcon());

    return task;
};