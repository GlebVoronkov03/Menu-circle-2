let toggle = document.querySelector('.toggle');
let navigation = document.querySelector('.navigation');
toggle.onclick = function(){
    navigation.classList.toggle('active')
    toggle.classList.toggle('active')
}

const list = document.querySelectorAll('li');
function activeLink(){
    list.forEach((item) =>
    item.classList.remove('active'))
    this.classList.add('active')
}
list.forEach((item) =>
item.addEventListener('click', activeLink))