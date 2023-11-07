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
            return;
        }

        do {
            newNumber = Math.round(Math.random() * 100);
        } while (!game.isNumberSelectable(newNumber))
        
        game.formatCells(newNumber);
    },
    isNumberSelectable: function(num){
        return num <= 89 
            && num > 0
            && !game.selectedNumbers.includes(num);
    },
    formatCells: function(newNumber) {
        game.selectedNumbers.push(newNumber);
        let lastNumber = document.querySelector('.last');
        if (lastNumber) {
            lastNumber.classList.remove('last');
        }
    
        document.querySelectorAll('.cell').forEach(function (cell) {
            if (cell.textContent === newNumber.toString()) {
                cell.classList.add('selected', 'last');
            }
        });
    }
}

document.addEventListener('DOMContentLoaded', game.init);
