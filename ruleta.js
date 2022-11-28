
//inicio de juego Ruleta

function saludar(){
    alert("Hola" + " " + nombre);
}

function ruleta(){
    
}



const mariaPaca = {
    nombre1: "El Atelier de Maria Paca",
};


let descuentos =["Ganaste un 20% de descuento en toda la tienda", "Te regalamos un 2x1 en toda la tienda", "Lástima, la próxima quizás tengas más suerte"];

const descuento1 = descuentos.filter((name) => name.includes("Lástima"));
const descuento2 = descuentos.filter((name) => name.includes("Ganaste"));
const descuento3 = descuentos.filter((name) => name.includes("Te"));



let nombre = prompt("Contanos cómo te llamas")
if (nombre == "") {
    alert("Ese no es un nombre, contanos cómo te llamas")
} else {
    saludar();
}
let contacto = prompt("Dejanos tu contacto")
alert("Vamos a jugar con "+ (mariaPaca.nombre1) +"!")

ruleta ()
while (isNaN (ruleta))
    ruleta = parseInt(prompt("Indica un número del 1 al 10 para ver qué premio tenés"))
    if (ruleta > 10 || ruleta < 1) {
        alert("Lástima! te perdiste el regalito por no ingresar un número correcto")    
    }
    else {
        switch (ruleta) {
            case 1:
            case 4:
            case 8:
            case 10:
               alert (descuento1);
                break
            case 2:
            case 5:
            case 7:
                alert(descuento2);
                break
            case 3:
            case 6:
            case 9:
                alert(descuento3);
                break
        }
    }

// Fin de juego Ruleta

