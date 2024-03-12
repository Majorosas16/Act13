const numeros = [3,1,1,10,5,7,2];
const A=0;
let nMayor=numeros[0], nMenor=numeros[0];

let suma=0, sumaNumeros=0, texto="";

for (let i=0;i < numeros.length;i++){
    const A = numeros[i];
    suma = suma + A;
    sumaNumeros = sumaNumeros + A + ","

    if (numeros[i]>nMayor){
        nMayor=numeros[i];
    }
    if(numeros[i]<nMenor){
        nMenor= numeros[i];
    }
}
texto= "La suma total de los números " + sumaNumeros + " es " + suma + ", el número menor es "+nMenor+ " y el número mayor es "+nMayor;
parrafo.innerHTML= "<strong>"+ texto + "</strong>"; // que se sobreescriba el valor a este. modifica el contenido

parrafo.classList.add("parrafo--azul");
parrafo.classList.add("parrafo--titulo");