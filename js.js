const random = (min, max) => {
    const rand = min + Math.random() * (max - min + 1);
    return Math.floor(rand);
}

const button = document.getElementById('btn');
button.addEventListener('mouseenter', function () {
    button.style.left = `${Math.ceil(Math.random() * 60)}%`;
    button.style.top = `${Math.ceil(Math.random() * 60)}%`;
});
button.addEventListener('click', function () {
    alert('Virtual hugs! ٩(｡•́‿•̀｡)۶')
})
