import { createTask } from "./addTask.js";

//creamos una funcion que leera las tasks
export const readTasks = () => {
    const list = document.querySelector('[data-list]');
    console.log(list);

    const tasksList = JSON.parse(localStorage.getItem('tasks')) || [];  

    tasksList.forEach((task) => {
        list.appendChild(createTask(task));
    });
};

/*
Importando la funcion del modulo addtask al modulo readtask, podremos complementar las funciones para que lea todo el codigo html creado
*/