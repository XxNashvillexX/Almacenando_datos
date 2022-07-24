//METODOS
//creo elemento i (tag). Le añado clases, y un evento como disparador
export const checkComplete = () => {
    const i = document.createElement('i');
    i.classList.add('far', 'fa-check-square', 'icon');
    i.addEventListener('click', completeTask);
    //aparentemen hay que agregar clase por clase al elemento en variable i
    return i;
};
//modificando el check, con un evento le añado o visceversa las clases para que se modifique
const completeTask = (event) =>{
    const element = event.target;
    element.classList.toggle('fas');
    element.classList.toggle('completeIcon');
    element.classList.toggle('far');
};