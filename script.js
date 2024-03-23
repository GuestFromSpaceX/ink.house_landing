import {data} from './data.js';
let section = document.querySelector('.reproduction__grid-1');
let buttons = document.querySelectorAll('input');

console.log(data);

function viewCards(database){
    for(let el of database){
        createCard(el)
    }
}

function createCard(obj) {
    let card = document.createElement('div');
    card.classList.add('card');

    card.innerHTML = `
    <div class="cart">
    <img class="cart__img" src="${obj.img}" alt="art">
                                <p class="cart__autor">
                                    ${obj.autor}
                                </p>
                                <dl>
                                    <dt>${obj.name}</dt>
                                    <dd>${obj.material}</dd>
                                </dl>
                                <p class="cart__price">
                                ${obj.price}
                                </p>
                                <button class="cart__button">
                                    В корзину
                                </button>
                                </div>`;

    section.append(card);
}

for(let el of buttons) {
    el.addEventListener('click', function() {
        let btnId = el.getAttribute('class').toLowerCase();
        let newData = data.filter(el => el.country.toLowerCase() == btnId)
        section.innerHTML = ''
        viewCards(newData)
    })
}

viewCards(data.filter((data) => {
    return data.country == 'france'
}));