const openModalButtons = document.querySelectorAll('[data-modal-target]');
const closeModalButtons = document.querySelectorAll('[data-close-button]');
const overlay = document.getElementById('overlay');

openModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = document.querySelector(button.dataset.modalTarget);
        openModal(modal);
    })
});
closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.modal')
        closeModal(modal);
    })
});

function openModal(modal){
    if (modal == null) return
    modal.classList.add('active');
    overlay.classList.add('active');
}

function closeModal(modal){
    if (modal == null) return
    modal.classList.remove('active')
    overlay.classList.remove('active')
}




function animateValue(obj, start, end, duration){
    let startTimestamp = null;
    const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    obj.innerHTML = Math.floor(progress * (end - start) + start);
    if (progress < 1) {
    window.requestAnimationFrame(step);
  }
};
window.requestAnimationFrame(step);
}

const countOfCustomers = document.getElementById('count-customers');
const countOfProjects = document.getElementById('count-projects');
const countOfAreas = document.getElementById('count-areas');
const countOfYears = document.getElementById('count-years');

animateValue(countOfCustomers, 0, 68, 3000);
animateValue(countOfProjects, 0, 137, 4000);
animateValue(countOfAreas, 0, 12, 2000);
animateValue(countOfYears, 0, 4, 1000);

const questions = document.getElementsByClassName('QA');
Array.prototype.forEach.call(questions, (elem, index) => {
    elem.addEventListener('click', () => {
        elem.classList.value = (elem.classList.value === 'QA') ? 'QA active' : 'QA';
        for(let i = 0; i < questions.length; i++){
            if(i !== index){
                questions[i].classList.value = 'QA';
            }
        }
    });
});