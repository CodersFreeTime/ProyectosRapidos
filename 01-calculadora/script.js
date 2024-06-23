const pantalla = document.getElementById('pantalla');

function verEnPantalla(input){
    pantalla.value += input;
}
function limpiarPantalla(){
    pantalla.value = "";
}
function calcular(){
    try{
        pantalla.value = eval(pantalla.value);
    }catch(error){
        pantalla.value = "Error";
    }
}