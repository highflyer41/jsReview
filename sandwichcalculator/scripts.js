var slicesB = prompt("How many slices of bread do you have:");
var slicesC = prompt("How many pieces of cheese:");

function sandwichCalculator (slicesOfBread, slicesOfCheese) {
    alert("You can make " + Math.min(slicesOfBread/2, slicesOfCheese) + " sandwiches");
};

sandwichCalculator(slicesB, slicesC);