//hook dei lavori dei form
let userName = document.getElementById('user-name').value;
let distance = Number(document.getElementById('user-distance').value);
let userAge = document.getElementById('user-age').value;

console.log(userName);
console.log(distance);
console.log(userAge);

//event listenerd on clicks
//genera biglietto
const generateButton = document.getElementById('generate');
generateButton.addEventListener('click', 
    function(){
        alert('generato');
    }
)
//refresh biglietto
const refreshButton = document.getElementById('refresh');
refreshButton.addEventListener('click', 
    function(){
        alert('refreshato');
    }
)