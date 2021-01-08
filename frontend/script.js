var mainButton = document.querySelector('.main-button');
var textbar = document.querySelector('.textbar');

var donk = document.querySelector('.fuck');

mainButton.addEventListener('click', () => {
    console.log(`URL: ${textbar.value}`);
    sendURL(textbar.value);
});

function sendURL(URL) {
}