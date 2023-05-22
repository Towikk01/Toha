'use strict'
let time = performance.now();
const defaultFirstSelectName = [
    {name: "Выберите категорию продукта..."},
    {name: "Алкогольные напитки"},
    {name: "Безалкогольные напитки"},
    {name: "Каши"},
    {name: "Грибы"},
    {name: "Икра"},
    {name: "Масло, маргарин, жиры"},
    {name: "Молочные продукты"},
    {name: "Яйца"},
    {name: "Колбаса и колбасные изделия"},
    {name: "Мясные продукты и птица"},
    {name: "Рыба и морепродукты"},
    {name: "Овощи"},
    {name: "Фрукты и ягоды"},
    {name: "Орехи и сухофрукты"},
    {name: "Сладости"},
    {name: "Хлеб и хлебобулочные изделия"}]

const alcoholDrinks = [
    {name: "Выберите продукт...", squirrels: 0, fats: 0, carbs: 0, calories: 0},
    {name: "Бренди", squirrels: 0, fats: 0, carbs: 1, calories: 225},
    {name: "Вермут", squirrels: 0, fats: 0, carbs: 15.9, calories: 155},
    {name: "Вино сухое", squirrels: 0, fats: 0, carbs: 1, calories: 66},
    {name: "Вино полусухое", squirrels: 0.3, fats: 0, carbs: 2.5, calories: 78},
    {name: "Вино десертное", squirrels: 0.5, fats: 0, carbs: 20, calories: 175},
    {name: "Вино полусладкое", squirrels: 0.2, fats: 0, carbs: 5, calories: 88},
    {name: "Вино столовое", squirrels: 0.2, fats: 0, carbs: 0.2, calories: 67},
    {name: "Виски", squirrels: 0, fats: 0, carbs: 0, calories: 222},
    {name: "Водка", squirrels: 0, fats: 0, carbs: 0.1, calories: 224},
    {name: "Джин", squirrels: 0, fats: 0, carbs: 0, calories: 223},
    {name: "Коньяк", squirrels: 0, fats: 0, carbs: 0.1, calories: 240},
    {name: "Ликёр", squirrels: 0, fats: 0, carbs: 53, calories: 344},
    {name: "Пиво 3%", squirrels: 0.6, fats: 0, carbs: 3.5, calories: 37},
    {name: "Пиво 4.5%", squirrels: 0.8, fats: 0, carbs: 4.5, calories: 45},
    {name: "Пиво тёмное", squirrels: 0.2, fats: 0, carbs: 4, calories: 39},
    {name: "Портвейн", squirrels: 0, fats: 0, carbs: 13.8, calories: 167},
    {name: "Ром", squirrels: 0, fats: 0, carbs: 0, calories: 217},
    {name: "Шампанское", squirrels: 0.3, fats: 0, carbs: 5.2, calories: 88},]


const softDrinks = [
    {name: "Выберите продукт...", squirrels: 0, fats: 0, carbs: 0, calories: 0},
    {name: "Абрикосовый сок", squirrels: 0.9, fats: 0.2, carbs: 9.2, calories: 39},
    {name: "Ананасовый сок", squirrels: 0.2, fats: 0.2, carbs: 11.4, calories: 48},
    {name: "Апельсиновый сок", squirrels: 0.9, fats: 0.1, carbs: 8.4, calories: 36},
    {name: "Виноградный сок", squirrels: 0.3, fats: 0, carbs: 14.5, calories: 56},
    {name: "Вишневый сок", squirrels: 0.5, fats: 0, carbs: 10.6, calories: 49},
    {name: "Гранатовый сок", squirrels: 0.2, fats: 0, carbs: 14, calories: 58},
    {name: "Какао на молоке", squirrels: 24, fats: 17, carbs: 33.1, calories: 377},
    {name: "Квас хлебный", squirrels: 0.2, fats: 0, carbs: 5, calories: 26},
    {name: "Кола", squirrels: 0, fats: 0, carbs: 10, calories: 40},
    {name: "Кофе с молоком", squirrels: 0.8, fats: 1, carbs: 11, calories: 56},
    {name: "Лимонад", squirrels: 0, fats: 0, carbs: 6.1, calories: 24},
    {name: "Лимонный сок", squirrels: 1, fats: 0.1, carbs: 3.2, calories: 18},
    {name: "Морковный сок", squirrels: 1, fats: 0.1, carbs: 6.5, calories: 31},
    {name: "Персиковый сок", squirrels: 0.8, fats: 0.1, carbs: 9.1, calories: 37},
    {name: "Пиво безалкогольное", squirrels: 0, fats: 0, carbs: 4.1, calories: 22},
    {name: "Зеленый чай", squirrels: 0, fats: 0, carbs: 0, calories: 0},
    {name: "Черный чай без сахара", squirrels: 0, fats: 0, carbs: 0, calories: 0},
    {name: "Черный чай с лимоном и сахаром (2 ч. л.)", squirrels: 0.8, fats: 0.7, carbs: 8.3, calories: 41},
    {name: "Черный чай со сгущенным молоком (2 ч. л.)", squirrels: 2.4, fats: 2.9, carbs: 19.1, calories: 112},
    {name: "Энергетический напиток", squirrels: 0, fats: 0, carbs: 11.4, calories: 47},
    {name: "Яблочный сок", squirrels: 0.5, fats: 0.4, carbs: 9.7, calories: 42},]


//Функция для создания элемента input справа от select

let checkFor = false;
let inputUseId = '';
let b = 1;
function creatingInput(SelectElement, divElement) {
    const inputElement = document.createElement('input');

    // let inputId = 'input_' + Math.random().toString(36).substr(2, 9);
    let inputId = 'input_' + b;
    inputUseId = inputId;

    inputElement.id = inputId;
    window[inputId] = inputElement;

    inputElement.style.left = SelectElement.offsetLeft + SelectElement.offsetWidth + (-250) + "px";
    inputElement.style.top = SelectElement.offsetTop + "px";
    inputElement.style.width = divElement.offsetWidth - inputElement.offsetLeft + "px";

    inputElement.placeholder = "Введите массу продукта в граммах";

    inputElement.style.position = 'absolute';
    inputElement.style.display = 'block';
    inputElement.style.padding = '10px';
    inputElement.style.border = 'none';
    inputElement.style.borderRadius = '5px';
    inputElement.style.width = '200px';
    inputElement.style.margin = '0 auto 20px';
    inputElement.style.fontSize = '16px';
    inputElement.style.backgroundColor = 'white';
    inputElement.style.color = '#8A2BE2';

    inputElement.classList.add('bubble-animation');

    inputElement.classList.add('slide-animation');

    setTimeout(function () {
        divElement.appendChild(inputElement);
    }, 1000);

    setTimeout(function () {
        inputElement.classList.add('slide-to-select');
    }, 1500);
    checkFor = false;
    // inputId++;
    b++;
    return [inputId];
}


//Функция для создания значений option вытягивая данные из массивов
function callOption(arr, selectElement) {
    for (let i = 0; i < arr.length; i++) {
        const option = document.createElement("option")
        option.value = `${i}`;
        option.textContent = `${arr[i].name}`;
        selectElement.appendChild(option);

        // console.log(arr[i].name);
    }
}


//Функция для анимирования первого блока select и очистки значений option от предыдущего выбора
function animationForFirstSelect(element, cleaning) {
    cleaning.innerHTML = ""
    // element.classList.remove('large');
    element.style.width = '200px';
    element.classList.add('large');
}


//Функция для анимирования второго и последующих блоков select

function animationForSecondSelect(element) {
    // element.classList.remove('large');
    element.style.width = '200px';
    element.classList.add('large');
}


//Функция для провления элемента input и проверки на условие о его наличии
// function appearanceInputElement(SelectElement, divElement, checkFor) {
//     if (checkFor === false) {
//         let inputId = creatingInput(SelectElement, divElement);
//         console.log(inputId);
//
//         const input = window[inputId];
//         input.addEventListener('input', function (event) {
//             let value = event.target.value;
//             console.log(value);
//         });
//     }
// }
let generalSelectId = 0;




function appearanceInputElement(SelectElement, divElement, checkFor){
    if (checkFor === false) {
        let inputId = creatingInput(SelectElement, divElement);
        console.log(inputId);


        let i = 0;
        let mass = [];
        mass.length = generalSelectId;
        mass[i] = false;


        function createOutput() {
            const newOutput = document.createElement('output')

            mass[i] = true;
            let bb = b - 2;
            let newOutputId = 'output_' + bb;

            newOutput.id = newOutputId;
            window[newOutputId] = newOutput;


            newOutput.style.left = input.offsetLeft + input.offsetWidth + (-150) + "px";
            newOutput.style.top = input.offsetTop + "px";
            newOutput.style.width = divElement.offsetWidth - newOutput.offsetLeft + "px";

            newOutput.placeholder = "Результат";

            newOutput.style.position = 'absolute';
            newOutput.style.display = 'block';
            newOutput.style.padding = '10px';
            newOutput.style.border = 'none';
            newOutput.style.borderRadius = '5px';
            newOutput.style.width = '100px';
            newOutput.style.height = '20px';
            newOutput.style.margin = '0 auto 20px';
            newOutput.style.fontSize = '16px';
            newOutput.style.backgroundColor = 'white';
            newOutput.style.color = '#8A2BE2';

            newOutput.classList.add('bubble-animation');
            // newInput.classList.add('slide-animation');

            console.log(newOutputId);

            divElement.appendChild(newOutput);
            i++;
            // newOutput.value = value + 2;
            return [newOutputId];
            // newOutput.addEventListener('output', function (event){
            //
            // })
        }

        let newOutputId = '';
        const input = window[inputId];
        input.addEventListener('input', function (event) {
            let value = event.target.value;


            console.log(`inputUseId = ${inputUseId}, generalSelectId = ${generalSelectId}`);
            if (inputUseId === 'input_' + `${generalSelectId}` && mass[i] === false){

                newOutputId = createOutput();


            }

            for (let i = 0; i <= selectArr.length; i++){
                console.log(`Результат выбора элемента ${selectIArr.calories}`);
            }
            const newOutput = window[newOutputId];
            console.log(`input_${generalSelectId}   output_${generalSelectId}`)

            // console.log(`Проверка: ${inputUseId.slice(-1)}   ${newOutput.slice(-1)}`);


            // if(inputUseId.slice(-1) === newOutputId.slice(-1)){
            //     console.log(`input_${generalSelectId}   output_${generalSelectId}`)
            //
            //
            // }

            // newOutput.value = (parseInt(value) + selectIArr.calories);
            newOutput.value =  parseInt(value) * (selectIArr.calories / 100);


            console.log(`mass[i] = ${mass}, i = ${i}`);
            console.log(value);
        });
    }
}

// function createNewFirstSelect() {
//     const newFirstSelect = document.createElement('select');
//
//     let newFirstSelectId = 'select_' + Math.random().toString(36).substr(2, 9);
//     newFirstSelect.id = newFirstSelectId;
//     window[newFirstSelectId] = newFirstSelect;
//
//     newFirstSelect.classList.add('bubble-animation');
//
//     setTimeout(function () {
//         // divElement.appendChild(newSelect);
//         divElement.insertBefore(newFirstSelect, addButton);
//     }, 500);
//
//     newFirstSelectElement = newFirstSelect;
//
//     return[newFirstSelect.id];
//
//
//     const newSelect = document.createElement("select");
//     newSelect.id = `select${selectCount}`;
//
//     // Присваиваем разные значения option для каждого нового select
//     for (let i = 0; i <= selectCount; i++) {
//         const newOption = document.createElement("option");
//         newOption.value = `${i}`;
//         newOption.text = `Option ${i}`;
//         newSelect.appendChild(newOption);
//         console.log(newOption.value)
//     }
//
//     divElement.insertBefore(newSelect, addButton);
//     return selectCount++;
// }


//Функция для создания второго блока select с вариантом выбора продукта исходя из категории
// function createNewSecondSelect() {
//     const newSecondSelect = document.createElement('select');
//
//     let newSecondSelectId = 'input_' + Math.random().toString(36).substr(2, 9);
//     newSecondSelect.id = newSecondSelectId;
//     window[newSecondSelectId] = newSecondSelect;
//
//     newSecondSelect.classList.add('bubble-animation');
//
//     setTimeout(function () {
//         divElement.insertBefore(newSecondSelect, addButton);
//     }, 500);
//
//     return [newSecondSelect.id];
// }



// const firstSelectElement = document.getElementById("select-1");
// const secondSelectElement = document.getElementById("select-2");
const divElement = document.getElementById('gradient-block');
const addButton = document.getElementById('add-button');
// const resultButton = document.getElementById('resultButton');

// обработчик событий change на первом блоке select
let alongArr = 0;
let selectArr = 0;
let selectIArr = 0;
function firstSelectElementProcessing(firstSelectElement, secondSelectElement) {
    firstSelectElement.addEventListener("change", function () {
        // получаем выбранное значение
        const selectedValue = firstSelectElement.value;
        // const secondSelectedValue = secondSelectElement.value;

        // удаляем все дочерние элементы второго блока select
        // secondSelectElement.innerHTML = "";

        switch (selectedValue) {
            case '0':
                secondSelectElement.innerHTML = "";
                return console.log(`selectValue = ${selectedValue}`);
            case '1':
                animationForFirstSelect(firstSelectElement, secondSelectElement);
                callOption(alcoholDrinks, secondSelectElement);
                alongArr = alcoholDrinks.length;
                selectArr = alcoholDrinks;
                return console.log(`selectValue = ${selectedValue}`);
            case '2':
                animationForFirstSelect(firstSelectElement, secondSelectElement);
                callOption(softDrinks, secondSelectElement);
                alongArr = softDrinks.length;
                selectArr = softDrinks;
                return console.log(`selectValue = ${selectedValue}`);
            default:
                console.log(`Ошибка: selectedValue ${selectedValue}`)
        }
        console.log(selectedValue);
    })
}


// обработчик событий change на втором блоке select
function secondSelectElementProcessing(secondSelectElement) {
    secondSelectElement.addEventListener("change", function () {

        const secondSelectedValue = secondSelectElement.value;

        // switch (secondSelectedValue) {
        //     case '1':
        //
        //         animationForSecondSelect(secondSelectElement, secondSelectElement);
        //         // creatingInput(secondSelectElement, divElement);
        //         appearanceInputElement(secondSelectElement, divElement, checkFor);
        //
        //         // return console.log(`secondSelectedValue = ${secondSelectedValue}`);
        //     // default:
        //     //     console.log(`Ошибка: ${secondSelectedValue}`)
        // }
        console.log(`secondSelectedValue = ${secondSelectedValue}`);
        console.log(`alongArr = ${alongArr}`)
        for (let i = 0; i <= alongArr; i++){
            if (secondSelectedValue === `${0}`){
                break;
            }
            else if (secondSelectedValue === `${i}`){

                animationForSecondSelect(secondSelectElement, secondSelectElement);
                // creatingInput(secondSelectElement, divElement);
                appearanceInputElement(secondSelectElement, divElement, checkFor);


                console.log(`Возвращение элемента ${selectIArr}`);
                selectIArr = selectArr[`${i}`];

                console.log(`Выбран элемент - ${selectArr[`${i}`].name}`);

                // console.log(`secondSelectedValue = ${secondSelectedValue}, ${i}`);
                // console.log(i);
                }
            // else (console.log(`Ошибка: ${secondSelectedValue}`));

        }
        // for (let i = 0; i < alongArr; i++) {
        //     console.log(selectArr[i].name);
        // }

    console.log(secondSelectedValue);
    });
}


//Функция для создания Select и отслеживания их изменений пользователем
// let selectCounter = 0;

// function createFirstSelect() {
//
//     let select = document.createElement("select");
//     select.id = `${selectCounter}`;
//     select.classList.add('bubble-animation');
//
//
//     // Добавить необходимые параметры и опции для select
//     if (select.id % 2 === 0) {
//         callOption(defaultFirstSelectName, select);
//     } else callOption(softDrinks, select);
//
//
//     divElement.insertBefore(select, addButton);
//
//     //Отслеживания изменений пользователем
//     select.addEventListener("change", function (event) {
//         const selectedValue = event.target.value;
//         if (parseInt(select.id) % 2 === 0) {
//             // firstSelectElementProcessing(select, select);
//             console.log('Выбрана обработка первого блока select')
//         } else {
//             secondSelectElementProcessing(select);
//             console.log('Выбрана обработка второго блока select')
//         }
//         console.log(`Selected value: ${select.id} , ${selectedValue}`);
//     });
//     console.log(`selectCounter ${selectCounter}`);
//     selectCounter++;
//     console.log(`Вывод select: ${select.id}`);
//     return [select];
// }




// function createSecondSelect() {
//
//     let secondSelect = document.createElement("select");
//     secondSelect.id = `${selectCounter}`;
//     secondSelect.classList.add('bubble-animation');
//
//
//     // Добавить необходимые параметры и опции для select
//     if (secondSelect.id % 2 === 0) {
//         callOption(defaultFirstSelectName, secondSelect);
//     } else callOption(softDrinks, secondSelect);
//
//
//     divElement.insertBefore(secondSelect, addButton);
//
//     //Отслеживания изменений пользователем
//     secondSelect.addEventListener("change", function (event) {
//         const selectedValue = event.target.value;
//         if (parseInt(secondSelect.id) % 2 === 0) {
//             // firstSelectElementProcessing(select, select);
//             console.log('Выбрана обработка первого блока select')
//         } else {
//             secondSelectElementProcessing(secondSelect);
//             console.log('Выбрана обработка второго блока select')
//         }
//         console.log(`Selected value: ${secondSelect.id} , ${selectedValue}`);
//     });
//     console.log(`selectCounter ${selectCounter}`);
//     selectCounter++;
//     console.log(`Вывод select: ${secondSelect.id}`);
//     return [secondSelect];
// }










//test



// function callSelect(){
//     function firstSelect(){
//         const firstSelect = document.createElement('select');
//         firstArrSelect[firstArrSelect.length] = generalSelectId;
//         firstSelect.classList.add('bubble-animation');
//
//         firstArrSelect.length++;
//         console.log(`Создан первый элемент, его id: ${firstArrSelect}`);
//     }
//     function secondSelect(){
//         const secondSelect = document.createElement('select');
//         secondArrSelect[secondArrSelect.length] = generalSelectId;
//         secondSelect.classList.add('bubble-animation');
//
//         secondArrSelect.length++;
//         console.log(`Создан второй элемент, его id: ${secondArrSelect}`);
//     }
//     firstSelect();
//     secondSelect();
//     generalSelectId++;
// }



//test










// Обработчик по нажатию на кнопку которая добавляет два новых select с категорией и выбором продуктов
// const firstArrSelect = [];
// firstArrSelect.length = 0;
// const secondArrSelect = [];
// secondArrSelect.length = 0;


// let inputId = 'select_' + Math.random().toString(36).substr(2, 9);


//Действия по нажатию на кнопку (единомоментное создание двух взаимосвязанных элементов select
addButton.addEventListener("click", function () {
    console.log("Button clicked");
    // createFirstSelect();
    // createSecondSelect();

    // callSelect();



    const firstSelect = document.createElement('select');
    // firstArrSelect[firstArrSelect.length] = `${generalSelectId}`;
    firstSelect.value = `${generalSelectId}`;
    firstSelect.classList.add('bubble-animation');
    divElement.insertBefore(firstSelect, addButton);

    // console.log(`Создан первый элемент, его id: ${firstArrSelect.length}`);
    // firstArrSelect.length++;



    const secondSelect = document.createElement('select');
    // secondArrSelect[secondArrSelect.length] = `${generalSelectId}`;
    secondSelect.value = `${generalSelectId}`;
    secondSelect.classList.add('bubble-animation');
    divElement.insertBefore(secondSelect, addButton);

    // console.log(`Создан второй элемент, его id: ${secondArrSelect.length}`);
    // secondArrSelect.length++;

    console.log(`generalSelectId = ${generalSelectId}`);
    generalSelectId++;



    callOption(defaultFirstSelectName, firstSelect);

    firstSelectElementProcessing(firstSelect, secondSelect);
    secondSelectElementProcessing(secondSelect);

    // const button1 = document.querySelector('#add-button');
    // const button2 = document.querySelector('#resultButton');
    //
    // button1.classList.add('move-down');
    // button2.classList.add('move-down');

    //
    // let selectFirstId = createNewFirstSelect();
    // console.log(selectFirstId);
    // callOption(defaultFirstSelectName, newFirstSelectElement)
    //
    // const firstSelect = window[selectFirstId];
    // firstSelect.addEventListener('input', function (event) {
    //     let value = event.target.value;
    //     console.log(value);
    // });

    // let selectSecondId = createNewSecondSelect();
    // console.log(selectSecondId);
    //
    // const secondSelect = window[selectSecondId];
    // secondSelect.addEventListener('input', function (event) {
    //     let value = event.target.value;
    //     console.log(value);
    // });


    // createNewFirstSelect();


});


// firstSelectElementProcessing()
// secondSelectElementProcessing()


//Тест работы с массивом
// for (let i = 0; i <= alcoholDrinks.length; i++) {
//     console.log(`Тестовый вывод массиива: ${alcoholDrinks[i].calories}`);
// }



time = performance.now() - time;
console.log('Время выполнения = ', time);