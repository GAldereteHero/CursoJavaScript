/* Variables globales */

let pedir = prompt("Deseas realizar un pedido?  Ingrese [ Y / N ]").toUpperCase();

let burguer = "";
let precioBurguer = 0;

let ingre1 = "";
let precioIngre1 = 0;

let ingre2 = "";
let precioIngre2 = 0;

let aderezo = "";
let precioAdere = 0;

let precioTotal = 0;
let precioFinal = 0;

let codigoDescuento = "";

/* Funciones    */

function CheckBurguer(){
    if( burguer === 'res' ){
        precioBurguer = 100;
    } 
    else if( burguer === 'cerdo' ){
        precioBurguer = 200;
    } 
    else if( burguer === 'veggie' ){
        precioBurguer = 300;
    } 
    else{alert("Ingrese una hamburguesa valida");return true;}

    return false;
}

function CheckIngrediente1(){
    if( ingre1 === 'tomate' ){
        precioIngre1 = 10;
    } 
    else if( ingre1 === 'lechuga' ){
        precioIngre1 = 20;
    } 
    else if( ingre1 === 'cebolla' ){
        precioIngre1 = 30;
    } 
    else{alert("Ingrese un ingrediente valido");return true;}

    return false;
}

function CheckIngrediente2(){
    if( ingre2 === 'jamon' ){
        precioIngre2 = 10;
    } 
    else if( ingre2 === 'queso' ){
        precioIngre2 = 20;
    } 
    else if( ingre2 === 'huevo' ){
        precioIngre2 = 30;
    } 
    else{alert("Ingrese un ingrediente valido");return true;}

    return false;
}

function CheckAderezo(){
    if( aderezo === 'mayonesa' ){
        precioAdere = 10;
    } 
    else if( aderezo === 'mostaza' ){
        precioAdere = 20;
    } 
    else if( aderezo === 'barbacoa' ){
        precioAdere = 30;
    } 
    else{alert("Ingrese un aderezo valido");return true;}

    return false;
}


const title = (word) => word[0].toUpperCase() + word.substring(1).toLowerCase();
const SubTotal = (a,b,c,d) => a+b+c+d;

function AplicarDescuento() {

    switch ( codigoDescuento ) {
        case 'bur10':
            precioFinal = 0.9 * SubTotal(precioBurguer,precioIngre1,precioIngre2,precioAdere);
            return false;
        case 'bur20':
            precioFinal = 0.8 * SubTotal(precioBurguer,precioIngre1,precioIngre2,precioAdere);
            return false;
    
        default:
            alert("Ingrese un codigo valido");
            break;
    }
    
    return true;
}

function ImprimirPedido(){
    let precio = SubTotal(precioBurguer,precioIngre1,precioIngre2,precioAdere);
    let miBurguer = `Tipo de hamburguesa: ${title(burguer)} \nPrimer Ingrediente: ${title(ingre1)} \nSegundo ingrediente: ${title(ingre2)} \nAderezo: ${title(aderezo)}`;
    let separador = '\n----------------------------------------';
    let precioSinDes = `\nPrecio: $${precio}`;
    let descuento = `\nDescuento aplicado: $${precio - precioFinal}`;
    let precioConDes = `\nPrecio final: $${precioFinal}`;
    let miPedido = miBurguer + separador + precioSinDes + descuento + separador + precioConDes;

    alert(miPedido);

    return true;
}

while(pedir === 'Y'){
    
    do {
        burguer = prompt("Seleccione el tipo de hamburguesa:  Res  Cerdo  Veggie").toLowerCase();
    } while (CheckBurguer());
    do {
        ingre1 = prompt("Seleccione su primer ingrediente:  Tomate  Lechuga  Cebolla").toLowerCase();
    } while (CheckIngrediente1());
    do {
        ingre2 = prompt("Seleccione su segundo ingrediente:  Jamon  Queso  Huevo").toLowerCase();
    } while (CheckIngrediente2());
    do {
        aderezo = prompt("Seleccione su aderezo:  Mayonesa  Mostaza  Barbacoa").toLowerCase();
    } while (CheckAderezo());
    do {
        codigoDescuento = prompt("Ingrese su codigo de descuento:  BUR10  BUR20" ).toLowerCase();
    } while (AplicarDescuento());

    ImprimirPedido();

    pedir = prompt("Deseas realizar otro pedido?  Ingrese [ Y / N ]").toUpperCase();
}

alert("Para realizar un pedido recargue la pagina");

