const random = (min, max) => {
    const rand = min + Math.random() * (max - min + 1);
    return Math.floor(rand);
}

const button = document.getElementById('btn');
button.addEventListener('mouseover', function () {
    button.style.left = `${random(0, 90)}%`;
    button.style.top = `${random(0, 90)}%`;
});
button.addEventListener('click', function () {
    alert('Virtual hugs! ٩(｡•́‿•̀｡)۶')
})
