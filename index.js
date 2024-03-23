import {data} from './data.js'
let carts = document.querySelector('.carts')
let france = document.querySelector('#radio-1')
let germany = document.querySelector('#radio-2')
let england = document.querySelector('#radio-3')
let buttons = [france, germany, england]


function viewCards(database){
    for(let el of database){
        createCard(el)
    }
}

function createCard(obj){

}

for(let el of buttons){
    el.addEventListener('click', function(){
        let btnId = el.getAttribute('country')
        let newData = data.filter(el => el.country == btnId)
        carts.innerHTML = ''
        viewCards(newData)
    })
}

viewCards(data)