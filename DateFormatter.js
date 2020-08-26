function DateFormatter(date, format){
    const months = ['Enero','Febrero','Marzo','Abril','Mayo','Junio'
                 ,'Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
    const shortMonths = ['Ene','Feb','Mar','Abr','May','Jun'
                      ,'Jul','Ago','Sep','Oct','Nov','Dic'];
    const formatObj = {
        yyyy: () => {return date.getFullYear();},
        yy: () => {
            var strDate = date.getFullYear().toString(); 
            return strDate.substr(-2);
        },
        M: () => {return date.getMonth() + 1;},
        MM: () => {
            var month = (date.getMonth() + 1).toString()
            return month.length == 1 ? '0' + month : month;
        },
        MMMM: () => {return months[date.getMonth()];},
        MMM: () => {return shortMonths[date.getMonth()];},
        d: () => {return date.getDate();},
        dd: () => {
            var day = date.getDate().toString();
            return day.length == 1 ? '0' + day : day;
        }
    }

    const monthRegExp = /M{1,4}/;
    const yearRegExp = /y{1,4}/;
    const dayRegExp = /d{1,2}/;

    const yearFormat = format.match(yearRegExp);
    const monthFormat = format.match(monthRegExp);
    const dayFormat = format.match(dayRegExp);

    let result = format.replace(yearFormat,formatObj[yearFormat])
                    .replace(monthFormat,formatObj[monthFormat])
                    .replace(dayFormat,formatObj[dayFormat]);
    //console.log(`Format is ${format} This is yearFormat: ${yearFormat}, monthFormat: ${monthFormat} and dayFormat:${dayFormat}`);
    //console.log(`Your new Date is ${result}`);

    return result;
}