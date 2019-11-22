/*
--------------------------------------------
1.- Hacer una función que convierta de grados
    centígrados a Farenheit
---------------------------------------------
*/

function CtoF(c){
    return (c * 9/5) + 32;
}
console.log(CtoF(10));
/*
--------------------------------------------
2.- Leer un arreglo de enteros y sacar su
    media y promedio
---------------------------------------------
*/

function promedioAndMedia(list){
    let sum = 0;
    let numbers = list.length;
    //orden
    for(i=0;i<numbers-1; i++){
        for(j=i+1;j<numbers; j++){
            if(list[i]>list[j]){
                let temp = list[i];
                list[i]=list[j];
                list[j]=temp;
            }
        }
    }
    console.log('Lista ordenada');
    console.log(list);
    
    //media
    console.log('Media');
    if(list%2!=0){
        console.log(list[parseInt(numbers/2)]);
    }else{
        console.log(list[parseInt(numbers/2)-1]+list[parseInt(numbers/2)]/2)
    }

    console.log('Promedio');
    //Promedio
    for(i=0;i<list.length;i++){
        sum += list[i];
    }
    console.log(sum/numbers);
}

console.log(promedioAndMedia([2,4,56,65,32,11]));