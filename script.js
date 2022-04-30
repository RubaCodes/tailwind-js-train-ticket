//genera biglietto
const generateButton = document.getElementById('generate');
generateButton.addEventListener('click', 
    function(){
        let userNameInput = document.getElementById('user-name-input').value;
        let userDistanceInput = Number(document.getElementById('user-distance-input').value);
        let userAgeInput = document.getElementById('user-age-input').value;
        document.getElementById('user-name').innerHTML = userNameInput;
        document.getElementById('user-distance').innerHTML = userDistanceInput;
        document.getElementById('user-age').innerHTML = userAgeInput;
    }
)
//refresh biglietto
const refreshButton = document.getElementById('refresh');
refreshButton.addEventListener('click', 
    function(){
        document.getElementById('user-name').innerHTML = '';
        document.getElementById('user-distance').innerHTML = '';
        document.getElementById('user-age').innerHTML = '';
    }
)