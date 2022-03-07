function sumar(){
    //DEFINIR VARIABLES
    var n1,n2,suma;
    //LEER VARIABLES
    n1 = document.getElementById("txtNum1").value;
    n2 = document.getElementById("txtNum2").value;
    suma = parseFloat(n1) + parseFloat(n2);
    // ESCRIBIR SUMA
    document.getElementById("lblResultado").innerHTML = "La suma es: " + suma;
}
function restar(){
    //DEFINIR VARIABLES
    var n1,n2,resta;
    //LEER VARIABLES
    n1 = document.getElementById("txtNum1").value;
    n2 = document.getElementById("txtNum2").value;
    resta = parseFloat(n1) - parseFloat(n2);
    // ESCRIBIR SUMA
    document.getElementById("lblResultado").innerHTML = "La resta es: " + resta;
}

function dividir(){
    //DEFINIR VARIABLES
    var n1,n2,resta;
    //LEER VARIABLES
    if(n2!=0){
        n1 = document.getElementById("txtNum1").value;
        n2 = document.getElementById("txtNum2").value;
        div = parseFloat(n1) / parseFloat(n2);
    // ESCRIBIR DIVISION
        document.getElementById("lblResultado").innerHTML = "La la division es: " + div;
    }else{
        alert("El divisor no puede ser 0")
        document.getElementById("lblResultado").innerHTML = "Divisor diferente de 0";
    }
}

function factorial() {
    var n1;
    n1 = document.getElementById("txtNum1").value;
    var fact = 1;
    for (i = 1; i <= parseInt(n1); i++) {
        fact *= i;
    }
    document.getElementById("lblResultado").innerHTML = "El factorial es :" + fact;   
}
function potencia(){
    //DEFINIR VARIABLES
    var n1,n2,pot;
    //LEER VARIABLES
    n1 = document.getElementById("txtNum1").value;
    n2 = document.getElementById("txtNum2").value;
    pot = parseFloat(n1) ** parseFloat(n2);
    // ESCRIBIR SUMA
    document.getElementById("lblResultado").innerHTML = "La potencia es: " + pot;
}

function inverso(){
    var n1;
    n1 = document.getElementById("txtNum1").value;
    inver = `1/${n1}`
    document.getElementById("lblResultado").innerHTML = "El Inverso es: " + inver;
}

function seno(){
    var n1, seno;
    n1 = document.getElementById("txtNum1").value;
    n = parseFloat(n1);
    seno = Math.round(Math.sin(n));
    document.getElementById("lblResultado").innerHTML = "El seno es: " + seno;
}

function tangente(){
    var n1, tan;
    n1 = document.getElementById("txtNum1").value;
    n = parseFloat(n1);
    tan = Math.tanh(n);
    document.getElementById("lblResultado").innerHTML = "El tangente es: " + tan;
}

function porcentaje(){
    var n1, por;
    n1 = document.getElementById("txtNum1").value;
    n2 = document.getElementById("txtNum2").value;
    por = (parseFloat(n1)/100) * parseFloat(n2);
    document.getElementById("lblResultado").innerHTML = "El tangente es: " + por;
}
