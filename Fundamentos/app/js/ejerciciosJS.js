function ejercicio1(max,min){
    
    let res=parseInt(Math.random()*(min-max)+max);
    return res;
}

function ejercicio2(max,min){
    let num=parseInt(Math.random()*(min-max)+max);
    let a = prompt("Introduce un número:" ,0)
   
    for(i=0;i<9;i++){
    a = prompt("Introduce un número:" ,0)  
    if(a != num){
        switch(a){
            case (a<num):
                prompt("El número es mayor")
                case (a>num):
                prompt("El número es menor")
        }    
        
    }else{
         alert("!HAS ACERTADO!, EL NUMERO CORRECTO ES: "+num)
         return console.log("!HAS ACERTADO!, EL NUMERO CORRECTO ES: "+num)
        }
         
    }
}   

function ejercicio3(b){
    let a = 2;
    let array = [];
    for(i = a; i<b ;i++){
        if(Primos(i)){
        array.push(i)
    }
    return array;
    
}
}
function Primos(num){
    if (num == 0|| num==1) return false;
    for(i = 2; i<num;i++){
        if(num%i==0) return false;   
    }
    return true;
}
function ejercicio6(){
let cadena = prompt("Introduce una cadena:" ,0)
let cad = cadena.split(" ").join("");
let dac = "";
for(i = cadena.length-1; i >= 0; i--){
    dac += cadena.charAt(i);
}
if(cad.toUpperCase == dac.toUpperCase){
    return console.log("Es Palindromo")
}else{
    return console.log("No es Palindromo")
}
}