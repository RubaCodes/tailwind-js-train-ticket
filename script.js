//price per unit
const pricePerKm = 0.21;


//parametri sconto
const overAge = 'Elder';
const underAge = 'Minorenne';
const overAgeDiscount = 0.6;
const underAgeDiscount = 0.8;


//genera biglietto
const generateButton = document.getElementById('generate');
generateButton.addEventListener('click',
    function () {
        const userNameInput = document.getElementById('user-name-input').value;
        const userDistanceInput = Number(document.getElementById('user-distance-input').value);
        const userAgeInput = document.getElementById('user-age-input').value;

        //calcolo prezzo
        let price;
        if (userAgeInput === overAge) {
            price = userDistanceInput * pricePerKm * overAgeDiscount;
        } else if (userAgeInput === underAge) {
            price = userDistanceInput * pricePerKm * underAgeDiscount;
        } else {
            price = userDistanceInput * pricePerKm;
        }
        // inserimento valori nel document
        document.getElementById('user-name').innerHTML = userNameInput;
        document.getElementById('user-distance').innerHTML = userDistanceInput;
        document.getElementById('user-age').innerHTML = userAgeInput;
        document.getElementById('final-price').innerHTML = price.toFixed(2) + " $"
        //apparizione ticket
        const ticket = document.getElementById('ticket');
        ticket.className = 'flex my-20 rounded-lg overflow-hidden';
    }
)
//refresh biglietto
const refreshButton = document.getElementById('refresh');
refreshButton.addEventListener('click',
    function () {
        // flush user input
        document.getElementById('user-name-input').value ="";
        document.getElementById('user-distance-input').value = "";
        document.getElementById('user-age-input').selectedIndex = "0";
        //hide ticket
        const ticket = document.getElementById('ticket');
        ticket.className = 'hidden';
    }
)
