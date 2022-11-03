const random = (min, max) => {
    const rand = min + Math.random() * (max - min + 1);
    return Math.floor(rand);
    var range = 10;
}

const button = document.getElementById('btn');
button.addEventListener('mouseenter', function () {
    button.style.left = `${Math.ceil(Math.random() * 5)}%`;
    button.style.top = `${Math.ceil(Math.random() * 5)}%`;
});
button.addEventListener('click', function () {
    alert('Virtual hugs! ٩(｡•́‿•̀｡)۶')
})
