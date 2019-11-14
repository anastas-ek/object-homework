// 1. Создать объект, описывающий автомобиль (производитель, модель, год выпуска, средняя скорость),
//  и следующие функции для работы с этим объектом:

// Функция для вывода на экран информации об автомобиле;

// Функция для подсчета необходимого времени для преодоления
//  переданного расстояния со средней скоростью. Учтите, что через каждые
//   4 часа дороги водителю необходимо делать перерыв на 1 час.


let auto = {
    manufacturer: "France",
    model: "Renault Kangoo",
    age: 5,
    speed: 100
}

function info_auto() {
    for (key in auto) {
        console.log(`${key} : ${auto[key]}`);
    }
}
// info_auto();

function need_time(S) {
    if (!isFinite(S) || S < 0) {
        return `Вы ввели некоректно путь который хотите преодолеть:\n${S}`;
    } else {
        let time = S / auto["speed"];
        if (time > 4) {
            time = time + (Math.floor(time / 4));
        }
        return `С учетом перерывов на отдых (на каждые 4 часа по 1 часу отдыха)\nНа данной модели ${auto["model"]}\nС средней скоростью ${auto["speed"]}\nВаше расстояние в ${S} км вы проедите за ${time} часов `;
    }

}
// console.log(need_time(1032));


// 2. Создать объект, хранящий в себе отдельно числитель и знаменатель дроби,
//  и следующие функции для работы с этим объектом: 

// Функция сложения 2-х объектов-дробей;

// Функция вычитания 2-х объектов-дробей;

// Функция умножения 2-х объектов-дробей;

// Функция деления 2-х объектов-дробей;

// Функция сокращения объекта-дроби.

let fraction1 = {
    num: 19,
    dem: 36
}

let fraction2 = {
    num: 5,
    dem: 48
}

//функция сокращения;
function cut(num, dem) {
    let min;
    if (num > dem) {
        min = dem;
    } else {
        min = num;
    }
    for (let i = 1; i <= min; i++) {
        if (num % i == 0 && dem % i == 0) {
            a = i;
        }
    }
    num = num / a;
    dem = dem / a;
    return `${num}/${dem}`;
}

// console.log(cut(fraction1["num"], fraction1["dem"]));


//функция сложения
function plus(num1, dem1, num2, dem2) {
    let common, NUM, DEM;
    for (let i = 1; ; i++) {
        if (i % dem1 !== 0 || i % dem2 !== 0) {

        } else {
            common = i;
            break;
        }

    }
    num1 = num1 * (common / dem1);
    num2 = num2 * (common / dem2);
    NUM = num1 + num2;
    DEM = common;
    return cut(NUM, DEM);
}

// console.log(plus(fraction1["num"],fraction1["dem"],fraction2["num"],fraction2["dem"]));


//функция вычитания
function minus(num1, dem1, num2, dem2) {
    let common, NUM, DEM;
    for (let i = 1; ; i++) {
        if (i % dem1 !== 0 || i % dem2 !== 0) {

        } else {
            common = i;
            break;
        }

    }
    num1 = num1 * (common / dem1);
    num2 = num2 * (common / dem2);
    NUM = num1 - num2;
    DEM = common;
    return cut(NUM, DEM);
}

// console.log(minus(fraction1["num"],fraction1["dem"],fraction2["num"],fraction2["dem"]));


//функция умножение
function multi(num1, dem1, num2, dem2) {
    let NUM = num1 * num2;
    let DEM = dem1 * dem2;
    return cut(NUM, DEM);

}
// console.log(multi(fraction1["num"], fraction1["dem"], fraction2["num"], fraction2["dem"]));


//функция деления
function division(num1, dem1, num2, dem2) {
    let NUM = num1 * dem2;
    let DEM = dem1 * num2;
    return cut(NUM, DEM);
}
// console.log(division(fraction1["num"], fraction1["dem"], fraction2["num"], fraction2["dem"]));






// 33. Создать объект, описывающий время (часы, минуты, секунды), 
// и следующие функции для работы с этим объектом: 

let data = {
    hour: 13,
    minute: 0,
    second: ''
}
// Функция вывода времени на экран;
function data_out(hour, minute, second) {
    hour = hour + '';
    minute = minute + '';
    second = second + '';
    let data;
    if ((!isFinite(hour) && hour !== '0' && hour !== '00' && hour !== '') || hour % 1 !== 0 || hour < 0 || hour > 24 || hour.length > 2 || minute.length > 2 || second.length > 2 || minute < 0 || minute > 60 || second > 60 || second < 0 || minute % 1 !== 0 || second % 1 !== 0 || (!isFinite(minute) && minute !== '0' && minute !== '00' && minute !== '') || (!isFinite(second) && second !== '0' && second !== '00' && second !== '')) {
        return `Ошибка ввода данных  :${hour} ; ${minute} ; ${second}`;
    } else {
        if (hour.length == 2) {
            data = hour;
        } else if (hour.length == 1) {
            data = `0${hour}`;
        } else {
            data = `00`;
        }
        if (minute.length == 2) {
            data = `${data} : ${minute}`;
        } else if (minute.length == 1) {
            data = `${data} : 0${minute}`;
        } else {
            data = `${data} : 00`;
        }
        if (second.length == 2) {
            data = `${data} : ${second}`;
        } else if (second.length == 1) {
            data = `${data} : 0${second}`;
        } else {
            data = `${data} : 00`;
        }
        return `<< ${data} >>`;
    }
}

console.log(data_out(data["hour"], data["minute"], data["second"]));





//функция перевода времени в секунды из прошлого дз
function data_in_sec(h, m, s) {
    let data_new;
    data_new = data_out(h, m, s);
    let num1 = +data_new.substr(3, 2);
    let num2 = +data_new.substr(8, 2);
    let num3 = +data_new.substr(13, 2);
    if (isFinite(num1) && isFinite(num2) && isFinite(num3)) {
        let sum = num1 * 3600 + num2 * 60 + num3;
        return sum;
    } else {
        return (data_out(h, m, s));
    }

}

//функция перевода секунд обратно в время из прошлого дз
function sec_in_data(sec) {
    let hour = '00';
    let minute = '00';
    let second = '00';
    if (!isFinite(sec) || sec < 0 || sec % 1 !== 0) {
        return (`Вы ввели некоректные данные!\nВы ввели :\n${sec}`);
    }
    if (sec >= 3600) {
        hour = Math.floor(sec / 3600);
        sec = sec - hour * 3600;
        if (hour > 24) {
            for (; hour > 24;) {
                hour = hour - 24;
            }
        }

    }
    if (sec >= 60) {
        minute = Math.floor(sec / 60);
        sec = sec - minute * 60;
    }
    if (sec < 60) {
        second = sec;
    }

    return data_out(hour, minute, second);

}




// Функция изменения времени на переданное количество секунд;

function data_plus_sec(s) {
    let date = data_in_sec(data["hour"], data["minute"], data["second"]);
    date = date + s;
    return sec_in_data(date);
}

// console.log(data_plus_sec(108));



// Функция изменения времени на переданное количество минут;

function data_plus_min(m) {
    let date = data_in_sec(data["hour"], data["minute"], data["second"]);
    date = date + m * 60;
    return sec_in_data(date);
}
// console.log(data_plus_min(108));




// Функция изменения времени на переданное количество часов. 
function data_plus_hour(h) {
    let date = data_in_sec(data["hour"], data["minute"], data["second"]);
    date = date + h * 3600;
    return sec_in_data(date);
}

// console.log(data_plus_hour(108));

Array.prototype