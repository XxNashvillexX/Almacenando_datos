//seleccionamos dos elementos del DOM
const btn = document.querySelector('[data-form-btn]');
//creamos una variable constante, que no varia, para obtener el elemento referenciado entre parentesis
//Arrow function o funcion anonima
const createTask = (evento) =>{
    evento.preventDefault();    //metodo
    const input = document.querySelector('[data-form-input]');
    console.log(input.value);
}
//este console.log mostrara en la consola el elemento que seleccionamos
console.log(btn);

btn.addEventListener('click', createTask);
//encapsulamos el metodo en una variable y la pasamos como parametro para el evento btn