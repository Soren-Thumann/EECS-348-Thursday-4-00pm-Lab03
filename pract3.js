console.log("Script loaded successfully")


//Constant declaration
//IO = In and Out elements
//Input = password boxes
const firstpassInput = document.getElementById('firstpass');
const succMessIO = document.getElementById('succMess');
const verInstIO = document.getElementById('verInst');
const secondpassInput = document.getElementById('secondpass');
const veriMessIO = document.getElementById('veriMess');

//checks length of first password
function checkpasswordLength() {
    const p = firstpassInput.value;
    
    if (p.length < 8) {
        alert("Initial password must be more than 8 characters.")
        succMessIO.style.display = 'none';
        verInstIO.style.display = 'none';
        veriMessIO.style.display = 'none';
        secondpassInput.style.display = 'none';
        secondpassInput.value = '';
    }   else {
        succMessIO.style.display = 'block';
        verInstIO.style.display = 'block';
        secondpassInput.style.display = 'block';
        veriMessIO.style.display = 'none'
        if (secondpassInput.value != "") {
            comparePasswords()
        }
    }
    
    
}


firstpassInput.addEventListener('change', checkpasswordLength);


//checks that the passwords are the same
function comparePasswords() {
    
    
    if (secondpassInput.value != firstpassInput.value) {
        alert("Passwords do not match.")
    }   else {
        veriMessIO.style.display = 'block';
    }
    
    
}


secondpassInput.addEventListener('change', comparePasswords);

