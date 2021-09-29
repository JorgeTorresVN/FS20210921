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
    let cont=true;
    for (let index = 2; index < num; index++) {
        if(num % index==0){
            cont=false;
        }
        
    }
    
    return cont;
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
function ejercicio5(dni) {
    let num
    let letr
    let letras
    let expresionDni
   
    expresionDni = /^\d{8}[a-zA-Z]$/;
   
    if(expresionDni.test (dni) == true){
       num = dni.substr(0,dni.length-1);
       letr = dni.substr(dni.length-1,1);
       num = num % 23;
       letras='TRWAGMYFPDXBNJZSQVHLCKET';
       letras=letras.substring(num,num+1);
      if (letras!=letr.toUpperCase()) {
         alert('Dni erroneo, la letra del NIF no se corresponde');
       }else{
         alert('Dni correcto');
       }
    }else{
       alert('Dni erroneo, formato no válido');
     }
  }
           
function ejercicio4(num){
    let numerosPrimos=[];
    let cont=0;
    for (let index = 0; index < num; index++) {
    let marca=false;
    while (marca==false) {
    if(cont!=0 && cont!=1){
    if(Primos(cont)){
    numerosPrimos.push(cont);
     marca=true;
                        }
                }
                    cont++;
                }
                
            }
        console.log(numerosPrimos)
        return numerosPrimos;
        }
    