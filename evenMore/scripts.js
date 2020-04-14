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
let guessnum = Math.floor((Math.random()*100)+1);
let tries = 0;
guessbtn.click(()=>{
    if(guess.val() == guessnum){
        $('#guessbox').append("You got it in: " + tries + " tries! New Game started!<br>");
        guessnum = Math.floor((Math.random()*100)+1);
        tries = 0;
    } else if( guess.val() > guessnum){
        $('#guessbox').append("Too high ");
        guess.focus();
        tries++;
    } else {
        $('#guessbox').append("Too low ");
        guess.focus();
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

//for loop add numbers
let addarr = [1,2,3,4,5,6,7];
$('#forloopbtn').click(()=>{
    let result = 0;
    for (let i = 0; i < addarr.length; i++) {
        result += addarr[i];
    };

    $('#addbox').append("Sum is: " + result + "<br>");
});
//while loop add
$('#whilebtn').click(()=>{
    let i = 0;
    let result = 0;
    while(i < addarr.length){
        result += addarr[i];
        i++;
    };

    $('#addbox').append("Sum is: " + result + "<br>");
});
//recursion add
$('#recursionbtn').click(()=>{
    let recursionFunction = function(arr){
        if(arr.length == 1){
            return arr[0];
        } else{
            return arr.shift() + recursionFunction(arr);
        };
    };

    $('#addbox').append("Sum is: " + recursionFunction(addarr) + "<br>");
});

//on all function
function on_all(arr){
    arr.forEach((element)=>{
        let num = Math.sqrt(element);
        if(Math.floor(num) == num && num != 0){
            $('#psquarebox').append(element + " ");
        };
    });
};
let allarr = Array.from(new Array(200), (x, index)=>index+1);
on_all(allarr);

//concat lists
let list1 = ['a','b','c','d','e'];
let list2 = [1,2,3,4,5];
function concatFunction(l1, l2){
    $('#concatbox').append('Concat result: ' + l1.concat(l2) + "<br>");
};
concatFunction(list1, list2);
//concat alternate elements
function concatAlternate(l1, l2){
    let combinedarr = [];
    for (let i = 0; i < l1.length; i++) {
        combinedarr.push(l1[i]);
        combinedarr.push(l2[i]);
    };
    $('#concatbox').append('Alternating elements: ' + combinedarr + "<br>");
};
concatAlternate(list1, list2);
//concat sort
function concatSort(l1, l2){
    $('#concatbox').append('Concat sort result: ' + l1.concat(l2).sort() + "<br>");
};
concatSort(list1, list2);
//rotate lists
function rotateArr(list, num){
    for (let i = 0; i < num; i++) {
        let temp = list.shift();
        list.push(temp); 
    };
    $('#concatbox').append('Rotate elements: ' + list + "<br>");
};
rotateArr(list2, 2);

//Fibonacci numbers
let fibArr = [1,1];
function fibonacci(num){
    for (let i = 2; i < num; i++) {
        fibArr[i] = fibArr[i-1] + fibArr[i-2];
    };
    $('#fibonaccibox').append(fibArr.join(', '));
};
fibonacci(100);

//number to array
$('#numarraybtn').click(()=>{
    let numarray = $('#numarrayinput').val();
    $('#numarraybox').append(numarray.split('').join(', ') + "<br>");
})

//pig latin
$('#piglatinbtn').click(()=>{
    let sentence = $('#piglatininput').val();
    sentence = sentence.split(' ');
    let result = '';
    sentence.forEach((element)=>{
        result += element.slice(1) + element.slice(0,1) + "ay "
    })
    $('#piglatinbox').append(result + "<br>");
});