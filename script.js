let game = {
    resultEl: document.getElementById('result'),
    btnEl: document.getElementById('button'),
    selectedNumbers: [],
    init: function(){
        game.btnEl.addEventListener('click', game.generateNumber);
        console.log('init');
    },
    generateNumber: function(e){
        if (game.selectedNumbers.length >= 89) {
            console.log(game.selectedNumbers)
            return;
        }

        do {
            newNumber = Math.round(Math.random() * 100);
        } while (!game.isNumberSelectable(newNumber))
        
        game.selectedNumbers.push(newNumber);
        let lastNumber = document.querySelector('.last');
        if (lastNumber) {
            lastNumber.classList.remove('last');
        }
        
        document.querySelectorAll('.cell').forEach(function(cell){
            console.log(newNumber);
            if (cell.textContent === newNumber.toString()){
                cell.classList.add('selected', 'last');
            }
        })
    },
    isNumberSelectable: function(num){
        return num <= 89 
            && num > 0
            && !game.selectedNumbers.includes(num);
    }
}

document.addEventListener('DOMContentLoaded', game.init);