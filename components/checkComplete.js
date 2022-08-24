//METODOS
//creo elemento i (tag). Le añado clases, y un evento como disparador
export const checkComplete = (id) => {
    const i = document.createElement('i');
    i.classList.add('far', 'fa-check-square', 'icon');
    i.addEventListener('click', (event) => completeTask(event,id));
    //aparentemen hay que agregar clase por clase al elemento en variable i
    return i;
};
//modificando el check, con un evento le añado o visceversa las clases para que se modifique
const completeTask = (event, id) =>{
    const element = event.target;
    element.classList.toggle('fas');
    element.classList.toggle('completeIcon');
    element.classList.toggle('far');
    console.log("Check id", id);
    //creamos una variable para saber la posicion del check desde localStorage
    const tasks = JSON.parse(localStorage.getItem('tasks'));
    //buscamos dentro del array la posicion de cada task
    const index = tasks.findIndex( item => item.id == id);
    //cambiando el valor de complete en los tasks
    tasks[index]['complete'] = !tasks[index]['complete'];
    //almacenamos la modificacion en localstorage
    localStorage.setItem('tasks',JSON.stringify(tasks));
};

/*
Recibimos el id desde addTask para modificar que estilo de CSS usar

Por defecto cada task creada tendra el valor de complete en false, pero por medio del evento check se cambia a true
*/