const numero = parseInt(prompt("Introduce un número:"));
let divisores = "";
if (numero % 2 == 0) {
    divisores += "2";
}
if (numero % 3 == 0) {
    if (divisores != "") {
        divisores += ", ";
    }
    divisores += "3";
}
if (numero % 5 == 0) {
    if (divisores != "") {
        divisores += ", ";
    }
    divisores += "5";
}
if (numero % 7 == 0) {
    if (divisores != "") {
        divisores += ", ";
    }
    divisores += "7";
}
if (divisores != "") {
    document.write("El " + numero +" es divisible por " + divisores);
} else {
    document.write("El " + numero +" no es divisible por ninguno de los números 2, 3, 5 o 7.");
}