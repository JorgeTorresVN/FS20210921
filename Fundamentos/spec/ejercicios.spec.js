// 'use strict' 
fdescribe('Pruebas de los ejercicios', function(){
    describe('Ejercicio 2', function(){
        it('Numero', function(){
            let min = 0
            let max = 100
            let num=parseInt(Math.random()*(min-max)+max);
            alert("El número aleatorio es:"+num);
        })
        it("Adivina el número",function(){
            let aleatorio = Numero(num);
            for( i= 0;val <10;val++){
                var numero= prompt("Inserta un numero del 1 al 100",0);
                if(num > numero ){  
                    alert("Fallaste!El numero es menor que " + numero);
                }
                if(num < numero){
                    alert("Fallaste!El numero es mayor que " + numero);
                }
                if(num == numero){
                    alert("Acertaste! el numero correcto es el" + num);
                  
                }
            }
            window.alert("Lo siento, el número elegido correcto es el: " + numero)

        }) 
        })
    })
