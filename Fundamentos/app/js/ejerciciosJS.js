function ejercicio1(max,min){
    
    let res=parseInt(Math.random()*(min-max)+max);
    return res;
}

function ejercicio2(max,min){
    let num=parseInt(Math.random()*(min-max)+max);
    let a = prompt("Introduce un número:" ,0)
   
    for(i=0;i<9;i++){
    if(a == num){
        console.log("!HAS ACERTADO!, EL NUMERO CORRECTO ES: "+num)
    }else{
    a = prompt("Introduce un número:" ,0)
    }
}   
}

