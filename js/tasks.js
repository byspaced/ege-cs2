// js/tasks.js
const tasksDB = {
    // ЗАДАНИЯ С ВЫБОРОМ ОТВЕТА (один правильный)
    choiceTasks: [
        {
            id: 1000,
            prototype: 1,
            type: "choice",
            question: "Опираясь на изображенный паттерн контроля спрея, определите оружие.",
            options: ["M4A4", "AK-47", "M4A1-S", "AUG"],
            correct: 3,
            // Добавляем поле image
            image: "images/sprays/aug.jpg" // Путь к изображению
        },
        {
            id: 1001,
            prototype: 1,
            type: "choice",
            question: "Опираясь на изображенный паттерн контроля спрея, определите оружие.",
            options: ["AK-47", "M4A4", "SG553", "AUG"],
            correct: 0,
            // Можно использовать URL из интернета
            image: "images/sprays/ak47.jpg"
        },
        {
            id: 1002,
            prototype: 1,
            type: "choice",
            question: "Опираясь на изображенный паттерн контроля спрея, определите оружие.",
            options: ["FIVE-SEVEN", "TEC-9", "USP-S", "DEAGLE"],
            correct: 3,
            image: "images/sprays/deagle.jpg"
        },
        {
            id: 1003,
            prototype: 1,
            type: "choice",
            question: "Опираясь на изображенный паттерн контроля спрея, определите оружие.",
            options: ["TEC-9", "GALIL", "SG553", "FAMAS"],
            correct: 1,
            // Можно использовать URL из интернета
            image: "images/sprays/galil.jpg"
        },
        {
            id: 1004,
            prototype: 1,
            type: "choice",
            question: "Опираясь на изображенный паттерн контроля спрея, определите оружие.",
            options: ["FAMAS", "MP7", "P90", "SG553"],
            correct: 0,
            // Можно использовать URL из интернета
            image: "images/sprays/famas.jpg"
        },
        {
            id: 1005,
            prototype: 1,
            type: "choice",
            question: "Опираясь на изображенный паттерн контроля спрея, определите оружие.",
            options: ["M4A1-S", "M4A1", "M4A4", "AK-47"],
            correct: 1,
            // Можно использовать URL из интернета
            image: "images/sprays/m4a1.jpg"
        },
        {
            id: 1006,
            prototype: 1,
            type: "choice",
            question: "Опираясь на изображенный паттерн контроля спрея, определите оружие.",
            options: ["M4A1-S", "M4A1", "M4A4", "AK-47"],
            correct: 0,
            // Можно использовать URL из интернета
            image: "images/sprays/m4a1-s.jpg"
        },
        {
            id: 1007,
            prototype: 1,
            type: "choice",
            question: "Опираясь на изображенный паттерн контроля спрея, определите оружие.",
            options: ["M4A1-S", "M4A1", "M4A4", "AK-47"],
            correct: 2,
            // Можно использовать URL из интернета
            image: "images/sprays/m4a4.jpg"
        },
        {
            id: 1008,
            prototype: 1,
            type: "choice",
            question: "Опираясь на изображенный паттерн контроля спрея, определите оружие.",
            options: ["M4A1-S", "MAC-10", "TEC-9", "AUG"],
            correct: 1,
            // Можно использовать URL из интернета
            image: "images/sprays/mac-10.jpg"
        },
        {
            id: 1009,
            prototype: 1,
            type: "choice",
            question: "Опираясь на изображенный паттерн контроля спрея, определите оружие.",
            options: ["MP5-SD", "UMP-45", "MP7", "FAMAS"],
            correct: 2,
            // Можно использовать URL из интернета
            image: "images/sprays/mp7.jpg"
        },
        {
            id: 1010,
            prototype: 1,
            type: "choice",
            question: "Опираясь на изображенный паттерн контроля спрея, определите оружие.",
            options: ["TEC-9", "M249", "P90", "NEGEV"],
            correct: 2,
            // Можно использовать URL из интернета
            image: "images/sprays/p90.jpg"
        },
        {
            id: 1011,
            prototype: 1,
            type: "choice",
            question: "Опираясь на изображенный паттерн контроля спрея, определите оружие.",
            options: ["M4A1-S", "M4A1", "SG553", "AK-47"],
            correct: 2,
            // Можно использовать URL из интернета
            image: "images/sprays/sg553.jpg"
        },
        {
            id: 1012,
            prototype: 1,
            type: "choice",
            question: "Опираясь на изображенный паттерн контроля спрея, определите оружие.",
            options: ["TEC-9", "P90", "FAMAS", "AK-47"],
            correct: 0,
            // Можно использовать URL из интернета
            image: "images/sprays/tec-9.jpg"
        },
        {
            id: 1013,
            prototype: 1,
            type: "choice",
            question: "Опираясь на изображенный паттерн контроля спрея, определите оружие.",
            options: ["MP5-SD", "UMP-45", "M4A1-S", "MP9"],
            correct: 1,
            // Можно использовать URL из интернета
            image: "images/sprays/ump45.jpg"
        },
        {
            id: 7000,
            prototype: 7,
            type: "choice",
            question: "На картинке изображено оружие из игры Counter Strike 2. Определите его цену в магазине.",
            options: ["0", "100", "200", "250"],
            correct: 2,
            image: "guns/usps.png"
        },
        {
            id: 7001,
            prototype: 7,
            type: "choice",
            question: "На картинке изображено оружие из игры Counter Strike 2. Определите его цену в магазине.",
            options: ["1000", "700", "800", "500"],
            correct: 1,
            image: "guns/deagle.png"
        },
        {
            id: 7002,
            prototype: 7,
            type: "choice",
            question: "На картинке изображено оружие из игры Counter Strike 2. Определите его цену в магазине.",
            options: ["300", "350", "400", "500"],
            correct: 3,
            image: "guns/cz75.png"
        },
        {
            id: 7003,
            prototype: 7,
            type: "choice",
            question: "На картинке изображено оружие из игры Counter Strike 2. Определите его цену в магазине.",
            options: ["200", "300", "0", "250"],
            correct: 0,
            image: "guns/glock.png"
        },
        {
            id: 7004,
            prototype: 7,
            type: "choice",
            question: "На картинке изображено оружие из игры Counter Strike 2. Определите его цену в магазине.",
            options: ["2350", "2500", "2400", "2450"],
            correct: 0,
            image: "guns/p90.png"
        },
        {
            id: 7005,
            prototype: 7,
            type: "choice",
            question: "На картинке изображено оружие из игры Counter Strike 2. Определите его цену в магазине.",
            options: ["1250", "1350", "1100", "1000"],
            correct: 0,
            image: "guns/mp9.png"
        },
        {
            id: 7006,
            prototype: 7,
            type: "choice",
            question: "На картинке изображено оружие из игры Counter Strike 2. Определите его цену в магазине.",
            options: ["2550", "2700", "2750", "2650"],
            correct: 1,
            image: "guns/ak47.png"
        },
        {
            id: 7007,
            prototype: 7,
            type: "choice",
            question: "На картинке изображено оружие из игры Counter Strike 2. Определите его цену в магазине.",
            options: ["950", "1050", "1250", "1150"],
            correct: 1,
            image: "guns/mac10.png"
        },
        {
            id: 7008,
            prototype: 7,
            type: "choice",
            question: "На картинке изображено оружие из игры Counter Strike 2. Определите его цену в магазине.",
            options: ["2150", "2200", "2000", "2050"],
            correct: 3,
            image: "guns/famas.png"
        },
        {
            id: 7009,
            prototype: 7,
            type: "choice",
            question: "На картинке изображено оружие из игры Counter Strike 2. Определите его цену в магазине.",
            options: ["2800", "3250", "3000", "3100"],
            correct: 2,
            image: "guns/sg553.png"
        },
        {
            id: 7010,
            prototype: 7,
            type: "choice",
            question: "На картинке изображено оружие из игры Counter Strike 2. Определите его цену в магазине.",
            options: ["4750", "4700", "4650", "4800"],
            correct: 0,
            image: "guns/awp.png"
        },
        {
            id: 7011,
            prototype: 7,
            type: "choice",
            question: "На картинке изображено оружие из игры Counter Strike 2. Определите его цену в магазине.",
            options: ["5000", "5200", "5500", "5450"],
            correct: 0,
            image: "guns/g3sg1.png"
        },
    ],

    // ЗАДАНИЯ С САМОСТОЯТЕЛЬНЫМ ВВОДОМ
    inputTasks: [
        {
            id: 3000,
            prototype: 3,
            type: "input",
            question:
                "На рисунке представлен элемент из внутриигрового killfeed. По изображению определите его название и запишите ответ латинскими строчными буквами без пробелов.",
            correct: ["noscope"],
            image: "images/killfeed/noscope.jpg"
        },
        {
            id: 3001,
            prototype: 3,
            type: "input",
            question:
                "На рисунке представлен элемент из внутриигрового killfeed. По изображению определите его название и запишите ответ латинскими строчными буквами без пробелов.",
            correct: ["throughsmoke"],
            image: "images/killfeed/smokebang.jpg"
        },
        {
            id: 3002,
            prototype: 3,
            type: "input",
            question:
                "На рисунке представлен элемент из внутриигрового killfeed. По изображению определите его название и запишите ответ латинскими строчными буквами без пробелов.",
            correct: ["wallbang"],
            image: "images/killfeed/wallbang.jpg"
        },
        {
            id: 3003,
            prototype: 3,
            type: "input",
            question:
                "На рисунке представлен элемент из внутриигрового killfeed. По изображению определите его название и запишите ответ латинскими строчными буквами без пробелов.",
            correct: ["inair"],
            image: "images/killfeed/jumpkill.jpg"
        },
        {
            id: 3004,
            prototype: 3,
            type: "input",
            question:
                "На рисунке представлен элемент из внутриигрового killfeed. По изображению определите его название и запишите ответ латинскими строчными буквами без пробелов.",
            correct: ["headshot"],
            image: "images/killfeed/headshot.jpg"
        },
        {
            id: 3005,
            prototype: 3,
            type: "input",
            question:
                "На рисунке представлен элемент из внутриигрового killfeed. По изображению определите его название и запишите ответ латинскими строчными буквами без пробелов.",
            correct: ["blind"],
            image: "images/killfeed/blind.jpg"
        },
        {
            id: 4000,
            prototype: 4,
            type: "input",
            question:
                "Вы услышите аудиозапись. Определите по звуку оружие из CS2. Запишите ответ латинскими строчными буквами без пробелов и иных символов.",
            correct: ["ak47"],
            audio: "sounds/ak47.mp3"
        },
        {
            id: 4001,
            prototype: 4,
            type: "input",
            question:
                "Вы услышите аудиозапись. Определите по звуку оружие из CS2. Запишите ответ латинскими строчными буквами без пробелов и иных символов.",
            correct: ["aug"],
            audio: "sounds/aug.mp3"
        },
        {
            id: 4002,
            prototype: 4,
            type: "input",
            question:
                "Вы услышите аудиозапись. Определите по звуку оружие из CS2. Запишите ответ латинскими строчными буквами без пробелов и иных символов.",
            correct: ["awp"],
            audio: "sounds/awp.mp3"
        },
        {
            id: 4003,
            prototype: 4,
            type: "input",
            question:
                "Вы услышите аудиозапись. Определите по звуку оружие из CS2. Запишите ответ латинскими строчными буквами без пробелов и иных символов.",
            correct: ["deagle"],
            audio: "sounds/deagle.mp3"
        },
        {
            id: 4004,
            prototype: 4,
            type: "input",
            question:
                "Вы услышите аудиозапись. Определите по звуку оружие из CS2. Запишите ответ латинскими строчными буквами без пробелов и иных символов.",
            correct: ["g3sg1"],
            audio: "sounds/g3sg1.mp3"
        },
        {
            id: 4005,
            prototype: 4,
            type: "input",
            question:
                "Вы услышите аудиозапись. Определите по звуку оружие из CS2. Запишите ответ латинскими строчными буквами без пробелов и иных символов.",
            correct: ["glock18"],
            audio: "sounds/glock-18.mp3"
        },
        {
            id: 4006,
            prototype: 4,
            type: "input",
            question:
                "Вы услышите аудиозапись. Определите по звуку оружие из CS2. Запишите ответ латинскими строчными буквами без пробелов и иных символов.",
            correct: ["m4a1"],
            audio: "sounds/m4a1.mp3"
        },
        {
            id: 4007,
            prototype: 4,
            type: "input",
            question:
                "Вы услышите аудиозапись. Определите по звуку оружие из CS2. Запишите ответ латинскими строчными буквами без пробелов и иных символов.",
            correct: ["m4a1s"],
            audio: "sounds/m4a1s.mp3"
        },
        {
            id: 4008,
            prototype: 4,
            type: "input",
            question:
                "Вы услышите аудиозапись. Определите по звуку оружие из CS2. Запишите ответ латинскими строчными буквами без пробелов и иных символов.",
            correct: ["m4a4"],
            audio: "sounds/m4a4.mp3"
        },
        {
            id: 4009,
            prototype: 4,
            type: "input",
            question:
                "Вы услышите аудиозапись. Определите по звуку оружие из CS2. Запишите ответ латинскими строчными буквами без пробелов и иных символов.",
            correct: ["mac10"],
            audio: "sounds/mac10.mp3"
        },
        {
            id: 4010,
            prototype: 4,
            type: "input",
            question:
                "Вы услышите аудиозапись. Определите по звуку оружие из CS2. Запишите ответ латинскими строчными буквами без пробелов и иных символов.",
            correct: ["mag7"],
            audio: "sounds/mag7.mp3"
        },
        {
            id: 4011,
            prototype: 4,
            type: "input",
            question:
                "Вы услышите аудиозапись. Определите по звуку оружие из CS2. Запишите ответ латинскими строчными буквами без пробелов и иных символов.",
            correct: ["mp5sd"],
            audio: "sounds/mp5sd.mp3"
        },
        {
            id: 4012,
            prototype: 4,
            type: "input",
            question:
                "Вы услышите аудиозапись. Определите по звуку оружие из CS2. Запишите ответ латинскими строчными буквами без пробелов и иных символов.",
            correct: ["mp7"],
            audio: "sounds/mp7.mp3"
        },
        {
            id: 4013,
            prototype: 4,
            type: "input",
            question:
                "Вы услышите аудиозапись. Определите по звуку оружие из CS2. Запишите ответ латинскими строчными буквами без пробелов и иных символов.",
            correct: ["mp9"],
            audio: "sounds/mp9.mp3"
        },
        {
            id: 4014,
            prototype: 4,
            type: "input",
            question:
                "Вы услышите аудиозапись. Определите по звуку оружие из CS2. Запишите ответ латинскими строчными буквами без пробелов и иных символов.",
            correct: ["nova"],
            audio: "sounds/nova.mp3"
        },
        {
            id: 4015,
            prototype: 4,
            type: "input",
            question:
                "Вы услышите аудиозапись. Определите по звуку оружие из CS2. Запишите ответ латинскими строчными буквами без пробелов и иных символов.",
            correct: ["p2000"],
            audio: "sounds/p2000.mp3"
        },
        {
            id: 4016,
            prototype: 4,
            type: "input",
            question:
                "Вы услышите аудиозапись. Определите по звуку оружие из CS2. Запишите ответ латинскими строчными буквами без пробелов и иных символов.",
            correct: ["r8revolver"],
            audio: "sounds/r8.mp3"
        },
        {
            id: 4017,
            prototype: 4,
            type: "input",
            question:
                "Вы услышите аудиозапись. Определите по звуку оружие из CS2. Запишите ответ латинскими строчными буквами без пробелов и иных символов.",
            correct: ["scar20"],
            audio: "sounds/scar20.mp3"
        },
        {
            id: 4018,
            prototype: 4,
            type: "input",
            question:
                "Вы услышите аудиозапись. Определите по звуку оружие из CS2. Запишите ответ латинскими строчными буквами без пробелов и иных символов.",
            correct: ["ssg08"],
            audio: "sounds/ssg08.mp3"
        },
        {
            id: 4019,
            prototype: 4,
            type: "input",
            question:
                "Вы услышите аудиозапись. Определите по звуку оружие из CS2. Запишите ответ латинскими строчными буквами без пробелов и иных символов.",
            correct: ["usp"],
            audio: "sounds/usp.mp3"
        },
        {
            id: 4020,
            prototype: 4,
            type: "input",
            question:
                "Вы услышите аудиозапись. Определите по звуку оружие из CS2. Запишите ответ латинскими строчными буквами без пробелов и иных символов.",
            correct: ["usps"],
            audio: "sounds/usp-s.mp3"
        },
        {
            id: 4021,
            prototype: 4,
            type: "input",
            question:
                "Вы услышите аудиозапись. Определите по звуку оружие из CS2. Запишите ответ латинскими строчными буквами без пробелов и иных символов.",
            correct: ["xm1014"],
            audio: "sounds/xm1014.mp3"
        },
        {
            id: 5000,
            prototype: 5,
            type: "input",
            question:
                "Ознакомтесь с карьерой про-игрока на картине и напишите в ответе его никнейм латинскими строчными буквами без пробелов и иных символов.",
            correct: ["s1mple"],
            image: "proplayers/s1mple.jpg"
        },
        {
            id: 5001,
            prototype: 5,
            type: "input",
            question:
                "Ознакомтесь с карьерой про-игрока на картине и напишите в ответе его никнейм латинскими строчными буквами без пробелов и иных символов.",
            correct: ["aleksib"],
            image: "proplayers/aleksib.png"
        },
        {
            id: 5002,
            prototype: 5,
            type: "input",
            question:
                "Ознакомтесь с карьерой про-игрока на картине и напишите в ответе его никнейм латинскими строчными буквами без пробелов и иных символов.",
            correct: ["apex"],
            image: "proplayers/apex.png"
        },
        {
            id: 5003,
            prototype: 5,
            type: "input",
            question:
                "Ознакомтесь с карьерой про-игрока на картине и напишите в ответе его никнейм латинскими строчными буквами без пробелов и иных символов.",
            correct: ["ax1le"],
            image: "proplayers/ax1le.png"
        },
        {
            id: 5004,
            prototype: 5,
            type: "input",
            question:
                "Ознакомтесь с карьерой про-игрока на картине и напишите в ответе его никнейм латинскими строчными буквами без пробелов и иных символов.",
            correct: ["cadian"],
            image: "proplayers/cadian.png"
        },
        {
            id: 5005,
            prototype: 5,
            type: "input",
            question:
                "Ознакомтесь с карьерой про-игрока на картине и напишите в ответе его никнейм латинскими строчными буквами без пробелов и иных символов.",
            correct: ["chopper"],
            image: "proplayers/chopper.png"
        },
        {
            id: 5006,
            prototype: 5,
            type: "input",
            question:
                "Ознакомтесь с карьерой про-игрока на картине и напишите в ответе его никнейм латинскими строчными буквами без пробелов и иных символов.",
            correct: ["elecntronic"],
            image: "proplayers/elecntronic.png"
        },
        {
            id: 5007,
            prototype: 5,
            type: "input",
            question:
                "Ознакомтесь с карьерой про-игрока на картине и напишите в ответе его никнейм латинскими строчными буквами без пробелов и иных символов.",
            correct: ["happy"],
            image: "proplayers/happy.png"
        },
        {
            id: 5008,
            prototype: 5,
            type: "input",
            question:
                "Ознакомтесь с карьерой про-игрока на картине и напишите в ответе его никнейм латинскими строчными буквами без пробелов и иных символов.",
            correct: ["hooxi"],
            image: "proplayers/hooxi.png"
        },
        {
            id: 5009,
            prototype: 5,
            type: "input",
            question:
                "Ознакомтесь с карьерой про-игрока на картине и напишите в ответе его никнейм латинскими строчными буквами без пробелов и иных символов.",
            correct: ["kane"],
            image: "proplayers/kane.png"
        },
        {
            id: 5010,
            prototype: 5,
            type: "input",
            question:
                "Ознакомтесь с карьерой про-игрока на картине и напишите в ответе его никнейм латинскими строчными буквами без пробелов и иных символов.",
            correct: ["karrigan"],
            image: "proplayers/karrigan.png"
        },
        {
            id: 5011,
            prototype: 5,
            type: "input",
            question:
                "Ознакомтесь с карьерой про-игрока на картине и напишите в ответе его никнейм латинскими строчными буквами без пробелов и иных символов.",
            correct: ["kennys"],
            image: "proplayers/kennys.png"
        },
        {
            id: 5012,
            prototype: 5,
            type: "input",
            question:
                "Ознакомтесь с карьерой про-игрока на картине и напишите в ответе его никнейм латинскими строчными буквами без пробелов и иных символов.",
            correct: ["m0nesy"],
            image: "proplayers/m0nesy.png"
        },
        {
            id: 5013,
            prototype: 5,
            type: "input",
            question:
                "Ознакомтесь с карьерой про-игрока на картине и напишите в ответе его никнейм латинскими строчными буквами без пробелов и иных символов.",
            correct: ["niko"],
            image: "proplayers/niko.png"
        },
        {
            id: 5014,
            prototype: 5,
            type: "input",
            question:
                "Ознакомтесь с карьерой про-игрока на картине и напишите в ответе его никнейм латинскими строчными буквами без пробелов и иных символов.",
            correct: ["rain"],
            image: "proplayers/rain.png"
        },
        {
            id: 5015,
            prototype: 5,
            type: "input",
            question:
                "Ознакомтесь с карьерой про-игрока на картине и напишите в ответе его никнейм латинскими строчными буквами без пробелов и иных символов.",
            correct: ["refrezh"],
            image: "proplayers/refrezh.png"
        },
        {
            id: 5016,
            prototype: 5,
            type: "input",
            question:
                "Ознакомтесь с карьерой про-игрока на картине и напишите в ответе его никнейм латинскими строчными буквами без пробелов и иных символов.",
            correct: ["ropz"],
            image: "proplayers/ropz.png"
        },
        {
            id: 5017,
            prototype: 5,
            type: "input",
            question:
                "Ознакомтесь с карьерой про-игрока на картине и напишите в ответе его никнейм латинскими строчными буквами без пробелов и иных символов.",
            correct: ["teses"],
            image: "proplayers/teses.png"
        },
        {
            id: 5018,
            prototype: 5,
            type: "input",
            question:
                "Ознакомтесь с карьерой про-игрока на картине и напишите в ответе его никнейм латинскими строчными буквами без пробелов и иных символов.",
            correct: ["zywoo"],
            image: "proplayers/zywoo.png"
        },
        {
            id: 6000,
            prototype: 6,
            type: "input",
            question:
                "Ознакомтесь с аудиозаписью roundmvpanthem и в ответе запишите название music-kit латинскими строчными буквами без пробелов и иных символов.",
            correct: ["dashstar"],
            audio: "music-kits/dashstar.mp3"
        },
        {
            id: 6001,
            prototype: 6,
            type: "input",
            question:
                "Ознакомтесь с аудиозаписью roundmvpanthem и в ответе запишите название music-kit латинскими строчными буквами без пробелов и иных символов.",
            correct: ["ez4ence"],
            audio: "music-kits/ez4ence.mp3"
        },
        {
            id: 6002,
            prototype: 6,
            type: "input",
            question:
                "Ознакомтесь с аудиозаписью roundmvpanthem и в ответе запишите название music-kit латинскими строчными буквами без пробелов и иных символов.",
            correct: ["flashbangdance"],
            audio: "music-kits/flashbangdance.mp3"
        },
        {
            id: 6003,
            prototype: 6,
            type: "input",
            question:
                "Ознакомтесь с аудиозаписью roundmvpanthem и в ответе запишите название music-kit латинскими строчными буквами без пробелов и иных символов.",
            correct: ["gunmantacotruck"],
            audio: "music-kits/GunmanTacoTruck.mp3"
        },
        {
            id: 6004,
            prototype: 6,
            type: "input",
            question:
                "Ознакомтесь с аудиозаписью roundmvpanthem и в ответе запишите название music-kit латинскими строчными буквами без пробелов и иных символов.",
            correct: ["hotlinemiami"],
            audio: "music-kits/hotlineMiami.mp3"
        },
        {
            id: 6005,
            prototype: 6,
            type: "input",
            question:
                "Ознакомтесь с аудиозаписью roundmvpanthem и в ответе запишите название music-kit латинскими строчными буквами без пробелов и иных символов.",
            correct: ["inhuman"],
            audio: "music-kits/inhuman.mp3"
        },
        {
            id: 6006,
            prototype: 6,
            type: "input",
            question:
                "Ознакомтесь с аудиозаписью roundmvpanthem и в ответе запишите название music-kit латинскими строчными буквами без пробелов и иных символов.",
            correct: ["ultimate"],
            audio: "music-kits/ULTIMATE.mp3"
        }
    ],

    // ЗАДАНИЯ С ВЫБОРОМ НЕСКОЛЬКИХ ПРАВИЛЬНЫХ ОТВЕТОВ (checkbox)
    multiChoiceTasks: [
        {
            id: 8000,
            prototype: 8,
            type: "multiChoice",
            question:"Перед вами памятный граффити. Выберите связанные с ним пункты.",
            options: ["olofmeister", "mid", "ace", "fnatic", "de_mirage"],
            correct: [0,3],
            image: "images/graffiti/olofmeister.webp"
        },
        {
            id: 8001,
            prototype: 8,
            type: "multiChoice",
            question:"Перед вами памятный граффити. Выберите связанные с ним пункты.",
            options: ["olofmeister", "Team LDLC", "clutch", "boost", "Guardian"],
            correct: [0,1,3],
            image: "images/graffiti/podsad.webp"
        },
        {
            id: 8002,
            prototype: 8,
            type: "multiChoice",
            question:"Перед вами памятный граффити. Выберите связанные с ним пункты.",
            options: ["Katowice", "Fnatic", "Cologne", "1v4 clutch", "Team LDLC"],
            correct: [1,2],
            image: "images/graffiti/fnatic.webp"
        },
        {
            id: 8003,
            prototype: 8,
            type: "multiChoice",
            question:"Перед вами памятный граффити. Выберите связанные с ним пункты.",
            options: ["2017", "coldzera", "ace", "1v4 clutch", "asimov"],
            correct: [1,4],
            image: "images/graffiti/coldzera.webp"
        },
        {
            id: 8004,
            prototype: 8,
            type: "multiChoice",
            question:"Перед вами памятный граффити. Выберите связанные с ним пункты.",
            options: ["clutch", "Fnatic", "no-scope", "1v3 clutch", "coldzera"],
            correct: [0,1,2],
            image: "images/graffiti/s1.webp"
        },
        {
            id: 8005,
            prototype: 8,
            type: "multiChoice",
            question:"Перед вами памятный граффити. Выберите связанные с ним пункты.",
            options: ["friberg", "multi-kill", "ace", "flusha", "NiKo"],
            correct: [0,1],
            image: "images/graffiti/adamo.webp"
        },
        {
            id: 8006,
            prototype: 8,
            type: "multiChoice",
            question:"Перед вами памятный граффити. Выберите связанные с ним пункты.",
            options: ["Luminosuty", "molotov", "Dosia", "Zeus", "Krakow"],
            correct: [2,4],
            image: "images/graffiti/dosia.webp"
        },
        {
            id: 8007,
            prototype: 8,
            type: "multiChoice",
            question:"Перед вами памятный граффити. Выберите связанные с ним пункты.",
            options: ["AGO", "ace", "FPX", "Katowice", "Krakow"],
            correct: [0,3],
            image: "images/graffiti/ago.webp"
        },
        {
            id: 8008,
            prototype: 8,
            type: "multiChoice",
            question:"Перед вами памятный граффити. Выберите связанные с ним пункты.",
            options: ["G2", "1/4 final", "Magisk", "ace", "1/8 final"],
            correct: [0,1],
            image: "images/graffiti/magixx.jpg"
        },
    ],

    // ЗАДАНИЯ НА СООТВЕТСТВИЕ (matching)
    matchingTasks: [
        {
            id: 2000,
            prototype: 2,
            type: "matching",
            question:
                "Установите соответствие между изображениями карт Counter-Strike 2 и их названиями. К каждой позиции первого столбца подберите соответствующую позицию второго столбца и запишите цифры под соответствующими буквами.",
            // ПЕРВЫЙ СТОЛБЕЦ (буквы А, Б, В, Г) - каждый с картинкой
            leftItems: [
                { id: "A", image: "images/maps/safehouse.jpg", label: "А" },
                { id: "B", image: "images/maps/de_mirage.png", label: "Б" },
                { id: "C", image: "images/maps/lake.jpg", label: "В" },
                { id: "D", image: "images/maps/de_ancient.png", label: "Г" }
            ],
            // ВТОРОЙ СТОЛБЕЦ (названия карт)
            rightItems: [
                { id: 1, label: "de_dust2" },
                { id: 2, label: "de_mirage" },
                { id: 3, label: "de_inferno" },
                { id: 4, label: "de_italy" },
                { id: 5, label: "de_safehouse" },
                { id: 6, label: "de_lake" },
                { id: 7, label: "de_ancient" },
                { id: 8, label: "de_aztec" }
            ],
            // ПРАВИЛЬНЫЕ ОТВЕТЫ: какая буква (А, Б, В, Г) с какой цифрой сопоставляется
            correct: {
                A: 5,
                B: 2,
                C: 6,
                D: 7
            }
        },
        {
            id: 2001,
            prototype: 2,
            type: "matching",
            question:
                "Установите соответствие между изображениями карт Counter-Strike 2 и их названиями. К каждой позиции первого столбца подберите соответствующую позицию второго столбца и запишите цифры под соответствующими буквами.",
            // ПЕРВЫЙ СТОЛБЕЦ (буквы А, Б, В, Г) - каждый с картинкой
            leftItems: [
                { id: "A", image: "images/maps/ar_pool_day.png", label: "А" },
                { id: "B", image: "images/maps/Csgo_cobblestone.jpg", label: "Б" },
                { id: "C", image: "images/maps/awp_india.png", label: "В" },
                { id: "D", image: "images/maps/de_vertigo.png", label: "Г" }
            ],
            // ВТОРОЙ СТОЛБЕЦ (названия карт)
            rightItems: [
                { id: 1, label: "ar_pool_day" },
                { id: 2, label: "de_vertigo" },
                { id: 3, label: "awp_lego" },
                { id: 4, label: "cs_office" },
                { id: 5, label: "awp_india" },
                { id: 6, label: "ar_baggage" },
                { id: 7, label: "cs_assault" },
                { id: 8, label: "de_cobblestone" }
            ],
            // ПРАВИЛЬНЫЕ ОТВЕТЫ: какая буква (А, Б, В, Г) с какой цифрой сопоставляется
            correct: {
                A: 1,
                B: 8,
                C: 5,
                D: 2
            }
        },
        {
            id: 2002,
            prototype: 2,
            type: "matching",
            question:
                "Установите соответствие между изображениями карт Counter-Strike 2 и их названиями. К каждой позиции первого столбца подберите соответствующую позицию второго столбца и запишите цифры под соответствующими буквами.",
            // ПЕРВЫЙ СТОЛБЕЦ (буквы А, Б, В, Г) - каждый с картинкой
            leftItems: [
                { id: "A", image: "images/maps/ar_baggage.png", label: "А" },
                { id: "B", image: "images/maps/cs_italy.png", label: "Б" },
                { id: "C", image: "images/maps/de_cache.png", label: "В" },
                { id: "D", image: "images/maps/de_nuke.png", label: "Г" }
            ],
            // ВТОРОЙ СТОЛБЕЦ (названия карт)
            rightItems: [
                { id: 1, label: "cs_office" },
                { id: 2, label: "ar_baggage" },
                { id: 3, label: "de_vertigo" },
                { id: 4, label: "de_inferno" },
                { id: 5, label: "de_basalt" },
                { id: 6, label: "cs_italy" },
                { id: 7, label: "de_cache" },
                { id: 8, label: "de_nuke" }
            ],
            // ПРАВИЛЬНЫЕ ОТВЕТЫ: какая буква (А, Б, В, Г) с какой цифрой сопоставляется
            correct: {
                A: 2,
                B: 6,
                C: 7,
                D: 8
            }
        },
        {
            id: 2003,
            prototype: 2,
            type: "matching",
            question:
                "Установите соответствие между изображениями карт Counter-Strike 2 и их названиями. К каждой позиции первого столбца подберите соответствующую позицию второго столбца и запишите цифры под соответствующими буквами.",
            // ПЕРВЫЙ СТОЛБЕЦ (буквы А, Б, В, Г) - каждый с картинкой
            leftItems: [
                { id: "A", image: "images/maps/de_basalt.png", label: "А" },
                { id: "B", image: "images/maps/de_overpass.png", label: "Б" },
                { id: "C", image: "images/maps/awp_lego_2_ultimate.png", label: "В" },
                { id: "D", image: "images/maps/de_anubis.png", label: "Г" }
            ],
            // ВТОРОЙ СТОЛБЕЦ (названия карт)
            rightItems: [
                { id: 1, label: "awp_india" },
                { id: 2, label: "de_basalt" },
                { id: 3, label: "de_lake" },
                { id: 4, label: "de_nuke" },
                { id: 5, label: "awp_lego_2" },
                { id: 6, label: "de_anubis" },
                { id: 7, label: "de_overpass" },
                { id: 8, label: "de_dust2" }
            ],
            // ПРАВИЛЬНЫЕ ОТВЕТЫ: какая буква (А, Б, В, Г) с какой цифрой сопоставляется
            correct: {
                A: 2,
                B: 7,
                C: 5,
                D: 6
            }
        }
    ]
};
