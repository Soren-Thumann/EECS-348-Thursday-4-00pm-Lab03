console.log("Script loaded successfully")


//Code for text color change
const redtextInput = document.getElementById('redtext');
const greentextInput = document.getElementById('greentext');
const bluetextInput = document.getElementById('bluetext');
const paragraph = document.getElementById('lorem');

function changeParagraphColor() {
    const r = parseInt(redtextInput.value) || 0;
    const g = parseInt(greentextInput.value) || 0;
    const b = parseInt(bluetextInput.value) || 0;

    const rgbColor = `rgb(${r}, ${g}, ${b})`;   //watch for ' vs `

    paragraph.style.color = rgbColor;

    console.log("Applying text color: ", rgbColor);
}


redtextInput.addEventListener('input', changeParagraphColor);
greentextInput.addEventListener('input', changeParagraphColor);
bluetextInput.addEventListener('input', changeParagraphColor);


changeParagraphColor();



//Code for border color change
const redborderInput = document.getElementById('redborder');
const greenborderInput = document.getElementById('greenborder');
const blueborderInput = document.getElementById('blueborder');

function changeborderColor () {
    const r = parseInt(redborderInput.value) || 0;
    const g = parseInt(greenborderInput.value) || 0;
    const b = parseInt(blueborderInput.value) || 0;

    const rgbColor = `rgb(${r}, ${g}, ${b})`;

    paragraph.style.borderColor = rgbColor;

    console.log("Applying border color: ", rgbColor);
}


redborderInput.addEventListener('input', changeborderColor);
greenborderInput.addEventListener('input', changeborderColor);
blueborderInput.addEventListener('input', changeborderColor);

changeborderColor();


//Code for border width change
const widthborderInput = document.getElementById('widthborder');


function changeborderWidth () {
    const r = parseInt(widthborderInput.value);
    
    paragraph.style.borderWidth = `${r}px`

    console.log("Applying border width: ", r)
}


widthborderInput.addEventListener('input', changeborderWidth);
