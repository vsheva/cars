'use strict';

const selectedCar = document.getElementById('cars');
const output = document.getElementById('output');
const out = document.getElementById('out');

const getData = (url) => {
    return fetch(url)
        .then((response) => response.json());
};

const cars = (data) => {
    data.cars.forEach(element => {
        if (element.brand === selectedCar.value) {
            //Диструктурирующее присваивание, когда свойства обьекта/значения массива распаковываются в отд.переменные
            let {brand, model, price} = element;

            output.textContent = `Тачка ${brand} ${model}`;
            out.textContent = `Цена: ${price}$`;

        } else if (selectedCar.value === 'none') {
            output.textContent = 'Тачка не выбрана';
            out.textContent = ''
        }
    });
};

selectedCar.addEventListener('change', () => {
    getData('cars.json')
        .then(cars)
        .catch(error => output.textContent = 'Произошла ошибка: ' + error);
});


