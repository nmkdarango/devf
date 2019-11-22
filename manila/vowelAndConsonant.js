
/*
Crea una función llamada evaluateLetter() que reciba como parámetro cualquier letra del alfabeto y verifique si es vocal o consonante.
En caso de ser vocal, devolver "Vocal"
En caso de ser consonante, devolver "Consonante"

*/

function evaluateLetter(letter){
    let vowel = 'aeiou';
    let consonants = 'bcdfghjklmnpqrstvwxz';

    if(vowel.indexOf(letter.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, ""))!=-1){
        console.log('\''+letter+'\''+' es una vocal.');
    }else{
        if(consonants.toLowerCase().indexOf(letter.normalize('NFD').replace(/[\u0300-\u036f]/g, ""))!=-1){
            console.log('\''+letter+'\''+' es una consonante.');
        }else{
            console.log('\''+letter+'\''+' no es una consonante ni tampoco una vocal.');
        }
    }
}
evaluateLetter('a');
evaluateLetter('f');
evaluateLetter('asasd');
evaluateLetter('?');
evaluateLetter('Ñ');
evaluateLetter('À');
evaluateLetter('Û');

