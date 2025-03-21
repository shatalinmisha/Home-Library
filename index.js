const conteinerEl = document.querySelector('.conteiner');
const pushBtnEl = document.querySelector('.pushBtn');
const searchBtnEl = document.querySelector('.searchBtn');

const listBooks = ['Мастер и Маргарита', 'Гарри Поттер', 'За пропастью во ржи', 'Властелин колец', 'Дюна', 'Отци и дети'];

function renderList(arr) {
    listEl.innerHTML = '';
    for (let i = 0; i < arr.length; i++) {
        const liEl = document.createElement('li');
        liEl.classList.add('item');
        liEl.textContent = `${i + 1}) ${arr[i]}`;
        listEl.append(liEl);
    }
}

const listEl = document.createElement('ul');
listEl.classList.add('list');
conteinerEl.append(listEl)
renderList(listBooks);

pushBtnEl.onclick = function () {
    const newBook = prompt('Введите название новой книги.');
    if (newBook === '') {
        alert('Название книги не введено!');
    } else {
        listBooks.push(newBook);
    }
    renderList(listBooks);
}

function find(arr, search) {
    let result = -1;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === search) {
            result = i + 1;
            break;
        }
    }
    return result;
}

searchBtnEl.onclick = function () {
    const search = prompt('Укажити название для поиска');

    const findIndex = find(listBooks, search);

    if (findIndex > -1) {
        document.querySelector(`li:nth-child(${findIndex})`).classList.add('item-color');
    } else {
        alert('Книга не найдена!');
    }
}


