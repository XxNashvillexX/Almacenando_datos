//creamos una funcion arrow para agrupar las task por fecha
export default (date) => {
    const dateElement = document.createElement('li');
          dateElement.classList.add('date');
          //agregamos el contenido date (HTML) a dateElement
          dateElement.innerHTML = date;

    return dateElement;
};

//pasamos como parametro date, y dentro de la funcion creamos un elemento HTML 'li', agregamos una class