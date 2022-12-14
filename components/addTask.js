import { orderDates } from "../services/date.js";
import { checkComplete } from "./checkComplete.js";
import  deleteIcon  from "./deleteicon.js";
import { displayTasks } from "./readTasks.js";

export const addTask = (evento) =>{
    evento.preventDefault();    //metodo
    //list contiene el elemento list de HTML
    const list = document.querySelector('[data-list]');
    //input contiene el elemento input de HTML
    const input = document.querySelector('[data-form-input]');
    //clase 06: creamos una variable que captara el elemento date
    const calendar = document.querySelector('[data-form-date]');

    // valor contedra lo que haya en el input
    const value = input.value;
    //obtengo el valor de calendar en date
    const date = calendar.value;
    //dando formato a la fecha en la variable date
    const dateFormat = moment(date).format('DD/MM/YYYY');

    //creamos un if para agregar tareas validas
    if(value == "" || date == "")
    {
        return;
    }
    //el valor de input en html se vacia
    input.value = '';
    calendar.value = '';
    //constante (flag) para modificar el check. Por defecto es false
    const complete = false;

    //variable (objeto) para almacenar datos
    const taskObj = {
        value,
        dateFormat,
        complete,
        id: uuid.v4()
    };

    list.innerHTML = '';

    //variable tipo array para almacenar datos en localStorage. Con funciones para parsear a objeto el string.
    const taskList = JSON.parse(localStorage.getItem('tasks')) || [];
    //usando el array para almacenar los datos
    taskList.push(taskObj);
    //llamada para almacenar los datos
    localStorage.setItem('tasks',JSON.stringify(taskList));

    displayTasks();
}

//Arrow function o funcion anonima
export const createTask = ({value, dateFormat, complete, id}) => {
    //task contendra una tag "li"
    const task = document.createElement("li");
          //le agregamos una clase "card"
          task.classList.add("card");

    //taskContent tendra un elemento "div"
    const taskContent = document.createElement("div");
    //variable check hara la funcion para saber el estado de task
    const check = checkComplete(id);
    //por cada modificacion del valor de complete se formatea el estilo css
    if(complete)
    {
        check.classList.toggle('fas');
        check.classList.toggle('completeIcon');
        check.classList.toggle('far');
    }

    //titleTask tendra un elemento "span"
    const titleTask = document.createElement("span");
          //le a??adimos una clase "task"
          titleTask.classList.add("task");
          //alojamos el valor de la variable value
          titleTask.innerText = value;
          //le asignamos un elemento hijo, para cambiar el comportamiento de el check
          taskContent.appendChild(check);
          //introducimos el elemento titleTask en taskcontent
          taskContent.appendChild(titleTask);

    //creamos una etiqueta que contendra la fecha formateada
    const dateElement = document.createElement('span');
          //agregamos el contenido de dateFormat
          dateElement.innerHTML = dateFormat;
          //introducimos el elemento taskContent en task
          task.appendChild(taskContent);
          task.appendChild(dateElement);
          task.appendChild(deleteIcon(id));

    return task;
};


/*
Durante el curso utilizamos pipe || para crear una nueva evaluaci??n de cortocircuito( short circuit evaluation).

const tasks = JSON.parse(localStorage.getItem('tasks')) || [ ]COPIA EL C??DIGO
Con eso, le decimos a la aplicaci??n que en caso de que localStorage este con datos se comporte de una manera, si en caso contrario estuviera vac??o, la constante tasks empezar??a como un arreglo vac??o. Las expresiones l??gicas son evaluadas de izquierda a derecha, luego, si la primera declaraci??n sea verdadera se ejecuta normalmente y la segunda declaraci??n no es aplicada, y si el primer es evaluado como falso, ejecutamos el segundo caso.

true || false // true
false || true // true

Usaremos una libreria para identificar los objetos se que se agreguen

*/