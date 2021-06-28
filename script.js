//1.
// let medida= parseFloat(prompt("ingrese medida en metros"));
// let style= (prompt("desea calcualr las medidas en: 1.pies 2.centimetros o 3.pulgadas"));

// if(style == 1){
//     console.log ("la medida en metros ingresada es de " + (medida*0.3048) + " pies.");
// }else if(style == 2){
//     console.log ("la medida en metros ingresada es de " + (medida*100) + "centimetros");
// }else if(style == 3){
//     console.log ("la medida en metros ingresada es de " + (medida*0.0254) + " pulgadas.");
// }else{
//     alert("ingreso un dato invalido");
//     console.log ("ingreso un dato invalido");
// }
 
//2. 
// let edad= prompt("cuantos años tenes?");

// if(edad>=18){
//     alert("sos mayor de edad");
//     console.log ("sos mayor de edad");
// }else if(edad<18){
//     alert("sos menor de 18 años");
//     console.log ("sos menor de 18 años");
// }else if(edad!== NaN){
//     alert("usted no ingreso un numero");
// }

//3.
// let flavors= prompt("ingresa los gustos a pedir");
// let choc= prompt("querés añadir cobertura de chocolate?");

// if(choc == "si"){
//     alert("su helado sabor " + flavors + " con cobertura de chocolate cuesta $180");
//     console.log ("su helado sabor " + flavors + " con cobertura de chocolate cuesta $180");
// }else if (choc == "no"){
//     alert("su helado sabor " + flavors + " sin cobertura de chocolate cuesta $150");
//     console.log ("su helado sabor " + flavors + " sin cobertura de chocolate cuesta $150");
// }

//4. 

// let num1= parseInt(prompt ("ingrese numero del 1 al 10"));
// let num2= parseInt (prompt ("ingrese numero edl 1 al 10"));
// let resultado= (num1 + num2);

// console.log (num1 + num2);

// if((resultado%2) === 0){
//     console.log ("el numero es par");
// }else{
//     console.log ("el numero es impar");
// }

//5.

// let num1= parseInt(prompt ("ingrese un numero"));

// if(num1<(-0.99)){
//     console.log ("el numero es negativo");
// }else if(num1===0){
//     console.log ("el numero es 0");
// }else if(num1>=1){
//     console.log ("el numero es positivo");
// }

//6.
// let num= parseInt(prompt("ingrese total a pagar"));
// let descuento= num*0.10

// if(num>2000){
//     console.log ("el total a pagar es de " + (num - descuento));
// }else{
//     console.log (" no se aplica ningun descuento, debe abonar " + num);
// }

//7.
// let text= prompt("ingrese texto");
// let vocal= parseInt(prompt("ingrese una posicion de caracter"));
// let pos= text.charAt(vocal);
// let letra= "a" ; "e" ; "i" ; "o" ;"u";

// if(pos== letra){
//    console.log ("el nº de caracter ingresado corresponde a una vocal");
// }else{
//     console.log ("el nº de caracter ingresado no corresponde a una vocal");
// }


// // 8. revisar
// let num= parseInt(prompt("ingrese la nota del alumno"));

// if(num==1 || num==2 || num==3){
//     console.log ("aplazado");
// }else if(num==4 || num==5){
//     console.log ("reprobado");
// }else if(num>=6){
//     console.log ("aprobado");
// }

// //9.
// let num1= parseInt(prompt("ingrese un numero"));
// let num2= parseInt(prompt("ingrese un segundo numero"));
// let resultado= "";

// if(num1==num2){
//     resultado= "los numeros son iguales";
// }else if(num1<num2){
//     resultado= (num1 + " es menor que " + num2);
// }else if(num1>num2){
//     resultado= (num1 + " es mayor que " + num2)
// }
// console.log (resultado);

//10. revisar

// let mes= prompt("ingrese el mes que corresponda: 1.Enero 2.Febrero 3 Marzo 4.Abril 5.Mayo 6.Junio 7.Julio 8.Agosto 9.Septiembre 10.Octubre 11.Noviembre 12.Diciembre");

// if(mes==4 || mes==6 || mes==8 || mes==10 || mes==12){
//    console.log ("el mes tiene 31 dias");
// }else if(mes==1 || mes==3 || mes==5 || mes==7 || mes==9 || mes==11){
//     console. log ("el mes tiene 30 dias");
// }else if(mes == 2){
//     console.log ("el mes tiene 28/29 dias");
// }
   
//11.
// let num1= parseInt(prompt("ingrese un numero"));
// let num2= parseInt(prompt("ingrese un segundo numero"));
// let num3= parseInt(prompt("ingrese un tercer numero"));

// if(num1>num2 && num1>num3){
//     console.log ("el numero " + num1 + " es el mayor de los 3");
// }else if(num2>num1 && num2>num3){
//     console.log ("el numero " + num2 + " es el mayor de los 3")
// }else if(num3>num2 && num3>num2){
//     console.log ("el numero " + num3 + " es el mayor de los 3");
//}

//12.

// let edad= parseInt(prompt("ingrese su edad"));
// let beb= parseInt(prompt("elija entre: 1.cerveza 2.jugo o 3.agua"));
// let menor= "";
// let dinero= "";

// if(edad<18 && beb==1){
//     alert("usted es menor de edad, no puede comprar alcohol");
//     menor= prompt("si desea otra bebida elija entre: 1.jugo 2.agua 0.salir");
//     if(menor == 1){
//         alert("usted ha comprado jugo, debe abonar $30");
//         dinero= parseInt(prompt("con cuanto abonara?"));
//         alert("su vuelto es de " + (dinero - 30));
//         }else if(menor == 2){
//             alert("usted ha comprado agua, debe abonar $10");
//             dinero= parseInt(prompt("con cuanto abonara?"));
//             alert("su vuelto es de " + (dinero - 10));
//         }else if(menor == 0){
//             alert("operacion terminada");
//         }

// }else if(edad>=18 && beb==1 || beb== 2 || beb==3){
//     dinero= parseInt(prompt("con cuanto abonara?"));
//     if (dinero<100 && beb==1) {
//         alert("el dinero no alcanza para la compra");
//      }else if(dinero<30 && beb== 2){
//         alert("el dinero no alcanza para la compra");
//     }else if(dinero<10 && beb==3){
//         alert("el dinero no alcanza para la compra");
//     }else if(dinero>100 && beb==1) {
//         alert("usted ha comprado cerveza, debe abonar $100");
//         alert("su vuelto es de " + (dinero - 100));
//      }else if(dinero>30 && beb== 2){
//         alert("usted ha comprado jugo, debe abonar $30");
//         alert("su vuelto es de " + (dinero - 30));
//     }else if(dinero>10 && beb==3)
//         alert("usted ha comprado agua, debe abonar $10");
//         alert("su vuelto es de " + (dinero - 10));
// }

//13.
// let mes= prompt(" elija un numero de mes");
// let resultado= "";

// switch(mes){
//     case "1":
//         resultado= "Enero";
//     break; 
//     case "2":
//         resultado= "Febrero";
//     break; 
//     case "3":
//         resultado= "Marzo";
//     break; 
//     case "4":
// resultado= "Enero";
// break; case "1":
//         resultado= "Abril";
//     break; 
//     case "5":
//         resultado= "Mayo";
//     break;
//     case "6":
//         resultado= "Junio";
//     break;
//     case "7":
//         resultado= "Julio";
//     break;
//     case "8":
//         resultado= "Agosto";
//     break;
//     case "9":
//         resultado= "Septiembre";
//     break;
//     case "10":
//         resultado= "Octubre";
//     break;
//     case "11":
//         resultado= "Noviembre";
//     break;
//     case "12":
//         resultado= "Diciembre";
//     break;
//     default:
//         resultado= "ha ingresado un dato invalido"
// }
// console.log (resultado);

//bonus
//1
// let clave= 0000;
// let balance= 100000;
// let ingr= parseInt(prompt("ingrese su clave"));
// let retiro;

// if(ingr==clave){
//     retiro= parseInt(prompt("cuanto desea retirar?"));
//         if(retiro<=balance){
//             alert("usted ha retirado: " + retiro );
//             alert("su dinero disponible es de: " + (balance-retiro));
//         }else if(retiro>balance){
//              alert("no tiene saldo disponible para realizar la operacion");
//         }
// }else if(ingr!==clave){
//     alert("ha ingresado una clave incorrecta");
// }

//2
// let dia=parseInt(prompt("que dia nacio? ingrese la respuesta en numeros"));
// let mes=parseInt(prompt("que mes nacio? ingrese la respuesta en numeros"));

// if(dia>=21 && mes== 03 || dia<=19 && mes== 04){
//     alert("usted es del signo aries");
// }else if(dia>=20 && mes== 04 || dia<=21 && mes== 05){
//     alert("usted es del signo tauro");
// }else if(dia>=22 && mes== 05 || dia<=20 && mes== 06){
//     alert("usted es del signo geminis");
// }else if(dia>=21 && mes== 06 || dia<= && mes== 07){
//     alert("usted es del signo cancer");
// }else if(dia>=23 && mes== 07 || dia<=22 && mes== 08){ 
//     alert("usted es del signo leo");
// }else if(dia>=23 && mes== 08 || dia<=22 && mes== 09){
//     alert("usted es del signo virgo");
// }else if(dia>=23 && mes== 09 || dia<=22 && mes== 10){
//     alert("usted es del signo libra");
// }else if(dia>=2 && mes== 10 || dia<=22 && mes== 11){
//     alert("usted es del signo escorpio");
// }else if(dia>=23 && mes== 11 || dia<=21 && mes== 12){
//     alert("usted es del signo sagitario");
// }else if(dia>=22 && mes== 12 || dia<=20 && mes== 01){
//     alert("usted es del signo capricornio");
// }else if(dia>=21 && mes== 02 || dia<=18 && mes== 03){
//     alert("usted es del signo acuario");
// }else if(dia>=19 && mes== 02 || dia<=20 && mes== 03){
//     alert("usted es del signo piscis");
// }

//3
// let hora= parseFloat(prompt("ingrese la hora"));


// if(hora>=12 && hora<19){
//     alert("Buenas tardes :)");
// }else if(hora>19.01 && hora<5){
//     alert("Buenas noches :)");
// }else if(hora>=5.01 && hora<11.59){
//     alert("Buenos dias :)");
// }