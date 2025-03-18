// TODO: this file! :)

document.addEventListener("DOMContentLoaded", () => {
    
    const numberInput = document.getElementById("number");
    const addNumberButton = document.querySelector("form button");
    const numberBankOutput = document.querySelector("#numberBank output");
    const sortOneButton = document.getElementById("sortOne");
    const sortAllButton = document.getElementById("sortAll");
    const oddsOutput = document.querySelector("#odds output");
    const evensOutput = document.querySelector("#evens output");
  
  
    const state = {
      numberBank: [], 
      odds: [], 
      evens: [] 
    };
  
    
    function updateDisplay() {
      numberBankOutput.textContent = state.numberBank.join(", "); 
      oddsOutput.textContent = state.odds.join(", "); 
      evensOutput.textContent = state.evens.join(", "); 
    }
  
  
    addNumberButton.addEventListener("click", (event) => {
      event.preventDefault(); 
      const numberValue = parseInt(numberInput.value, 10); 
      
      if (!isNaN(numberValue)) { 
        state.numberBank.push(numberValue); 
        updateDisplay(); 
      }
      numberInput.value = ""; 
      });
    
    sortOneButton.addEventListener("click", () => {
      if (state.numberBank.length > 0) { 
        const number = state.numberBank.shift(); 
        
        if (number % 2 === 0) {
          state.evens.push(number); 
        } else {
          state.odds.push(number); 
        }
        updateDisplay(); 
      }
    });
  
    
    sortAllButton.addEventListener("click", () => {
      state.numberBank.sort((a, b) => a - b); ng
      const sortedNumbers = [...state.numberBank]; 
      state.numberBank = []; 
      
      sortedNumbers.forEach((number) => {
        if (number % 2 === 0) {
          state.evens.push(number); 
        } else {
          state.odds.push(number); 
        }
      });
      updateDisplay(); 
    });
});
  