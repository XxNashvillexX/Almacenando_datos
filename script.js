//seleccionamos dos elementos del DOM
const btn = document.querySelector('[data-form-btn]');
//creamos una variable constante, que no varia, para obtener el elemento referenciado entre parentesis
//Arrow function o funcion anonima
const createTask = (evento) =>{
    evento.preventDefault();    //metodo
    const input = document.querySelector('[data-form-input]');
    const value = input.value;
    const list = document.querySelector('[data-list]');
    const task = document.createElement("li");
    task.classList.add("card");
    //agrego la tag card a la variable con tag li. Para modificar su contenido
    input.value = "";
    const content = `<div>
        <i class="far fa-check-square icon"></i>
        <span class="task">${value}</span>
        </div>
        <i class="fas fa-trash-alt trashIcon icon"></i>`

    task.innerHTML = content;
    list.appendChild(task);
    console.log(content);
}
//este console.log mostrara en la consola el elemento que seleccionamos
console.log(btn);

btn.addEventListener('click', createTask);
//encapsulamos el metodo en una variable y la pasamos como parametro para el evento btn
/*
task.innerHTML = content
este comando agrega porcion de codigo HTML desde JS a alguna tag de mi index

appendChild(valor):
comando para agregar un elemento hijo dentro de un elemento padre, en HTML desde JS.
*/