const body = document.getElementsByTagName('body')[0];
const toggler = document.getElementById('toggler');
const button = document.getElementById('button');
const p = document.getElementsByTagName('p')[0];

// let toDark = true;
// toggler.addEventListener('click', () => {
//     if (toDark) {
//         toggler.classList.add('toggled');
//         body.classList.add('toggled-body');
//         button.classList.add('toggled-button');
//         p.classList.add('toggled-p');
//         toDark = false;
//     }
//     else {
//         toggler.classList.remove('toggled');
//         body.classList.remove('toggled-body');
//         button.classList.remove('toggled-button');
//         p.classList.remove('toggled-p');
//         toDark = true;
//     }
// });

toggler.addEventListener('click', () => {
    toggler.classList.toggle('toggled');
    body.classList.toggle('toggled-body');
    button.classList.toggle('toggled-button');
    p.classList.toggle('toggled-p');
});