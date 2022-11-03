function random(min, max) {
    const rand = min + Math.random() * (max - min + 1);
    return Math.floor(rand);
    var range = 1;
}

// const button = document.getElementById('btn');
// button.addEventListener('mouseenter', function () {
//     button.style.left = `${Math.ceil(Math.random() * 20)}%`;
//     button.style.top = `${Math.ceil(Math.random() * 20)}%`;
// });

const button = document.querySelector('#btn');
// повесим обработчик событий
button.addEventListener('mouseenter', () => {
    button.style.left = `max(calc(${random(0, 100)}% - ${button.clientWidth}px), 0px)`;
    button.style.top = `max(calc(${random(0, 90)}% - ${button.clientHeight}px), 0px)`;
});


button.addEventListener('click', function () {
    alert('Virtual hugs! ٩(｡•́‿•̀｡)۶')
})
