//creando un funcion para agrupar tasks de una misma fecha
export const uniqueDates = (tasks) => {
    //creamos un array
    const unique = [];
    
    tasks.forEach((task) => {
        //si no existe task.dateFormat dentro del array unique
        if(!unique.includes(task.dateFormat)) unique.push(task.dateFormat);
    });

    return unique;
};
//ordenando las fechas en el array
export const orderDates = (dates) => {
    return dates.sort((a,b) => {
        //comparamos los elementos del array para ordernarlos
        const firstDate = moment(a, 'DD/MM/YYYY')
        const secondDate = moment(b, 'DD/MM/YYYY')
        
        return firstDate - secondDate
    })
};

/*
Metodo sort, ordena los elementos de un array por orden alfabetico o numerico
*/