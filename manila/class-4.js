/*
Ejercicio Javascript Vanilla
1. Crea una función llamada evaluateNumber() que reciba como parámetro un número para evaluar si un número es divisible entre 5 y 11 o no lo es.
En caso de ser divisible entre 5 y 11, retornar true
En caso de no ser divisible entre 5 y 11, retornar false
2. Crea una función llamada palindrome() que reciba como parametro una oración,
si la oración es un palíndromo la función deberá devolver true en otro caso, devolver false
*/
function evaluateNumber(number){
    if(number % 5==0 && number % 11 ==0){
        return true;
    }
    return false;
}

console.log(evaluateNumber('Hola'));
console.log(evaluateNumber(11));
console.log(evaluateNumber(22));
console.log(evaluateNumber(55));



function palindrome(sentence){
    let clearSentence = sentence.replace(/ /g,'').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");
    for(let i=0, j=clearSentence.length-1;i<clearSentence.length/2; i++,j--){
        if(clearSentence.charAt(i)!=clearSentence.charAt(j)){
            return false;
        }
    }
    return true;
}

function palindrome2(sentence){
    let clearSentence = sentence.replace(/ /g,'').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");
    
    //diferent for, more simple
    for (let i in clearSentence){
        let j = clearSentence.length - i-1;
        if(clearSentence.charAt(i)!=clearSentence.charAt(j)){
            return false;
        }
    }
    return true;
}

console.log(palindrome('Hola'));
console.log(palindrome('Amma'));
console.log(palindrome('A mama Roma le aviva el amor a papa y a papa roma le aviva el amor a mama'));
console.log(palindrome('Alí tomó tila'));
console.log('Palindrome 2'+palindrome2('A mama Roma le aviva el amor a papa y a papa roma le aviva el amor a mama'))


