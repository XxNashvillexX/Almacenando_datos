import { displayTasks } from "./readTasks.js";

//administrando el boton de eliminar con funcion
const deleteIcon = (id) => {
    const i = document.createElement('i');
    i.classList.add('fas','fa-trash-alt','trashIcon','icon');

    i.addEventListener('click', () => deleteTask(id));

    return i;
};

const deleteTask = (id) => {
    //seleccionamos el elemento que contiene las tasks en HTML
    const li = document.querySelector('[data-list]');
    //obtenemos el contenido dentro del localStorage
    const tasks = JSON.parse(localStorage.getItem('tasks'));
    const index = tasks.findIndex((item) => item.id == id);
    //metodo para eliminar o modificar elementos dentro del array
    tasks.splice(index,1);
    li.innerHTML = '';
    //almacenando el nuevo valor del elemento en localstorage
    localStorage.setItem('tasks',JSON.stringify(tasks));
    displayTasks();
};

export default deleteIcon;

/*
Por cada elemento que se quiera eliminar, sera por su ID desde lo almacenado en localstorage
*/