//hook ai valori di input
let userNameInput = document.getElementById('user-name-input').value;
let userDistanceInput = Number(document.getElementById('user-distance-input').value);
let userAgeInput = document.getElementById('user-age-input').value;

//price per unit
const pricePerKm = 0.21;


//parametri sconto
const overAge = 65;
const underAge = 18;
const overAgeDiscount = 0.6;
const underAgeDiscount = 0.8;


//genera biglietto
const generateButton = document.getElementById('generate');
generateButton.addEventListener('click', 
    function(){
        // inserimento valori statici
        document.getElementById('user-name').innerHTML = userNameInput;
        document.getElementById('user-distance').innerHTML = userDistanceInput;
        document.getElementById('user-age').innerHTML = userAgeInput;
        //calcolo prezzo
        let price;
        if (userAgeInput >= overAge) {
            price = userDistanceInput * pricePerKm * overAgeDiscount;
        } else if (userAgeInput < underAge) {
            price = userDistanceInput * pricePerKm * underAgeDiscount;
        } else {
            price = userDistanceInput * pricePerKm;
        }
        //set del prezzo sul document
        document.getElementById('final-price').innerHTML = price.toFixed(2) + " $"
        //apparizione ticket
        const ticket = document.getElementById('ticket');
        ticket.className = 'flex my-20 rounded-lg overflow-hidden';
    }
)
//refresh biglietto
const refreshButton = document.getElementById('refresh');
refreshButton.addEventListener('click', 
    function(){
        document.getElementById('user-name').innerHTML = '';
        document.getElementById('user-distance').innerHTML = '';
        document.getElementById('user-age').innerHTML = '';
        const ticket = document.getElementById('ticket');
        ticket.className = 'hidden';
    }
)
