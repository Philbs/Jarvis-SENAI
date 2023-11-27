const dakmodeButton = document.getElementById('dakmode-button');
let darkmodeEnabled = false;

dakmodeButton.addEventListener('click', () => {
    darkmodeEnabled = !darkmodeEnabled;
    document.body.classList.toggle('darkmode', darkmodeEnabled);
});

