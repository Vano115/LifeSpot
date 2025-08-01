
/*Функция проверки возраста и сохранения данных о сессии и браузере*/
function ageChecker() {
    session.set("age", prompt("Введите ваш возраст: "));

    if (session.get("age") >= 18) {
        alert("Приветствуем на LifeSpot! " + new Date().toLocaleString());
    }
    else {
        alert("Наши трансляции не предназначены для лиц моложе 18 лет. Вы будете перенаправлены");
        window.location.href = "http://www.google.com";
    }
    console.log("Возраст: " + session.get("age"));
    // window.navigator.userAgent - вещь ненадёжная, он мне выводит 5 браузеров, а у меня Yandex
}
function handleSession() {

    session.set("userAgent", window.navigator.userAgent);
    session.set("startDate", new Date().toLocaleString());

    return session;
}

function sessionLog() {
    for (let result of session) {
        console.log(result)
    };
}


/* Функция поисковика в header, реагирует на пользовательский ввод, оставляет только трансляции
соответствующие написанным пользователем символам в строке поиска
function finderFilter() {
    // Сохраняем текст пользовательского запроса.
    let inputString = document.getElementsByTagName('input')[0].value.toLowerCase();

    // Находим контейнеры с видео, которые необходимо фильтровать
    let elements = document.getElementsByClassName('video-container');

    // Пробегаемся по контейнерам
    for (let i = 0; i <= elements.length; i++) {

        // Вытаскиваем текст описания видео, которое необходимо отфильтровать
        let videoText = elements[i].querySelector('h3').innerText;

        // Выполняем фильтрацию, сравнивая значения в нижнем регистре
        if (!videoText.toLowerCase().includes(inputString.toLowerCase())) {

            // Описание
            elements[i].style.display = 'none';

        } else {
            elements[i].style.display = 'inline-block';
        }
    }
}*/

/*
    ДАННЫЙ СПОСОБ НЕ РАБОТАЕТ, ПРИНИМАТЬ ВВЕДЁНОЕ ЗНАЧЕНИЕ ЛУЧШЕ ИЗНУТРИ ФУНКЦИИ!!!!    
    */
function finderFilter() //- вот это проблема
{

    // Находим контейнеры с видео, которые необходимо фильтровать
    let elements = document.getElementsByClassName('video-container');

    // Пробегаемся по контейнерам
    for (let i = 0; i <= elements.length; i++) {

        // Вытаскиваем текст описания видео, которое необходимо отфильтровать
        let videoText = elements[i].querySelector('h3').innerText;

        // Выполняем фильтрацию, сравнивая значения в нижнем регистре
        if (!videoText.toLowerCase().includes(inputFunc().toLowerCase())) {

            // Описание
            elements[i].style.display = 'none';

        } else {
            elements[i].style.display = 'inline-block';
        }
    }
}