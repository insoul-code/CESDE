export function calcularDia(fecha1,fecha2){
    let date1 = new Date(fecha1)
    let date2 = new Date(fecha2)
    const date1utc = Date.UTC(date1.getFullYear(), date1.getMonth(), date1.getDate());
    const date2utc = Date.UTC(date2.getFullYear(), date2.getMonth(), date2.getDate());
    let day = 1000*60*60*24;
    return (date2utc - date1utc)/day
}