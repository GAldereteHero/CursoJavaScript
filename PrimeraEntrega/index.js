let opcion = parseInt( prompt("¿Desea utilizar el generador de sucesión Fibonacci? (Si: Ingrese 1  ; No: Ingrese 0)") )

while (opcion){
    
    let numElementos = parseInt(prompt("¿Cuantos elementos de la sucesión desea calcular?"));
    let elem1 = 0;
    let elem2 = 0;
    let elemActual = 0;

    for(let i = 1; i <= numElementos; i++){
        
        if (i === 1){
            let suces = `Elemento N°${i}: ${i-1}`;
            alert(suces);
        }
        else if( i === 2){
            elem1 = i-1;
            elemActual = elem1 +  elem2;
            let suces = `Elemento N° ${i}: ${elemActual}`;
            alert(suces);
        }
        else{
            elemActual = elem1 + elem2;
            elem2 = elem1;
            elem1 = elemActual;
            let suces = `Elemento N° ${i}: ${elemActual}`;
            alert(suces);
        }

    }
    
    let continuo = parseInt( prompt("¿Desea CERRAR el generador Fibonacci? (Si: Ingrese 1  ; No: Ingrese 0)") )
    if(continuo){ opcion = 0;}

}

alert("Simulador cerrado, recargue la página para volver a utilizarlo")
