import { createTask } from "./addTask.js";
import { uniqueDates, orderDates } from "../services/date.js";
import dateElement from "./dateElement.js";

//creamos una funcion que leera las tasks
export const displayTasks = () => {
    const list = document.querySelector('[data-list]');

    const tasksList = JSON.parse(localStorage.getItem('tasks')) || [];  
    const dates = uniqueDates(tasksList);
    //ordenamos el array dates sin usar otra variable
    orderDates(dates);

    dates.forEach((date) => {
        const dateMoment = moment(date, 'DD/MM/YYYY');
        list.appendChild(dateElement(date));

        tasksList.forEach((task) => {
            const taskDate = moment(task.dateFormat, 'DD/MM/YYYY');
            const diff = dateMoment.diff(taskDate);
            if(diff == 0)
            {
                //agregamos el nuevo elemento por cada task creada
                list.appendChild(createTask(task));
            }
        });
    });
};

/*
Importando la funcion del modulo addtask al modulo readtask, podremos complementar las funciones para que lea todo el codigo html creado
por cada fecha de la lista, recorremos la taskslist.
Se debe crear cada fecha por cada elemento dentro de date. Para eso usamos la funcion diff la cual dara diferencia entre el valor de taskDate y diff. Si la diferencia es igual a 0, se creara el elemento task.
*/