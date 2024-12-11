console.log('Arr-part')
console.log(' ')

// Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

{
    let arr: any[] = [1, 2, 3, '4', '5', '6', '7', true, false, 10];

    console.log(arr[0]);
    console.log(arr[1]);
    console.log(arr[2]);
    console.log(arr[3]);
    console.log(arr[4]);
    console.log(arr[5]);
    console.log(arr[6]);
    console.log(arr[7]);
    console.log(arr[8]);
    console.log(arr[9]);
}

// Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

{
    let book1: { title: string, pageCount: number, genre: string } = {
        title: 'I, robot',
        pageCount: 270,
        genre: 'science fiction',
    };
    let book2: { title: string, pageCount: number, genre: string } = {
        title: 'Children of Dune',
        pageCount: 444,
        genre: 'science fiction',
    };
    let book3: { title: string, pageCount: number, genre: string } = {
        title: 'Blindsight',
        pageCount: 384,
        genre: 'science fiction',
    };
}

// Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.

{
    let book1: { title: string, pageCount: number, genre: string, authors: { name: string, age: number }[] } = {
        title: 'I, robot',
        pageCount: 270,
        genre: 'science fiction',
        authors: [{
            name: 'Isaac Asimov',
            age: null,
        }],
    };
    let book2: { title: string, pageCount: number, genre: string, authors: { name: string, age: number }[] } = {
        title: 'Children of Dune',
        pageCount: 444,
        genre: 'science fiction',
        authors: [{
            name: 'Frank Herbert',
            age: null,
        }],
    };
    let book3: { title: string, pageCount: number, genre: string, authors: Array<{ name: string, age: number }> } = {
        title: 'Blindsight',
        pageCount: 384,
        genre: 'science fiction',
        authors: [{
            name: 'Peter Watts',
            age: 66,
        }],
    };
}

console.log(' ')

// Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача

{
    let users: Array<{ name: string, username: string, password: string }> = [
        {name: 'John', username: 'John-qwe', password: 'qwerty123'},
        {name: 'Nik', username: 'Nik-qwe', password: 'qwerty12'},
        {name: 'Ben', username: 'Ben-qwe', password: 'qwerty1'},
        {name: 'Max', username: 'Max-qwe', password: 'qwerty'},
        {name: 'Dave', username: 'Dave-qwe', password: 'qwert'},
        {name: 'Anny', username: 'Anny-qwe', password: 'qwer'},
        {name: 'Zoe', username: 'Zoe-qwe', password: 'werty123'},
        {name: 'Tom', username: 'Tom-qwe', password: 'erty123'},
        {name: 'Ally', username: 'Ally-qwe', password: 'rty123'},
        {name: 'Luci', username: 'Luci-qwe', password: 'ty123'},
    ];

    console.log(users[0].password);
    console.log(users[1].password);
    console.log(users[2].password);
    console.log(users[3].password);
    console.log(users[4].password);
    console.log(users[5].password);
    console.log(users[6].password);
    console.log(users[7].password);
    console.log(users[8].password);
    console.log(users[9].password);
}

console.log(' ')

// описати масив, в якому буде зберігатись інформація про температуру вранці, вдень і ввечері за термін в 7 днів. Як зробити цей масив - вам потрібно подумати. Нормальних варіантів опису - 2. Варіант, коли в вас буде одновимірний масив з 21 значенням вичключаємо одразу

{
    enum Time{
        Morning,
        Afternoon,
        Evening,
    }

    class Temp {
        constructor(public time: Time, public value: number) {
        }
    }



    let weekTemperature: Array<{day: string, temperature: Temp[]}> = [
        {day: 'Mon', temperature: [new Temp(Time.Morning, 10), new Temp(Time.Afternoon, 15), new Temp(Time.Evening, 12),]},
        {day: 'Tue', temperature: [new Temp(Time.Morning, 10), new Temp(Time.Afternoon, 15), new Temp(Time.Evening, 12),]},
        {day: 'Wen', temperature: [new Temp(Time.Morning, 10), new Temp(Time.Afternoon, 15), new Temp(Time.Evening, 12),]},
        {day: 'Thu', temperature: [new Temp(Time.Morning, 10), new Temp(Time.Afternoon, 15), new Temp(Time.Evening, 12),]},
        {day: 'Fri', temperature: [new Temp(Time.Morning, 10), new Temp(Time.Afternoon, 15), new Temp(Time.Evening, 12),]},
        {day: 'Sat', temperature: [new Temp(Time.Morning, 10), new Temp(Time.Afternoon, 15), new Temp(Time.Evening, 12),]},
        {day: 'Sun', temperature: [new Temp(Time.Morning, 10), new Temp(Time.Afternoon, 15), new Temp(Time.Evening, 12),]},
    ];
}

console.log(' ')

console.log('LOGIC-part');
console.log(' ');

// Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

{
    let arr: number[] = [1, 0, -3];

    let x: number = arr[0];
    if (x !== 0) {
        console.log('True');
    } else {
        console.log('False')
    }

    let y: number = arr[1];
    if (y !== 0) {
        console.log('True');
    } else {
        console.log('False');
    }

    let a: number = arr[2];
    if (a !== 0) {
        console.log('True');
    } else {
        console.log('False');
    }

}

console.log(' ');

// Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

{
    let time: number = +prompt('Введіть хвилини для перевірки логіки чверті від 0 до 59');
    if (0 <= time && time <= 15) {
        console.log('перша чверть');
    } else if (16 <= time && time <= 30) {
        console.log('друга чверть');
    } else if (31 <= time && time <= 45) {
        console.log('третя чверть');
    } else if (46 <= time && time <= 59) {
        console.log('четверта чверть');
    } else {
        console.log('invalid time');
    }
}

console.log(' ');

// У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

{
    let day: number = +prompt('Введіть день для перевірки логіки Декад від 1 до 31');
    if (1 <= day && day <= 11) {
        console.log('перша декада');
    } else if (12 <= day && day <= 21) {
        console.log('друга декада');
    } else if (22 <= day && day <= 31) {
        console.log('третя декада');
    } else {
        console.log('invalid day');
    }
}

console.log(' ');

// Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).

{
    let arr: Array<{day: string, tasks: {atMorning: string, inAfternoon: string, onEvening: string}}> = [
        {
            day: 'Monday', tasks: {
                atMorning: 'wake up', inAfternoon: 'do something', onEvening: 'go to sleep'
            },
        },
        {
            day: 'Tuesday', tasks: {
                atMorning: 'wake up', inAfternoon: 'go to work', onEvening: 'go to sleep'
            },
        },
        {
            day: 'Wednesday', tasks: {
                atMorning: 'wake up', inAfternoon: 'go to work', onEvening: 'go to sleep'
            },
        },
        {
            day: 'Thursday', tasks: {
                atMorning: 'wake up', inAfternoon: 'go to work', onEvening: 'go to sleep'
            },
        },
        {
            day: 'Friday', tasks: {
                atMorning: 'wake up', inAfternoon: 'go to work', onEvening: 'go to sleep'
            },
        },
        {
            day: 'Saturday', tasks: {
                atMorning: 'wake up', inAfternoon: 'rest', onEvening: 'go to sleep'
            },
        },
        {
            day: 'Sunday', tasks: {
                atMorning: 'wake up', inAfternoon: 'rest', onEvening: 'go to sleep'
            },
        },
    ]
    let day: number = +prompt('Введіть порядковий номер дня тижня');
    switch (day) {
        case 1:
            console.log(arr[0]);
            break;
        case 2:
            console.log(arr[1]);
            break;
        case 3:
            console.log(arr[2]);
            break;
        case 4:
            console.log(arr[3]);
            break;
        case 5:
            console.log(arr[4]);
            break;
        case 6:
            console.log(arr[5]);
            break;
        case 7:
            console.log(arr[6]);
            break;
        default:
            console.log('invalid day-number');
    }
}

console.log(' ');

// Користувач вводить або має два числа.
// Потрібно знайти та вивести максимальне число з тих двох .
// Також потрібно врахувати коли введені рівні числа.

{
    let num1: number = 31;
    let num2: number = +prompt('Веедіть друге число для перевірки логіки порівняння чисел')
    if (num1 < num2) {
        console.log(num2)
    } else if (num1 > num2) {
        console.log(num1)
    } else if (num1 === num2) {
        console.log(`${num1} = ${num2}`)
    } else {
        console.log('something wrong')
    }
}

console.log(' ');

// є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який, буде присвоювати змінній х значення "default"  якщо ви намагаєтесь присвоїти в неї falsy-значення (хибноподібні, тобто ті, які приводиться до false, а це 0 null undefined і тд).

{
    let x:any;
    if (!x) {
        x = "default"
        console.log(x);
    }
}

console.log(' ')

// з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".

{
    let coursesAndDurationArray: { title: string, monthDuration: number}[] = [
        {title: 'JavaScript Complex', monthDuration: 5},
        {title: 'Java Complex', monthDuration: 6},
        {title: 'Python Complex', monthDuration: 6},
        {title: 'QA Complex', monthDuration: 4},
        {title: 'FullStack', monthDuration: 7},
        {title: 'Frontend', monthDuration: 4}
    ];

    if (coursesAndDurationArray[0].monthDuration > 5) {
        console.log("Супер", coursesAndDurationArray[0].title);
    }
    if (coursesAndDurationArray[1].monthDuration > 5) {
        console.log("Супер", coursesAndDurationArray[1].title);
    }
    if (coursesAndDurationArray[2].monthDuration > 5) {
        console.log("Супер", coursesAndDurationArray[2].title);
    }
    if (coursesAndDurationArray[3].monthDuration > 5) {
        console.log("Супер", coursesAndDurationArray[3].title);
    }
    if (coursesAndDurationArray[4].monthDuration > 5) {
        console.log("Супер", coursesAndDurationArray[4].title);
    }
    if (coursesAndDurationArray[5].monthDuration > 5) {
        console.log("Супер", coursesAndDurationArray[5].title);
    }
}







