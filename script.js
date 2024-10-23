const body = document.getElementsByTagName('body')[0];
const toggler = document.getElementById('toggler');
const button = document.getElementById('button');
const p = document.getElementsByTagName('p')[0];

let chk = true;

toggler.addEventListener('click', () => {
    toggler.classList.toggle('toggled');
    body.classList.toggle('toggled-body');
    button.classList.toggle('toggled-button');
    p.classList.toggle('toggled-p');
})