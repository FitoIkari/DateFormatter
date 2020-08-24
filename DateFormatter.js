function DateFormatter(date, format){
    var months = ['Enero','Febrero','Marzo','Abril','Mayo','Junio'
                 ,'Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
    var shortMonths = ['Ene','Feb','Mar','Abr','May','Jun'
                      ,'Jul','Ago','Sep','Oct','Nov','Dic'];
    var formatObj = {
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

    var yearFormat = format.match(yearRegExp);
    var monthFormat = format.match(monthRegExp);
    var dayFormat = format.match(dayRegExp);

    var result = format.replace(yearFormat,formatObj[yearFormat])
                    .replace(monthFormat,formatObj[monthFormat])
                    .replace(dayFormat,formatObj[dayFormat]);
    //console.log(`Format is ${format} This is yearFormat: ${yearFormat}, monthFormat: ${monthFormat} and dayFormat:${dayFormat}`);
    //console.log(`Your new Date is ${result}`);

    return result;
}