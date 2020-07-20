// taking the elements i want to work on

function typeWrite(elemento) {
    const textArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textArray.forEach((letra, i) => {
        setTimeout( () => {
            elemento.innerHTML += letra
        }, 90 * i)
    })
}

const title = document.querySelector('h2');

typeWrite(title);
