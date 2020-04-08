alert("Hello World");
let username = prompt("Enter username:");
if(username == "Alice" || username == "Bob"){
    alert("Hello " + username);
};

let number = prompt("Enter a number");
let choice = prompt("+ or *: ")
let result = 0;
let m = 1;
for (let i = 1; i <= number; i++) {
    if(choice == "+"){
        if(i%3 == 0 || i%5 == 0){
            result += i;
        }
    } else if(choice == "*"){
        if(i%3 == 0 || i%5 == 0){
            m = m*i;
            result = m;
        }
    } else{
        break;
    }
    
};
alert("Result is: " + result);

let table = 'x ';
for (let i = 0; i < 13; i++) {
    for (let j = 0; j < 13; j++) {
        if(i == 0 && j > 0){
          table += '[' + j + ']';
        } else if(j == 0 && i>0){
          table += '[' + i + '] ';
        } else if(i>0 && j>0){
        table += (i*j) + ' ';
        }
    }
    table += '<br>';
}
$('#xtable').append(table);

for (let i = 0; i < 100; i++) {
    let prime = true;
    for (let j = 2; j <= 100; j++) {
        if(i%j == 0 && i!=j){
            prime = false;
        }
    }
    if(prime == true){
        $('#primetable').append(i + " ")
    }
}
