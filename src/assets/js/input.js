// document.addEventListener('DOMContentLoaded', () =>{
//     const form = document.getElementById('form');

//     form.addEventListener('submit', (e) => {
//         e.preventDefault();

//         const inputs = form.querySelectorAll('input');
//         inputs.forEach(input => {
//             if (!input.validity.valid) {
//                 const feedback = input.nextElementSibling;
//                 feedback.classList.add('show'); 
//             } else {
//                 const feedback = input.nextElementSibling;
//                 feedback.classList.remove('show'); 
//             }
//         });
//     });
// });