alert("Hello World"); //1

//user
let user = $('#user');
let userbtn = $('#userbtn');
userbtn.click((name)=>{
    name = user.val();
    if(name == "Alice" || name == "Bob"){
        alert("Hello " + name);
    };
})

//number + or *
let number = $('#num'); 
let choice = $('#sign');
let numbtn = $('#numbtn');
numbtn.click(()=>{
    let result = 0;
    let m = 1;
    for (let i = 1; i <= number.val(); i++) {
        if(choice.val() == "+"){
            if(i%3 == 0 || i%5 == 0){
                result += i;
            }
        } else if(choice.val() == "*"){
            if(i%3 == 0 || i%5 == 0){
                m = m*i;
                result = m;
            }
        } else{
            break;
        }
    
    };
    $('#numbox').text("Result is: " + result );
});

//multiplication table
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

//prime numbers
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

//guessing game
let guess = $('#guess');
let guessbtn = $('#guessbtn');
let guessnum = parseInt((Math.random()*100)+1);
let tries = 0;
guessbtn.click(()=>{
    if(guess.val() == guessnum){
        $('#guessbox').append("You got it in: " + tries + " tries!")
    } else if( guess.val() > guessnum){
        $('#guessbox').append("Too high ");
        tries++;
    } else {
        $('#guessbox').append("Too low ");
        tries++;
    }
});

//leap years
let currentYear = 2020;
for(let i = 0; i < 20; i++){
    currentYear = currentYear + 4;
    $('#leapyear').append(currentYear + " ");
};

//largest list element
let list = ["food", "drinks", "water", "the birds and the bees", "rain", "dog", "x"];
let largest = '';
for (let i = 0; i < list.length; i++) {
    if(list[i].length > largest.length){
        largest = list[i];
    };
};
$('#largestElement').prepend("List: " + list.join(", ") + "<br>");
$('#largest').click(()=>{
    $('#largestElement').append("Largest element in array: " + largest + "<br>");
});

//reverse list
$('#reverse').click(()=>{
    $('#largestElement').append("Reverse list: " + list.reverse().join(", ") + "<br>");
});

//checks in list
$('#listbtn').click(()=>{
    if(list.includes($('#checklist').val())){
        $('#largestElement').append($('#checklist').val() + " is in the list.<br>");
    } else {
        $('#largestElement').append($('#checklist').val() + " is NOT in the list.<br>");
    }
});

//odd elements
$('#oddelements').click(()=>{
    let odd = list.filter(function(a){
        return list.indexOf(a)%2 != 0;
    });
    $('#largestElement').append("Every odd elements: " + odd.join(", ") + "<br>");
});

//total elements
$('#totalelements').click(()=>{
    $('#largestElement').append("Total elements in list: " + list.length + "<br>");
});

//palindrome
$('#pdromebtn').click(()=>{
    let s = $('#pdrome').val().toLowerCase();
    let sr = s.split('').reverse().join('');
    if(s == sr){
        $('#pdromebox').append(s + " is a palindrome.<br>");
    } else {
        $('#pdromebox').append(s + " is NOT a palindrome.<br>");
    }
});