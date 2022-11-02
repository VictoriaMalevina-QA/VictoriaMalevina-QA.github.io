const button = document.getElementById('btn');
button.addEventListener('mouseover', function () {
    button.style.left = `${Math.ceil(Math.random() * 60)}%`;
    button.style.top = `${Math.ceil(Math.random() * 60)}%`;
    var range = 20;
});
button.addEventListener('click', function () {
    alert('Virtual hugs! ٩(｡•́‿•̀｡)۶')
})
