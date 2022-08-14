import { addTask } from "./components/addTask.js";
import { readTasks } from "./components/readTasks.js";

//seleccionamos dos elementos del DOM
const btn = document.querySelector('[data-form-btn]');
//creamos una variable constante, que no varia, para obtener el elemento referenciado entre parentesis

//cuando usemos el event "click", las instrucciones dentro de la funcion createTask; seran usadas
btn.addEventListener('click', addTask);

readTasks();

//encapsulamos el metodo en una variable y la pasamos como parametro para el evento btn
/*
task.innerHTML = content
este comando agrega porcion de codigo HTML desde JS a alguna tag de mi index

appendChild(valor):
comando para agregar un elemento hijo dentro de un elemento padre, en HTML desde JS.

usamos una funcion de JS dentro de la porcion de HTML.

APIs de navegadores: hacen parte de tu navegador web y son capaces de exponer datos del navegador. Esas construcciones abstraen el código más complejo, proporcionando el uso de sintaxis más simples en su lugar, semejante a lo que momentjs hace, simplificando el trabajo con fechas.

El lenguaje de JavaScript, especialmente client-side, posee diversas APIs disponibles. Ellas no hacen parte del lenguaje en sí, pero son escritas sobre el core del lenguaje JavaScript, proviniendo superpoderes para ser utilizados en tu código.”.
*/