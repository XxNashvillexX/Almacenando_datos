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

export const orderDates = (dates) => {
    dates.sort((a, b) => {
        const firstDate = moment(a, 'DD/MM/YYYY')
        const secondDate = moment(b, 'DD/MM/YYYY')
        return firstDate - secondDate
    })
};