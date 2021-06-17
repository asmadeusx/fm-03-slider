'use strict';

const upBtn = document.querySelector('.up-button');
const downBtn = document.querySelector('.down-button');
const sideBar = document.querySelector('.sidebar');
const mainSlide = document.querySelector('.main-slide');
const slidesCount = mainSlide.querySelectorAll('div').length;
let activeSlideIndex = 0;
const container = document.querySelector('.container');

sideBar.style.top = `-${(slidesCount - 1)  * 100}vh`;


//#region Добавленный КОД для ДЗ
const newImgDescArray = [
    {
        header:'Beach',
        desc:'Sunrise on the beach',
        color:'#c5912e'
    },
    {
        header:'Air Baloon',
        desc:'Inside',
        color:'#fd0001'
    },
    {
        header:'Nature',
        desc:'Its oxygen',
        color:'#398d59'
    },
    {
        header:'Flower',
        desc:'Сrocus',
        color:'#bf02a4'
    },
];
const newImgSrcArray = [
    'https://images.unsplash.com/photo-1601248543571-bf246689c301?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80', // Flower
    'https://images.unsplash.com/photo-1487017931017-0e0d9e02bb0c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80', // Nature
    'https://images.unsplash.com/photo-1605711220483-b61992a2067d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1052&q=80', // Air Baloon
    'https://images.unsplash.com/photo-1561647784-2f9c43b07a0b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80' // Beach
];

// Оглашение Функций
// Функция создания нового SideBar'а использую данные из массива
function newSideBar() {
    sideBar.innerHTML = ''; // Очищаем старый SideBar
    for (let i = 0; i < newImgDescArray.length; i++) {
        const div = document.createElement('div');
        div.style.background = `${newImgDescArray[i].color}`;
        div.innerHTML = `
            <h1>${newImgDescArray[i].header}</h1>
            <p>${newImgDescArray[i].desc}</p>
        `;
        sideBar.append(div);
    }
}

// Функция создания новых Слайдов используя данные из массива
function newSlide() {
    mainSlide.innerHTML = ''; // Очищаем старый MainSlide
    for (let i = 0; i < newImgSrcArray.length; i++) {
        const div = document.createElement('div');
        div.style.backgroundImage = `url('${newImgSrcArray[i]}')`;
        mainSlide.append(div);
    }
}

// Вызов Функция для их выполнения
newSideBar();
newSlide();

//#endregion

//#region Код из Урока


// Кнопка вверх
upBtn.addEventListener('click', () => {
    changeSlide('up');
});

// Кнопка вниз
downBtn.addEventListener('click', () => {
    changeSlide('down');
});


function changeSlide(direction) {
    if (direction === 'up') {
        activeSlideIndex++;
        
        if (activeSlideIndex === slidesCount) {
            activeSlideIndex = 0;
        }
    
    } else if (direction === 'down') {
        activeSlideIndex--;
        
        if (activeSlideIndex < 0) {
            activeSlideIndex = slidesCount - 1;
        }
    }

    const height = container.clientHeight;

    mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`;

    sideBar.style.transform = `translateY(${activeSlideIndex * height}px)`;
}
//#endregion