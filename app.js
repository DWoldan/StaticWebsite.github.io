const burger = document.querySelector('.burger').addEventListener('click', () => {
    const ul = document.querySelector('ul');
    ul.classList.toggle('active');
})

const li = document.querySelectorAll('li');
const ul = document.querySelector('ul');

ul.addEventListener('click', () => {
    li.forEach(liElement => {
        ul.classList.remove('active')
    })
})